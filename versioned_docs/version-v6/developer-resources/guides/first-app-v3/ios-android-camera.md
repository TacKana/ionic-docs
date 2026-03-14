# Android、iOS 与相机 - 太棒了！

之前，我们已经在本地网页浏览器中成功运行了一个 Ionic 应用。现在，让我们将它部署到你的 iOS 或 Android 设备上，然后开始构建照片库功能。幸运的是，Ionic 提供了一种方式，可以避免处理原生 SDK 安装的烦恼：Ionic DevApp！

Ionic DevApp 是一款免费应用，可以让你轻松地在 iOS 或 Android 设备上直接运行你的 Ionic 应用。点击此处下载，然后在你的设备上打开：

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8">
  <img src={require('@site/static/img/guides/first-app-v3/appstore.png').default} />
</a>
<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en">
  <img src={require('@site/static/img/guides/first-app-v3/playstore.png').default} />
</a>

之后，打开终端并进入你的 Ionic 项目目录。执行以下命令：

```shell
ionic serve -c
```

现在，你应该能在 DevApp 中看到应用出现了。如果没有显示，或者在创建此应用过程中遇到任何问题，[请查看此处](https://ionicframework.com/docs/pro/devapp/)。

好多了！现在我们可以添加相机功能了。顺便说一下，你可以在 GitHub 的 [“part 1”文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part1) 中找到相关的参考代码。

回到 `about.html`，添加以下内容：

```html
<ion-content>
  <img />

  <ion-fab center bottom>
    <button ion-fab>
      <ion-icon name="camera"></ion-icon>
    </button>
  </ion-fab>
</ion-content>
```

保存文件并观察 - 一个相机按钮出现了！点击它，你会发现它没有任何反应。接下来让我们来解决这个问题。

## 通过 CLI 添加相机依赖项

为了使用相机功能，我们需要引入其 JavaScript 和原生库依赖项。回到你的终端窗口，运行以下命令，将 JavaScript 库添加到项目中，从而在 TypeScript 代码中暴露相机 API：

```shell
npm install --save @awesome-cordova-plugins/camera
```

在 `package.json` 中，你会注意到新增了一个 JavaScript 依赖项：

`"@awesome-cordova-plugins/camera": "^4.12.0"`

接下来，运行此命令以添加原生 iOS 和 Android 代码，从而确保相机能在移动设备上正常工作：

```shell
ionic cordova plugin add cordova-plugin-camera
```

在 `config.xml` 中，会创建一个新的插件条目：

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

下一步仅针对 iOS 用户。从 iOS 10 开始，开发者必须说明应用为何需要访问设备相机。将此内容添加到 `config.xml` 的底部：

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>用于拍照</string>
</edit-config>
```

## 将相机插件添加到 Angular 应用模块

由于这是一个 Angular 项目，我们还需要完成一步：在应用模块 (`src/app/app.module.ts`) 中注册相机。首先，导入相机模块：

```Javascript
import { Camera } from '@awesome-cordova-plugins/camera';
```

然后，将其添加为 Provider：

```Javascript
providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
```

现在它就可以在我们的任何应用页面上使用了。

## 将相机功能添加到关于页面

我们的相机按钮目前还没有任何功能。回到 `about.html`，为按钮添加点击处理程序：

```html
<button ion-fab (click)="takePicture()"></button>
```

然后，更新图片占位符。以下代码将 “currentImage” 变量（我们接下来会处理）绑定到要显示给用户的图片上。

```html
<img [src]="currentImage" *ngIf="currentImage" />
```

接下来打开 `about.ts`，导入相机库：

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera';
```

然后，定义 “currentImage” 变量，并通过构造函数将 Camera 注入此类：

```Javascript
export class AboutPage {
  currentImage: any;

  constructor(public navCtrl: NavController, private camera: Camera) {
}
```

最后，添加 “takePicture” 方法，该方法已设置为在相机按钮被点击后执行：

```Javascript
takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // 处理错误
     console.log("相机问题：" + err);
    });
  }
```

请注意：这里完全没有提到 iOS 或 Android！这就是插件的强大之处：你使用一个 API（本例中为 `camera.getPicture()`），插件会为你处理不同平台的差异。一次编写，到处运行 `:)`

保存此文件，然后在 DevApp 中点击相机按钮。瞧！相机应该会在你的设备上打开。拍照后，照片会显示在照片库页面上。

最后，将你的更改备份到 Appflow：

```shell
git add .
git commit -m “添加了相机功能”
git push ionic master
```

接下来，我们将探讨如何将应用转变为照片库，以及如何将照片保存到你的设备上！