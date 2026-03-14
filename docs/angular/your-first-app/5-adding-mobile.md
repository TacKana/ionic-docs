---
title: 添加移动端支持
strip_number_prefixes: false
---

<head>
  <title>使用 Angular 添加移动端支持 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="学习如何为你的 Ionic Capacitor 照片库应用添加移动端支持，使其能够使用一套代码库在 iOS、Android 和 Web 上运行。"
  />
</head>

要让我们的照片库应用真正完整，必须让它能在 iOS、Android 和 Web 上运行——全部使用同一套代码库。只需要做一些小的逻辑调整来支持移动平台，安装一些原生工具，然后在设备上运行应用即可。让我们开始吧！

## 导入平台 API

首先进行一些小的代码修改——这样当我们将应用部署到设备时，它就能“正常工作”。

将 Ionic 的 [平台 API](../platform.md) 导入到 `photo.service.ts` 中，该 API 用于获取当前设备的信息。在这里，它对于根据应用运行的平台（Web 或移动端）选择执行哪些代码非常有用。

在文件顶部的导入中添加 `Platform`，并在 `PhotoService` 类中添加新属性 `platform`。我们还需要更新构造函数来设置用户的平台。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
// 变更：添加导入
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  private PHOTO_STORAGE: string = 'photos';

  // 变更：添加属性来追踪应用的运行平台
  private platform: Platform;

  // 变更：更新构造函数以设置 `platform`
  constructor(platform: Platform) {
    this.platform = platform;
  }

  // ...现有代码...
}
```

## 平台特定逻辑

首先，我们将更新照片保存功能以支持移动端。在 `savePicture()` 方法中，检查应用正在哪个平台上运行。如果是“hybrid”（Capacitor，原生运行时），则使用 `Filesystem.readFile()` 方法将照片文件读取为 base64 格式。否则，当应用在 Web 上运行时，使用与之前相同的逻辑。

将 `savePicture()` 更新为如下所示：

```ts
// 变更：更新 `savePicture()` 方法
private async savePicture(photo: Photo) {
  let base64Data: string | Blob;

  // 变更：添加平台检查
  // "hybrid" 将检测 Cordova 或 Capacitor
  if (this.platform.is('hybrid')) {
    // 将文件读取为 base64 格式
    const file = await Filesystem.readFile({
      path: photo.path!
    });
    base64Data = file.data;
  } else {
    // 获取照片，读取为 blob，然后转换为 base64 格式
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = await this.convertBlobToBase64(blob) as string;
  }

  // 将文件写入数据目录
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  // 使用 webPath 来显示新图片，而不是 base64，因为它已经加载到内存中
  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  };
}
```

在移动端运行时，将 `filepath` 设置为 `writeFile()` 操作的结果——`savedFile.uri`。设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc()` 方法（[文件协议详情](../../core-concepts/webview.md#file-protocol)）。要使用此方法，我们需要将 Capacitor 导入到 `photo.service.ts` 中。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
// 变更：添加导入
import { Capacitor } from '@capacitor/core';

// ...现有代码...
```

然后将 `savePicture()` 更新为如下所示：

```ts
// 变更：更新 `savePicture()` 方法
private async savePicture(photo: Photo) {
  let base64Data: string | Blob;
  // "hybrid" 将检测移动端 - iOS 或 Android
  if (this.platform.is('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!,
    });
    base64Data = file.data;
  } else {
    // 获取照片，读取为 blob，然后转换为 base64 格式
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = await this.convertBlobToBase64(blob) as string;
  }

  // 将文件写入数据目录
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  // 变更：添加平台检查
  if (this.platform.is('hybrid')) {
    // 通过将 'file://' 路径重写为 HTTP 来显示新图片
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
    // 使用 webPath 来显示新图片，而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }
}
```

接下来，在 `loadSaved()` 方法中添加一点新逻辑。在移动端，我们可以直接指向文件系统中的每个照片文件并自动显示它们。然而，在 Web 上，我们必须将每个图片从文件系统读取为 base64 格式。这是因为文件系统 API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。更新 `loadSaved()` 方法：

```ts
// 变更：更新 `loadSaved()` 方法
public async loadSaved() {
  const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
  this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

  // 变更：添加平台检查
  // 如果在 Web 上运行...
  if (!this.platform.is('hybrid')) {
    for (let photo of this.photos) {
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data
      });

      // 仅限 Web 平台：将照片加载为 base64 数据
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

现在，我们的照片库应用包含了一个能在 Web、Android 和 iOS 上运行的代码库。

`photos.service.ts` 现在应该看起来像这样：

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
    // 拍摄照片
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

    // "hybrid" 将检测 Cordova 或 Capacitor
    if (this.platform.is('hybrid')) {
      // 将文件读取为 base64 格式
      const file = await Filesystem.readFile({
        path: photo.path!,
      });

      base64Data = file.data;
    } else {
      // 获取照片，读取为 blob，然后转换为 base64 格式
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();

      base64Data = (await this.convertBlobToBase64(blob)) as string;
    }

    // 将文件写入数据目录
    const fileName = Date.now() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (this.platform.is('hybrid')) {
      // 通过将 'file://' 路径重写为 HTTP 来显示新图片
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      // 使用 webPath 来显示新图片，而不是 base64，因为它已经加载到内存中
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
    // 检索缓存的照片数组数据
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

    // 如果在 Web 上运行...
    if (!this.platform.is('hybrid')) {
      for (let photo of this.photos) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        // 仅限 Web 平台：将照片加载为 base64 数据
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

接下来，就是你期待已久的部分——将应用部署到设备上。