---
sidebar_label: 实时重载
---

# 使用 Live Reload 快速开发应用

到目前为止，我们已经看到了开发一个可在任何地方运行的跨平台应用是多么容易。开发体验已经相当快了，但如果我告诉您有一种方法可以更快呢？

我们可以使用 Ionic CLI 的 [Live Reload 功能](https://ionicframework.com/docs/cli/livereload)来提高构建 Ionic 应用时的生产力。激活后，Live Reload 将在检测到应用中的更改时重新加载浏览器和/或 WebView。

## 实时重载

还记得 `ionic serve` 吗？那就是在浏览器中工作的 Live Reload，使我们能够快速迭代。

我们也可以在 iOS 和 Android 设备上进行开发时使用它。这在编写与原生插件交互的代码时特别有用。由于我们需要在设备上运行原生插件代码来验证其是否工作，因此有一种快速编写代码、构建部署并测试的方法对于保持开发速度至关重要。

让我们使用 Live Reload 来实现照片删除功能——这是相册功能中缺失的部分。选择您喜欢的平台（iOS 或 Android）并将设备连接到您的电脑。接下来，根据您选择的平台，在终端中运行以下任一命令：

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

Live Reload 服务器将启动，如果尚未打开，所选的本地 IDE 也会打开。在 IDE 中，点击 Play 按钮将应用启动到您的设备上。

## 删除照片

在 Live Reload 运行且应用在设备上打开的情况下，让我们实现照片删除功能。在您的代码编辑器（而不是 Android Studio 或 Xcode）中，打开 `Tab2.tsx`，然后从 React 导入 `useState`，从 `usePhotoGallery` hook 导入 `UserPhoto`：

```tsx
import React, { useState } from 'react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
// 其他导入
```

接下来，引用我们将要创建的 `deletePhoto` 函数：

```tsx
const { photos, takePhoto, deletePhoto } = usePhotoGallery();
```

然后，添加一个状态值来存储要删除的照片的信息：

```tsx
const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
```

当用户点击图像时，我们将通过将状态值设置为该照片来显示操作菜单。将 `<IonImg>` 元素更新为：

```tsx
<IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
```

接下来，添加一个 [IonActionSheet](https://ionicframework.com/docs/api/action-sheet) 对话框，提供删除所选照片或取消（关闭）对话框的选项。我们将根据 photoToDelete 是否有值来设置 isOpen 属性。

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

上面，我们添加了两个选项：`删除`——调用 `deletePhoto` 函数（下一步添加），和 `取消`——当其角色为"cancel"时将自动关闭操作菜单。设置 onDidDismiss 函数并在模态框消失时将 photoToDelete 设置回 undefined 也很重要。这样，当另一个图像被点击时，操作菜单会注意到 photoToDelete 值的变化。

接下来，我们需要实现将来自 `usePhotoGallery` hook 的 deletePhoto 方法。打开文件并将以下函数粘贴到 hook 中：

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

所选照片首先从 Photos 数组中移除。然后，我们使用 Capacitor Preferences API 更新 Photos 数组的缓存版本。最后，我们使用 Filesystem API 删除实际的照片文件本身。

确保返回 `deletePhoto` 函数，使其作为我们暴露的 hook API 的一部分：

```tsx
return {
  deletePhoto,
  photos,
  takePhoto,
};
```

保存此文件，然后再次点击照片并选择"删除"选项。这次，照片被删除了！使用 Live Reload 实现得更快。💪

## 下一步是什么？

恭喜！您创建了一个完整的跨平台相册应用，可以在 Web、iOS 和 Android 上运行。

从这里出发有很多路可以走。尝试在应用中添加另一个 [Ionic UI 组件](https://ionicframework.com/docs/components)，或更多的[原生功能](https://capacitorjs.com/docs/apis)。天空才是极限。

祝您构建应用愉快！💙
