---
sidebar_label: Live Reload
---

# 使用 Live Reload 快速开发应用

到目前为止，我们已经看到开发一个在所有平台上都能运行的跨平台应用是多么容易。开发体验已经相当快了，但如果我告诉你还有一种方法可以更快呢？

我们可以使用 Ionic CLI 的 [Live Reload 功能](https://ionicframework.com/docs/cli/livereload) 来提高构建 Ionic 应用时的生产力。激活后，Live Reload 将在检测到应用更改时重新加载浏览器和/或 WebView。

## Live Reload

还记得 `ionic serve` 吗？那就是 Live Reload 在浏览器中工作，让我们能够快速迭代。

我们也可以在开发 iOS 和 Android 设备时使用它。这在编写与原生插件交互的代码时特别有用。由于我们需要在设备上运行原生插件代码来验证它是否工作，拥有一种快速编写代码、构建和部署、然后测试的方法对于保持开发速度至关重要。

让我们使用 Live Reload 来实现照片删除，这是我们相册功能中缺失的部分。选择你选择的平台（iOS 或 Android）并将设备连接到电脑。接下来，根据你选择的平台在终端中运行以下命令之一：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

Live Reload 服务器将启动，如果尚未打开，所选的原生 IDE 将打开。在 IDE 中，点击 Play 按钮将应用启动到你的设备上。

## 删除照片

在 Live Reload 运行且应用在你的设备上打开时，让我们实现照片删除功能。在你的代码编辑器中（不是 Android Studio 或 Xcode），打开 `Tab2.vue` 然后导入 `actionSheetController`。我们将显示一个 [IonActionSheet](https://ionicframework.com/docs/api/action-sheet)，提供删除照片的选项：

```tsx
import {
  actionSheetController,
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/vue';
// 其他导入
```

接下来，引用 `deletePhoto` 函数，我们即将创建它：

```tsx
setup() {}
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
}
```

当用户点击/轻触图像时，我们将显示操作面板。为 `<ion-img>` 元素添加点击处理程序：

```html
<ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
```

接下来，在 `setup()` 中，调用 `create` 函数来打开一个对话框，提供删除所选照片或取消（关闭）对话框的选项：

```tsx
const showActionSheet = async (photo: UserPhoto) => {
  const actionSheet = await actionSheetController.create({
    header: '照片',
    buttons: [
      {
        text: '删除',
        role: 'destructive',
        icon: trash,
        handler: () => {
          deletePhoto(photo);
        },
      },
      {
        text: '取消',
        icon: close,
        role: 'cancel',
        handler: () => {
          // 无需操作，操作面板会自动关闭
        },
      },
    ],
  });
  await actionSheet.present();
};
```

接下来，返回 `showActionSheet` 函数：

```tsx
return {
  photos,
  takePhoto,
  showActionSheet,
  camera,
  trash,
  close,
};
```

接下来，我们需要在 `usePhotoGallery` 函数中实现 `deletePhoto` 方法。打开文件然后添加：

```tsx
const deletePhoto = async (photo: UserPhoto) => {
  // 从 Photos 引用数据数组中移除该照片
  photos.value = photos.value.filter((p) => p.filepath !== photo.filepath);

  // 从文件系统中删除照片文件
  const filename = photo.filepath.substring(photo.filepath.lastIndexOf('/') + 1);
  await Filesystem.deleteFile({
    path: filename,
    directory: Directory.Data,
  });
};
```

首先从 `photos` 数组中移除选中的照片，然后使用 Filesystem API 删除照片文件。

记住从 `photos` 数组中移除照片会自动触发 `cachePhotos` 函数：

```tsx
const cachePhotos = () => {
  Preferences.set({
    key: PHOTO_STORAGE,
    value: JSON.stringify(photos.value),
  });
};

watch(photos, cachePhotos);
```

最后，返回 `deletePhoto` 函数：

```tsx
return {
  photos,
  takePhoto,
  deletePhoto,
};
```

保存此文件，然后再次点击照片并选择"删除"选项。这次，照片被删除了！使用 Live Reload 实现起来快得多。

在本教程的最后部分，我们将带你了解 Appflow 产品的基础知识，用于构建和部署你的应用到用户设备。
