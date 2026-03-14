# Android、iOS 与相机——精彩之旅！

之前，我们已经让一个 Ionic 应用在本地网页浏览器中成功运行起来了。现在，让我们把它部署到你的 iOS 或 Android 设备上，然后开始构建照片库功能。

## 添加 Cordova iOS 和 Android 平台

Ionic 借助开源项目 [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) 来提供原生硬件支持。我们首先添加 iOS 和 Android _平台_，随后再添加像相机这样的具体 _插件_：

```shell
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

这些命令会创建一个 `config.xml` 文件，该文件用于定义 Cordova iOS 和 Android 的各项设置。Cordova 会读取此文件，并在构建每个原生应用二进制包时应用这些设置。

配置 [iOS](../../../developing/ios.md) 和 [Android](../../../developing/android.md) 原生工具链还需要更多步骤。

好多了！现在我们可以添加相机功能了。顺便提一下，你可以在 [GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4) 上找到相关的参考代码。

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

保存文件并观察——一个相机按钮出现了！点击它，你会发现它没有任何反应。接下来我们就来解决这个问题。

## 通过 CLI 添加相机依赖项

为了使用相机功能，我们需要引入其 JavaScript 和原生库依赖。回到你的终端窗口，运行以下命令，该命令会将 JavaScript 库添加到项目中，从而在 TypeScript 代码中暴露 Camera API：

```shell
npm install @awesome-cordova-plugins/camera
```

在 `package.json` 中，你会注意到新增了一个 JavaScript 依赖项，其版本号大致如下：

`"@awesome-cordova-plugins/camera": "^5.4.0"`

接下来，运行此命令来添加原生 iOS 和 Android 代码，从而确保相机能在移动设备上正常工作。想了解更多相关信息，请查阅 [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) 和 [Ionic Native](https://ionicframework.com/docs/native) 文档。

```shell
ionic cordova plugin add cordova-plugin-camera
```

现在 `config.xml` 文件已更新，其中包含了类似以下内容，用于指定原生相机代码：

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

下一步仅适用于 iOS 用户。自 iOS 10 起，开发者必须说明应用为何需要访问设备相机。请在 `config.xml` 的 ios 平台部分（`<platform name="ios"></platform>`）内添加以下内容：

```xml
<!-- iOS 10 必需：相机权限提示 -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>用于拍摄照片</string>
</edit-config>
```

## 将 Camera 插件添加到 Angular 应用模块中

由于这是一个 Angular 项目，我们还需要多做一步：在应用模块（`src/app/app.module.ts`）中注册 Camera。首先，导入 Camera 模块：

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

现在，它就可以在我们的任何应用页面中使用了。

## 在照片库页面添加相机功能

我们的相机按钮目前还没有任何功能。回到 `tab2.page.html`，为按钮添加一个点击处理器：

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button (click)="takePicture()">
    <ion-icon name="camera"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

接着，更新图片占位符。以下代码将 "currentImage" 变量（我们接下来会处理它）绑定到要显示给用户的图片上。

```html
<img [src]="currentImage" *ngIf="currentImage" />
```

接下来打开 `tab2.page.ts`，导入 Camera 库：

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
```

然后，定义 "currentImage" 变量，并通过构造函数将 Camera 注入到这个类中：

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }
}
```

最后，在 `tab2.page.ts` 中添加 "takePicture" 方法。该方法已经配置好，一旦相机按钮被点击就会执行：

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
      // 处理错误
      console.log("Camera issue:" + err);
    });
  }
}
```

请注意：这里完全没有提及 iOS 或 Android！这正是插件的强大之处：你只需使用一个 API（本例中是 `camera.getPicture()`），插件就会为你处理好平台差异。一次编写，随处运行。😀

保存此文件，然后在 DevApp 中点击相机按钮。瞧！相机应该会在你的设备上打开。一旦照片被拍摄，它就会显示在照片库页面上。

接下来，我们将探讨如何将应用打造成一个真正的照片库，以及如何将照片保存到你的设备上！