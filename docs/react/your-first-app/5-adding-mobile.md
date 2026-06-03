---
title: 添加移动端支持
sidebar_label: 添加移动端支持
---

<head>
  <title>使用 React 添加移动端支持 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="了解如何为你的 Ionic Capacitor 相册应用添加移动端支持，使其通过同一代码库在 iOS、Android 和 Web 上运行。"
  />
</head>

我们的相册应用还必须在 iOS、Android 和 Web 上都能运行——而且所有平台都使用同一代码库。只需一些小的逻辑更改来支持移动平台，安装一些原生工具，然后在设备上运行应用即可。让我们开始吧！

## 导入 Platform API

让我们先做一些小的代码更改——这样当我们部署到设备时，应用就能"直接运行"。

在 `usePhotoGallery.ts` 中导入 Ionic [Platform API](../platform.md)，该 API 用于获取当前设备的信息。在这种情况下，它有助于根据应用运行的平台（Web 或移动端）选择要执行的代码。

在文件顶部将 `isPlatform` 添加到导入中，以便使用 `isPlatform` 方法。同时导入 `Capacitor` 以帮助处理移动设备上的文件路径。

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
// 更改：添加导入
import { isPlatform } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

// ...现有代码...
```

## 平台特定的逻辑

首先，我们将更新照片保存功能以支持移动端。在 `savePicture()` 方法中，检查应用运行的平台。如果是 "hybrid"（Capacitor，原生运行时），则使用 `Filesystem.readFile()` 方法将照片文件读取为 base64 格式。否则，在 Web 上运行时使用与之前相同的逻辑。

更新 `savePicture()` 方法如下：

```ts
// 更改：更新 `savePicture()` 方法
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string | Blob;
  // 更改：添加平台检查
  // "hybrid" 将检测移动设备 - iOS 或 Android
  if (isPlatform('hybrid')) {
    const readFile = await Filesystem.readFile({
      path: photo.path!,
    });
    base64Data = readFile.data;
  } else {
    // 获取照片，读取为 blob，然后转换为 base64 格式
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = (await convertBlobToBase64(blob)) as string;
  }

  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  // 更改：添加平台检查
  if (isPlatform('hybrid')) {
    // 通过将 'file://' 路径重写为 HTTP 来显示新图片
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
    // 使用 webPath 显示新图片而不是 base64，因为它已加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }
};
```

接下来，在 `loadSaved()` 方法中添加一些新的逻辑。在移动端，我们可以直接指向 Filesystem 上的每个照片文件并自动显示它们。然而在 Web 上，我们必须将每个图片从 Filesystem 读取为 base64 格式，因为 Filesystem API 在底层使用 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。更新 `loadSaved()` 方法：

```ts
// 更改：更新 `loadSaved` 方法
const loadSaved = async () => {
  const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
  const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

  // 更改：添加平台检查
  // 如果在 Web 上运行...
  if (!isPlatform('hybrid')) {
    for (const photo of photosInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  setPhotos(photosInPreferences);
};
```

现在，我们的相册应用由一套代码库组成，可在 Web、Android 和 iOS 上运行。

`usePhotoGallery.ts` 现在应如下所示：

```ts
import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react';
import { Capacitor } from '@capacitor/core';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  useEffect(() => {
    const loadSaved = async () => {
      const { value: photoList } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

      // 如果在 Web 上运行...
      if (!isPlatform('hybrid')) {
        for (const photo of photosInPreferences) {
          const readFile = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data,
          });
          photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
        }
      }

      setPhotos(photosInPreferences);
    };

    loadSaved();
  }, []);

  const addNewToGallery = async () => {
    // 拍照
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
    let base64Data: string | Blob;
    // "hybrid" 将检测移动设备 - iOS 或 Android
    if (isPlatform('hybrid')) {
      const readFile = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = readFile.data;
    } else {
      // 获取照片，读取为 blob，然后转换为 base64 格式
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      base64Data = (await convertBlobToBase64(blob)) as string;
    }

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (isPlatform('hybrid')) {
      // 通过将 'file://' 路径重写为 HTTP 来显示新图片
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      // 使用 webPath 显示新图片而不是 base64，因为它已加载到内存中
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
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

接下来，就是你所期待的部分——将应用部署到设备上。
