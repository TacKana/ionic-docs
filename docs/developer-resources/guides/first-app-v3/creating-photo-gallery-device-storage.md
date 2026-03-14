# 创建设备存储照片库

上次，我们成功将相机插件添加到标签页应用的关于页面。目前，每次拍摄新照片都会替换之前的照片。如果我们想要同时显示多张照片呢？让我们创建一个照片库。你可以跟随 [GitHub上的第2部分文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part2) 中的完整代码进行操作。

## 创建专用照片服务

在终端窗口中，导航到你的 Ionic 项目并运行：

```shell
ionic g provider PhotoProvider
```

这将在专用 providers/photo 文件夹中创建 PhotoProvider 类：

```Javascript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  生成的 PhotoProvider 提供者类。

  有关提供者和 Angular 依赖注入的更多信息，请访问：
  https://angular.io/guide/dependency-injection
*/
@Injectable()
export class PhotoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PhotoProvider Provider');
  }
}
```

在这个类中，添加一个 Photo 类。"data" 属性代表拍摄照片的 base64 图像数据：

```Javascript
class Photo {
  data: any;
}
```

然后，创建一个 Photos 数组来表示我们的照片库：

```Javascript
export class PhotoProvider {

  public photos: Photo[] = [];

  constructor() { }
}
```

回到 `about.ts`，导入 PhotoProvider：

```Javascript
import { PhotoProvider } from '../../providers/photo/photo';
```

将其添加到构造函数中：

```Javascript
constructor(private camera: Camera, public photoService: PhotoProvider) {  }
```

接下来，将所有与相机插件相关的代码移动到 PhotoService 类中。这包括 takePicture 方法、Camera 导入和 About 页面构造函数。同时，移除对 HttpClient 的引用——我们不会进行任何 HTTP 调用。

继续，我们需要将 currentImage 变量引用转换为新的 photos 数组。首先将拍摄的照片数据添加到 photos 数组：

```Javascript
this.camera.getPicture(options).then((imageData) => {
    // 将新照片添加到图库
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

接下来，在 `about.page.html` 中，移除 currentImage img 标签。在其位置，使用 ion-grid 组件，这是在页面上排列元素的绝佳方式。在这里，我们将用它每行显示 2 张照片。

```html
<ion-grid>
  <ion-row>
    <ion-col col-6 *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

这里，我们遍历 PhotoService photos 数组中的每张照片，为每张照片添加一个新列。由于 ion-row 由 12 个"块"空间组成，我们将其大小设置为 6（"col-6"），所以每行只显示 2 张照片。

最后，更新 Fab 按钮以调用 PhotoProvider 的 `takePicture` 方法：

```Html
<button ion-fab (click)="photoService.takePicture()">
```

太棒了！我们现在有了一个基本的工作照片库。

## 将照片保存到设备

拥有一个工作的照片库很酷，但你可能注意到当应用关闭时，照片会永久丢失。这不太好，所以让我们添加 Ionic Storage 插件，这是存储键/值对和 JSON 对象的简单方法。在原生应用上下文中运行时，Storage 将优先使用 SQLite，这是最稳定和广泛使用的基于文件的数据库之一。在 Web 上或作为渐进式 Web 应用运行时，Storage 将尝试按顺序使用 IndexedDB、WebSQL 和本地存储。

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

要添加保存照片的功能，只需几个步骤。更新 `takePicture()` 方法，在每次拍摄照片后使用 storage.set 方法保存整个 photos 数组：

```Javascript
this.camera.getPicture(options).then((imageData) => {
      // 将新照片添加到图库
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

我们仍然需要在应用首次打开时加载已保存的照片。这很简单——检索"photos"键，然后将其值分配给 photos 数组：

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

太好了！照片现在已保存到你的设备。为了证明它们确实被保存了，强制关闭 DevApp，重新打开它，然后打开 About 页面。或者，摇动你的设备让控制菜单弹出，然后点击"退出预览"。之后，重新加载此应用以查看照片。

最后，将你的更改备份到 Appflow：

```shell
git add .
git commit -m "实现了照片库功能"
git push ionic master
```

接下来，我们将探讨如何为 Ionic 应用应用自定义主题。