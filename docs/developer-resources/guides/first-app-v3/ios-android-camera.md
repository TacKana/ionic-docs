# Android、iOS 和相机——天哪！

之前，我们已经在本地 Web 浏览器中启动并运行了一个 Ionic 应用。现在，让我们将其部署到您的 iOS 或 Android 设备上，然后开始构建照片库功能。幸运的是，Ionic 提供了一种方法来避免处理原生 SDK 安装的烦恼：Ionic DevApp！

Ionic DevApp 是一个免费应用，可让您轻松地在 iOS 或 Android 设备上直接运行 Ionic 应用。在此处下载，然后在您的设备上打开：

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8">
  <img src={require('@site/static/img/guides/first-app-v3/appstore.png').default} />
</a>
<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en">
  <img src={require('@site/static/img/guides/first-app-v3/playstore.png').default} />
</a>

之后，打开终端并导航到您的 Ionic 项目。执行以下命令：

```shell
ionic serve -c
```

在 DevApp 中，您现在应该能看到应用出现。如果没有，或者在创建此应用过程中遇到任何问题，请[查看此处](https://ionicframework.com/docs/pro/devapp/)。

好多了！现在我们可以添加相机功能。顺便说一下，您可以在 GitHub 上的[ "part 1" 文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part1)中找到参考代码。

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

保存文件并观察——一个相机按钮出现了！点击它，您会发现它没有任何反应。接下来我们来解决这个问题。

## 通过 CLI 添加相机依赖

为了使用相机，我们需要引入其 JavaScript 和原生库依赖。回到终端窗口，运行以下命令，该命令将 JavaScript 库添加到项目中，从而在 TypeScript 代码中暴露相机 API：

```shell
npm install --save @awesome-cordova-plugins/camera
```

在 `package.json` 中，您会注意到添加了一个新的 JavaScript 依赖：

`"@awesome-cordova-plugins/camera": "^4.12.0"`

接下来，运行此命令以添加 iOS 和 Android 的原生代码，从而让相机在移动设备上工作：

```shell
ionic cordova plugin add cordova-plugin-camera
```

在 `config.xml` 中，创建了一个新的插件条目：

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

下一步仅适用于 iOS 用户。从 iOS 10 开始，开发者必须提供应用希望访问设备相机的原因。将此添加到 `config.xml` 底部：

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## 将相机插件添加到 Angular 应用模块

由于这是一个 Angular 项目，我们还需要一步：在 App Module（`src/app/app.module.ts`）中注册相机。首先，导入相机模块：

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

现在，它可以在我们应用的任何页面上使用了。

## 将相机添加到 About 页面

我们的相机按钮还没有任何功能。在 `about.html` 中，为按钮添加点击处理程序：

```html
<button ion-fab (click)="takePicture()"></button>
```

然后，更新图片占位符。以下代码将 "currentImage" 变量（我们接下来将处理）绑定到要显示给用户的图像。

```html
<img [src]="currentImage" *ngIf="currentImage" />
```

接下来打开 `about.ts` 并导入相机库：

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera';
```

接下来，定义 "currentImage" 变量并通过构造函数将 Camera 注入到此类中：

```Javascript
export class AboutPage {
  currentImage: any;

  constructor(public navCtrl: NavController, private camera: Camera) {
}
```

最后，添加 "takePicture" 方法，该方法已准备好，一旦点击相机按钮就会执行：

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

请注意：这里没有提到 iOS 或 Android！这就是插件的强大之处：您使用一个 API（本例中是 `camera.getPicture()`），插件会为您处理平台差异。一次编写，到处运行 `:)`

保存此文件，然后在 DevApp 中点击相机按钮。瞧！相机应该在您的设备上打开了。拍照后，它会显示在照片库页面上。

最后，将您的更改备份到 Appflow：

```shell
git add .
git commit -m "added camera functionality"
git push ionic master
```

接下来，我们将了解如何将应用转变为照片库，以及如何将照片保存到您的设备！
