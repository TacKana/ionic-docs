---
title: 使用实时重载进行快速应用开发
sidebar_label: 实时重载
---

<head>
  <title>使用 React 实现 Ionic Capacitor 相机的实时重载快速应用开发</title>
  <meta
    name="description"
    content="利用 Ionic CLI 的实时重载功能提升构建 Ionic 应用时的开发效率。学习如何使用快速应用开发技术。"
  />
</head>

到目前为止，我们已经了解到开发一个全平台兼容的跨平台应用是多么简单。开发体验已经相当快速，但如果我告诉你还有一种更快的方式呢？

我们可以利用 Ionic CLI 的[实时重载功能](../../cli/livereload.md)来提升构建 Ionic 应用时的开发效率。启用后，当检测到应用中的更改时，实时重载将重新加载浏览器和/或 WebView。

## 实时重载

还记得 `ionic serve` 吗？那就是在浏览器中工作的实时重载，让我们能够快速迭代。

我们也可以在 iOS 和 Android 设备开发时使用它。这在编写与原生插件交互的代码时特别有用——我们必须将其运行在设备上以验证其功能。因此，能够快速编写、构建、测试和部署代码对于保持开发速度至关重要。

让我们使用实时重载来实现照片删除功能，这是我们的照片库功能中缺失的部分。选择你偏好的平台（iOS 或 Android）并将设备连接到电脑。然后，根据所选平台在终端中运行相应的命令：

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

实时重载服务器将启动，如果尚未打开，相应平台的原生 IDE 也会自动打开。在 IDE 中点击播放按钮，将应用部署到你的设备上。

## 删除照片

当实时重载正在运行且应用已在你的设备上打开时，让我们实现照片删除功能。

在 `usePhotoGallery.ts` 中，添加 `deletePhoto()` 方法。首先从 `photos` 数组中移除选中的照片，然后使用 Filesystem API 删除实际的图片文件。

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

  // 变更：添加 `deletePhoto()` 方法
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
    // 变更：将 `deletePhoto()` 添加到返回语句中
    deletePhoto,
  };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来，在 `Tab2.tsx` 中实现 `IonActionSheet` 组件。我们添加两个选项："删除"（调用 `usePhotoGallery.deletePhoto()`）和"取消"。取消按钮在分配了 "cancel" 角色时会自动关闭操作表。

```tsx
// 变更：添加导入
import { useState } from 'react';
// 变更：更新导入
import { camera, trash, close } from 'ionicons/icons';
// 变更：更新导入
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
// 变更：添加导入
import type { UserPhoto } from '../hooks/usePhotoGallery';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  // 变更：添加 `deletePhoto()` 方法
  const { photos, addNewToGallery, deletePhoto } = usePhotoGallery();
  // 变更：添加要删除的照片的状态
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>照片库</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">照片库</IonTitle>
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

        {/* 变更：添加删除照片的操作表 */}
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
              handler: () => {
                // 无需操作，操作表会自动关闭
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

为 `<IonImg>` 元素添加点击处理器。当应用用户点击我们图库中的照片时，我们将显示一个[操作表](../../api/action-sheet.md)对话框，提供删除所选照片或取消（关闭）对话框的选项。

```tsx
<IonGrid>
  <IonRow>
    {photos.map((photo) => (
      <IonCol size="6" key={photo.filepath}>
        {/* 变更：为每个图像添加点击事件监听器。 */}
        <IonImg src={photo.webviewPath} onClick={() => setPhotoToDelete(photo)} />
      </IonCol>
    ))}
  </IonRow>
</IonGrid>
```

请记住，从 `photos` 数组中移除照片会自动触发 `setPhotos` 方法。

再次点击某张照片并选择“删除”选项。照片就被删除了！使用实时重载实现得更加快速。💪

:::note
请记住，你可以在此处找到此应用的完整源代码 [这里](https://github.com/ionic-team/tutorial-photo-gallery-react)
:::

在本教程的最后一部分，我们将引导你了解 Appflow 产品的基础知识，该产品用于构建应用并将其部署到用户设备上。