---
sidebar_label: 拍照
---

# 使用相机拍照

现在到了有趣的部分 - 使用 Capacitor [Camera API](https://capacitorjs.com/docs/apis/camera) 添加使用设备相机拍照的功能。我们将首先在 Web 上构建它，然后做一些小的调整使其在移动设备（iOS 和 Android）上工作。

## 照片服务

所有 Capacitor 逻辑（相机使用和其他原生功能）都将封装在一个服务类中。使用 `ionic generate` 命令创建 `PhotoService`：

```shell
ionic g service services/photo
```

打开新的 `services/photo.service.ts` 文件，让我们添加驱动相机功能的逻辑。首先，导入 Capacitor 依赖项并获取 Camera、Filesystem 和 Storage 插件的引用：

```tsx
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
```

接下来，定义一个新的类方法 `addNewToGallery`，它将包含拍摄设备照片并将其保存到文件系统的核心逻辑。让我们从打开设备相机开始：

```tsx
public async addNewToGallery() {
  // 拍照
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });
}
```

注意这里的魔力：没有平台特定的代码（Web、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这些，只需要一个方法调用 `Camera.getPhoto()` 就可以打开设备相机并拍照。

接下来，打开 `tab2.page.ts` 并导入 PhotoService 类，然后添加一个调用导入服务中 `addNewToGallery` 方法的方法：

```tsx
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
```

然后，打开 `tab2.page.html` 并在 FAB 被点击时调用 `addPhotoToGallery()` 函数：

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

保存文件，如果尚未运行，请通过运行 `ionic serve` 在浏览器中重新启动开发服务器。在相册标签页上，点击相机按钮。如果您的计算机有任何类型的网络摄像头，将出现一个模态窗口。拍张自拍照吧！

![一个相册应用显示网络摄像头自拍照。](/img/guides/first-app-cap-ng/camera-web.png '相册中的网络摄像头自拍照')

_（您的自拍照可能比我的好得多）_

拍照后，照片会立即消失。我们需要在应用中显示它并保存以供将来访问。

## 显示照片

在 `PhotoService` 类定义之外（文件的最底部），创建一个新的接口 `UserPhoto`，用于保存照片元数据：

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
```

回到文件顶部，定义一个照片数组，该数组将包含每张用相机拍摄的照片的引用。

```tsx
export class PhotoService {
  public photos: UserPhoto[] = [];

  // 其他代码
}
```

在 `addNewToGallery` 函数中，将新拍摄的照片添加到照片数组的开头。

```tsx
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  this.photos.unshift({
    filepath: "稍后处理...",
    webviewPath: capturedPhoto.webPath
  });
}
```

接下来，转到 `tab2.page.html`，以便在屏幕上显示图像。添加一个[网格组件](https://ionicframework.com/docs/api/grid)，使每张照片在添加到相册时能整齐地显示，并遍历 `PhotoService` 的照片数组，为每张照片添加一个 Image 组件（`<ion-img>`）。将 `src`（源）指向照片的路径：

```html
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
        <ion-img [src]="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- ion-fab 标记 -->
</ion-content>
```

保存所有文件。在 Web 浏览器中，点击相机按钮再拍一张照片。这次，照片会显示在相册中！

接下来，我们将添加将照片保存到文件系统的支持，以便日后可以在应用中检索和显示它们。
