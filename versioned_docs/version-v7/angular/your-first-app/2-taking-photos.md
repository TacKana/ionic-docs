---
title: 使用摄像头拍照
sidebar_label: 拍照
---

<head>
  <title>使用 Camera API 在 iOS、Android 和 Web 上拍照 | Angular Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="使用 Capacitor Camera API 为移动端 iOS、Android 和 Web 添加使用设备摄像头拍照的功能。在此了解如何操作。"
  />
</head>

现在到了有趣的部分 - 使用 Capacitor [Camera API](../../native/camera.md) 添加使用设备摄像头拍照的功能。我们将首先在 Web 上构建，然后做一些小的调整使其在移动端（iOS 和 Android）上工作。

## Photo Service

所有 Capacitor 逻辑（Camera 使用和其他原生功能）都将封装在一个服务类中。使用 `ionic generate` 命令创建 `PhotoService`：

```shell
ionic g service services/photo.service
```

打开新的 `services/photo.service.ts` 文件，让我们添加驱动摄像头功能的逻辑。首先，导入 Capacitor 依赖项并获取 `Camera`、`Filesystem` 和 `Storage` 插件的引用：

```ts
import { Injectable } from '@angular/core';
// CHANGE: Add the following import
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {}
```

接下来，定义一个新的类方法 `addNewToGallery()`，它将包含拍摄设备照片并将其保存到文件系统的核心逻辑。让我们先打开设备摄像头。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // CHANGE: Add the gallery method
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  }
}
```

注意这里的魔力：没有平台特定的代码（Web、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这一切，只需一个方法调用 - `Camera.getPhoto()` - 就会打开设备摄像头并允许我们拍照。

接下来，在 `tab2.page.ts` 中，导入 `PhotoService` 类并添加一个方法来调用其 `addNewToGallery` 方法。

```ts
import { Component } from '@angular/core';
// CHANGE: Import the PhotoService
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // CHANGE: Update constructor to include `photoService`
  constructor(public photoService: PhotoService) {}

  // CHANGE: Add `addNewToGallery()` method
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
```

然后，打开 `tab2.page.html` 并在 FAB 被点击时调用 `addPhotoToGallery()` 方法：

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Photo Gallery </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Photo Gallery</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <!-- CHANGE: Add a click event listener to the floating action button -->
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

如果还没有运行，请通过运行 `ionic serve` 在浏览器中重启开发服务器。在 Photo Gallery 标签页上，点击 Camera 按钮。如果您的计算机有某种网络摄像头，会弹出一个模态窗口。拍一张自拍！

![显示网络摄像头自拍的照片库应用。](/img/guides/first-app-cap-ng/camera-web.png '照片库中的网络摄像头自拍')

_（您的自拍可能比我的好得多）_

拍照后，照片立即消失了。我们需要在应用中显示它并保存以供将来访问。

## 显示照片

为我们的照片元数据定义数据结构，创建一个名为 `UserPhoto` 的新接口。在 `photo.service.ts` 文件的最底部，紧接在 `PhotoService` 类定义之后添加此接口：

```ts
export class PhotoService {
  // ...existing code...
}

// CHANGE: Add the `UserPhoto` interface
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 `addNewToGallery()` 方法之上，定义一个 `UserPhoto` 数组，它将包含对每个用 Camera 捕获的照片的引用。

```ts
export class PhotoService {
  // CHANGE: Add the `photos` array
  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    // ...existing code...
  }
}
```

在 `addNewToGallery` 方法中，将新捕获的照片添加到 `photos` 数组的开头。

```ts
// CHANGE: Update `addNewToGallery()` method
public async addNewToGallery() {
  // Take a photo
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  // CHANGE: Add the new photo to the photos array
  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath!
  });
}
```

`photo.service.ts` 现在应如下所示：

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath!,
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来，切换到 `tab2.page.html` 来显示图片。我们将添加一个[网格组件](../../api/grid.md)，确保照片在添加到图库时整齐显示。在网格内部，循环遍历 `PhotoService` 的 `photos` 数组中的每张照片。对于每个项目，添加一个[图片组件](../../api/img.md)并将其 `src` 属性设置为照片的路径。

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Photo Gallery </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Photo Gallery</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- CHANGE: Add a grid component to display the photos. -->
  <ion-grid>
    <ion-row>
      <!-- CHANGE: Create a new column and image component for each photo -->
      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
        <ion-img [src]="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

在 Web 浏览器中，点击摄像头按钮并再拍一张照片。这次，照片会显示在照片库中！

接下来，我们将添加将照片保存到文件系统的支持，以便以后可以在应用中检索和显示它们。
