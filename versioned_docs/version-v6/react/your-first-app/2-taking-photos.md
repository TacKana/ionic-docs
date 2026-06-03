---
title: 使用相机拍照
sidebar_label: 拍照
---

<head>
  <title>在 React 应用中从相机拍照 - Ionic 文档</title>
  <meta
    name="description"
    content="要在 React 应用中从设备相机拍照，首先为 Web 构建应用，然后进行一些小的调整以在 iOS 和 Android 移动设备上使用。"
  />
</head>

现在进入有趣的部分——使用 Capacitor [Camera API](https://capacitorjs.com/docs/apis/camera) 添加使用设备相机拍照的功能。我们将首先为 Web 构建此功能，然后进行一些小的调整以使其在移动设备（iOS 和 Android）上工作。

为此，我们将创建自己的自定义 React hook 来管理相册的照片。

:::note
如果您不熟悉 React Hooks，官方 React 文档中的[介绍 React Hooks](https://reactjs.org/docs/hooks-intro.html) 是一个不错的入门资源。
:::

在 `src/hooks/usePhotoGallery.ts` 创建一个新文件并打开它。

自定义 hook 只是一个使用其他 React hooks 的函数。这正是我们将要做的！我们将首先从 React 核心库、Ionic React Hooks 项目和 Capacitor 导入我们将使用的各种 hooks 和工具：

```tsx
import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';
```

接下来，创建一个名为 usePhotoGallery 的函数：

```tsx
export function usePhotoGallery() {
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  return {
    takePhoto,
  };
}
```

我们的 `usePhotoGallery` hook 暴露了一个名为 takePhoto 的方法，该方法调用 Capacitor 的 getPhoto 方法。

注意这里的奇妙之处：没有特定平台的代码（web、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这些细节，只留下一个方法调用——`getPhoto()`——它将打开设备相机并允许我们拍照。

我们需要做的最后一步是在 Tab2 页面中使用这个新 hook。回到 Tab2.tsx 并导入该 hook：

```tsx
import { usePhotoGallery } from '../hooks/usePhotoGallery';
```

在函数式组件的 return 语句之前，通过使用 hook 来获取 `takePhoto` 方法：

```tsx
const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();

  // 截断 - 其余代码
```

保存文件，如果尚未运行，请通过运行 `ionic serve` 在浏览器中重新启动开发服务器。在相册标签上，点击相机按钮。如果您的计算机有某种网络摄像头，会出现一个模态窗口。拍一张自拍吧！

![显示网络摄像头自拍的相册应用。](/img/guides/first-app-cap-ng/camera-web.png '相册中的网络摄像头自拍')

_（您的自拍可能比我的好多了）_

拍照后，照片消失了。我们仍然需要在应用中显示它并保存以供将来访问。

## 显示照片

首先，我们将创建一个新类型来定义我们的 Photo，它将保存特定的元数据。在 `usePhotoGallery.ts` 文件中，在主函数外部的某个位置添加以下 UserPhoto 接口：

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

回到函数的顶部（在调用 `usePhotoGallery` 之后），我们将定义一个状态变量来存储使用相机拍摄的每张照片的数组。

```tsx
const [photos, setPhotos] = useState<UserPhoto[]>([]);
```

当相机完成拍照后，从 Capacitor 返回的结果 Photo 将存储在 `photo` 变量中。我们想要创建一个新的照片对象并将其添加到 photos 状态数组中。我们通过创建一个新数组来确保不会意外地改变当前的 photos 数组，然后调用 `setPhotos` 将数组存储到状态中。更新 `takePhoto` 方法并在 getPhoto 调用之后添加以下代码：

```tsx
const fileName = Date.now() + '.jpeg';
const newPhotos = [
  {
    filepath: fileName,
    webviewPath: photo.webPath,
  },
  ...photos,
];
setPhotos(newPhotos);
```

接下来，让我们从 hook 中暴露 photos 数组。更新 return 语句以包含 photos：

```tsx
return {
  photos,
  takePhoto,
};
```

回到 Tab2 组件中，获取 photos：

```tsx
const { photos, takePhoto } = usePhotoGallery();
```

将照片存储到主数组后，我们可以在屏幕上显示图像。添加一个 [Grid 组件](https://ionicframework.com/docs/api/grid)，这样随着照片添加到相册中，每张照片都能很好地显示，然后遍历 Photos 数组中的每张照片，为每张照片添加一个 Image 组件（`<IonImg>`）。将 `src`（源）指向照片的路径：

```tsx
<IonContent>
  <IonGrid>
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol size="6" key={index}>
          <IonImg src={photo.webviewPath} />
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
   <!-- <IonFab> 标记 -->
</IonContent>
```

保存所有文件。在 Web 浏览器中，点击相机按钮并拍另一张照片。这次，照片会显示在相册中！

接下来，我们将添加对将照片保存到文件系统的支持，以便以后可以在应用中检索和显示它们。
