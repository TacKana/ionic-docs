---
title: 使用相机拍照
sidebar_label: 拍照功能
---

<head>
  <title>使用Angular的Ionic Capacitor相机API为iOS、Android和Web实现拍照功能 | Ionic Capacitor相机</title>
  <meta
    name="description"
    content="使用Ionic Capacitor相机API为移动端iOS、Android和Web添加设备相机拍照功能。立即学习如何实现。"
  />
</head>

现在进入有趣的部分——使用Capacitor的[相机API](../../native/camera.md)添加设备相机拍照功能。我们将从Web端开始构建，然后进行一些小的调整使其能在移动端(iOS和Android)运行。

## 照片服务

所有Capacitor逻辑（相机使用和其他原生功能）都将封装在一个服务类中。使用`ionic generate`命令创建`PhotoService`：

```shell
ionic g service services/photo.service
```

打开新创建的`services/photo.service.ts`文件，让我们添加实现相机功能的逻辑。首先，导入Capacitor依赖项并获取对`Camera`、`Filesystem`和`Storage`插件的引用：

```ts
import { Injectable } from '@angular/core';
// 修改：添加以下导入
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {}
```

接下来，定义一个新的类方法`addNewToGallery()`，该方法将包含拍摄设备照片并保存到文件系统的核心逻辑。让我们先打开设备相机。

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  // 修改：添加图库方法
  public async addNewToGallery() {
    // 拍摄照片
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  }
}
```

注意这里的神奇之处：没有特定平台的代码（Web、iOS或Android）！Capacitor相机插件为我们抽象了这些细节，只留下一个方法调用——`Camera.getPhoto()`——它将打开设备相机并允许我们拍照。

接下来，在`tab2.page.ts`中，导入`PhotoService`类并添加一个方法来调用其`addNewToGallery`方法。

```ts
import { Component } from '@angular/core';
// 修改：导入PhotoService
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // 修改：更新构造函数以包含`photoService`
  constructor(public photoService: PhotoService) {}

  // 修改：添加`addNewToGallery()`方法
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
```

然后，打开`tab2.page.html`，在浮动操作按钮被点击时调用`addPhotoToGallery()`方法：

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> 照片图库 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">照片图库</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <!-- 修改：为浮动操作按钮添加点击事件监听器 -->
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

如果开发服务器尚未运行，请通过运行`ionic serve`在浏览器中重新启动。在照片图库选项卡上，点击相机按钮。如果您的计算机有网络摄像头，将出现一个模态窗口。拍张自拍照吧！

![显示网络摄像头自拍照的照片图库应用。](/img/guides/first-app-cap-ng/camera-web.png '照片图库中的网络摄像头自拍')

_(您的自拍可能比我的好得多)_

拍照后，照片会立即消失。我们需要在应用中显示它并保存以供将来访问。

## 显示照片

要为照片元数据定义数据结构，创建一个名为`UserPhoto`的新接口。在`photo.service.ts`文件的最底部、`PhotoService`类定义之后立即添加此接口：

```ts
export class PhotoService {
  // ...现有代码...
}

// 修改：添加`UserPhoto`接口
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在`addNewToGallery()`方法上方，定义一个`UserPhoto`数组，该数组将包含对使用相机拍摄的每张照片的引用。

```ts
export class PhotoService {
  // 修改：添加`photos`数组
  public photos: UserPhoto[] = [];

  public async addNewToGallery() {
    // ...现有代码...
  }
}
```

在`addNewToGallery`方法中，将新拍摄的照片添加到`photos`数组的开头。

```ts
// 修改：更新`addNewToGallery()`方法
public async addNewToGallery() {
  // 拍摄照片
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
  });

  // 修改：将新照片添加到photos数组
  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath!
  });
}
```

现在`photo.service.ts`应该如下所示：

```ts
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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

    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath!,
    });
  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来，切换到`tab2.page.html`以显示图像。我们将添加一个[网格组件](../../api/grid.md)来确保照片在添加到图库时整齐显示。在网格内部，遍历`PhotoService`的`photos`数组中的每张照片。对于每个项目，添加一个[图像组件](../../api/img.md)并将其`src`属性设置为照片的路径。

```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> 照片图库 </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">照片图库</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- 修改：添加网格组件来显示照片 -->
  <ion-grid>
    <ion-row>
      <!-- 修改：为每张照片创建新列和图像组件 -->
      <ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
        <ion-img [src]="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

在Web浏览器中，点击相机按钮并拍摄另一张照片。这次，照片会显示在照片图库中！

接下来，我们将添加将照片保存到文件系统的支持，以便以后可以检索并在应用中显示。