# Android、iOS 与相机——惊喜连连！

之前，我们已经让 Ionic 应用在本地网页浏览器中成功运行。现在，让我们把它部署到你的 iOS 或 Android 设备上，然后开始构建照片库功能。幸运的是，Ionic 提供了一种避免处理原生 SDK 安装烦恼的方法：Ionic DevApp！

Ionic DevApp 是一款免费的应用程序，可以让你轻松地在 iOS 或 Android 设备上直接运行 Ionic 应用。请点击这里下载，然后在你的设备上打开：

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8">
  <img src={require('@site/static/img/guides/first-app-v3/appstore.png').default} />
</a>
<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en">
  <img src={require('@site/static/img/guides/first-app-v3/playstore.png').default} />
</a>

之后，打开终端并导航到你的 Ionic 项目目录。执行以下命令：

```shell
ionic serve -c
```

现在，你应该能在 DevApp 中看到应用出现。如果没有，或者你在创建此应用的过程中遇到任何问题，[请参考这里](https://ionicframework.com/docs/pro/devapp/)。

好多了！现在我们可以添加相机功能了。顺便说一下，你可以在 GitHub 上的 [“part 1”文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part1) 中找到相关的参考代码。

回到 `about.html` 文件中，添加以下内容：

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

保存文件并观察——一个相机按钮出现了！点击它，你会发现它没有任何反应。接下来，我们来解决这个问题。

## 通过 CLI 添加相机依赖项

要使用相机功能，我们需要引入其 JavaScript 和原生库依赖项。回到你的终端窗口，运行以下命令，该命令会将 JavaScript 库添加到项目中，从而在 TypeScript 代码中暴露相机 API：

```shell
npm install --save @awesome-cordova-plugins/camera
```

在 `package.json` 中，你会注意到新增了一个 JavaScript 依赖项：

`"@awesome-cordova-plugins/camera": "^4.12.0"`

接下来，运行此命令以添加原生的 iOS 和 Android 代码，从而确保相机能在移动设备上正常工作：

```shell
ionic cordova plugin add cordova-plugin-camera
```

在 `config.xml` 中，会创建一个新的插件条目：

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

下一步仅对 iOS 用户是必需的。从 iOS 10 开始，开发者必须说明应用为何需要访问设备相机。将以下内容添加到 `config.xml` 的底部：

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>用于拍照</string>
</edit-config>
```

## 将相机插件添加到 Angular 应用模块

由于这是一个 Angular 项目，我们还需要执行一个步骤：在应用模块 (`src/app/app.module.ts`) 中注册相机。首先，导入相机模块：

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

## 在 About 页面添加相机功能

我们的相机按钮目前还没有任何功能。回到 `about.html`，为按钮添加一个点击事件处理程序：

```html
<button ion-fab (click)="takePicture()"></button>
```

接着，更新图片占位符。以下代码将“currentImage”变量（我们接下来会处理它）绑定到要显示给用户的图片上。

```html
<img [src]="currentImage" *ngIf="currentImage" />
```

接下来打开 `about.ts` 并导入相机库：

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera';
```

然后，定义“currentImage”变量，并通过构造函数将 Camera 注入到这个类中：

```Javascript
export class AboutPage {
  currentImage: any;

  constructor(public navCtrl: NavController, private camera: Camera) {
}
```

最后，添加“takePicture”方法，该方法已配置好，会在相机按钮被点击时执行：

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
     console.log("Camera issue:" + err);
    });
  }
```

请注意：这里完全没有提到 iOS 或 Android！这就是插件的强大之处：你只需要使用一个 API（这里是 `camera.getPicture()`），插件会为你处理平台差异。一次编写，到处运行 `:)`

保存此文件，然后在 DevApp 中点击相机按钮。瞧！相机应该会在你的设备上打开。拍照后，照片会显示在照片库页面上。

最后，将你的更改备份到 Appflow：

```shell
git add .
git commit -m “添加了相机功能”
git push ionic master
```

接下来，我们将探讨如何将应用转变为一个照片库，以及如何将照片保存到你的设备上！