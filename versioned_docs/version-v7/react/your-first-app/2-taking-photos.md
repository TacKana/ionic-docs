---
title: 使用相机拍照
sidebar_label: 拍照功能
---

<head>
  <title>使用 React 为 iOS、Android 和 Web 实现相机拍照功能 | Ionic Capacitor 相机 API</title>
  <meta
    name="description"
    content="使用 Ionic Capacitor 相机 API 为移动端 iOS、Android 和 Web 添加设备相机拍照功能。立即学习如何实现。"
  />
</head>

现在开始有趣的部分——使用 Capacitor [相机 API](../../native/camera.md) 为设备添加拍照功能。我们将首先为 Web 端构建，然后进行一些小的调整使其在移动端（iOS 和 Android）也能工作。

## 照片画廊自定义 Hook

我们将创建一个[自定义 React Hook](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component) 来管理画廊中的照片。

在 `src/hooks/usePhotoGallery.ts` 处创建一个新文件并打开它。

接下来，定义一个新的方法 `usePhotoGallery()`，它将包含拍摄设备照片并保存到文件系统的核心逻辑。让我们从打开设备相机开始。

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  const addNewToGallery = async () => {
    // 拍摄照片
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  return {
    addNewToGallery,
  };
}
```

注意这里的巧妙之处：没有特定平台的代码（Web、iOS 或 Android）！Capacitor 相机插件为我们抽象了这些细节，只需调用一个方法——`Camera.getPhoto()`——就能打开设备相机并让我们拍照。

接下来，在 `Tab2.tsx` 中导入 `usePhotoGallery()` 方法，并通过解构调用其 `addNewToGallery()` 方法。

```tsx
import { camera } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
// 变更：添加 `usePhotoGallery` 导入
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  // 变更：从 `usePhotoGallery()` 中解构出 `addNewToGallery()`
  const { addNewToGallery } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>照片画廊</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">照片画廊</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          {/* 变更：为浮动操作按钮添加点击事件监听器 */}
          <IonFabButton onClick={() => addNewToGallery()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
```

如果尚未运行，请在浏览器中通过执行 `ionic serve` 重新启动开发服务器。在照片画廊标签页，点击相机按钮。如果您的计算机有任何类型的摄像头，将出现一个模态窗口。拍张自拍照吧！

![显示网络摄像头自拍的照片画廊应用](/img/guides/first-app-cap-ng/camera-web.png '照片画廊中的网络摄像头自拍')

_(您的自拍可能比我的好得多)_

拍照后，照片会立即消失。我们需要在应用中显示它并保存以供将来访问。

## 显示照片

要为我们的照片元数据定义数据结构，创建一个名为 `UserPhoto` 的新接口。将此接口添加到 `usePhotoGallery.ts` 文件的末尾，紧接在 `usePhotoGallery()` 方法定义之后。

```ts
export function usePhotoGallery() {
  // ...现有代码...
}

// 变更：添加 `UserPhoto` 接口
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 `addNewToGallery()` 方法上方，定义一个 `UserPhoto` 数组，其中将包含对使用相机拍摄的每张照片的引用。使用 React 的 [useState Hook](https://react.dev/reference/react/useState) 将其设为状态变量。

```ts
// 变更：添加导入
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  // 变更：添加 `photos` 数组
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  // ...现有代码...
}
```

在 `addNewToGallery()` 方法中，将新拍摄的照片添加到 `photos` 数组的开头。然后，在 `usePhotoGallery()` 的返回语句中更新 `photos` 数组。

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  // 变更：更新 `addNewToGallery()` 方法
  const addNewToGallery = async () => {
    // 拍摄照片
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // 变更：使用当前时间戳创建 `fileName`
    const fileName = Date.now() + '.jpeg';
    // 变更：创建符合 `UserPhoto` 接口的 `savedImageFile`
    const savedImageFile = [
      {
        filepath: fileName,
        webviewPath: capturedPhoto.webPath,
      },
      ...photos,
    ];

    // 变更：用新照片更新 `photos` 数组
    setPhotos(savedImageFile);
  };

  return {
    addNewToGallery,
    // 变更：更新返回语句以包含 `photos` 数组
    photos,
  };
}
```

现在 `usePhotoGallery.ts` 应该看起来像这样：

```ts
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // 拍摄照片
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const savedImageFile = [
      {
        filepath: fileName,
        webviewPath: capturedPhoto.webPath,
      },
      ...photos,
    ];

    setPhotos(savedImageFile);
  };

  return {
    addNewToGallery,
    photos,
  };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来，切换到 `Tab2.tsx` 来显示图像。我们将添加一个 [Grid 组件](../../api/grid.md) 以确保照片在添加到画廊时整齐地显示。在网格内部，遍历 `UserPhoto` 的 `photos` 数组中的每张照片。对于每个项目，添加一个 [Image 组件](../../api/img.md) 并将其 `src` 属性设置为照片的路径。

```tsx
import { camera } from 'ionicons/icons';
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
} from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  // 变更：从 `usePhotoGallery()` 中解构出 `photos` 数组
  const { photos, addNewToGallery } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>照片画廊</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">照片画廊</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* 变更：添加网格组件以显示照片 */}
        <IonGrid>
          <IonRow>
            {/* 变更：为每张照片创建新的列和图像组件 */}
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
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
```

在 Web 浏览器中，点击相机按钮并拍摄另一张照片。这次，照片会显示在照片画廊中！

接下来，我们将添加将照片保存到文件系统的支持，以便以后可以检索并在我们的应用中显示它们。