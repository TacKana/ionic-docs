---
title: 将照片保存到文件系统
sidebar_label: 保存照片
---

<head>
  <title>使用 Angular 将照片保存到文件系统 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="我们现在可以拍摄多张照片并在照片库中显示它们。了解如何使用 Ionic Capacitor Filesystem API 将这些照片保存到文件系统。"
  />
</head>

我们现在可以在应用的第二选项卡上拍摄多张照片并在照片库中显示它们。然而，这些照片目前并未永久存储，因此当应用关闭时，它们将被删除。

## Filesystem API

幸运的是，将它们保存到文件系统只需要几个步骤。首先在 `PhotoService` 类中创建一个新的类方法 `savePicture()`。我们传入 `photo` 对象，该对象代表新捕获的设备照片：

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// CHANGE: Add import
import type { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...existing code...

  // CHANGE: Add the `savePicture()` method
  private async savePicture(photo: Photo) {
    return {
      filepath: 'soon...',
      webviewPath: 'soon...',
    };
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

我们可以立即在 `addNewToGallery()` 中使用这个新方法。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  // CHANGE: Update the `addNewToGallery()` method
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // CHANGE: Add `savedImageFile`
    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);

    // CHANGE: Update argument to unshift array method
    this.photos.unshift(savedImageFile);
  }

  private async savePicture(photo: Photo) {
    return {
      filepath: 'soon...',
      webviewPath: 'soon...',
    };
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

我们将使用 Capacitor [Filesystem API](../../native/filesystem.md) 来保存照片。首先，将照片转换为 base64 格式。

然后，将数据传递给 Filesystem 的 `writeFile` 方法。回想一下，我们通过将图像的源路径 (`src`) 设置为 `webviewPath` 属性来显示照片。因此，设置 `webviewPath` 并返回新的 `Photo` 对象。

现在，创建一个新的辅助方法 `convertBlobToBase64()`，来实现 Web 上运行所需的逻辑。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
// CHANGE: Add import
import { Filesystem, Directory } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...existing code...

  // CHANGE: Update the `savePicture()` method
  private async savePicture(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await this.convertBlobToBase64(blob)) as string;

    // Write the file to the data directory
    const fileName = Date.now() + '.jpeg';
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
  }

  // CHANGE: Add the `convertBlobToBase64` method
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
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

`photo.service.ts` 现在应如下所示：

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);
  }

  private async savePicture(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await this.convertBlobToBase64(blob)) as string;

    // Write the file to the data directory
    const fileName = Date.now() + '.jpeg';
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
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 Web 上以 base64 格式获取摄像头照片似乎比在移动端更复杂一些。实际上，我们只是使用内置的 Web API：[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 作为一种简洁的方式将文件读取为 blob 格式，然后使用 FileReader 的 [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) 将照片 blob 转换为 base64。

搞定了！每次拍摄新照片时，现在都会自动保存到文件系统。接下来，我们将加载并显示已保存的图像。
