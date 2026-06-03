---
title: 从文件系统加载照片
sidebar_label: 加载照片
---

<head>
  <title>使用 React 从文件系统加载照片 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="我们已经实现了拍照和保存到文件系统的功能，现在了解 Ionic 如何利用 Capacitor Preferences API 在键值存储中加载照片。"
  />
</head>

我们已经实现了拍照和保存到文件系统的功能。还缺少最后一个功能：照片存储在文件系统中，但我们需要一种方法来保存每个文件的指针，以便它们可以再次显示在相册中。

幸运的是，这很简单：我们将利用 Capacitor [Preferences API](../../native/preferences.md) 将照片数组存储在键值存储中。

## Preferences API

打开 `usePhotoGallery.ts`，首先定义一个常量变量作为存储的键。

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  // 更改：添加照片存储的键
  const PHOTO_STORAGE = 'photos';

  // ...现有代码...
}
```

接下来，在 `addNewToGallery()` 方法的末尾，添加一个对 `Preferences.set()` 方法的调用来保存 `photos` 数组。通过在这里添加，每次拍摄新照片时都会存储 `photos` 数组。这样，无论应用用户关闭应用还是切换到其他应用，所有照片数据都会被保存。

```ts
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
// 更改：添加导入
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  // ...现有代码...

  const addNewToGallery = async () => {
    // ...现有代码...

    // 更改：添加方法来缓存所有照片数据以便将来检索
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  // ...现有代码...

  return {
    addNewToGallery,
    photos,
  };
}
```

保存了照片数组数据后，在 `usePhotoGallery()` 中创建一个名为 `loadSaved()` 的新方法来检索照片数据。我们使用相同的键以 JSON 格式获取 `photos` 数组，然后将其解析为数组。

```ts
// 更改：更新导入
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  // 更改：添加 useEffect 钩子
  useEffect(() => {
    // 更改：添加 `loadSaved()` 方法
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];
    };

    loadSaved();
  }, []);

  // ...现有代码...
}
```

第二个参数，空依赖数组（`[]`），告诉 React 只运行该函数一次。通常，[useEffect 钩子](https://react.dev/reference/react/useEffect) 会在每次渲染后运行，但传递空数组可防止它再次运行，因为没有任何依赖项（钩子所依赖的值）会发生变化。

在移动端（接下来会讲到！），我们可以直接将图像标签的源 `<img src="x" />` 设置为 `Filesystem` 中的每个照片文件，从而自动显示它们。然而，在 web 上，我们必须使用 `Photo` 对象上的新 `base64` 属性，将每个图像从 `Filesystem` 读取为 base64 格式。这是因为 `Filesystem` API 在底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。添加以下代码来完成 `loadSaved()` 方法。

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  useEffect(() => {
    // 更改：更新 `loadSaved()` 方法
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

      // 更改：通过读取为 base64 格式来显示照片
      for (const photo of photosInPreferences) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }

      setPhotos(photosInPreferences);
    };

    loadSaved();
  }, []);

  // ...现有代码...
}
```

`usePhotoGallery.ts` 现在应如下所示：

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  useEffect(() => {
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

      for (const photo of photosInPreferences) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }

      setPhotos(photosInPreferences);
    };

    loadSaved();
  }, []);

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

    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
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

    // 使用 webPath 显示新图像而不是 base64，因为它已加载到内存中
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

:::note
如果您按照这些步骤操作后看到损坏的图像链接或照片丢失，您可能需要打开浏览器的开发者工具并清除 [localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage) 和 [IndexedDB](https://developer.chrome.com/docs/devtools/storage/indexeddb)。

在 localStorage 中，查找域名 `http://localhost:8100` 和键 `CapacitorStorage.photos`。在 IndexedDB 中，找到一个名为 "FileStorage" 的存储。您的照片将具有类似 `/DATA/123456789012.jpeg` 的键。
:::

就是这样！我们已经在 Ionic 应用中构建了一个完整的相册功能，可以在 web 上运行。接下来，我们将把它转换为适用于 iOS 和 Android 的移动应用！
