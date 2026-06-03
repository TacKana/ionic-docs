---
sidebar_label: 实时重载
---

# 使用实时重载快速开发应用

到目前为止，我们已经看到开发一个在任何地方都能运行的跨平台应用是多么容易。开发体验已经相当快速了，但如果我告诉您还有一种方法可以更快呢？

我们可以使用 Ionic CLI 的[实时重载功能](https://ionicframework.com/docs/cli/livereload)来提高构建 Ionic 应用时的生产力。激活后，实时重载会在检测到应用中的更改时重新加载浏览器和/或 WebView。

## 实时重载

还记得 `ionic serve` 吗？那就是实时重载在浏览器中工作，让我们能够快速迭代。

我们还可以在 iOS 和 Android 设备上进行开发时使用它。这在编写与原生插件交互的代码时特别有用。由于我们需要在设备上运行原生插件代码来验证其是否工作，因此能够快速编写代码、构建和部署、然后测试对于保持开发速度至关重要。

让我们使用实时重载来实现照片删除功能——这是我们相册功能缺失的部分。选择您喜欢的平台（iOS 或 Android）并将设备连接到计算机。接下来，根据您选择的平台在终端中运行以下任一命令：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

实时重载服务器将启动，如果尚未打开，所选的原生 IDE 将打开。在 IDE 中，点击播放按钮将应用启动到您的设备上。

## 删除照片

在实时重载运行且应用在设备上打开的情况下，让我们实现照片删除功能。在您的代码编辑器中（不是 Android Studio 或 Xcode），打开 `Tab2.tsx`，然后从 React 导入 `useState`，从 `usePhotoGallery` hook 导入 `UserPhoto`：

```tsx
import React, { useState } from 'react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
// 其他导入
```

接下来，引用 `deletePhoto` 函数，我们很快就会创建它：

```tsx
const { photos, takePhoto, deletePhoto } = usePhotoGallery();
```

然后，添加一个状态值来存储要删除的照片信息：

```tsx
const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
```

当用户点击图像时，我们将通过将状态值设置为该照片来显示操作菜单。将 `<IonImg>` 元素更新为：

```tsx
<IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
```

接下来，添加一个 [IonActionSheet](https://ionicframework.com/docs/api/action-sheet) 对话框，提供删除所选照片或取消（关闭）对话框的选项。我们将根据 `photoToDelete` 是否有值来设置 `isOpen` 属性。

在 JSX 中，将以下组件放在 `</IonContent>` 结束标签之前。

```tsx
<IonActionSheet
  isOpen={!!photoToDelete}
  buttons={[
    {
      text: '删除',
      role: 'destructive',
      icon: trash,
      handler: () => {
        if (photoToDelete) {
          deletePhoto(photoToDelete);
          setPhotoToDelete(undefined);
        }
      },
    },
    {
      text: '取消',
      icon: close,
      role: 'cancel',
    },
  ]}
  onDidDismiss={() => setPhotoToDelete(undefined)}
/>
```

上面，我们添加了两个选项：`删除`，调用 `deletePhoto` 函数（接下来添加）；以及 `取消`，当角色为 "cancel" 时，它将自动关闭操作菜单。同样重要的是设置 `onDidDismiss` 函数，并在模态框消失时将 `photoToDelete` 重置为 `undefined`。这样，当点击另一张图像时，操作菜单会注意到 `photoToDelete` 值的变化。

接下来，我们需要实现来自 `usePhotoGallery` hook 的 `deletePhoto` 方法。打开该文件并将以下函数粘贴到 hook 中：

```tsx
const deletePhoto = async (photo: UserPhoto) => {
  // 从照片引用数据数组中移除该照片
  const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);

  // 通过覆盖现有照片数组来更新照片数组缓存
  Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

  // 从文件系统中删除照片文件
  const filename = photo.filepath.substring(photo.filepath.lastIndexOf('/') + 1);
  await Filesystem.deleteFile({
    path: filename,
    directory: Directory.Data,
  });
  setPhotos(newPhotos);
};
```

选中的照片首先从照片数组中移除。然后，我们使用 Capacitor Preferences API 更新照片数组的缓存版本。最后，我们使用 Filesystem API 删除实际的照片文件本身。

确保返回 `deletePhoto` 函数，使其成为我们暴露的 hook API 的一部分：

```tsx
return {
  deletePhoto,
  photos,
  takePhoto,
};
```

保存此文件，然后再次点击照片并选择"删除"选项。这次，照片被删除了！使用实时重载功能实现得更快。

在本教程的最后一部分，我们将向您介绍 Appflow 产品的基础知识，用于构建应用并将其部署到用户的设备上。
