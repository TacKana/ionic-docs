---
title: 使用相机拍照
sidebar_label: 拍照
---

<head>
  <title>使用 Vue 通过 Camera API 在 iOS、Android 和 Web 上拍照 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="使用 Ionic Capacitor Camera API 为移动 iOS、Android 和 Web 添加使用设备相机拍照的功能。在此了解如何操作。"
  />
</head>

现在进入有趣的部分——使用 Capacitor [Camera API](../../native/camera.md) 添加使用设备相机拍照的功能。我们将首先在 Web 上构建它，然后进行一些小的调整，使其在移动设备（iOS 和 Android）上也能工作。

## 相册组合式函数

我们将创建一个独立的组合式方法，配合 [Vue 的组合式 API](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) 来管理相册中的照片。

在 `src/composables/usePhotoGallery.ts` 创建一个新文件并打开它。

接下来，定义一个名为 `usePhotoGallery()` 的新方法，它将包含拍摄设备照片并将其保存到文件系统的核心逻辑。让我们从打开设备相机开始。

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery = () => {
  const addNewToGallery = async () => {
    // 拍照
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  return {
    addNewToGallery,
  };
};
```

注意这里的奇妙之处：没有任何平台特定的代码（Web、iOS 或 Android）！Capacitor Camera 插件为我们抽象掉了这些，只需要一个方法调用——`Camera.getPhoto()`——它就会打开设备相机并允许我们拍照。

接下来，在 `Tab2Page.vue` 中，导入 `usePhotoGallery()` 方法并解构出它的 `addNewToGallery()` 方法。

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <!-- 变更：为浮动操作按钮添加点击事件监听器 -->
        <ion-fab-button @click="addNewToGallery()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { camera } from 'ionicons/icons';
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

// 变更：添加 `usePhotoGallery` 导入
import { usePhotoGallery } from '@/composables/usePhotoGallery';

// 变更：从 `usePhotoGallery()` 解构 `addNewToGallery`
const { addNewToGallery } = usePhotoGallery();
</script>
```

如果它还没有运行，请通过运行 `ionic serve` 在浏览器中重新启动开发服务器。在相册标签页上，点击相机按钮。如果你的电脑有摄像头，会弹出一个模态窗口。拍一张自拍照吧！

![一个相册应用显示网络摄像头自拍照。](/img/guides/first-app-cap-ng/camera-web.png '相册中的网络摄像头自拍照')

（你的自拍照可能比我的好多了）

拍照后，照片会立即消失。我们需要在应用中显示它并保存以供日后访问。

## 显示照片

为了定义照片元数据的数据结构，创建一个名为 `UserPhoto` 的新接口。在 `usePhotoGallery.ts` 文件的 `usePhotoGallery()` 方法定义之后，添加此接口。

```ts
export const usePhotoGallery = () => {
  // ...existing code...
};

// 变更：添加 `UserPhoto` 接口
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 `addNewToGallery()` 方法上方，定义一个 `UserPhoto` 数组，它将包含对每张用相机拍摄的照片的引用。使用 Vue 的 [ref 方法](https://vuejs.org/api/reactivity-core.html#ref) 使其成为响应式变量。

```ts
export const usePhotoGallery = () => {
  // 变更：添加 `photos` 数组
  const photos = ref<UserPhoto[]>([]);

  // ...existing code...
};
```

在 `addNewToGallery()` 方法中，将新拍摄的照片添加到 `photos` 数组的开头。然后，更新 `userPhotoGallery()` 的返回语句，包含 `photos` 数组。

```ts
// 变更：添加导入
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // 拍照
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // 变更：使用当前时间戳创建 `fileName`
    const fileName = Date.now() + '.jpeg';
    // 变更：创建匹配 `UserPhoto` 接口的 `savedImageFile`
    const savedImageFile = {
      filepath: fileName,
      webviewPath: capturedPhoto.webPath,
    };

    // 变更：用新照片更新 `photos` 数组
    photos.value = [savedImageFile, ...photos.value];
  };

  return {
    addNewToGallery,
    // 变更：更新返回语句，包含 `photos` 数组
    photos,
  };
};
```

`usePhotoGallery.ts` 现在应该是这样的：

```ts
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // 拍照
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const savedImageFile = {
      filepath: fileName,
      webviewPath: capturedPhoto.webPath,
    };

    photos.value = [savedImageFile, ...photos.value];
  };

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

接下来，切换到 `Tab2Page.vue` 来显示图片。我们将添加一个[网格组件](../../api/grid.md)来确保照片在添加到相册时能够整齐地显示。在网格内部，循环遍历 `UserPhoto` 的 `photos` 数组中的每张照片。对于每个项目，添加一个[图片组件](../../api/img.md)并将其 `src` 属性设置为照片的路径。

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- 变更：添加网格组件来显示照片 -->
      <ion-grid>
        <ion-row>
          <!-- 变更：为每张照片创建一个新的列和图片组件 -->
          <ion-col size="6" :key="photo.filepath" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <!-- 变更：为浮动操作按钮添加点击事件监听器 -->
        <ion-fab-button @click="addNewToGallery()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { camera, trash, close } from 'ionicons/icons';
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from '@ionic/vue';

import { usePhotoGallery } from '@/composables/usePhotoGallery';

// 变更：添加 `photos` 数组，从 `usePhotoGallery()` 解构
const { photos, addNewToGallery } = usePhotoGallery();
</script>
```

在 Web 浏览器中，点击相机按钮并再次拍照。这次，照片会显示在相册中！

接下来，我们将添加将照片保存到文件系统的支持，以便以后可以检索并在应用中显示它们。
