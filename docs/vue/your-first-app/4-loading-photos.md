---
title: 从文件系统加载照片
sidebar_label: 加载照片
---

<head>
  <title>使用 Vue 从文件系统加载照片 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="我们已经实现了照片拍摄和保存到文件系统，现在了解 Ionic 如何利用 Capacitor Preferences API 在键值存储中加载我们的照片。"
  />
</head>

我们已经实现了照片拍摄和保存到文件系统。还缺少最后一个功能：照片存储在文件系统中，但我们需要一种方法来保存每个文件的指针，以便它们可以再次显示在相册中。

幸运的是，这很简单：我们将利用 Capacitor [Preferences API](../../native/preferences.md) 将我们的照片数组存储在键值存储中。

## Preferences API

打开 `usePhotoGallery.ts`，首先定义一个常量变量作为存储的键。

```ts
export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  // CHANGE: Add a key for photo storage
  const PHOTO_STORAGE = 'photos';

  // ...existing code...
};
```

接下来，在 `usePhotoGallery()` 方法的末尾，添加一个对 `cachePhotos` 方法的调用来保存 `photos` 数组。通过将其添加到这里，每次拍摄新照片时都会存储 `photos` 数组。这样，无论应用用户何时关闭或切换到其他应用，所有照片数据都已保存。

```ts
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
// CHANGE: Add import
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Add `cachePhotos()` method
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

接下来，使用 Vue 的 [watch 方法](https://vuejs.org/api/reactivity-core.html#watch) 来监视 `photos` 数组。每当数组被修改时（在本例中为拍摄或删除照片），触发 `cachePhotos` 方法。这样我们不仅能复用代码，而且无论应用用户何时关闭或切换到其他应用，照片数据始终会被保存。

在 `usePhotoGallery()` 的返回语句之前添加对 `watch()` 方法的调用。

```ts
// CHANGE: Update import
import { ref, watch } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Add call to `watch` with `photos` array and `cachePhotos` method
  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
  };
};
```

保存了照片数组数据后，在 `usePhotoGallery()` 中创建一个名为 `loadSaved()` 的新方法，用于检索照片数据。我们使用相同的键以 JSON 格式检索 `photos` 数组，然后将其解析为数组。

```ts
export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Add `loadSaved()` method
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

在移动端（接下来即将介绍！），我们可以直接设置图像标签的源 - `<img src="x" />` - 指向 Filesystem 上的每个照片文件，从而自动显示它们。然而在 Web 上，我们必须将每个图像从 Filesystem 读取为 base64 格式，并使用 `Photo` 对象上的新 `base64` 属性。这是因为 Filesystem API 在底层使用 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。添加以下代码以完成 `loadSaved()` 方法。

```ts
export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Update `loadSaved()` method
  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    // CHANGE: Display the photo by reading into base64 format
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

`usePhotoGallery.ts` 现在应该如下所示：

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
    // Take a photo
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

我们的 `usePhotoGallery()` 现在可以加载已保存的图像，但我们需要更新文件以使新代码生效。我们将在 [onMounted](https://vuejs.org/api/composition-api-lifecycle.html#onmounted) 生命周期方法中调用 `loadSaved`，这样当用户首次导航到相册时，所有照片都会被加载并显示在屏幕上。

将 `usePhotoGallery.ts` 更新为如下所示：

```ts
// CHANGE: Update import
import { ref, watch, onMounted } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const PHOTO_STORAGE = 'photos';

  const addNewToGallery = async () => {
    // Take a photo
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

  // CHANGE: Add call to `onMounted()` with the `loadSaved()` method
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
如果按照这些步骤操作后看到损坏的图像链接或照片丢失，可能需要打开浏览器的开发者工具并清除 [localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage) 和 [IndexedDB](https://developer.chrome.com/docs/devtools/storage/indexeddb)。

在 localStorage 中，查找域名 `http://localhost:8100` 和键 `CapacitorStorage.photos`。在 IndexedDB 中，找到名为 "FileStorage" 的存储。你的照片将具有类似 `/DATA/123456789012.jpeg` 的键。
:::

就是这样！我们已经在 Ionic 应用中构建了一个完整的相册功能，可以在 Web 上运行。接下来，我们将把它转换为适用于 iOS 和 Android 的移动应用！
