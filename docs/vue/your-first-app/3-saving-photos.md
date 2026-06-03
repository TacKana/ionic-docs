---
title: 将照片保存到文件系统
sidebar_label: 保存照片
---

<head>
  <title>使用 Vue 将照片保存到文件系统 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="我们现在可以拍摄多张照片并在相册中显示。了解如何使用 Ionic Capacitor Filesystem API 将这些照片保存到文件系统。"
  />
</head>

我们现在能够拍摄多张照片并在应用的第二个标签页的相册中显示。但是，这些照片目前并未永久存储，因此当应用关闭时，它们将被删除。

## Filesystem API

幸运的是，将它们保存到文件系统只需几个步骤。首先在 `usePhotoGallery.ts` 文件的 `usePhotoGallery()` 方法中创建一个新的方法 `savePicture()`。

```ts
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// CHANGE: Add import
import type { Photo } from '@capacitor/camera';

export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Add the `savePicture()` method
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
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

我们可以立即在 `addNewToGallery()` 中使用这个新方法。

```ts
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';

export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Update the `addNewToGallery()` method
  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    // CHANGE: Add `savedImageFile`
    // Save the picture and add it to photo collection
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    photos.value = [savedImageFile, ...photos.value];
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
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

我们将使用 Capacitor [Filesystem API](../../native/filesystem.md) 来保存照片。首先，将照片转换为 base64 格式。

然后，将数据传递给 Filesystem 的 `writeFile` 方法。回想一下，我们通过将图像的源路径 (`src`) 设置为 `webviewPath` 属性来显示照片。因此，设置 `webviewPath` 并返回新的 `Photo` 对象。

现在，创建一个新的辅助方法 `convertBlobToBase64()`，以实现 Web 上运行所需的逻辑。

```ts
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
// CHANGE: Add import
import { Filesystem, Directory } from '@capacitor/filesystem';

export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Update the `savePicture()` method
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  // CHANGE: Add `convertBlobToBase64()` method
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
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

`usePhotoGallery.ts` 现在应该如下所示：

```ts
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    // Save the picture and add it to photo collection
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    photos.value = [savedImageFile, ...photos.value];
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await convertBlobToBase64(blob)) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
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
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 Web 上将相机照片获取为 base64 格式似乎比在移动端要复杂一些。实际上，我们只是使用了内置的 Web API：[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 作为一种将文件读取为 blob 格式的简洁方法，然后使用 FileReader 的 [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) 将照片 blob 转换为 base64。

就是这样！每次拍摄新照片时，它现在都会自动保存到文件系统。接下来，我们将加载并显示已保存的图像。
