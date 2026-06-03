---
title: 添加移动端支持
strip_number_prefixes: false
---

<head>
  <title>使用 Angular 添加移动端支持 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="了解如何为您的 Ionic Capacitor 照片库应用添加移动端支持，使其能够使用一套代码库在 iOS、Android 和 Web 上运行。"
  />
</head>

我们的照片库应用在同时运行在 iOS、Android 和 Web 上（全部使用一套代码库）之前还不算完成。只需要一些小的逻辑更改来支持移动平台，安装一些原生工具，然后在设备上运行应用。让我们开始吧！

## 导入 Platform API

让我们先做一些小的代码更改 - 然后我们的应用在部署到设备时会"直接可用"。

将 Ionic [Platform API](../platform.md) 导入 `photo.service.ts`，它用于获取当前设备的信息。在这种情况下，它有助于根据应用运行的平台（Web 或移动端）选择要执行的代码。

将 `Platform` 添加到文件顶部的导入中，并在 `PhotoService` 类中添加一个新的 `platform` 属性。我们还需要更新构造函数以设置用户的平台。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
// CHANGE: Add import
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  private PHOTO_STORAGE: string = 'photos';

  // CHANGE: Add a property to track the app's running platform
  private platform: Platform;

  // CHANGE: Update constructor to set `platform`
  constructor(platform: Platform) {
    this.platform = platform;
  }

  // ...existing code...
}
```

## 平台特定逻辑

首先，我们将更新照片保存功能以支持移动端。在 `savePicture()` 方法中，检查应用运行的平台。如果是"hybrid"（Capacitor，原生运行时），则使用 `Filesystem.readFile()` 方法将照片文件读取为 base64 格式。否则，使用与之前在 Web 上运行应用时相同的逻辑。

更新 `savePicture()` 如下所示：

```ts
// CHANGE: Update the `savePicture()` method
private async savePicture(photo: Photo) {
  let base64Data: string | Blob;

  // CHANGE: Add platform check
  // "hybrid" will detect Cordova or Capacitor
  if (this.platform.is('hybrid')) {
    // Read the file into base64 format
    const file = await Filesystem.readFile({
      path: photo.path!
    });
    base64Data = file.data;
  } else {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = await this.convertBlobToBase64(blob) as string;
  }

  // Write the file to the data directory
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  };
}
```

在移动端运行时，将 `filepath` 设置为 `writeFile()` 操作的结果 - `savedFile.uri`。在设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc()` 方法（[文件协议详细信息](../../core-concepts/webview.md#file-协议)）。要使用此方法，我们需要将 Capacitor 导入 `photo.service.ts`。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
// Change: Add import
import { Capacitor } from '@capacitor/core';

// ...existing code...
```

然后更新 `savePicture()` 如下所示：

```ts
// CHANGE: Update `savePicture()` method
private async savePicture(photo: Photo) {
  let base64Data: string | Blob;
  // "hybrid" will detect mobile - iOS or Android
  if (this.platform.is('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!,
    });
    base64Data = file.data;
  } else {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = await this.convertBlobToBase64(blob) as string;
  }

  // Write the file to the data directory
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  // CHANGE: Add platform check
  if (this.platform.is('hybrid')) {
    // Display the new image by rewriting the 'file://' path to HTTP
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }
}
```

接下来，在 `loadSaved()` 方法中添加一些新逻辑。在移动端，我们可以直接指向 Filesystem 上的每个照片文件并自动显示它们。然而，在 Web 上，我们必须将每个图像从 Filesystem 读取为 base64 格式。这是因为 Filesystem API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。更新 `loadSaved()` 方法：

```ts
// CHANGE: Update `loadSaved()` method
public async loadSaved() {
  const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
  this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

  // CHANGE: Add platform check
  // If running on the web...
  if (!this.platform.is('hybrid')) {
    for (let photo of this.photos) {
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

我们的照片库现在由一套代码库组成，可在 Web、Android 和 iOS 上运行。

`photos.service.ts` 现在应如下所示：

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  private PHOTO_STORAGE: string = 'photos';

  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);

    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  private async savePicture(photo: Photo) {
    let base64Data: string | Blob;

    // "hybrid" will detect Cordova or Capacitor
    if (this.platform.is('hybrid')) {
      // Read the file into base64 format
      const file = await Filesystem.readFile({
        path: photo.path!,
      });

      base64Data = file.data;
    } else {
      // Fetch the photo, read as a blob, then convert to base64 format
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();

      base64Data = (await this.convertBlobToBase64(blob)) as string;
    }

    // Write the file to the data directory
    const fileName = Date.now() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (this.platform.is('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  }

  private convertBlobToBase64(blob: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }

  public async loadSaved() {
    // Retrieve cached photo array data
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

    // If running on the web...
    if (!this.platform.is('hybrid')) {
      for (let photo of this.photos) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来是您一直在等待的部分 - 将应用部署到设备上。
