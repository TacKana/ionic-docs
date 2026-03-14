---
title: 使用相机拍照
sidebar_label: 拍照功能
---

<head>
  <title>使用 React 为 iOS、Android 和 Web 实现相机拍照功能 | Ionic Capacitor 相机 API</title>
  <meta
    name="description"
    content="使用 Ionic Capacitor 相机 API 为移动端 iOS、Android 和 Web 应用添加设备相机拍照功能。立即了解如何实现。"
  />
</head>

现在进入有趣的部分 - 使用 Capacitor [相机 API](../../native/camera.md) 添加设备相机拍照功能。我们将首先构建 Web 版本，然后进行一些小的调整以使其在移动端（iOS 和 Android）上工作。

## 照片图库钩子

我们将创建一个[自定义 React 钩子](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component)来管理图库中的照片。

在 `src/hooks/usePhotoGallery.ts` 创建新文件并打开。

接下来，定义一个新的方法 `usePhotoGallery()`，它将包含拍摄设备照片并保存到文件系统的核心逻辑。让我们从打开设备相机开始。

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  const addNewToGallery = async () => {
    // 拍照
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

注意这里的奇妙之处：没有特定平台的代码（Web、iOS 或 Android）！Capacitor 相机插件为我们抽象了这些，只留下一个方法调用 - `Camera.getPhoto()` - 它将打开设备相机并允许我们拍照。

接下来，在 `Tab2.tsx` 中导入 `usePhotoGallery()` 方法，并通过解构来调用其 `addNewToGallery()` 方法。

```tsx
import { camera } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
// 变更：添加 `usePhotoGallery` 导入
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  // 变更：从 `usePhotoGallery()` 解构出 `addNewToGallery()`
  const { addNewToGallery } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>照片图库</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">照片图库</IonTitle>
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

如果尚未运行，通过运行 `ionic serve` 在浏览器中重启开发服务器。在照片图库标签页中，点击相机按钮。如果您的计算机有摄像头，将出现一个模态窗口。拍张自拍吧！

![显示网络摄像头自拍的照片图库应用](/img/guides/first-app-cap-ng/camera-web.png '照片图库中的网络摄像头自拍')

_(您的自拍可能比我的好看多了)_

拍照后，照片立即消失了。我们需要在应用中显示它并保存以供将来访问。

## 显示照片

要为照片元数据定义数据结构，创建一个名为 `UserPhoto` 的新接口。将此接口添加到 `usePhotoGallery.ts` 文件的最底部，紧接在 `usePhotoGallery()` 方法定义之后。

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

在 `addNewToGallery()` 方法上方，定义一个 `UserPhoto` 数组，它将包含对使用相机拍摄的每张照片的引用。使用 React 的 [useState 钩子](https://react.dev/reference/react/useState)将其设为状态变量。

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
    // 拍照
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
    // 拍照
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

接下来，切换到 `Tab2.tsx` 来显示图像。我们将添加一个[网格组件](../../api/grid.md)来确保照片添加到图库时能整齐显示。在网格内部，遍历 `UserPhoto` 的 `photos` 数组中的每张照片。对于每个项目，添加一个[图像组件](../../api/img.md)并将其 `src` 属性设置为照片的路径。

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
  // 变更：从 `usePhotoGallery()` 解构出 `photos` 数组
  const { photos, addNewToGallery } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>照片图库</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">照片图库</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* 变更：添加网格组件来显示照片 */}
        <IonGrid>
          <IonRow>
            {/* 变更：为每张照片创建新列和图像组件 */}
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

在 Web 浏览器中，点击相机按钮并拍摄另一张照片。这次，照片会显示在照片图库中！

接下来，我们将添加将照片保存到文件系统的支持，以便它们可以在以后被检索并在我们的应用中显示。