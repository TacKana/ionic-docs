---
sidebar_label: 实时重新加载
---

# 使用实时重新加载进行快速应用开发

到目前为止，我们已经见识到了开发一款随处可用的跨平台应用有多么简单。开发体验相当快捷，但如果我告诉你还有一种更快的方法呢？

我们可以使用 Ionic CLI 的[实时重新加载功能](https://ionicframework.com/docs/cli/livereload)来提升构建 Ionic 应用时的开发效率。当启用实时重新加载时，它会检测应用中的更改并重新加载浏览器和/或 WebView。

## 实时重新加载

还记得 `ionic serve` 吗？那就是实时重新加载在浏览器中的工作方式，让我们能够快速迭代。

我们也可以在 iOS 和 Android 设备上进行开发时使用它。这在编写与原生插件交互的代码时特别有用。由于我们需要在设备上运行原生插件代码来验证其是否正常工作，因此能够快速编写代码、构建和部署，然后测试，对于保持开发速度至关重要。

让我们使用实时重新加载来实现照片删除功能，这是我们照片库功能缺失的部分。选择你偏好的平台（iOS 或 Android）并将设备连接到计算机。接下来，根据你选择的平台，在终端中运行以下任一命令：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

实时重新加载服务器将启动，如果尚未打开，相应的原生 IDE 也会打开。在 IDE 中，点击播放按钮将应用启动到你的设备上。

## 删除照片

当实时重新加载正在运行且应用在你的设备上打开时，让我们来实现照片删除功能。在你的代码编辑器（不是 Android Studio 或 Xcode）中，打开 `Tab2.vue`，然后导入 `actionSheetController`。我们将显示一个 [IonActionSheet](https://ionicframework.com/docs/api/action-sheet)，其中包含删除照片的选项：

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

接下来，引用 `deletePhoto` 函数，我们稍后会创建它：

```tsx
setup() {}
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();
}
```

当用户点击图像时，我们将显示操作表。为 `<ion-img>` 元素添加一个点击处理程序：

```html
<ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
```

接下来，在 `setup()` 中，调用 `create` 函数打开一个对话框，其中包含删除选定照片或取消（关闭）对话框的选项：

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

接下来，我们需要在 `usePhotoGallery` 函数中实现 `deletePhoto` 方法。打开该文件，然后添加：

```tsx
const deletePhoto = async (photo: UserPhoto) => {
  // 从 Photos 引用数据数组中移除此照片
  photos.value = photos.value.filter((p) => p.filepath !== photo.filepath);

  // 从文件系统中删除照片文件
  const filename = photo.filepath.substring(photo.filepath.lastIndexOf('/') + 1);
  await Filesystem.deleteFile({
    path: filename,
    directory: Directory.Data,
  });
};
```

首先从 `photos` 数组中移除选定的照片，然后我们使用 Filesystem API 删除照片文件。

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

保存此文件，然后再次点击一张照片并选择“删除”选项。这次，照片被删除了！使用实时重新加载实现得更快。💪

## 下一步是什么？

恭喜！你已经创建了一个完整的跨平台照片库应用，可以在 Web、iOS 和 Android 上运行。

从这里开始，有许多路径可以探索。尝试在应用中添加另一个 [Ionic UI 组件](https://ionicframework.com/docs/components)，或更多[原生功能](https://capacitorjs.com/docs/apis)。天空才是极限。

祝应用构建愉快！💙