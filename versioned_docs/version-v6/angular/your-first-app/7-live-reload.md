---
title: 使用实时重载进行快速应用开发
sidebar_label: 实时重载
---

<head>
  <meta
    name="description"
    content="使用Ionic CLI的实时重载功能来提升构建Ionic应用时的开发效率。了解如何利用快速应用开发功能。"
  />
</head>

到目前为止，我们已经看到了开发一个能在所有平台运行的跨平台应用是多么简单。开发体验相当快速，但如果我告诉你还有一种更快的方式呢？

我们可以使用Ionic CLI的[实时重载功能](https://ionicframework.com/docs/cli/livereload)来提升构建Ionic应用时的开发效率。当激活时，实时重载会在检测到应用中的变化时重新加载浏览器和/或WebView。

## 实时重载

还记得`ionic serve`吗？那就是在浏览器中工作的实时重载，让我们能够快速迭代。

我们也可以在iOS和Android设备上进行开发时使用它。这在编写与原生插件交互的代码时特别有用——我们必须在实际设备上运行才能验证其工作状态。因此，能够快速编写、构建、测试和部署代码对于保持开发速度至关重要。

让我们使用实时重载来实现照片删除功能，这是我们照片库功能中缺失的部分。选择你偏好的平台（iOS或Android）并将设备连接到电脑。接下来，根据你选择的平台在终端中运行以下命令：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

实时重载服务器将启动，如果尚未打开，相应的原生IDE也会自动打开。在IDE中，点击播放按钮将应用启动到你的设备上。

## 删除照片

在实时重载运行且应用已在设备上打开的情况下，让我们实现照片删除功能。在你的代码编辑器中（不是Android Studio或Xcode），打开`tab2.page.html`并为每个`<ion-img>`元素添加新的点击处理程序。当应用用户点击我们图库中的照片时，我们会显示一个[操作表](https://ionicframework.com/docs/api/action-sheet)对话框，提供删除所选照片或取消（关闭）对话框的选项。

```html
<ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
  <ion-img [src]="photo.webviewPath" (click)="showActionSheet(photo, position)"></ion-img>
</ion-col>
```

在`tab2.page.ts`中，导入操作表并将其添加到构造函数：

```tsx
import { ActionSheetController } from '@ionic/angular';

constructor(public photoService: PhotoService,
            public actionSheetController: ActionSheetController) {}
```

将`UserPhoto`添加到导入语句中。

```tsx
import { PhotoService, UserPhoto } from '../services/photo.service';
```

接下来，实现`showActionSheet()`函数。我们添加两个选项：`Delete`调用PhotoService的`deletePicture()`函数（稍后添加），以及`Cancel`，当被赋予"cancel"角色时会自动关闭操作表：

```tsx
public async showActionSheet(photo: UserPhoto, position: number) {
  const actionSheet = await this.actionSheetController.create({
    header: '照片',
    buttons: [{
      text: '删除',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        this.photoService.deletePicture(photo, position);
      }
    }, {
      text: '取消',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        // 无需操作，操作表会自动关闭
        }
    }]
  });
  await actionSheet.present();
}
```

保存我们刚刚编辑的两个文件。照片库应用将自动重新加载，现在当我们点击图库中的某张照片时，操作表就会显示。点击"删除"暂时还没有任何效果，所以我们返回代码编辑器。

在`src/app/services/photo.service.ts`中，添加`deletePicture()`函数：

```tsx
public async deletePicture(photo: UserPhoto, position: number) {
  // 从Photos引用数据数组中移除这张照片
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

首先从Photos数组中移除选中的照片。然后，我们使用Capacitor Preferences API来更新Photos数组的缓存版本。最后，我们使用Filesystem API删除实际的图片文件。

保存这个文件，然后再次点击一张照片并选择"删除"选项。这次，照片被成功删除了！使用实时重载实现得更快。💪

在本教程的最后部分，我们将引导你了解Appflow产品的基础知识，该产品用于构建应用并将其部署到用户设备上。