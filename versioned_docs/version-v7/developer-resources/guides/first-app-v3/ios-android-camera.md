# Android、iOS 与相机 - 我的天啊！

之前，我们已经让一个 Ionic 应用在本地网页浏览器中成功运行起来。现在，让我们把它部署到你的 iOS 或 Android 设备上，然后开始构建相册功能。幸运的是，Ionic 提供了一种方法来避免安装原生 SDK 的烦恼：Ionic DevApp！

Ionic DevApp 是一款免费应用，可以让你轻松地在 iOS 或 Android 设备上直接运行你的 Ionic 应用。在此处下载，然后在你的设备上打开：

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8">
  <img src={require('@site/static/img/guides/first-app-v3/appstore.png').default} />
</a>
<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en">
  <img src={require('@site/static/img/guides/first-app-v3/playstore.png').default} />
</a>

之后，打开终端并导航到你的 Ionic 项目。执行以下命令：

```shell
ionic serve -c
```

在 DevApp 中，你现在应该能看到应用出现。如果没看到，或者在创建此应用的过程中遇到任何问题，[请查看此处](https://ionicframework.com/docs/pro/devapp/)。

好多了！现在我们可以添加相机功能了。顺便说一下，你可以在 GitHub 的 [“part 1”文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part1) 中找到相关参考代码。

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

保存文件并观察 - 一个相机按钮出现了！点击它，注意它没有做任何事情。接下来让我们解决这个问题。

## 通过 CLI 添加相机依赖项

为了使用相机，我们需要引入其 JavaScript 和原生库依赖项。回到你的终端窗口，运行以下命令，该命令将 JavaScript 库添加到项目中，从而在 TypeScript 代码中暴露相机 API：

```shell
npm install --save @awesome-cordova-plugins/camera
```

在 `package.json` 中，你会注意到添加了一个新的 JavaScript 依赖项：

`"@awesome-cordova-plugins/camera": "^4.12.0"`

接下来，运行此命令以添加原生 iOS 和 Android 代码，从而有效地让相机在移动设备上工作：

```shell
ionic cordova plugin add cordova-plugin-camera
```

在 `config.xml` 中，创建了一个新的插件条目：

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

下一步仅适用于 iOS 用户。自 iOS 10 起，开发者必须提供应用希望访问设备相机的原因。将此添加到 `config.xml` 的底部：

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## 将相机插件添加到 Angular 应用模块

由于这是一个 Angular 项目，我们还需要完成一个步骤：在应用模块 (`src/app/app.module.ts`) 中注册相机。首先，导入相机模块：

```Javascript
import { Camera } from '@awesome-cordova-plugins/camera';
```

然后，将其添加为提供者：

```Javascript
providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
```

现在它可以在我们应用的任何页面上使用了。

## 将相机添加到关于页面

我们的相机按钮现在还不起作用。在 `about.html` 中，为按钮添加一个点击处理程序：

```html
<button ion-fab (click)="takePicture()"></button>
```

然后，更新图像占位符。以下将 "currentImage" 变量（我们接下来会处理它）绑定到要显示给用户的图像。

```html
<img [src]="currentImage" *ngIf="currentImage" />
```

接下来打开 `about.ts` 并导入相机库：

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera';
```

接下来，定义 "currentImage" 变量，并通过构造函数将相机注入到这个类中：

```Javascript
export class AboutPage {
  currentImage: any;

  constructor(public navCtrl: NavController, private camera: Camera) {
}
```

最后，添加 "takePicture" 方法，该方法已经设置为在相机按钮被点击后执行：

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
     // Handle error
     console.log("Camera issue:" + err);
    });
  }
```

请注意：这里没有提到 iOS 或 Android！这就是插件的强大之处：你使用一个 API（本例中为 `camera.getPicture()`），插件会为你处理平台差异。一次编写，到处运行 `:)`

保存此文件，然后在 DevApp 中点击相机按钮。瞧！相机应该会在你的设备上打开。拍摄照片后，它会显示在相册页面上。

最后，将你的更改备份到 Appflow：

```shell
git add .
git commit -m “added camera functionality”
git push ionic master
```

接下来，我们将探讨如何将应用转变为相册，以及如何将照片保存到你的设备上！