---
title: 添加移动端支持
strip_number_prefixes: false
---

<head>
  <title>使用 Vue 添加移动端支持 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="学习如何为你的 Ionic Capacitor 照片画廊应用添加移动端支持，使其能够使用一套代码库在 iOS、Android 和 Web 上运行。"
  />
</head>

我们的照片画廊应用只有能在 iOS、Android 和 Web 上运行才算完整——而且全部使用同一套代码库。只需要对逻辑进行一些小改动来支持移动平台，安装一些原生工具，然后在设备上运行应用即可。让我们开始吧！

## 导入 Platform API

首先我们来对代码做一些小修改——这样当我们把应用部署到设备上时，它就能“正常工作”了。

将 Ionic 的[Platform API](../platform.md)导入到 `usePhotoGallery.ts` 中，该 API 用于获取当前设备的信息。在本例中，它有助于根据应用运行的平台（Web 或移动端）来选择执行哪段代码。

在文件顶部的导入中添加 `Platform`，以便使用 `isPlatform` 方法。

```ts
import { ref, watch, onMounted } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
// 修改：添加导入
import { isPlatform } from '@ionic/vue';

// ...已有代码...
```

## 平台特定逻辑

首先，我们将更新照片保存功能以支持移动端。在 `savePicture()` 方法中，检查应用运行在哪个平台上。如果是“hybrid”（Capacitor，原生运行时），则使用 `Filesystem.readFile()` 方法将照片文件读取为 base64 格式。否则，当应用在 Web 上运行时，使用与之前相同的逻辑。

将 `savePicture()` 更新为如下内容：

```ts
// 修改：更新 `savePicture()` 方法
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string | Blob;

  // 修改：添加平台检查
  // "hybrid" 将检测移动端 - iOS 或 Android
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

  // 使用 webPath 来显示新图像，而不是 base64，因为它已经加载到内存中
  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  };
};
```

在移动端运行时，将 `filepath` 设置为 `writeFile()` 操作的结果——`savedFile.uri`。设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc()` 方法（[文件协议详情](../../core-concepts/webview.md#file-protocol)）。要使用此方法，我们需要将 Capacitor 导入到 `usePhotoGallery.ts` 中。

```ts
import { ref, watch, onMounted } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/vue';
// 修改：添加导入
import { Capacitor } from '@capacitor/core';

// ...已有代码...
```

然后将 `savePicture()` 更新为如下内容：

```ts
// 修改：更新 `savePicture()` 方法
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string | Blob;

  // 修改：添加平台检查
  // "hybrid" 将检测移动端 - iOS 或 Android
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

  // 修改：添加平台检查
  if (isPlatform('hybrid')) {
    // 通过将 'file://' 路径重写为 HTTP 来显示新图像
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
    // 使用 webPath 来显示新图像，而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }
};
```

接下来，在 `loadSaved()` 方法中添加一点新逻辑。在移动端，我们可以直接指向文件系统中的每个照片文件并自动显示它们。然而在 Web 上，我们必须将每个图像从文件系统读取为 base64 格式。这是因为文件系统 API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。更新 `loadSaved()` 方法：

```ts
// 修改：更新 `loadSaved` 方法
const loadSaved = async () => {
  const photoList = await Preferences.get({ key: PHOTO_STORAGE });
  const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

  // 修改：添加平台检查
  // 如果在 Web 上运行...
  if (!isPlatform('hybrid')) {
    for (const photo of photosInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      // 仅限 Web 平台：将照片加载为 base64 数据
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  photos.value = photosInPreferences;
};
```

现在，我们的照片画廊应用已经拥有了一个可以在 Web、Android 和 iOS 上运行的统一代码库。

`usePhotoGallery.ts` 现在应该如下所示：

```ts
import { ref, watch, onMounted } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/vue';
import { Capacitor } from '@capacitor/core';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

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

    photos.value = [savedImageFile, ...photos.value];
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string | Blob;
    // "hybrid" 将检测移动端 - iOS 或 Android
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
      // 通过将 'file://' 路径重写为 HTTP 来显示新图像
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      // 使用 webPath 来显示新图像，而不是 base64，因为它已经加载到内存中
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

  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    // 如果在 Web 上运行...
    if (!isPlatform('hybrid')) {
      for (const photo of photosInPreferences) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        // 仅限 Web 平台：将照片加载为 base64 数据
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }

    photos.value = photosInPreferences;
  };

  onMounted(loadSaved);
  watch(photos, cachePhotos);

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

接下来，就是大家期待已久的环节——将应用部署到设备上。