---
title: 使用相机拍摄照片
sidebar_label: 拍摄照片
---

<head>
  <title>通过 Ionic Capacitor Camera API 在 iOS、Android 和 Web 上拍摄照片 | Angular 相机功能</title>
  <meta
    name="description"
    content="使用 Ionic Capacitor Camera API 为移动端 iOS、Android 和 Web 添加设备相机拍摄功能。点击此处了解详细步骤。"
  />
</head>

现在进入有趣的部分——使用 Capacitor [Camera API](../../native/camera.md) 添加设备相机拍摄功能。我们将从 Web 端开始构建，然后进行一些小的调整，使其能在移动端（iOS 和 Android）上运行。

## 照片服务

所有 Capacitor 逻辑（相机使用和其他原生功能）都将封装在一个服务类中。使用 `ionic generate` 命令创建 `PhotoService`：

```shell
ionic g service services/photo.service
```

打开新创建的 `services/photo.service.ts` 文件，让我们添加实现相机功能的逻辑。首先，导入 Capacitor 依赖项并获取 `Camera`、`Filesystem` 和 `Storage` 插件的引用：

```ts
import { Injectable } from '@angular/core';
// 变更：添加以下导入
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {}
```

接下来，定义一个新的类方法 `addNewToGallery()`，该方法将包含拍摄设备照片并保存到文件系统的核心逻辑。让我们先从打开设备相机开始。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // 变更：添加图库方法
  public async addNewToGallery() {
    // 拍摄照片
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  }
}
```

注意这里的魔法：没有任何平台特定的代码（Web、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这些细节，只需一个方法调用——`Camera.getPhoto()`——就能打开设备相机并让我们拍摄照片。

接下来，在 `tab2.page.ts` 中，导入 `PhotoService` 类并添加一个方法来调用其 `addNewToGallery` 方法。

```ts
import { Component } from '@angular/core';
// 变更：导入 PhotoService
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // 变更：更新构造函数以包含 `photoService`
  constructor(public photoService: PhotoService) {}

  // 变更：添加 `addNewToGallery()` 方法
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
```

然后，打开 `tab2.page.html`，在悬浮操作按钮被点击时调用 `addPhotoToGallery()` 方法：

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> 照片库 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">照片库</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <!-- 变更：为悬浮操作按钮添加点击事件监听器 -->
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

如果尚未运行，请在浏览器中通过运行 `ionic serve` 重新启动开发服务器。在照片库标签页中，点击相机按钮。如果您的计算机有任何类型的摄像头，会弹出一个模态窗口。拍张自拍吧！

![显示网络摄像头自拍的照片库应用](/img/guides/first-app-cap-ng/camera-web.png '照片库中的网络摄像头自拍')

_(您的自拍可能比我的好得多)_

拍摄照片后，它会立即消失。我们需要在应用中显示它并保存以备将来访问。

## 显示照片

要为我们的照片元数据定义数据结构，创建一个名为 `UserPhoto` 的新接口。将此接口添加到 `photo.service.ts` 文件的最底部，紧接在 `PhotoService` 类定义之后：

```ts
export class PhotoService {
  // ...现有代码...
}

// 变更：添加 `UserPhoto` 接口
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 `addNewToGallery()` 方法上方，定义一个 `UserPhoto` 数组，该数组将包含对相机拍摄的每张照片的引用。

```ts
export class PhotoService {
  // 变更：添加 `photos` 数组
  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    // ...现有代码...
  }
}
```

在 `addNewToGallery` 方法中，将新拍摄的照片添加到 `photos` 数组的开头。

```ts
// 变更：更新 `addNewToGallery()` 方法
public async addNewToGallery() {
  // 拍摄照片
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  // 变更：将新照片添加到 photos 数组
  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath!
  });
}
```

现在 `photo.service.ts` 应该如下所示：

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    // 拍摄照片
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

接下来，切换到 `tab2.page.html` 以显示图像。我们将添加一个[网格组件](../../api/grid.md)，以确保照片添加到图库时能整齐地显示。在网格内部，遍历 `PhotoService` 的 `photos` 数组中的每张照片。对于每个项目，添加一个[图像组件](../../api/img.md)，并将其 `src` 属性设置为照片的路径。

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> 照片库 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">照片库</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- 变更：添加网格组件来显示照片 -->
  <ion-grid>
    <ion-row>
      <!-- 变更：为每张照片创建新列和图像组件 -->
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

在 Web 浏览器中，点击相机按钮并拍摄另一张照片。这一次，照片会显示在照片库中！

接下来，我们将添加对将照片保存到文件系统的支持，以便以后可以检索并在我们的应用中显示。