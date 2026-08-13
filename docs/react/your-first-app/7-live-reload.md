---
title: 使用 Live Reload 快速开发应用
sidebar_label: 实时重载
---

<head>
  <title>使用 Live Reload 与 React 快速开发应用 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="使用 Ionic CLI 的 Live Reload 功能来提高构建 Ionic 应用时的生产力。了解如何利用快速应用开发。"
  />
</head>

到目前为止，我们已经看到了开发一个可在所有平台上运行的跨平台应用是多么容易。开发体验相当快捷，但如果我告诉你还有更快的方法呢？

我们可以使用 Ionic CLI 的 [Live Reload 功能](../../cli/livereload.md) 来提高构建 Ionic 应用时的生产力。启用后，Live Reload 会在检测到应用中的更改时重新加载浏览器和/或 WebView。

## Live Reload

还记得 `ionic serve` 吗？那就是在浏览器中运行的 Live Reload，使我们能够快速迭代。

我们也可以在 iOS 和 Android 设备上开发时使用它。这在编写与原生插件交互的代码时特别有用——我们必须运行在设备上才能验证其是否工作。因此，能够快速编写、构建、测试和部署代码对于保持开发速度至关重要。

让我们使用 Live Reload 来实现照片删除功能——这是相册应用缺失的部分。选择你偏好的平台（iOS 或 Android）并将设备连接到电脑。然后，根据你选择的平台，在终端中运行以下命令之一：

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

Live Reload 服务器将启动，如果原生 IDE 尚未打开，它也会一并打开。在 IDE 中，点击 Play 按钮将应用启动到你的设备上。

## 删除照片

在 Live Reload 运行且应用在设备上打开的情况下，让我们实现照片删除功能。

在 `usePhotoGallery.ts` 中添加 `deletePhoto()` 方法。首先从 `photos` 数组中移除选中的照片。然后，使用 Filesystem API 删除实际的照片文件。

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {
  // ...existing code...

  // 更改：添加 `deletePhoto()` 方法
  const deletePhoto = async (photo: UserPhoto) => {
    // 从照片引用数据数组中移除该照片
    const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);

    // 通过覆盖现有的照片数组来更新照片数组缓存
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });

    // 从文件系统中删除照片文件
    const filename = photo.filepath.slice(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });

    setPhotos(newPhotos);
  };

  return {
    photos,
    addNewToGallery,
    // 更改：将 `deletePhoto()` 添加到返回语句中
    deletePhoto,
  };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来，在 `Tab2.tsx` 中实现 `IonActionSheet` 组件。我们添加了两个选项："Delete"（删除），它调用 `usePhotoGallery.deletePhoto()`，以及 "Cancel"（取消）。当为取消按钮分配 "cancel" 角色时，它将自动关闭操作菜单。

```tsx
// 更改：添加导入
import { useState } from 'react';
// 更改：更新导入
import { camera, trash, close } from 'ionicons/icons';
// 更改：更新导入
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
// 更改：添加导入
import type { UserPhoto } from '../hooks/usePhotoGallery';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  // 更改：添加 `deletePhoto()` 方法
  const { photos, addNewToGallery, deletePhoto } = usePhotoGallery();
  // 更改：添加要删除的照片的状态
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            {photos.map((photo) => (
              <IonCol size="6" key={photo.filepath}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => addNewToGallery()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

        {/* 更改：添加用于删除照片的操作菜单 */}
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: 'Delete',
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
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                // 无需操作，操作菜单会自动关闭
              },
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        ></IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
```

给 `<IonImg>` 元素添加一个点击处理程序。当应用用户点击相册中的照片时，我们将显示一个[操作菜单](../../api/action-sheet.md)对话框，其中包含删除所选照片或取消（关闭）对话框的选项。

```tsx
<IonGrid>
  <IonRow>
    {photos.map((photo) => (
      <IonCol size="6" key={photo.filepath}>
        {/* 更改：为每个图片添加点击事件监听器。 */}
        <IonImg src={photo.webviewPath} onClick={() => setPhotoToDelete(photo)} />
      </IonCol>
    ))}
  </IonRow>
</IonGrid>
```

请记住，从 `photos` 数组中移除照片会自动触发 `setPhotos` 方法为我们更新状态。

再次点击一张照片，然后选择 "Delete" 选项。照片被删除了！使用 Live Reload 实现起来快得多。💪

:::note
请记住，你可以在 GitHub 上找到此应用的[完整源代码](https://github.com/ionic-team/tutorial-photo-gallery-react)。
:::

在本教程的最后一部分，我们将带你了解 Appflow 产品的基础知识，用于将应用构建和部署到用户设备。
