---
sidebar_label: Live Reload
---

# 通过实时重载实现快速应用开发

到目前为止，我们已经体验了开发跨平台应用的便捷性。开发过程已经相当迅速，但如果我告诉你还有办法能更快呢？

我们可以利用 Ionic CLI 的[实时重载功能](https://ionicframework.com/docs/cli/livereload)来提升构建 Ionic 应用时的开发效率。启用后，当检测到应用中的变更时，实时重载将自动刷新浏览器和/或 WebView。

## 实时重载

还记得 `ionic serve` 吗？那就是实时重载在浏览器中工作，让我们能够快速迭代。

我们也可以在 iOS 和 Android 设备上进行开发时使用它。这在编写需要与原生插件交互的代码时特别有用。由于我们需要在设备上运行原生插件代码来验证其功能，因此能够快速编写代码、构建部署并测试，对于保持开发速度至关重要。

让我们使用实时重载来实现照片删除功能，这是我们的照片库功能中缺失的部分。选择你偏好的平台（iOS 或 Android），并将设备连接到计算机。然后，根据所选平台在终端中运行相应命令：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

实时重载服务器将启动，如果尚未打开，对应的原生集成开发环境也会自动打开。在集成开发环境中，点击播放按钮，将应用部署到你的设备上。

## 删除照片

在实时重载运行且应用已在设备上打开的状态下，让我们来实现照片删除功能。在你的代码编辑器中（不是 Android Studio 或 Xcode），打开 `Tab2.tsx`，然后从 React 导入 `useState`，并从 `usePhotoGallery` 钩子中导入 `UserPhoto`：

```tsx
import React, { useState } from 'react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
// 其他导入
```

接下来，引用我们即将创建的 `deletePhoto` 函数：

```tsx
const { photos, takePhoto, deletePhoto } = usePhotoGallery();
```

然后，添加一个状态值来存储要删除的照片信息：

```tsx
const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
```

当用户点击图片时，我们将通过将状态值设置为该照片来显示操作表。更新 `<IonImg>` 元素为：

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

上面我们添加了两个选项：`删除` 会调用 `deletePhoto` 函数（接下来会添加），而 `取消` 被赋予 "cancel" 角色时会自动关闭操作表。同时，重要的是设置 `onDidDismiss` 函数，并在模态框关闭时将 `photoToDelete` 设置回 `undefined`。这样，当点击另一张图片时，操作表会注意到 `photoToDelete` 值的变化。

接下来，我们需要实现将从 `usePhotoGallery` 钩子中导出的 `deletePhoto` 方法。打开该文件，并在钩子中粘贴以下函数：

```tsx
const deletePhoto = async (photo: UserPhoto) => {
  // 从 Photos 引用数据数组中移除这张照片
  const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);

  // 通过覆盖现有照片数组来更新缓存中的 photos 数组
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

首先从 Photos 数组中移除选中的照片。然后，我们使用 Capacitor Preferences API 来更新缓存的 Photos 数组版本。最后，我们使用 Filesystem API 删除实际的物理照片文件。

确保返回 `deletePhoto` 函数，使其成为我们暴露的钩子 API 的一部分：

```tsx
return {
  deletePhoto,
  photos,
  takePhoto,
};
```

保存此文件，然后再次点击一张照片并选择“删除”选项。这次，照片被成功删除了！使用实时重载实现起来快多了。💪

在本教程的最后一部分，我们将为你介绍 Appflow 产品的基础知识，该产品用于构建应用并将其部署到用户的设备上。