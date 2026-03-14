---
title: 从文件系统加载照片
sidebar_label: 加载照片
---

<head>
  <title>使用 React 从文件系统加载照片 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="我们已经实现了拍照和保存到文件系统的功能，现在学习 Ionic 如何利用 Capacitor Preferences API 在键值存储中加载我们的照片。"
  />
</head>

我们已经实现了拍照和保存到文件系统的功能。现在只剩最后一项功能：照片存储在文件系统中，但我们需要一种保存每个文件指针的方法，以便它们能再次显示在照片库中。

幸运的是，这很简单：我们将利用 Capacitor [Preferences API](../../native/preferences.md) 将照片数组存储在一个键值存储中。

## Preferences API

打开 `usePhotoGallery.ts`，首先定义一个常量变量作为存储的键。

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  // 变更：添加照片存储的键
  const PHOTO_STORAGE = 'photos';

  // ...现有代码...
}
```

接下来，在 `addNewToGallery()` 方法的末尾，添加对 `Preferences.set()` 方法的调用以保存 `photos` 数组。通过在这里添加，每次拍摄新照片时都会存储照片数组。这样，无论应用用户何时关闭或切换到其他应用，所有照片数据都会被保存。

```ts
import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
// 变更：添加导入
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  // ...现有代码...

  const addNewToGallery = async () => {
    // ...现有代码...

    // 变更：添加方法以缓存所有照片数据供后续检索
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  // ...现有代码...

  return {
    addNewToGallery,
    photos,
  };
}
```

保存照片数组数据后，在 `usePhotoGallery()` 中创建一个名为 `loadSaved()` 的新方法，用于检索照片数据。我们使用相同的键以 JSON 格式检索 `photos` 数组，然后将其解析为数组。

```ts
// 变更：更新导入
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  // 变更：添加 useEffect 钩子
  useEffect(() => {
    // 变更：添加 `loadSaved()` 方法
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];
    };

    loadSaved();
  }, []);

  // ...现有代码...
}
```

第二个参数，空依赖数组（`[]`），告诉 React 只运行该函数一次。通常，[useEffect 钩子](https://react.dev/reference/react/useEffect) 在每次渲染后运行，但传递空数组可以防止它再次运行，因为钩子所依赖的值都不会改变。

在移动端（接下来会介绍！），我们可以直接将图片标签的源 `<img src="x" />` 设置为 `Filesystem` 中的每个照片文件，从而自动显示它们。然而在 Web 端，我们必须将每个图像从 `Filesystem` 读取为 base64 格式，使用 `Photo` 对象上的新 `base64` 属性。这是因为 `Filesystem` API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。添加以下代码以完成 `loadSaved()` 方法。

```ts
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  useEffect(() => {
    // 变更：更新 `loadSaved()` 方法
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

      // 变更：通过读取 base64 格式显示照片
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

`usePhotoGallery.ts` 现在应该如下所示：

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

:::note
如果在完成这些步骤后看到损坏的图片链接或缺少照片，你可能需要打开浏览器的开发者工具并清除 [localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage) 和 [IndexedDB](https://developer.chrome.com/docs/devtools/storage/indexeddb)。

在 localStorage 中，查找域名 `http://localhost:8100` 和键 `CapacitorStorage.photos`。在 IndexedDB 中，找到名为 "FileStorage" 的存储。你的照片将有一个类似 `/DATA/123456789012.jpeg` 的键。
:::

完成！我们已经在 Ionic 应用中构建了一个完整的照片库功能，可以在 Web 上运行。接下来，我们将把它转换为适用于 iOS 和 Android 的移动应用！