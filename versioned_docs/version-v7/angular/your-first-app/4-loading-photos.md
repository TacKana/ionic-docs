---
title: 从文件系统加载照片
sidebar_label: 加载照片
---

<head>
  <title>使用 Angular 从文件系统加载照片 | Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="我们已经实现了拍照和保存到文件系统，现在了解 Ionic 如何利用 Capacitor Preferences API 在键值存储中加载我们的照片。"
  />
</head>

我们已经实现了拍照和保存到文件系统的功能。还缺少最后一项功能：照片存储在文件系统中，但我们需要一种方式来保存每个文件的指针，以便它们可以再次在照片库中显示。

幸运的是，这很容易：我们将利用 Capacitor [Preferences API](../../native/preferences.md) 将照片数组存储在键值存储中。

## Preferences API

打开 `photo.service.ts`，首先在 `PhotoService` 类中定义一个将作为存储键的新属性。

```ts
export class PhotoService {
  public photos: UserPhoto[] = [];

  // CHANGE: Add a key for photo storage
  private PHOTO_STORAGE: string = 'photos';

  // ...existing code...
}
```

接下来，在 `addNewToGallery()` 方法的末尾，添加一个对 `Preferences.set()` 的调用以保存 `photos` 数组。通过将其添加在这里，每次拍摄新照片时都会存储 `photos` 数组。这样，无论应用用户何时关闭或切换到其他应用，所有照片数据都会被保存。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
// CHANGE: Add import
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...existing code...

  // CHANGE: Update `addNewToGallery()` method
  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);

    // CHANGE: Add method to cache all photo data for future retrieval
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  // ...existing code...
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

照片数组数据已保存，接下来在 `PhotoService` 类中创建一个名为 `loadSaved()` 的新公共方法，用于检索照片数据。我们使用相同的键以 JSON 格式检索 `photos` 数组，然后将其解析为数组：

```ts
export class PhotoService {
  // ...existing code...

  // CHANGE: Add the method to load the photo data
  public async loadSaved() {
    // Retrieve cached photo array data
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];
  }
}
```

在移动端（即将介绍！），我们可以直接将图像标签的源 `<img src="x" />` 设置为 `Filesystem` 上的每个照片文件，从而自动显示它们。然而，在 Web 上，我们必须使用新的 `base64` 属性将每个图像从 `Filesystem` 读取为 base64 格式，该属性位于 `Photo` 对象上。这是因为 `Filesystem` API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。添加以下代码来完成 `loadSaved()` 方法：

```ts
export class PhotoService {
  // ...existing code...

  // CHANGE: Update the `loadSaved()` method
  public async loadSaved() {
    // Retrieve cached photo array data
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

    // CHANGE: Display the photo by reading into base64 format
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

`photo.service.ts` 现在应如下所示：

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];

  private PHOTO_STORAGE: string = 'photos';

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

    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
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

  public async loadSaved() {
    // Retrieve cached photo array data
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });

      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

我们的 `PhotoService` 现在可以加载已保存的图像，但我们需要更新 `tab2.page.ts` 来使用这些新代码。我们将在 [ngOnInit](https://angular.dev/guide/components/lifecycle#ngoninit) 生命周期方法中调用 `loadSaved()`，以便用户首次导航到照片库时，所有照片都被加载并显示在屏幕上。

更新 `tab2.page.ts` 如下所示：

```ts
import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor(public photoService: PhotoService) {}

  // CHANGE: Add call to `loadSaved()` when navigating to the Photos tab
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
```

:::note
如果您按照这些步骤操作后看到图片链接断裂或照片缺失，您可能需要打开浏览器的开发者工具，清除 [localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage) 和 [IndexedDB](https://developer.chrome.com/docs/devtools/storage/indexedb)。

在 localStorage 中，查找域名为 `http://localhost:8100`、键为 `CapacitorStorage.photos` 的数据。在 IndexedDB 中，找到一个名为"FileStorage"的存储。您的照片将有一个像 `/DATA/123456789012.jpeg` 这样的键。
:::

就是这样！我们在 Ionic 应用中构建了一个完整的照片库功能，可在 Web 上运行。接下来，我们将把它转变为 iOS 和 Android 的移动应用！
