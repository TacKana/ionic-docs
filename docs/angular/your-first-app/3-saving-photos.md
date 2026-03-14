---
title: 将照片保存到文件系统
sidebar_label: 保存照片
---

<head>
  <title>使用 Angular 将照片保存到文件系统 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="我们已经能够拍摄多张照片并在照片画廊中显示它们。学习如何使用 Ionic Capacitor Filesystem API 将这些照片保存到文件系统中。"
  />
</head>

现在我们已经能够在应用的第二个标签页上拍摄多张照片并在照片画廊中显示它们。然而，这些照片目前并没有被永久存储，所以当应用关闭时，它们将会被删除。

## 文件系统 API

幸运的是，将它们保存到文件系统只需要几个步骤。首先，在 `PhotoService` 类中创建一个新的方法 `savePicture()`。我们传入 `photo` 对象，它代表新拍摄的设备照片：

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
// 变更：添加导入
import type { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...现有代码...

  // 变更：添加 `savePicture()` 方法
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

  // 变更：更新 `addNewToGallery()` 方法
  public async addNewToGallery() {
    // 拍摄照片
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // 变更：添加 `savedImageFile`
    // 保存图片并添加到照片集合
    const savedImageFile = await this.savePicture(capturedPhoto);

    // 变更：更新 unshift 数组方法的参数
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

我们将使用 Capacitor 的[文件系统 API](../../native/filesystem.md)来保存照片。首先，将照片转换为 base64 格式。

然后，将数据传递给文件系统的 `writeFile` 方法。回想一下，我们通过将图像的源路径 (`src`) 设置为 `webviewPath` 属性来显示照片。因此，设置 `webviewPath` 并返回新的 `Photo` 对象。

现在，创建一个新的辅助方法 `convertBlobToBase64()`，以实现 Web 端运行所需的逻辑。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
// 变更：添加导入
import { Filesystem, Directory } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...现有代码...

  // 变更：更新 `savePicture()` 方法
  private async savePicture(photo: Photo) {
    // 获取照片，读取为 blob，然后转换为 base64 格式
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await this.convertBlobToBase64(blob)) as string;

    // 将文件写入数据目录
    const fileName = Date.now() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // 使用 webPath 显示新图像，而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }

  // 变更：添加 `convertBlobToBase64` 方法
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

`photo.service.ts` 现在应该看起来像这样：

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
    // 拍摄照片
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // 保存图片并添加到照片集合
    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);
  }

  private async savePicture(photo: Photo) {
    // 获取照片，读取为 blob，然后转换为 base64 格式
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = (await this.convertBlobToBase64(blob)) as string;

    // 将文件写入数据目录
    const fileName = Date.now() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // 使用 webPath 显示新图像，而不是 base64，因为它已经加载到内存中
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

在 Web 上获取相机照片的 base64 格式似乎比在移动端稍微复杂一些。实际上，我们只是使用内置的 Web API：[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 作为一种简洁的方式将文件读取为 blob 格式，然后使用 FileReader 的 [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) 将照片 blob 转换为 base64。

搞定！现在每次拍摄新照片时，它都会自动保存到文件系统中。接下来，我们将加载并显示保存的图像。