# 创建设备存储相册

上一次，我们在 Tabs 应用的关于页面成功添加了 Camera 插件。目前，每次拍摄新照片都会替换之前的照片。如果我们想要同时展示多张照片呢？让我们来创建一个相册。您可以在 GitHub 的 [part 2 文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part2) 中查看完整代码并跟随操作。

## 创建专用的照片服务

在终端窗口中，导航到您的 Ionic 项目并运行：

```shell
ionic g provider PhotoProvider
```

这将在专门的 providers/photo 文件夹中创建 PhotoProvider 类：

```Javascript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  由 PhotoProvider provider 生成的类。

  有关 providers 和 Angular DI 的更多信息，请参阅
  https://angular.io/guide/dependency-injection
*/
@Injectable()
export class PhotoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PhotoProvider Provider');
  }
}
```

在这个类中，添加一个 Photo 类。"data" 属性表示拍摄照片的 base64 图像数据：

```Javascript
class Photo {
  data: any;
}
```

然后，创建一个 Photos 数组来表示我们的相册：

```Javascript
export class PhotoProvider {

  public photos: Photo[] = [];

  constructor() { }
}
```

回到 `about.ts` 中，导入 PhotoProvider：

```Javascript
import { PhotoProvider } from '../../providers/photo/photo';
```

将其添加到构造函数中：

```Javascript
constructor(private camera: Camera, public photoService: PhotoProvider) {  }
```

接下来，将与 Camera 插件相关的所有代码移动到 PhotoService 类中。这包括 takePicture 方法、Camera 导入和 About 页面的构造函数。同时，移除对 HttpClient 的引用 - 我们不会进行任何 HTTP 调用。

继续，我们需要将 currentImage 变量引用转换为新的 photos 数组。首先将拍摄的照片数据添加到 photos 数组中：

```Javascript
this.camera.getPicture(options).then((imageData) => {
    // 将新照片添加到相册
    this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
    }); }, (err) => {
    // 处理错误
    console.log("相机问题：" + err);
});
```

在 `about.page.ts` 中，移除 currentImage 变量和构造函数中对 Camera 的引用，只保留 PhotoService：

```Javascript
export class AboutPage {
  constructor(public navCtrl: NavController, public photoService: PhotoProvider) {  }
}
```

接下来，在 `about.page.html` 中，移除 currentImage img 标签。在其位置使用 ion-grid 组件，这是在页面上排列元素的绝佳方式。在这里，我们将用它每行显示 2 张照片。

```html
<ion-grid>
  <ion-row>
    <ion-col col-6 *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

在这里，我们遍历 PhotoServices 的 photos 数组中的每张照片，为每个照片添加一个新列。由于一个 ion-row 由 12 个"块"的空间组成，而我们将其大小设置为 6 ("col-6")，所以每行只能显示 2 张照片。

最后，更新 Fab 按钮来调用 PhotoProvider 的 `takePicture` 方法：

```Html
<button ion-fab (click)="photoService.takePicture()">
```

太棒了！我们现在有了一个基本可工作的相册。

## 将照片保存到设备

拥有一个可工作的相册非常酷，但您可能会注意到，当应用关闭时，照片会永久丢失。这不太好，所以让我们添加 Ionic Storage 插件，这是一个存储键值对和 JSON 对象的简便方法。在原生应用环境中运行时，Storage 会优先使用 SQLite，这是最稳定、使用最广泛的基于文件的数据库之一。在 Web 上或作为渐进式 Web 应用运行时，Storage 会尝试按顺序使用 IndexedDB、WebSQL 和 localstorage。

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

imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
```

现在它可以在我们的 PhotoProvider 类中使用了。导入它：

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
      // 将新照片添加到相册
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });

      // 保存所有照片供以后查看
      this.storage.set('photos', this.photos);
    }, (err) => {
     // 处理错误
     console.log("相机问题：" + err);
    });
```

我们仍然需要在应用首次打开时加载已保存的照片。这很简单 - 检索 "photos" 键，然后将其值分配给 photos 数组：

```Javascript
loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }
```

在 About 页面中，一旦开始加载就调用 loadSaved 方法：

```Javascript
ngOnInit() {
    this.photoService.loadSaved();
}
```

太好了！照片现在已保存到您的设备中。为了证明它们确实被保存了，强制关闭 DevApp，重新打开它，然后打开 About 页面。或者，摇动您的设备使控制菜单弹出，然后点击"退出预览"。之后，重新加载此应用以查看照片。

最后，将您的更改备份到 Appflow：

```shell
git add .
git commit -m "实现了相册功能"
git push ionic master
```

接下来，我们将了解如何为 Ionic 应用应用自定义主题。