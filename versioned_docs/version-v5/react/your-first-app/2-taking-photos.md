---
sidebar_label: 拍照功能
---

# 使用相机拍照

现在进入有趣的部分 - 使用 Capacitor 的 [Camera API](https://capacitorjs.com/docs/apis/camera) 添加设备相机拍照功能。我们将首先为网页版本构建，然后进行一些小的调整使其能在移动端 (iOS 和 Android) 上工作。

为此，我们将创建自己的自定义 React Hook 来管理相册中的照片。

:::note
如果您不熟悉 React Hooks，React 官方文档中的 [React Hooks 介绍](https://reactjs.org/docs/hooks-intro.html) 是一个很好的入门资源。
:::

在 `src/hooks/usePhotoGallery.ts` 处创建一个新文件并打开。

自定义 Hook 只是一个使用其他 React Hooks 的函数。这正是我们要做的！我们将首先从 React 核心、Ionic React Hooks 项目和 Capacitor 中导入我们将要使用的各种 Hooks 和工具：

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

注意这里的魔法：没有平台特定的代码（网页、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这些，只留下一个方法调用 - `getPhoto()` - 它将打开设备的相机并允许我们拍照。

我们需要做的最后一步是从 Tab2 页面使用新的 Hook。回到 Tab2.tsx 并导入该 Hook：

```tsx
import { usePhotoGallery } from '../hooks/usePhotoGallery';
```

在函数组件的 return 语句之前，通过使用 Hook 来获取 `takePhoto` 方法的访问权限：

```tsx
const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();

  // 省略 - 其余代码
```

保存文件，如果尚未运行，请通过运行 `ionic serve` 重新启动浏览器中的开发服务器。在 Photo Gallery 标签页上，点击 Camera 按钮。如果您的计算机有任何类型的网络摄像头，就会出现一个模态窗口。拍一张自拍照吧！

![显示网络摄像头自拍照的相册应用](/img/guides/first-app-cap-ng/camera-web.png 'Photo Gallery 中的网络摄像头自拍照')

_(您的自拍很可能比我的好得多)_

拍照后，照片消失了。我们仍然需要将其显示在我们的应用程序中并保存以供将来访问。

## 显示照片

首先，我们将创建一个新类型来定义我们的 Photo，它将保存特定的元数据。将以下 UserPhoto 接口添加到 `usePhotoGallery.ts` 文件中，放在主函数之外的某个位置：

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

回到函数的顶部（在调用 `usePhotoGallery` 之后），我们将定义一个状态变量来存储用 Camera 拍摄的每张照片的数组。

```tsx
const [photos, setPhotos] = useState<UserPhoto[]>([]);
```

当相机完成拍照时，从 Capacitor 返回的结果 Photo 将存储在 `photo` 变量中。我们希望创建一个新的 photo 对象并将其添加到 photos 状态数组中。我们通过创建一个新数组来确保不会意外改变当前的 photos 数组，然后调用 `setPhotos` 将数组存储到状态中。更新 `takePhoto` 方法并在 getPhoto 调用后添加以下代码：

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

接下来，让我们从 Hook 中暴露 photos 数组。更新 return 语句以包含 photos：

```tsx
return {
  photos,
  takePhoto,
};
```

回到 Tab2 组件中，获取 photos 的访问权限：

```tsx
const { photos, takePhoto } = usePhotoGallery();
```

随着照片存储到主数组中，我们可以在屏幕上显示图像。添加一个 [Grid 组件](https://ionicframework.com/docs/api/grid)，以便在照片添加到相册时能很好地显示每张照片，并遍历 Photos 数组中的每张照片，为每个添加一个 Image 组件 (`<IonImg>`)。将 `src` (source) 指向照片的路径：

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

保存所有文件。在网页浏览器中，点击 Camera 按钮并拍摄另一张照片。这次，照片会显示在 Photo Gallery 中！

接下来，我们将添加对将照片保存到文件系统的支持，以便以后可以检索并在我们的应用程序中显示。