---
title: Android、iOS 和相机 - 我的天！
sidebar_label: Android、iOS 和相机 - 我的天！
---

# Android、iOS 和相机 - 我的天！

之前，我们让一个 Ionic 应用在本地 Web 浏览器中运行起来了。现在，让我们把它部署到您的 iOS 或 Android 设备上，然后开始构建照片画廊功能。幸运的是，Ionic 提供了一种避免处理原生 SDK 安装烦恼的方法：Ionic DevApp！

Ionic DevApp 是一个免费应用，可以轻松在您的 iOS 或 Android 设备上直接运行您的 Ionic 应用。在此处下载，然后在您的设备上打开：

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

在 DevApp 中，您现在应该看到该应用出现。如果没有，或者在创建此应用过程中遇到任何问题，请[参见此处](https://ionicframework.com/docs/pro/devapp/)。

好多了！现在我们可以添加相机功能了。顺便说一句，您可以在 GitHub 上的["part 1"文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part1)中找到此部分的参考代码。

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

保存文件，观察 - 出现了一个相机按钮！点击它，注意它没有任何反应。接下来让我们修复这个问题。

## 通过 CLI 添加相机依赖

为了使用相机，我们需要引入它的 JavaScript 和原生库依赖项。回到终端窗口，运行以下命令，该命令将 JavaScript 库添加到项目中，从而在 TypeScript 代码中暴露相机 API：

```shell
npm install --save @awesome-cordova-plugins/camera
```

在 `package.json` 中，您会注意到已添加了一个新的 JavaScript 依赖项：

`"@awesome-cordova-plugins/camera": "^4.12.0"`

接下来，运行此命令以添加原生 iOS 和 Android 代码，使相机能够在移动设备上工作：

```shell
ionic cordova plugin add cordova-plugin-camera
```

在 `config.xml` 中，创建了一个新的插件条目：

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

下一步仅对 iOS 用户是必需的。从 iOS 10 开始，开发者必须提供应用希望访问设备相机的原因。将此内容添加到 `config.xml` 的底部：

```xml
<!-- iOS 10 必需：相机权限提示 -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## 将相机插件添加到 Angular 应用模块

由于这是一个 Angular 项目，我们还需要完成一步：在应用模块（`src/app/app.module.ts`）中注册相机。首先，导入相机模块：

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

现在它可以用于我们的任何应用页面了。

## 将相机添加到 About 页面

我们的相机按钮还没有任何功能。在 `about.html` 中，为按钮添加点击处理程序：

```html
<button ion-fab (click)="takePicture()"></button>
```

然后，更新图片占位符。以下代码将 "currentImage" 变量（我们将在下一步处理）绑定到要显示给用户的图像。

```html
<img [src]="currentImage" *ngIf="currentImage" />
```

接下来打开 `about.ts` 并导入相机库：

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera';
```

接下来，定义 "currentImage" 变量并通过构造函数将相机注入到此类中：

```Javascript
export class AboutPage {
  currentImage: any;

  constructor(public navCtrl: NavController, private camera: Camera) {
}
```

最后，添加 "takePicture" 方法，它已被设置为在相机按钮被点击时执行：

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

请注意：根本没有提到 iOS 或 Android！这就是插件的强大之处：您使用一个 API（在本例中是 `camera.getPicture()`），插件会为您处理平台差异。一次编写，处处运行 `:)`

保存此文件，然后在 DevApp 中点击相机按钮。瞧！相机应该在您的设备上打开了。拍照后，它会显示在照片画廊页面上。

最后，将您的更改备份到 Appflow：

```shell
git add .
git commit -m "added camera functionality"
git push ionic master
```

接下来，我们将了解如何将应用转变为照片画廊，以及如何将照片保存到您的设备！
