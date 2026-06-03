---
sidebar_label: 拍照
---

# 使用相机拍照

现在到有趣的部分了——使用 Capacitor [Camera API](https://capacitorjs.com/docs/apis/camera) 添加使用设备相机拍照的功能。我们将首先为 Web 构建，然后做一些小的调整使其在移动端（iOS 和 Android）上工作。

为此，我们将创建自己的自定义 React hook 来管理相册的照片。

:::note
如果您不熟悉 React Hooks，官方 React 文档中的 [Introducing React Hooks](https://reactjs.org/docs/hooks-intro.html) 是一个不错的入门资源。
:::

在 `src/hooks/usePhotoGallery.ts` 创建一个新文件并打开它。

自定义 hook 只是一个使用其他 React hooks 的函数。这正是我们要做的！我们将从导入我们将要使用的各种 hooks 和工具开始，这些来自 React 核心、Ionic React Hooks 项目和 Capacitor：

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

我们的 `usePhotoGallery` hook 暴露了一个名为 takePhoto 的方法，该方法调用了 Capacitor 的 getPhoto 方法。

注意这里的妙处：没有特定于平台的代码（web、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这一点，只需要一个方法调用——`getPhoto()`——它将打开设备相机并允许我们拍照。

最后一步是从 Tab2 页面使用新的 hook。回到 Tab2.tsx 并导入这个 hook：

```tsx
import { usePhotoGallery } from '../hooks/usePhotoGallery';
```

在函数式组件中 return 语句之前，通过使用 hook 来获取 `takePhoto` 方法：

```tsx
const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();

  // 省略 - 其余代码
```

保存文件，如果尚未运行，请通过运行 `ionic serve` 在浏览器中重新启动开发服务器。在相册标签页上，点击相机按钮。如果您的计算机有摄像头，会出现一个模态窗口。拍一张自拍！

![相册应用显示网络摄像头自拍照。](/img/guides/first-app-cap-ng/camera-web.png '相册中的网络摄像头自拍照')

_（您的自拍可能比我好得多）_

拍照后，照片消失了。我们仍然需要将其显示在应用中并保存以供将来访问。

## 显示照片

首先，我们将创建一个新类型来定义我们的 Photo，它将保存特定的元数据。在 `usePhotoGallery.ts` 文件的主函数外部添加以下 UserPhoto 接口：

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

回到函数的顶部（紧接在调用 `usePhotoGallery` 之后），我们将定义一个状态变量来存储使用 Camera 拍摄的每张照片的数组。

```tsx
const [photos, setPhotos] = useState<UserPhoto[]>([]);
```

当相机完成拍照后，从 Capacitor 返回的 Photo 结果将存储在 `photo` 变量中。我们想要创建一个新的照片对象并将其添加到 photos 状态数组中。我们通过创建一个新数组来确保不会意外修改当前的 photos 数组，然后调用 `setPhotos` 将数组存储到状态中。更新 `takePhoto` 方法，在 getPhoto 调用之后添加此代码：

```tsx
const fileName = new Date().getTime() + '.jpeg';
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

将照片存储到主数组后，我们可以将图像显示在屏幕上。添加一个 [Grid 组件](https://ionicframework.com/docs/api/grid)，以便每张照片在添加到相册时都能很好地显示，并遍历 Photos 数组中的每张照片，为每张照片添加一个 Image 组件（`<IonImg>`）。将 `src`（源）指向照片的路径：

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

保存所有文件。在 Web 浏览器中，点击相机按钮并拍摄另一张照片。这次，照片显示在相册中了！

接下来，我们将添加将照片保存到文件系统的支持，以便以后可以在应用中检索和显示它们。
