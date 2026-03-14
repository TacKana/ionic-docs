---
title: 从文件系统加载照片
sidebar_label: 加载照片
---

<head>
  <title>使用 Angular 从文件系统加载照片 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="我们已经实现了拍照和保存到文件系统的功能，现在学习 Ionic 如何利用 Capacitor Preferences API 在键值存储中加载我们的照片。"
  />
</head>

我们已经实现了拍照和保存到文件系统的功能。现在还缺少最后一个功能：照片存储在文件系统中，但我们需要一种保存每个文件指针的方法，以便它们可以再次显示在照片库中。

幸运的是，这很简单：我们将利用 Capacitor [Preferences API](../../native/preferences.md) 将照片数组存储在键值存储中。

## Preferences API

打开 `photo.service.ts`，首先在 `PhotoService` 类中定义一个新属性，作为存储的键。

```ts
export class PhotoService {
  public photos: UserPhoto[] = [];

  // 修改：添加照片存储的键名
  private PHOTO_STORAGE: string = 'photos';

  // ...已有代码...
}
```

接下来，在 `addNewToGallery()` 方法的末尾，添加对 `Preferences.set()` 的调用来保存 `photos` 数组。通过在这里添加，每次拍摄新照片时都会存储 `photos` 数组。这样，无论应用用户何时关闭或切换到其他应用，所有照片数据都会被保存。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
// 修改：添加导入
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // ...已有代码...

  // 修改：更新 `addNewToGallery()` 方法
  public async addNewToGallery() {
    // 拍照
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);

    // 修改：添加方法以缓存所有照片数据供后续检索
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  // ...已有代码...
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

照片数组数据保存后，在 `PhotoService` 类中创建一个名为 `loadSaved()` 的新公共方法，用于检索照片数据。我们使用相同的键来检索 JSON 格式的 `photos` 数组，然后将其解析为数组：

```ts
export class PhotoService {
  // ...已有代码...

  // 修改：添加加载照片数据的方法
  public async loadSaved() {
    // 检索缓存的照片数组数据
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];
  }
}
```

在移动设备上（接下来会介绍！），我们可以直接将图像标签的源 `<img src="x" />` 设置为 `Filesystem` 上的每个照片文件，从而自动显示它们。然而，在 Web 平台上，我们必须使用 `Photo` 对象上的新 `base64` 属性，将每个图像从 `Filesystem` 读取为 base64 格式。这是因为 `Filesystem` API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。添加以下代码以完成 `loadSaved()` 方法：

```ts
export class PhotoService {
  // ...已有代码...

  // 修改：更新 `loadSaved()` 方法
  public async loadSaved() {
    // 检索缓存的照片数组数据
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

    // 修改：通过读取为 base64 格式来显示照片
    for (let photo of this.photos) {
      // 从文件系统读取每个已保存照片的数据
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });

      // 仅限 Web 平台：将照片加载为 base64 数据
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

现在 `photo.service.ts` 应该如下所示：

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
    // 拍照
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // 保存图片并添加到照片集合
    const savedImageFile = await this.savePicture(capturedPhoto);

    this.photos.unshift(savedImageFile);

    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
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

    // 使用 webPath 显示新图像而不是 base64，因为它已经加载到内存中
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
    // 检索缓存的照片数组数据
    const { value: photoList } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (photoList ? JSON.parse(photoList) : []) as UserPhoto[];

    for (let photo of this.photos) {
      // 从文件系统读取每个已保存照片的数据
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });

      // 仅限 Web 平台：将照片加载为 base64 数据
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

现在我们的 `PhotoService` 可以加载保存的图像了，但我们需要更新 `tab2.page.ts` 来使用这些新代码。我们将在 [ngOnInit](https://angular.dev/guide/components/lifecycle#ngoninit) 生命周期方法中调用 `loadSaved()`，这样当用户首次导航到照片库时，所有照片都会被加载并显示在屏幕上。

将 `tab2.page.ts` 更新为如下内容：

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

  // 修改：在导航到照片标签页时添加对 `loadSaved()` 的调用
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
```

:::note
如果在按照这些步骤操作后看到损坏的图像链接或缺失的照片，您可能需要打开浏览器的开发者工具并清除 [localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage) 和 [IndexedDB](https://developer.chrome.com/docs/devtools/storage/indexeddb)。

在 localStorage 中，查找域 `http://localhost:8100` 和键 `CapacitorStorage.photos`。在 IndexedDB 中，找到名为 "FileStorage" 的存储。您的照片将有一个类似于 `/DATA/123456789012.jpeg` 的键。
:::

完成了！我们已经在 Ionic 应用中构建了一个完整的照片库功能，可以在 Web 上运行。接下来，我们将把它转换为适用于 iOS 和 Android 的移动应用！