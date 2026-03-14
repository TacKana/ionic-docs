---
title: 从文件系统加载照片
sidebar_label: 加载照片
---

<head>
  <title>使用 Vue 从文件系统加载照片 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="我们已经实现了拍照和保存到文件系统的功能，现在学习 Ionic 如何利用 Capacitor Preferences API 在键值存储中加载照片。"
  />
</head>

我们已经实现了拍照和保存到文件系统的功能。现在还缺少最后一个功能：照片虽然存储在文件系统中，但我们需要一种方式来保存每个文件的引用，以便它们可以在照片库中再次显示。

幸运的是，这很简单：我们将利用 Capacitor [Preferences API](../../native/preferences.md) 将照片数组存储在键值存储中。

## Preferences API

打开 `usePhotoGallery.ts`，首先定义一个常量变量作为存储的键。

```ts
export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  // 修改：添加照片存储的键
  const PHOTO_STORAGE = 'photos';

  // ...现有代码...
};
```

接下来，在 `usePhotoGallery()` 方法的末尾，添加对 `cachePhotos` 方法的调用以保存 `photos` 数组。通过在这里添加，每次拍摄新照片时都会存储 `photos` 数组。这样，无论应用用户何时关闭或切换到其他应用，所有照片数据都会被保存。

```ts
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
// 修改：添加导入
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  // ...现有代码...

  // 修改：添加 `cachePhotos()` 方法
  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  return {
    photos,
    addNewToGallery,
  };
};
```

接下来，使用 Vue 的 [watch 方法](https://vuejs.org/api/reactivity-core.html#watch) 来监视 `photos` 数组。每当数组被修改时（例如拍摄或删除照片），就会触发 `cachePhotos` 方法。这样我们不仅可以重用代码，而且无论应用用户何时关闭或切换到其他应用，照片数据都始终会被保存。

在 `usePhotoGallery()` 的 return 语句之前添加对 `watch()` 方法的调用。

```ts
// 修改：更新导入
import { ref, watch } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  // ...现有代码...

  // 修改：添加对 `watch` 的调用，传入 `photos` 数组和 `cachePhotos` 方法
  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
  };
};
```

保存了照片数组数据后，在 `usePhotoGallery()` 中创建一个名为 `loadSaved()` 的新方法，用于检索照片数据。我们使用相同的键来检索 JSON 格式的 `photos` 数组，然后将其解析为数组。

```ts
export const usePhotoGallery = () => {
  // ...现有代码...

  // 修改：添加 `loadSaved()` 方法
  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];
  };

  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
  };
};
```

在移动设备上（接下来会实现！），我们可以直接将图片标签的源（`<img src="x" />`）设置为 `Filesystem` 上的每个照片文件，从而自动显示它们。然而在 Web 上，我们必须将每个图像从 `Filesystem` 读取为 base64 格式，并在 `Photo` 对象上使用一个新的 `base64` 属性。这是因为 `Filesystem` API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。添加以下代码以完成 `loadSaved()` 方法。

```ts
export const usePhotoGallery = () => {
  // ...现有代码...

  // 修改：更新 `loadSaved()` 方法
  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    // 修改：通过读取为 base64 格式来显示照片
    for (const photo of photosInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }

    photos.value = photosInPreferences;
  };

  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
  };
};
```

现在 `usePhotoGallery.ts` 应该如下所示：

```ts
import { ref, watch } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

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
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    photos.value = [savedImageFile, ...photos.value];
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

    // 使用 webPath 来显示新图像，而不是 base64，因为它已经加载到内存中
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

  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    for (const photo of photosInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }

    photos.value = photosInPreferences;
  };

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

现在我们的 `usePhotoGallery()` 可以加载保存的图像了，但我们需要更新文件以使新代码生效。我们将在 [onMounted](https://vuejs.org/api/composition-api-lifecycle.html#onmounted) 生命周期方法中调用 `loadSaved`，这样当用户首次导航到照片库时，所有照片都会被加载并显示在屏幕上。

将 `usePhotoGallery.ts` 更新为以下内容：

```ts
// 修改：更新导入
import { ref, watch, onMounted } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

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
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    photos.value = [savedImageFile, ...photos.value];
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

    // 使用 webPath 来显示新图像，而不是 base64，因为它已经加载到内存中
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

  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    for (const photo of photosInPreferences) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }

    photos.value = photosInPreferences;
  };

  // 修改：添加对 `onMounted()` 的调用，传入 `loadSaved()` 方法
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

:::note
如果按照这些步骤操作后，你看到损坏的图像链接或照片丢失，可能需要打开浏览器的开发者工具，并同时清除 [localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage) 和 [IndexedDB](https://developer.chrome.com/docs/devtools/storage/indexeddb)。

在 localStorage 中，查找域名 `http://localhost:8100` 和键 `CapacitorStorage.photos`。在 IndexedDB 中，找到一个名为 "FileStorage" 的存储。你的照片将有一个类似 `/DATA/123456789012.jpeg` 的键。
:::

完成了！我们已经在 Ionic 应用中构建了一个完整的照片库功能，可以在 Web 上运行。接下来，我们将把它转换为适用于 iOS 和 Android 的移动应用！