---
title: 使用 Live Reload 进行快速应用开发
sidebar_label: Live Reload
---

<head>
  <title>使用 Ionic Capacitor Camera 和 React 进行 Live Reload 快速应用开发</title>
  <meta
    name="description"
    content="使用 Ionic CLI 的 Live Reload 功能，在构建 Ionic 应用时提升您的开发效率。学习如何利用快速应用开发工具。"
  />
</head>

到目前为止，我们已经看到了开发一个能在所有平台上运行的跨平台应用是多么简单。开发体验相当快速，但如果我告诉您有一种方法可以更快呢？

我们可以使用 Ionic CLI 的 [Live Reload 功能](../../cli/livereload.md) 来提升构建 Ionic 应用时的开发效率。当激活时，Live Reload 会在检测到应用中的更改时重新加载浏览器和/或 WebView。

## Live Reload

还记得 `ionic serve` 吗？那就是 Live Reload 在浏览器中运行，让我们能够快速迭代。

我们也可以在 iOS 和 Android 设备上进行开发时使用它。这在编写与原生插件交互的代码时特别有用——我们必须将其运行在设备上以验证其是否正常工作。因此，能够快速编写、构建、测试和部署代码对于保持我们的开发速度至关重要。

让我们使用 Live Reload 来实现照片删除功能，这是我们的照片库功能中缺失的一环。选择您偏好的平台（iOS 或 Android），并将设备连接到您的计算机。接下来，根据您选择的平台，在终端中运行以下命令之一：

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

Live Reload 服务器将启动，如果尚未打开，相应的原生 IDE 也会打开。在 IDE 中，点击播放按钮以在您的设备上启动应用。

## 删除照片

在 Live Reload 正在运行且应用已在您的设备上打开的情况下，让我们来实现照片删除功能。

在 `usePhotoGallery.ts` 中，添加 `deletePhoto()` 方法。首先从 `photos` 数组中移除选定的照片。然后，我们使用文件系统 API 删除实际的图片文件。

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {
  // ...现有代码...

  // 更改：添加 `deletePhoto()` 方法
  const deletePhoto = async (photo: UserPhoto) => {
    // 从 Photos 引用数据数组中移除此照片
    const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);

    // 通过覆盖现有照片数组来更新照片数组缓存
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
    // 更改：在返回语句中添加 `deletePhoto()`
    deletePhoto,
  };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来，在 `Tab2.tsx` 中，实现 `IonActionSheet` 组件。我们添加两个选项："Delete"（删除），调用 `usePhotoGallery.deletePhoto()`；和 "Cancel"（取消）。当指定为 "cancel" 角色时，取消按钮将自动关闭操作表。

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
  // 更改：添加待删除照片的状态
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

        {/* 更改：添加用于删除照片的操作表 */}
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
                // 无需执行任何操作，操作表会自动关闭
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

向 `<IonImg>` 元素添加一个点击处理程序。当应用用户点击我们图库中的照片时，我们会显示一个 [操作表](../../api/action-sheet.md) 对话框，提供删除选定照片或取消（关闭）对话框的选项。

```tsx
<IonGrid>
  <IonRow>
    {photos.map((photo) => (
      <IonCol size="6" key={photo.filepath}>
        {/* 更改：为每张图片添加点击事件监听器。 */}
        <IonImg src={photo.webviewPath} onClick={() => setPhotoToDelete(photo)} />
      </IonCol>
    ))}
  </IonRow>
</IonGrid>
```

请记住，从 `photos` 数组中移除照片会自动为我们触发 `setPhotos` 方法。

再次点击一张照片并选择“删除”选项。照片被删除了！使用 Live Reload 实现得更快了。💪

:::note
请记住，您可以在此处找到此应用的完整源代码 [here](https://github.com/ionic-team/tutorial-photo-gallery-react)。
:::

在本教程的最后部分，我们将引导您了解 Appflow 产品的基础知识，该产品用于构建应用并将其部署到用户设备上。