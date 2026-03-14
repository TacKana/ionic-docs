---
title: 将照片保存到文件系统
sidebar_label: 保存照片
---

<head>
  <title>使用 React 将照片保存到文件系统 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="我们现在已经能够拍摄多张照片并在应用的第二个标签页中显示照片画廊。然而，这些照片目前并未永久存储，因此应用关闭时它们将被删除。"
  />
</head>

我们现在已经能够拍摄多张照片并在应用的第二个标签页中显示照片画廊。然而，这些照片目前并未永久存储，因此应用关闭时它们将被删除。

## 文件系统 API

幸运的是，将它们保存到文件系统只需要几个步骤。首先在 `usePhotoGallery.ts` 文件的 `usePhotoGallery()` 方法中创建一个新的类方法 `savePicture()`。

```ts
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// 变更：添加导入
import type { Photo } from '@capacitor/camera';

export function usePhotoGallery() {
  // ...现有代码...

  // 变更：添加 `savePicture()` 方法
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    return {
      filepath: 'soon...',
      webviewPath: 'soon...',
    };
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

我们可以立即在 `addNewToGallery()` 方法中使用这个新方法。

```ts
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';

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
    // 变更：添加 `savedImageFile`
    // 保存图片并添加到照片集合
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    // 变更：用新照片更新状态
    const newPhotos = [savedImageFile, ...photos];
    setPhotos(newPhotos);
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    return {
      filepath: 'soon...',
      webviewPath: 'soon...',
    };
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

我们将使用 Capacitor 的[文件系统 API](../../native/filesystem.md) 来保存照片。首先，将照片转换为 base64 格式。

然后，将数据传递给文件系统的 `writeFile` 方法。回想一下，我们通过将图像的源路径（`src`）设置为 `webviewPath` 属性来显示照片。因此，设置 `webviewPath` 并返回新的 `Photo` 对象。

现在，创建一个新的辅助方法 `convertBlobToBase64()`，用于实现在 Web 上运行所需的逻辑。

```ts
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
// 变更：添加导入
import { Filesystem, Directory } from '@capacitor/filesystem';

export function usePhotoGallery() {
  // ...现有代码...

  // 变更：更新 `savePicture()` 方法
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // 获取照片，读取为 blob，然后转换为 base64 格式
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // 使用 webPath 显示新图像而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  // 变更：添加 `convertBlobToBase64()` 方法
  const convertBlobToBase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
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

现在的 `usePhotoGallery.ts` 文件应该如下所示：

```ts
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

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
    // 保存图片并添加到照片集合
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    const newPhotos = [savedImageFile, ...photos];
    setPhotos(newPhotos);
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // 获取照片，读取为 blob，然后转换为 base64 格式
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // 使用 webPath 显示新图像而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  const convertBlobToBase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
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

在 Web 上获取相机照片的 base64 格式似乎比在移动设备上稍微复杂一些。实际上，我们只是使用了内置的 Web API：[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 作为一种简洁的方式将文件读取为 blob 格式，然后使用 FileReader 的 [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) 将照片 blob 转换为 base64。

就是这样！现在每次拍摄新照片时，它都会自动保存到文件系统中。接下来，我们将加载并显示已保存的图像。