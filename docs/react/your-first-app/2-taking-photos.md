---
title: 使用相机拍照
sidebar_label: 拍照
---

<head>
  <title>使用 React 为 iOS、Android 和 Web 调用相机 API 拍照 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="使用 Ionic Capacitor 相机 API 为移动端 iOS、Android 和 Web 添加使用设备相机拍照的功能。在此了解如何操作。"
  />
</head>

现在进入有趣的部分——使用 Capacitor [Camera API](../../native/camera.md) 添加使用设备相机拍照的功能。我们将从 Web 版本开始构建，然后进行一些小调整使其在移动端（iOS 和 Android）上也能工作。

## 相册 Hook

我们将创建一个[自定义 React hook](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component) 来管理相册的照片。

创建一个新文件 `src/hooks/usePhotoGallery.ts` 并打开它。

接下来，定义一个包含核心逻辑的新方法 `usePhotoGallery()`，用于拍摄设备照片并将其保存到文件系统。让我们从打开设备相机开始。

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  const addNewToGallery = async () => {
    // 拍摄一张照片
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

注意这里的妙处：没有平台特定的代码（Web、iOS 或 Android）！Capacitor 相机插件为我们抽象了这一点，只需一次方法调用——`Camera.getPhoto()`——就能打开设备相机并允许我们拍照。

接下来，在 `Tab2.tsx` 中，导入 `usePhotoGallery()` 方法并解构以调用其 `addNewToGallery()` 方法。

```tsx
import { camera } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
// 修改：添加 `usePhotoGallery` 导入
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import './Tab2.css';

const Tab2: React.FC = () => {
  // 修改：从 `usePhotoGallery()` 解构 `addNewToGallery()`
  const { addNewToGallery } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>相册</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">相册</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          {/* 修改：为浮动操作按钮添加点击事件监听器 */}
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

如果尚未运行，请通过运行 `ionic serve` 在浏览器中重启开发服务器。在相册标签上，点击相机按钮。如果你的电脑有某种摄像头，会出现一个模态窗口。拍一张自拍吧！

![相册应用中显示的摄像头自拍。](/img/guides/first-app-cap-ng/camera-web.png '相册中的摄像头自拍')

_（你的自拍可能比我的好看多了）_

拍照后，照片立即消失了。我们需要在应用中显示它并保存以便将来访问。

## 显示照片

为了定义照片元数据的数据结构，创建一个名为 `UserPhoto` 的新接口。在 `usePhotoGallery.ts` 文件的最后，紧接在 `usePhotoGallery()` 方法定义之后添加此接口。

```ts
export function usePhotoGallery() {
  // ...已有代码...
}

// 修改：添加 `UserPhoto` 接口
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 `addNewToGallery()` 方法之上，定义一个 `UserPhoto` 数组，它将包含每个用相机拍摄的照片的引用。使用 React 的 [useState hook](https://react.dev/reference/react/useState) 将其设置为状态变量。

```ts
// 修改：添加导入
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  // 修改：添加 `photos` 数组
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  // ...已有代码...
}
```

在 `addNewToGallery()` 方法中，将新拍摄的照片添加到 `photos` 数组的开头。然后，更新 `usePhotoGallery()` 的返回语句以包含 `photos` 数组。

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  // 修改：更新 `addNewToGallery()` 方法
  const addNewToGallery = async () => {
    // 拍摄一张照片
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // 修改：使用当前时间戳创建 `fileName`
    const fileName = Date.now() + '.jpeg';
    // 修改：创建匹配 `UserPhoto` 接口的 `savedImageFile`
    const savedImageFile = [
      {
        filepath: fileName,
        webviewPath: capturedPhoto.webPath,
      },
      ...photos,
    ];

    // 修改：使用新照片更新 `photos` 数组
    setPhotos(savedImageFile);
  };

  return {
    addNewToGallery,
    // 修改：更新返回语句以包含 `photos` 数组
    photos,
  };
}
```

`usePhotoGallery.ts` 现在应该看起来像这样：

```ts
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // 拍摄一张照片
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

接下来，切换到 `Tab2.tsx` 来显示图片。我们将添加一个[网格组件](../../api/grid.md)来确保照片在添加到相册时整齐显示。在网格内部，遍历 `UserPhoto` 的 `photos` 数组中的每张照片。对于每个项目，添加一个[图片组件](../../api/img.md)并将其 `src` 属性设置为照片的路径。

```tsx
import { camera } from 'ionicons/icons';
// 修改：更新导入
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
  // 修改：将 `photos` 数组添加到从 `usePhotoGallery()` 解构的内容中
  const { photos, addNewToGallery } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>相册</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">相册</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* 修改：添加网格组件以显示照片 */}
        <IonGrid>
          <IonRow>
            {/* 修改：为每张照片创建一个新列和图片组件 */}
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

在 Web 浏览器中，点击相机按钮并再拍一张照片。这次，照片会显示在相册中！

接下来，我们将添加对将照片保存到文件系统的支持，以便以后可以在应用中检索和显示它们。
