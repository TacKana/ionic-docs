# Android、iOS 和相机——天哪！

之前，我们已经在本地 Web 浏览器中启动并运行了一个 Ionic 应用。现在，让我们将其部署到您的 iOS 或 Android 设备上，然后开始构建照片库功能。

## 添加 Cordova iOS 和 Android 平台

Ionic 利用开源 [Cordova 项目](https://cordova.apache.org/docs/en/latest/guide/overview/)来提供原生硬件支持。我们首先添加 iOS 和 Android 平台，然后添加特定的插件（如相机）：

```shell
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

这些命令将创建一个 `config.xml` 文件，用于定义 Cordova iOS 和 Android 的设置。Cordova 会读取此文件，并在构建每个原生应用二进制文件时应用每个设置。

还有更多步骤来配置 [iOS](../../../developing/ios.md) 和 [Android](../../../developing/android.md) 原生工具。

好多了！现在我们可以添加相机功能。顺便说一下，您可以在 [GitHub 上](https://github.com/ionic-team/photo-gallery-tutorial-ionic4)找到参考代码。

回到 `tab2.page.html`，添加以下内容：

```html
<ion-content>
  <img />

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

保存文件并观察——一个相机按钮出现了！点击它，您会发现它没有任何反应。接下来我们来解决这个问题。

## 通过 CLI 添加相机依赖

为了使用相机，我们需要引入其 JavaScript 和原生库依赖。回到终端窗口，运行以下命令，该命令将 JavaScript 库添加到项目中，从而在 TypeScript 代码中暴露相机 API：

```shell
npm install @awesome-cordova-plugins/camera
```

在 `package.json` 中，您会注意到添加了一个新的 JavaScript 依赖，版本号类似于以下内容：

`"@awesome-cordova-plugins/camera": "^5.4.0"`

接下来，运行此命令以添加 iOS 和 Android 的原生代码，从而让相机在移动设备上工作。有关其工作原理的更多信息，请阅读 [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) 和 [Ionic Native](https://ionicframework.com/docs/native)。

```shell
ionic cordova plugin add cordova-plugin-camera
```

`config.xml` 文件现在已更新，为原生相机代码添加了类似以下内容的条目：

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

下一步仅适用于 iOS 用户。从 iOS 10 开始，开发者必须提供应用希望访问设备相机的原因。将此添加到 `config.xml` 中 ios 平台部分（<platform name="ios"></platform>）内部：

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## 将相机插件添加到 Angular 应用模块

由于这是一个 Angular 项目，我们还需要一步：在 App Module（`src/app/app.module.ts`）中注册相机。首先，导入相机模块：

```Javascript
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
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

## 将相机添加到 Gallery 页面

我们的相机按钮还没有任何功能。在 `tab2.page.html` 中，为按钮添加点击处理程序：

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button (click)="takePicture()">
    <ion-icon name="camera"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

然后，更新图片占位符。以下代码将 "currentImage" 变量（我们接下来将处理）绑定到要显示给用户的图像。

```html
<img [src]="currentImage" *ngIf="currentImage" />
```

接下来打开 `tab2.page.ts` 并导入相机库：

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
```

接下来，定义 "currentImage" 变量并通过构造函数将 Camera 注入到此类中：

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }
}
```

最后，在 `tab2.page.ts` 中添加 "takePicture" 方法。它已经准备好，一旦点击相机按钮就会执行：

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }
}
```

请注意：这里没有提到 iOS 或 Android！这就是插件的强大之处：您使用一个 API（本例中是 `camera.getPicture()`），插件会为您处理平台差异。一次编写，到处运行。😀

保存此文件，然后在 DevApp 中点击相机按钮。瞧！相机应该在您的设备上打开了。拍照后，它会显示在照片库页面上。

接下来，我们将了解如何将应用转变为照片库，以及如何将照片保存到您的设备！
