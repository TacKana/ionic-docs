---
title: 使用相机拍摄照片
sidebar_label: 拍摄照片
---

<head>
  <title>在 React 应用中从相机拍摄照片 - Ionic 文档</title>
  <meta
    name="description"
    content="要在 React 应用中从设备相机拍摄照片，首先构建网页版本，然后针对 iOS 和 Android 设备进行少量调整以实现移动端使用。"
  />
</head>

现在开始有趣的部分——使用 Capacitor 的 [Camera API](https://capacitorjs.com/docs/apis/camera) 添加通过设备相机拍摄照片的功能。我们将从构建网页版本开始，然后进行一些小的调整以使其在移动端（iOS 和 Android）上运行。

为此，我们将创建一个自定义的 React Hook 来管理相册中的照片。

:::note
如果您对 React Hooks 不熟悉，官方 React 文档中的 [React Hooks 简介](https://reactjs.org/docs/hooks-intro.html) 是一个很好的入门资源。
:::

在 `src/hooks/usePhotoGallery.ts` 创建一个新文件并打开它。

自定义 Hook 只是一个使用其他 React Hooks 的函数。这就是我们要做的！我们将从导入 React 核心、Ionic React Hooks 项目和 Capacitor 中将要使用的各种 Hooks 和实用工具开始：

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

我们的 `usePhotoGallery` Hook 暴露了一个名为 takePhoto 的方法，该方法会调用 Capacitor 的 getPhoto 方法。

注意这里的魔法：没有特定于平台的代码（网页、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这些细节，只留下一个方法调用——`getPhoto()`——它将打开设备的相机并允许我们拍摄照片。

我们需要做的最后一步是在 Tab2 页面中使用新的 Hook。回到 Tab2.tsx 并导入该 Hook：

```tsx
import { usePhotoGallery } from '../hooks/usePhotoGallery';
```

在函数组件的 return 语句之前，通过使用 Hook 获取 `takePhoto` 方法的访问权限：

```tsx
const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();

  // 省略 - 其余代码
```

保存文件，如果尚未运行，请在浏览器中通过运行 `ionic serve` 重启开发服务器。在照片库标签页上，点击相机按钮。如果您的计算机有任何类型的网络摄像头，会出现一个模态窗口。拍一张自拍照吧！

![显示网络摄像头自拍的照片库应用](/img/guides/first-app-cap-ng/camera-web.png '照片库中的网络摄像头自拍')

（您的自拍可能比我的好多了）

拍摄照片后，它会消失。我们仍然需要在应用中显示它并保存以供将来访问。

## 显示照片

首先，我们将创建一个新的类型来定义我们的照片，它将保存特定的元数据。将以下 UserPhoto 接口添加到 `usePhotoGallery.ts` 文件中，放在主函数之外的某个位置：

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

当相机完成拍照后，从 Capacitor 返回的 `photo` 变量将存储结果照片。我们希望创建一个新的照片对象并将其添加到 photos 状态数组中。我们通过创建一个新数组来确保不会意外地改变当前的 photos 数组，然后调用 `setPhotos` 将数组存储到状态中。更新 `takePhoto` 方法，并在 getPhoto 调用后添加以下代码：

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

接下来，让我们从 Hook 中暴露 photos 数组。更新 return 语句以包含 photos：

```tsx
return {
  photos,
  takePhoto,
};
```

然后在 Tab2 组件中，获取 photos 的访问权限：

```tsx
const { photos, takePhoto } = usePhotoGallery();
```

将照片存储到主数组后，我们可以在屏幕上显示图像。添加一个 [Grid 组件](https://ionicframework.com/docs/api/grid)，以便在照片添加到相册时能很好地显示每张照片，并遍历 Photos 数组中的每张照片，为每个照片添加一个 Image 组件 (`<IonImg>`)。将 `src`（源）指向照片的路径：

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

保存所有文件。在网页浏览器中，点击相机按钮并拍摄另一张照片。这次，照片会显示在照片库中！

接下来，我们将添加对将照片保存到文件系统的支持，以便以后可以检索并在应用中显示它们。