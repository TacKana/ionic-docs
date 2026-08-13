---
title: 使用 Live Reload 快速开发应用
sidebar_label: Live Reload
---

<head>
  <title>使用 Angular 的 Live Reload 快速开发应用 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="使用 Ionic CLI 的 Live Reload 功能来提高构建 Ionic 应用时的生产力。了解如何利用快速应用开发。"
  />
</head>

到目前为止，我们已经看到了开发一个在任何地方都能运行的跨平台应用是多么容易。开发体验已经相当快速，但如果我告诉你还有更快的方法呢？

我们可以使用 Ionic CLI 的 [Live Reload 功能](../../cli/livereload.md)来提高构建 Ionic 应用时的生产力。启用后，当检测到应用中的更改时，Live Reload 将重新加载浏览器和/或 WebView。

## Live Reload

还记得 `ionic serve` 吗？那就是 Live Reload 在浏览器中工作，使我们能够快速迭代。

我们也可以在 iOS 和 Android 设备上开发时使用它。这在编写与原生插件交互的代码时特别有用——我们必须在设备上运行才能验证它是否工作。因此，能够快速编写、构建、测试和部署代码对于保持我们的开发速度至关重要。

让我们使用 Live Reload 来实现照片删除功能，这是我们相册功能缺失的部分。选择你喜欢的平台（iOS 或 Android）并将设备连接到电脑。接下来，根据你选择的平台在终端中运行以下任一命令：

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

Live Reload 服务器将启动，如果尚未打开，所选的本地 IDE 将打开。在 IDE 中，点击 Play 按钮将应用启动到你的设备上。

## 删除照片

在 Live Reload 运行且应用在设备上打开的情况下，让我们实现照片删除功能。

在 `photo.service.ts` 中，添加 `deletePhoto()` 方法。首先从 `photos` 数组中移除选中的照片。然后，使用 Capacitor Preferences API 更新 `photos` 数组的缓存版本。最后，使用 Filesystem API 删除实际的照片文件本身。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...existing code...

  // CHANGE: Add `deletePhoto()` method
  public async deletePhoto(photo: UserPhoto, position: number) {
    // Remove this photo from the Photos reference data array
    this.photos.splice(position, 1);

    // Update photos array cache by overwriting the existing photo array
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });

    // Delete photo file from filesystem
    const filename = photo.filepath.slice(photo.filepath.lastIndexOf('/') + 1);

    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来，在 `tab2.page.ts` 中实现 `showActionSheet()` 方法。我们添加两个选项："Delete"（将调用 `PhotoService.deletePhoto()`）和"Cancel"。当取消按钮被分配"cancel"角色时，它将自动关闭操作菜单。

```ts
import { Component } from '@angular/core';
// Change: Add import
import type { UserPhoto } from '../services/photo.service';
import { PhotoService } from '../services/photo.service';
// CHANGE: Add import
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // CHANGE: Update constructor
  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {}

  // ...existing code...

  // CHANGE: Add `showActionSheet()` method
  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePhoto(photo, position);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
```

打开 `tab2.page.html` 并为每个 `<ion-img>` 元素添加一个新的点击处理器。当应用用户点击我们相册中的照片时，我们将显示一个[操作菜单](../../api/action-sheet.md)对话框，其中包含删除所选照片或取消（关闭）对话框的选项。

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

  <ion-grid>
    <ion-row>
      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
        <!-- CHANGE: Add a click event listener to each image -->
        <ion-img [src]="photo.webviewPath" (click)="showActionSheet(photo, position)"></ion-img>
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

再次点击照片并选择"Delete"选项。照片被删除了！使用 Live Reload 实现得更快。

:::note
请记住，你可以在 GitHub 上找到此应用的[完整源代码](https://github.com/ionic-team/photo-gallery-capacitor-ng)。
:::

在本教程的最后部分，我们将向你介绍 Appflow 产品的基础知识，该产品用于构建和部署你的应用到用户的设备上。
