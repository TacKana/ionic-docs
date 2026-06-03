---
title: 使用相机拍照
sidebar_label: 拍照
---

<head>
  <title>在 iOS、Android 和 Web 上使用 React 和 Camera API 拍照 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="使用 Ionic Capacitor Camera API 为移动端 iOS、Android 和 Web 添加使用设备相机拍照的功能。在此了解如何操作。"
  />
</head>

现在进入有趣的环节 - 使用 Capacitor [Camera API](../../native/camera.md) 添加使用设备相机拍照的功能。我们将从构建 Web 版本开始，然后进行一些小的调整以使其在移动端（iOS 和 Android）上工作。

## 照片画廊 Hook

我们将创建一个[自定义 React hook](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component) 来管理画廊的照片。

在 `src/hooks/usePhotoGallery.ts` 创建一个新文件并打开它。

接下来，定义一个名为 `usePhotoGallery()` 的新方法，它将包含拍摄设备照片并保存到文件系统的核心逻辑。让我们从打开设备相机开始。

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

注意这里的奇妙之处：没有平台特定的代码（Web、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这些，只需一个方法调用 - `Camera.getPhoto()` - 即可打开设备相机并允许我们拍照。

接下来，在 `Tab2.tsx` 中，导入 `usePhotoGallery()` 方法并解构以调用其 `addNewToGallery()` 方法。

```tsx
import { camera } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
// 更改：添加 `usePhotoGallery` 导入
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  // 更改：从 `usePhotoGallery()` 解构 `addNewToGallery()`
  const { addNewToGallery } = usePhotoGallery();

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

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          {/* 更改：为浮动操作按钮添加点击事件监听器 */}
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

如果尚未运行，请通过运行 `ionic serve` 在浏览器中重新启动开发服务器。在照片画廊标签上，点击相机按钮。如果您的计算机有任何类型的网络摄像头，会弹出一个模态窗口。拍张自拍吧！

![显示网络摄像头自拍的照片画廊应用。](/img/guides/first-app-cap-ng/camera-web.png '照片画廊中的网络摄像头自拍')

_（您的自拍可能比我的好得多）_

拍照后，它立即消失了。我们需要在应用中显示它并保存以供将来访问。

## 显示照片

为了定义照片元数据的数据结构，创建一个名为 `UserPhoto` 的新接口。在 `usePhotoGallery.ts` 文件的最底部，紧接在 `usePhotoGallery()` 方法定义之后添加此接口。

```ts
export function usePhotoGallery() {
  // ...现有代码...
}

// 更改：添加 `UserPhoto` 接口
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 `addNewToGallery()` 方法上方，定义一个 `UserPhoto` 数组，其中包含对相机拍摄的每张照片的引用。使用 React 的 [useState hook](https://react.dev/reference/react/useState) 将其设置为状态变量。

```ts
// 更改：添加导入
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  // 更改：添加 `photos` 数组
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  // ...现有代码...
}
```

在 `addNewToGallery()` 方法中，将新拍摄的照片添加到 `photos` 数组的开头。然后，使用 `photos` 数组更新 `usePhotoGallery()` 的返回语句。

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  // 更改：更新 `addNewToGallery()` 方法
  const addNewToGallery = async () => {
    // 拍照
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // 更改：使用当前时间戳创建 `fileName`
    const fileName = Date.now() + '.jpeg';
    // 更改：创建符合 `UserPhoto` 接口的 `savedImageFile`
    const savedImageFile = [
      {
        filepath: fileName,
        webviewPath: capturedPhoto.webPath,
      },
      ...photos,
    ];

    // 更改：使用新照片更新 `photos` 数组
    setPhotos(savedImageFile);
  };

  return {
    addNewToGallery,
    // 更改：更新返回语句以包含 `photos` 数组
    photos,
  };
}
```

`usePhotoGallery.ts` 现在应如下所示：

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

接下来，切换到 `Tab2.tsx` 来显示图像。我们将添加一个[网格组件](../../api/grid.md)，以确保照片在添加到画廊时整齐显示。在网格内部，遍历 `UserPhoto` 的 `photos` 数组中的每张照片。为每个项目添加一个[图像组件](../../api/img.md)，并将其 `src` 属性设置为照片的路径。

```tsx
import { camera } from 'ionicons/icons';
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
} from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  // 更改：添加 `photos` 数组到从 `usePhotoGallery()` 解构的内容
  const { photos, addNewToGallery } = usePhotoGallery();

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

        {/* 更改：添加网格组件以显示照片 */}
        <IonGrid>
          <IonRow>
            {/* 更改：为每张照片创建一个新的列和图像组件 */}
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

在 Web 浏览器中，点击相机按钮并再次拍照。这次，照片会显示在照片画廊中！

接下来，我们将添加将照片保存到文件系统的支持，以便以后可以在应用中检索并显示它们。
