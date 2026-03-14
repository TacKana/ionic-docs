import DocsButton from '@components/page/native/DocsButton';

# 使用设备存储创建照片画廊

上次我们成功将 Camera 插件添加到了 Tabs 应用的 Tab2 页面。目前，每次拍摄新照片时，旧照片都会被替换。如果我们想同时展示多张照片呢？让我们来创建一个照片画廊。你可以跟着 [GitHub 上的完整代码](https://github.com/ionic-team/photo-gallery-tutorial-ionic4) 一起操作。

## 创建专用的照片服务

在终端窗口中，导航到你的 Ionic 项目并运行：

```shell
ionic g service services/Photo
```

这会在专用的 "services" 文件夹中创建一个 PhotoService 类：

```Javascript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() { }
}
```

在这个文件中，添加一个 Photo 类。"data" 属性表示拍摄照片的 base64 图像数据：

```Javascript
class Photo {
  data: any;
}
```

然后，创建一个 Photos 数组来表示我们的照片画廊：

```Javascript
export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }
}
```

回到 `tab2.page.ts`，导入 PhotoService：

```Javascript
import { PhotoService } from '../services/photo.service';
```

将其添加到构造函数中：

```Javascript
constructor(private camera: Camera, public photoService: PhotoService) {  }
```

接下来，将所有与 Camera 插件相关的代码移动到 PhotoService 类中。这包括 takePicture 方法、Camera 和 CameraOptions 的导入，以及 Tab2Page 页面的构造函数。

继续，我们需要将 currentImage 变量的引用转换为新的 photos 数组。首先将拍摄的照片数据添加到 photos 数组中：

```Javascript
this.camera.getPicture(options).then((imageData) => {
    // 将新照片添加到画廊
    this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
    }); }, (err) => {
    // 处理错误
    console.log("Camera issue: " + err);
});
```

在 `tab2.page.ts` 中，移除 currentImage 变量和构造函数中对 Camera 的引用，只保留 PhotoService：

```Javascript
export class Tab2Page {
  constructor(public photoService: PhotoService) {  }
}
```

接下来，在 `tab2.page.html` 中，移除 currentImage 的 img 标签。在其位置使用 ion-grid 组件，这是在页面上排列元素的绝佳方式。在这里，我们将用它来每行显示 2 张照片。

```html
<ion-grid>
  <ion-row>
    <ion-col size="6" *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

在这里，我们遍历 PhotoService 中 photos 数组的每一张照片，为每张照片添加一个新列。由于一个 ion-row 由 12 个"块"的空间组成，而我们将大小设置为 6 (`size="6"`)，所以每行只显示 2 张照片。

最后，更新 Fab 按钮以调用 PhotoService 的 `takePicture` 方法：

```Html
<ion-fab-button (click)="photoService.takePicture()">
  <ion-icon name="camera"></ion-icon>
</ion-fab-button>
```

太好了！我们现在有了一个基本可用的照片画廊。

## 将照片保存到设备

拥有一个可用的照片画廊很棒，但你可能会注意到，当应用关闭时，照片会永久丢失。这可不妙，所以让我们添加 [Ionic Storage 插件](https://ionicframework.com/docs/storage/)，这是一个存储键/值对和 JSON 对象的简便方法。在原生应用上下文中运行时，Storage 会优先使用 SQLite，这是最稳定且广泛使用的基于文件的数据库之一。在 Web 或渐进式 Web 应用上运行时，Storage 会尝试按顺序使用 IndexedDB、WebSQL 和 localstorage。

Storage 插件非常适合我们的 base64 图像数据。首先，为原生环境添加 SQLite 插件：

```shell
ionic cordova plugin add cordova-sqlite-storage
```

接下来，为 Web 环境添加 JavaScript 库：

```shell
npm install --save @ionic/storage
```

最后，导入 Storage 模块并将其添加到 `app.module.ts` 的导入列表中：

```Javascript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

现在它可以在我们的 PhotoService 类中使用了。导入它：

```Javascript
import { Storage } from '@ionic/storage-angular';
```

然后通过构造函数注入：

```Javascript
constructor(private camera: Camera, private storage: Storage) { }
```

要添加保存照片的功能，只剩下几个步骤了。更新 `takePicture()` 方法，在每次拍摄照片后使用 storage.set 方法保存整个 photos 数组：

```Javascript
this.camera.getPicture(options).then((imageData) => {
  // 将新照片添加到画廊
  this.photos.unshift({
    data: 'data:image/jpeg;base64,' + imageData
  });

  // 保存所有照片供以后查看
  this.storage.set('photos', this.photos);
}, (err) => {
  // 处理错误
  console.log("Camera issue: " + err);
});
```

我们仍然需要在应用首次打开时加载已保存的照片。这很简单——检索 "photos" 键，然后将其值分配给 photos 数组：

```Javascript
loadSaved() {
  this.storage.get('photos').then((photos) => {
    this.photos = photos || [];
  });
}
```

在 Tab2 页面中，在开始加载时调用 loadSaved 方法：

```Javascript
ngOnInit() {
  this.photoService.loadSaved();
}
```

太棒了！照片现在已保存到你的设备中。为了证明它们确实被保存了，强制关闭 DevApp，重新打开它，然后打开 Tab2 页面。或者，摇动你的设备让控制菜单弹出，然后点击"退出预览"。之后，重新加载此应用以查看照片。

接下来，我们将了解如何为 Ionic 应用应用自定义主题。

<div style={{ textAlign: 'right' }}>
  <DocsButton href="theming">
    继续{' '}
    <svg viewBox="0 0 512 512">
      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
    </svg>
  </DocsButton>
</div>