---
title: 使用相机拍照
sidebar_label: 拍照功能
---

<head>
  <title>为 iOS、Android 和 Web 构建相机 API | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="使用 Ionic Capacitor Camera API 为移动端 iOS、Android 和 Web 应用添加设备相机拍照功能。立即了解如何实现。"
  />
</head>

现在进入有趣的部分——使用 Capacitor [Camera API](https://capacitorjs.com/docs/apis/camera) 为应用添加调用设备相机拍照的功能。我们将从 Web 端开始构建，然后进行一些小的调整使其在移动端（iOS 和 Android）也能正常工作。

## 照片服务

所有 Capacitor 逻辑（相机使用及其他原生功能）都将封装在一个服务类中。使用 `ionic generate` 命令创建 `PhotoService`：

```shell
ionic g service services/photo
```

打开新创建的 `services/photo.service.ts` 文件，开始添加支持相机功能的逻辑。首先，导入 Capacitor 依赖项并获取 Camera、Filesystem 和 Storage 插件的引用：

```tsx
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
```

接下来，定义一个新的类方法 `addNewToGallery`，该方法将包含拍摄设备照片并保存到文件系统的核心逻辑。我们先从打开设备相机开始：

```tsx
public async addNewToGallery() {
  // 拍摄照片
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });
}
```

注意这里的巧妙之处：没有任何平台特定代码（Web、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这些细节，只需一个方法调用 `Camera.getPhoto()` 即可打开设备相机并允许我们拍照。

接下来，打开 `tab2.page.ts`，导入 PhotoService 类，并添加一个调用该服务中 `addNewToGallery` 方法的方法：

```tsx
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
```

然后，打开 `tab2.page.html`，在点击浮动操作按钮时调用 `addPhotoToGallery()` 函数：

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

保存文件。如果开发服务器尚未运行，请在浏览器中通过运行 `ionic serve` 重新启动。在照片库标签页中，点击相机按钮。如果您的电脑有摄像头，将会出现一个模态窗口。拍张自拍照吧！

![显示网络摄像头自拍照的照片库应用](/img/guides/first-app-cap-ng/camera-web.png '照片库中的网络摄像头自拍')

（您的自拍可能比我的好看多了）

拍照后，照片会立即消失。我们需要在应用中显示它并保存以供将来访问。

## 显示照片

在 `PhotoService` 类定义之外（文件的最底部），创建一个新的接口 `UserPhoto` 来保存照片元数据：

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
```

回到文件顶部，定义一个 Photos 数组，用于引用通过相机拍摄的每张照片：

```tsx
export class PhotoService {
  public photos: UserPhoto[] = [];

  // 其他代码
}
```

在 `addNewToGallery` 函数中，将新拍摄的照片添加到 Photos 数组的开头：

```tsx
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath
  });
}
```

接下来，转到 `tab2.page.html`，以便在屏幕上显示图像。添加一个[网格组件](https://ionicframework.com/docs/api/grid)，这样当照片添加到图库时，每张照片都能美观地显示。遍历 `PhotoServices` 的 Photos 数组中的每张照片，并为每张照片添加一个图像组件 (`<ion-img>`)。将 `src`（源）指向照片的路径：

```html
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
        <ion-img [src]="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- ion-fab 标记 -->
</ion-content>
```

保存所有文件。在 Web 浏览器中，点击相机按钮并拍摄另一张照片。这次，照片会显示在照片库中！

接下来，我们将添加将照片保存到文件系统的支持，以便以后可以检索并在应用中显示。