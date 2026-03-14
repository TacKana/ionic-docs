---
sidebar_label: 拍摄照片
---

# 使用相机拍摄照片

现在来到有趣的部分——利用 Capacitor 的[相机 API](https://capacitorjs.com/docs/apis/camera) 添加设备拍照功能。我们先从网页端开始构建，然后稍作调整使其能在移动端（iOS 和 Android）运行。

## 照片服务

所有 Capacitor 逻辑（相机使用及其他原生功能）都将封装在服务类中。使用 `ionic generate` 命令创建 `PhotoService`：

```shell
ionic g service services/photo
```

打开新建的 `services/photo.service.ts` 文件，开始添加驱动相机功能的逻辑。首先导入 Capacitor 依赖项并获取相机、文件系统和存储插件的引用：

```tsx
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
```

接下来，定义一个新的类方法 `addNewToGallery`，它将包含拍摄设备照片并保存到文件系统的核心逻辑。我们先从打开设备相机开始：

```tsx
public async addNewToGallery() {
  // 拍摄照片
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });
}
```

注意这里的巧妙之处：没有特定平台的代码（网页、iOS 或 Android）！Capacitor 相机插件为我们抽象了这些细节，只需调用一个方法——`Camera.getPhoto()`——就能打开设备相机并允许我们拍摄照片。

接下来，打开 `tab2.page.ts`，导入 PhotoService 类并添加一个方法来调用导入服务的 `addNewToGallery` 方法：

```tsx
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
```

然后，打开 `tab2.page.html`，在点击悬浮操作按钮（FAB）时调用 `addPhotoToGallery()` 函数：

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

保存文件，如果开发服务器尚未运行，请在浏览器中运行 `ionic serve` 重新启动它。在照片库页面，点击相机按钮。如果你的电脑有摄像头，会出现一个模态窗口。拍张自拍照吧！

![显示网络摄像头自拍的照片库应用界面](/img/guides/first-app-cap-ng/camera-web.png '照片库中的网络摄像头自拍')

_(你的自拍肯定比我的好看多了)_

拍摄照片后，它会立即消失。我们需要在应用中显示它并保存以便日后访问。

## 显示照片

在 `PhotoService` 类定义之外（文件的最后部分），创建一个新接口 `UserPhoto` 来保存照片元数据：

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}
```

回到文件顶部，定义一个照片数组，用于存储每张用相机拍摄的照片引用。

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
    filepath: "稍后添加...",
    webviewPath: capturedPhoto.webPath
  });
}
```

接下来，转到 `tab2.page.html` 以便在屏幕上显示图像。添加一个[网格组件](https://ionicframework.com/docs/api/grid)，这样随着照片添加到图库，每张照片都能美观地显示。遍历 `PhotoServices` 的照片数组中的每张照片，为每个添加图像组件（`<ion-img>`）。将 `src`（来源）指向照片的路径：

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

保存所有文件。在网页浏览器中，点击相机按钮再拍一张照片。这次，照片会显示在照片库中！

接下来，我们将添加将照片保存到文件系统的支持，以便日后可以检索并在应用中显示。