---
title: 使用设备存储创建照片画廊
sidebar_label: 使用设备存储创建照片画廊
---

# 使用设备存储创建照片画廊

上次，我们成功将相机插件添加到 Tabs 应用的 About 页面。目前，每次拍照时照片都会被替换。如果我们想同时显示多张照片呢？让我们创建一个照片画廊。您可以在 GitHub 上的[第 2 部分文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part2)中跟随完整的代码。

## 创建专用的照片服务

在终端窗口中，导航到您的 Ionic 项目并运行：

```shell
ionic g provider PhotoProvider
```

这将在专用的 providers/photo 文件夹中创建一个 PhotoProvider 类：

```Javascript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PhotoProvider provider.

  有关提供者和 Angular DI 的更多信息，请参见 https://angular.io/guide/dependency-injection
*/
@Injectable()
export class PhotoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PhotoProvider Provider');
  }
}
```

在此类中，添加一个 Photo 类。"data" 属性表示拍摄照片的 base64 图像数据：

```Javascript
class Photo {
  data: any;
}
```

然后，创建一个 Photos 数组来表示我们的照片画廊：

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

继续，我们需要将 currentImage 变量引用转换为新的 photos 数组。首先将捕获的照片数据添加到 photos 数组中：

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

在 `about.page.ts` 中，移除 currentImage 变量和构造函数中对 Camera 的引用，只保留 PhotoService：

```Javascript
export class AboutPage {
  constructor(public navCtrl: NavController, public photoService: PhotoProvider) {  }
}
```

接下来，在 `about.page.html` 中，移除 currentImage 的 img 标签。取而代之，使用 ion-grid 组件，它提供了一种在页面上排列元素的绝佳方式。在这里，我们将用它来每行显示 2 张照片。

```html
<ion-grid>
  <ion-row>
    <ion-col col-6 *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

这里，我们遍历 PhotoServices 的 photos 数组中的每张照片，并为每张照片添加一个新列。由于一个 ion-row 由 12 个"块"空间组成，我们将大小设置为 6（"col-6"），所以每行只显示 2 张照片。

最后，更新 Fab 按钮以调用 PhotoProvider 的 `takePicture` 方法：

```Html
<button ion-fab (click)="photoService.takePicture()">
```

太棒了！我们现在有了一个基本的照片画廊。

## 将照片保存到设备

拥有一个可用的照片画廊很酷，但您可能会注意到，当应用关闭时，照片会永远丢失。这可不行，所以让我们添加 Ionic Storage 插件，这是一种存储键值对和 JSON 对象的简便方法。在原生应用环境中运行时，Storage 会优先使用 SQLite，这是最稳定和广泛使用的基于文件的数据库之一。在 Web 上或作为渐进式 Web 应用运行时，Storage 将尝试使用 IndexedDB、WebSQL 和 localstorage，按此顺序。

Storage 插件非常适合我们的 base64 图像数据。首先，添加原生 SQLite 插件：

```shell
ionic cordova plugin add cordova-sqlite-storage
```

接下来，添加用于 Web 的 JavaScript 库：

```shell
npm install --save @ionic/storage
```

最后，在 `app.module.ts` 中导入 Storage 模块并将其添加到 imports 列表中：

```Javascript
import { IonicStorageModule } from '@ionic/storage';

imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
```

现在它已经可以在我们的 PhotoProvider 类中使用了。导入它：

```Javascript
import { Storage } from '@ionic/storage-angular';
```

然后通过构造函数注入它：

```Javascript
constructor(private camera: Camera, private storage: Storage) { }
```

要添加保存照片的功能，只需几步。更新 `takePicture()` 方法，使用 storage.set 方法在每次拍照后保存整个 photos 数组：

```Javascript
this.camera.getPicture(options).then((imageData) => {
      // 将新照片添加到画廊
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });

      // 保存所有照片以供以后查看
      this.storage.set('photos', this.photos);
    }, (err) => {
     // 处理错误
     console.log("Camera issue: " + err);
    });
```

我们还需要在应用首次打开时加载已保存的照片。这很简单——获取 "photos" 键，然后将其值赋给 photos 数组：

```Javascript
loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }
```

在 About 页面中，当它开始加载时调用 loadSaved 方法：

```Javascript
ngOnInit() {
    this.photoService.loadSaved();
}
```

太好了！照片现在已保存到您的设备。为了证明它们确实被保存了，强制关闭 DevApp，重新打开它，然后打开 About 页面。或者，摇晃您的设备以弹出控制菜单，然后点击"Exit preview"。之后，重新加载此应用以查看照片。

最后，将您的更改备份到 Appflow：

```shell
git add .
git commit -m "implemented photo gallery"
git push ionic master
```

接下来，我们将了解如何为 Ionic 应用应用自定义主题。
