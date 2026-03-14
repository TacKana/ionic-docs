---
sidebar_label: 实时重载
---

# 使用实时重载进行快速应用开发

到目前为止，我们已经看到开发一个能在所有平台运行的跨平台应用是多么简单。开发体验相当快速，但如果我告诉你有办法能更快呢？

在构建 Ionic 应用时，我们可以使用 Ionic CLI 的[实时重载功能](https://ionicframework.com/docs/cli/livereload)来提升开发效率。启用后，实时重载会在检测到应用中的变更时重新加载浏览器和/或 WebView。

## 实时重载

还记得 `ionic serve` 吗？那就是实时重载在浏览器中的工作方式，让我们能快速迭代。

我们也可以在 iOS 和 Android 设备上进行开发时使用它。这在编写与原生插件交互的代码时特别有用。由于我们需要在设备上运行原生插件代码来验证其功能，因此能够快速编写代码、构建部署并测试，对于保持开发速度至关重要。

让我们使用实时重载来实现照片删除功能，这是我们照片库功能缺失的最后一块拼图。选择你偏好的平台（iOS 或 Android），并将设备连接到电脑。接着在终端中根据所选平台运行相应命令：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

实时重载服务器将启动，如果尚未打开，相应的原生 IDE 也会自动打开。在 IDE 中点击播放按钮，将应用部署到你的设备上。

## 删除照片

在实时重载运行且应用已在设备上打开的情况下，让我们来实现照片删除功能。在你的代码编辑器（不是 Android Studio 或 Xcode）中，打开 `Tab2.vue` 文件，然后导入 `actionSheetController`。我们将显示一个 [IonActionSheet](https://ionicframework.com/docs/api/action-sheet)，提供删除照片的选项：

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

接着，引用我们稍后将创建的 `deletePhoto` 函数：

```tsx
setup() {}
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
}
```

当用户点击某张图片时，我们将显示操作表。给 `<ion-img>` 元素添加一个点击事件处理程序：

```html
<ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
```

接下来，在 `setup()` 中，调用 `create` 函数来打开一个对话框，提供删除选定照片或取消（关闭）对话框的选项：

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
          // 无需操作，操作表会自动关闭
        },
      },
    ],
  });
  await actionSheet.present();
};
```

然后，返回 `showActionSheet` 函数：

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

接下来，我们需要在 `usePhotoGallery` 函数中实现 `deletePhoto` 方法。打开该文件并添加：

```tsx
const deletePhoto = async (photo: UserPhoto) => {
  // 从 Photos 引用数据数组中移除这张照片
  photos.value = photos.value.filter((p) => p.filepath !== photo.filepath);

  // 从文件系统中删除照片文件
  const filename = photo.filepath.substring(photo.filepath.lastIndexOf('/') + 1);
  await Filesystem.deleteFile({
    path: filename,
    directory: Directory.Data,
  });
};
```

首先从 `photos` 数组中移除选定的照片，然后使用 Filesystem API 删除照片文件。

请记住，从 `photos` 数组中移除照片会自动触发 `cachePhotos` 函数：

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

保存此文件，然后再次点击一张照片并选择“删除”选项。这次，照片被删除了！使用实时重载实现起来快多了。💪

在本教程的最后部分，我们将引导你了解 Appflow 产品的基础知识，它用于构建应用并将其部署到用户的设备上。