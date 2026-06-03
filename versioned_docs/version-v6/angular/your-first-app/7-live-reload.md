---
title: 使用 Live Reload 进行快速应用开发
sidebar_label: Live Reload
---

<head>
  <meta
    name="description"
    content="使用 Ionic CLI 的 Live Reload 功能来提高构建 Ionic 应用时的生产力。了解如何利用快速应用开发。"
  />
</head>

到目前为止，我们已经看到了开发一个处处可运行的跨平台应用是多么容易。开发体验相当快速，但如果我告诉你还有更快的方法呢？

我们可以使用 Ionic CLI 的 [Live Reload 功能](https://ionicframework.com/docs/cli/livereload) 来提高构建 Ionic 应用时的生产力。激活后，Live Reload 在检测到应用中的更改时会重新加载浏览器和/或 WebView。

## Live Reload

还记得 `ionic serve` 吗？那就是在浏览器中工作的 Live Reload，使我们能够快速迭代。

我们也可以在开发 iOS 和 Android 应用时使用它。这在编写与原生插件交互的代码时特别有用——我们必须在设备上运行以验证它是否正常工作。因此，能够快速编写、构建、测试和部署代码对于保持我们的开发速度至关重要。

让我们使用 Live Reload 来实现照片删除——这是相册功能中缺失的部分。选择你选择的平台（iOS 或 Android）并将设备连接到计算机。接下来，根据你选择的平台在终端中运行以下命令之一：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

Live Reload 服务器将启动，如果尚未打开，所选的原生 IDE 将打开。在 IDE 中，点击 Play 按钮在设备上启动应用。

## 删除照片

在设备上运行 Live Reload 并打开应用后，让我们实现照片删除功能。在你的代码编辑器（而不是 Android Studio 或 Xcode）中，打开 `tab2.page.html` 并为每个 `<ion-img>` 元素添加一个新的点击处理程序。当应用用户点击相册中的照片时，我们将显示一个[操作列表](https://ionicframework.com/docs/api/action-sheet)对话框，其中包含删除所选照片或取消（关闭）对话框的选项。

```html
<ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
  <ion-img [src]="photo.webviewPath" (click)="showActionSheet(photo, position)"></ion-img>
</ion-col>
```

在 `tab2.page.ts` 中，导入 Action Sheet 并将其添加到构造函数中：

```tsx
import { ActionSheetController } from '@ionic/angular';

constructor(public photoService: PhotoService,
            public actionSheetController: ActionSheetController) {}
```

将 `UserPhoto` 添加到 import 语句中。

```tsx
import { PhotoService, UserPhoto } from '../services/photo.service';
```

接下来，实现 `showActionSheet()` 函数。我们添加两个选项：调用 PhotoService 的 `deletePicture()` 函数（接下来添加）的 `Delete`，以及当给予"cancel"角色时将自动关闭操作列表的 `Cancel`：

```tsx
public async showActionSheet(photo: UserPhoto, position: number) {
  const actionSheet = await this.actionSheetController.create({
    header: 'Photos',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        this.photoService.deletePicture(photo, position);
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        // 无需操作，操作列表会自动关闭
        }
    }]
  });
  await actionSheet.present();
}
```

保存我们刚刚编辑的两个文件。相册应用将自动重新加载，现在当我们点击相册中的一张照片时，操作列表会显示。点击"Delete"还没有任何效果，所以回到代码编辑器。

在 `src/app/services/photo.service.ts` 中，添加 `deletePicture()` 函数：

```tsx
public async deletePicture(photo: UserPhoto, position: number) {
  // 从照片引用数据数组中移除这张照片
  this.photos.splice(position, 1);

  // 通过覆盖现有的照片数组来更新照片数组缓存
  Preferences.set({
    key: this.PHOTO_STORAGE,
    value: JSON.stringify(this.photos)
  });

  // 从文件系统中删除照片文件
  const filename = photo.filepath
                      .substring(photo.filepath.lastIndexOf('/') + 1);

  await Filesystem.deleteFile({
    path: filename,
    directory: Directory.Data
  });
}
```

选中的照片首先从 Photos 数组中移除。然后，我们使用 Capacitor Preferences API 更新 Photos 数组的缓存版本。最后，我们使用 Filesystem API 删除实际的照片文件本身。

保存此文件，然后再次点击一张照片并选择"Delete"选项。这次，照片被删除了！使用 Live Reload 实现得更快。

在本教程的最后部分，我们将向你介绍 Appflow 产品的基础知识，该产品用于构建应用并将其部署到用户的设备上。
