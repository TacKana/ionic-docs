---
title: 利用实时重载实现快速应用开发
sidebar_label: 实时重载
---

<head>
  <title>使用 Angular 和 Ionic Capacitor Camera 实现实时重载的快速应用开发</title>
  <meta
    name="description"
    content="使用 Ionic CLI 的实时重载功能来提升构建 Ionic 应用时的开发效率。了解如何利用快速应用开发技术。"
  />
</head>

到目前为止，我们已经看到了开发一个能在各处运行的跨平台应用是多么容易。开发体验相当快速，但如果我告诉你还有一种更快的方法呢？

我们可以使用 Ionic CLI 的[实时重载功能](../../cli/livereload.md)来提升构建 Ionic 应用时的开发效率。当实时重载激活时，它会检测应用中的变化并重新加载浏览器和/或 WebView。

## 实时重载

还记得 `ionic serve` 吗？那就是实时重载在浏览器中工作，让我们能够快速迭代。

我们也可以在 iOS 和 Android 设备上进行开发时使用它。这在编写与原生插件交互的代码时特别有用 - 我们必须在设备上运行才能验证其是否正常工作。因此，能够快速编写、构建、测试和部署代码对于保持开发速度至关重要。

让我们使用实时重载来实现照片删除功能，这是我们的照片画廊功能中缺失的部分。选择你偏好的平台（iOS 或 Android）并将设备连接到电脑。接下来，根据你选择的平台在终端中运行相应的命令：

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

实时重载服务器将启动，如果尚未打开，相应的原生 IDE 也会打开。在 IDE 中，点击播放按钮将应用启动到你的设备上。

## 删除照片

在实时重载运行且应用在你的设备上打开后，让我们实现照片删除功能。

在 `photo.service.ts` 中，添加 `deletePhoto()` 方法。首先从 `photos` 数组中移除选定的照片。然后，我们使用 Capacitor Preferences API 来更新缓存的 `photos` 数组版本。最后，我们使用 Filesystem API 删除实际的照片文件本身。

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
  // ...现有代码...

  // 更改：添加 `deletePhoto()` 方法
  public async deletePhoto(photo: UserPhoto, position: number) {
    // 从 Photos 引用数据数组中移除此照片
    this.photos.splice(position, 1);

    // 通过覆盖现有的照片数组来更新照片数组缓存
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });

    // 从文件系统中删除照片文件
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

接下来，在 `tab2.page.ts` 中，实现 `showActionSheet()` 方法。我们添加两个选项："删除"，调用 `PhotoService.deletePhoto()`，以及"取消"。当分配"cancel"角色时，取消按钮将自动关闭操作表。

```ts
import { Component } from '@angular/core';
// 更改：添加导入
import type { UserPhoto } from '../services/photo.service';
import { PhotoService } from '../services/photo.service';
// 更改：添加导入
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // 更改：更新构造函数
  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) {}

  // ...现有代码...

  // 更改：添加 `showActionSheet()` 方法
  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: '照片',
      buttons: [
        {
          text: '删除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePhoto(photo, position);
          },
        },
        {
          text: '取消',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // 无需操作，操作表将自动关闭
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
```

打开 `tab2.page.html` 并为每个 `<ion-img>` 元素添加新的点击事件处理器。当应用用户点击我们画廊中的照片时，我们将显示一个[操作表](../../api/action-sheet.md)对话框，提供删除选定照片或取消（关闭）对话框的选项。

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> 照片画廊 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">照片画廊</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-grid>
    <ion-row>
      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
        <!-- 更改：为每个图像添加点击事件监听器 -->
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

再次点击一张照片并选择"删除"选项。照片被删除了！使用实时重载实现得更快。💪

:::note
请记住，你可以在此处找到此应用的完整源代码 [here](https://github.com/ionic-team/photo-gallery-capacitor-ng)
:::

在本教程的最后部分，我们将引导你了解 Appflow 产品的基础知识，该产品用于构建应用并将其部署到用户的设备上。