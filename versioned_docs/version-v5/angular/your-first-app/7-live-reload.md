---
sidebar_label: 实时重载
---

# 通过实时重载实现快速应用开发

到目前为止，我们已经领略了开发跨平台应用是多么轻松。开发体验已经相当快捷，但若我告诉你还有更快的方法，你会怎么想？

我们可以利用 Ionic CLI 的 [实时重载功能](https://ionicframework.com/docs/cli/livereload) 来提升构建 Ionic 应用时的开发效率。启用后，实时重载会在检测到应用变更时自动刷新浏览器和/或 WebView。

## 实时重载

还记得 `ionic serve` 吗？那就是实时重载在浏览器中发挥作用，让我们能够快速迭代。

我们也可以在 iOS 和 Android 设备上进行开发时使用它。这在编写与原生插件交互的代码时尤为有用——我们必须在设备上运行才能验证其功能。因此，能够快速编写、构建、测试和部署代码对于保持开发速度至关重要。

让我们使用实时重载来实现照片删除功能，这是我们照片库功能中缺失的一环。选择你偏好的平台（iOS 或 Android），并将设备连接到电脑。接着，根据所选平台在终端中运行相应的命令：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

实时重载服务器将启动，如果尚未打开，你选择的原生 IDE 也会自动开启。在 IDE 中，点击播放按钮即可将应用部署到你的设备上。

## 删除照片

在实时重载运行且应用已在设备上打开的情况下，让我们来实现照片删除功能。在你的代码编辑器（非 Android Studio 或 Xcode）中，打开 `tab2.page.html` 并为每个 `<ion-img>` 元素添加新的点击事件处理程序。当应用用户点击图库中的照片时，我们将显示一个 [操作表](https://ionicframework.com/docs/api/action-sheet) 对话框，提供删除选定照片或取消（关闭）对话框的选项。

```html
<ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
  <ion-img [src]="photo.webviewPath" (click)="showActionSheet(photo, position)"></ion-img>
</ion-col>
```

在 `tab2.page.ts` 中，导入操作表并将其添加到构造函数中：

```tsx
import { ActionSheetController } from '@ionic/angular';

constructor(public photoService: PhotoService,
            public actionSheetController: ActionSheetController) {}
```

将 `UserPhoto` 添加到导入语句中。

```tsx
import { PhotoService, UserPhoto } from '../services/photo.service';
```

接下来，实现 `showActionSheet()` 函数。我们添加两个选项：`Delete`（调用 PhotoService 的 `deletePicture()` 函数，该函数将在后续添加）和 `Cancel`，后者被赋予 "cancel" 角色时将自动关闭操作表：

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

保存我们刚刚编辑的两个文件。照片库应用将自动重新加载，现在当我们点击图库中的任意照片时，操作表就会显示。点击“删除”目前还未生效，所以请回到你的代码编辑器。

在 `src/app/services/photo.service.ts` 中，添加 `deletePicture()` 函数：

```tsx
public async deletePicture(photo: UserPhoto, position: number) {
  // 从 Photos 引用数据数组中移除这张照片
  this.photos.splice(position, 1);

  // 通过覆盖现有照片数组来更新照片数组缓存
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

首先，选中的照片会从 Photos 数组中移除。接着，我们使用 Capacitor Preferences API 来更新 Photos 数组的缓存版本。最后，我们利用 Filesystem API 删除实际的图片文件本身。

保存此文件，然后再次点击一张照片并选择“删除”选项。这次，照片成功删除了！借助实时重载，我们实现得更快。💪

## 下一步

恭喜！你已经构建了一个完整的跨平台照片库应用，可在网页、iOS 和 Android 上运行。从这里出发，有多种路径可选。尝试在应用中添加另一个 [Ionic UI 组件](https://ionicframework.com/docs/components)，或更多 [原生功能](https://capacitorjs.com/docs/apis)。一切皆有可能。

祝你应用开发愉快！💙