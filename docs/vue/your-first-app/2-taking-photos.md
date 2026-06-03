---
title: 使用相机拍摄照片
sidebar_label: 拍摄照片
---

<head>
  <title>使用 Camera API 为 iOS、Android 和 Web 拍摄照片 | Vue Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="使用 Ionic Capacitor Camera API 为移动端 iOS、Android 和 Web 添加使用设备相机拍摄照片的功能。在此了解如何操作。"
  />
</head>

现在是有趣的部分 - 使用 Capacitor [Camera API](../../native/camera.md) 添加使用设备相机拍摄照片的功能。我们将从 Web 开始构建，然后做一些小的调整使其在移动端（iOS 和 Android）上工作。

## 相册组合式函数

我们将创建一个独立的组合式方法，配合 [Vue 的 Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) 来管理相册的照片。

创建一个新文件 `src/composables/usePhotoGallery.ts` 并打开它。

接下来，定义一个新的方法 `usePhotoGallery()`，它将包含拍摄设备照片并将其保存到文件系统的核心逻辑。让我们从打开设备相机开始。

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery = () => {
  const addNewToGallery = async () => {
    // Take a photo
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

注意这里的魔力所在：没有平台特定的代码（Web、iOS 或 Android）！Capacitor Camera 插件为我们抽象了这些差异，只需一个方法调用 - `Camera.getPhoto()` - 就会打开设备相机并允许我们拍照。

接下来，在 `Tab2Page.vue` 中，导入 `usePhotoGallery()` 方法并解构以调用其 `addNewToGallery()` 方法。

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
        <!-- CHANGE: Add a click event listener to the floating action button. -->
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

// CHANGE: Add `usePhotoGallery` import
import { usePhotoGallery } from '@/composables/usePhotoGallery';

// CHANGE: Destructure `addNewToGallery` from `usePhotoGallery()
const { addNewToGallery } = usePhotoGallery();
</script>
```

如果尚未运行，请通过运行 `ionic serve` 重新启动浏览器中的开发服务器。在相册标签页上，点击相机按钮。如果你的电脑有任何类型的网络摄像头，会出现一个模态窗口。拍一张自拍吧！

![显示网络摄像头自拍的相册应用。](/img/guides/first-app-cap-ng/camera-web.png '相册中的网络摄像头自拍')

_（你的自拍可能比我的好得多）_

拍照后，照片立即消失了。我们需要将其显示在应用中并保存以供将来访问。

## 显示照片

为照片元数据定义数据结构，创建一个名为 `UserPhoto` 的新接口。在 `usePhotoGallery.ts` 文件的最底部，紧接在 `usePhotoGallery()` 方法定义之后添加此接口：

```ts
export const usePhotoGallery = () => {
  // ...existing code...
};

// CHANGE: Add the `UserPhoto` interface
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 `addNewToGallery()` 方法上方，定义一个 `UserPhoto` 数组，其中包含对相机拍摄的每张照片的引用。使用 Vue 的 [ref 方法](https://vuejs.org/api/reactivity-core.html#ref) 将其变为响应式变量。

```ts
export const usePhotoGallery = () => {
  // CHANGE: Add the `photos` array
  const photos = ref<UserPhoto[]>([]);

  // ...existing code...
};
```

在 `addNewToGallery()` 方法中，将新拍摄的照片添加到 `photos` 数组的开头。然后，更新 `userPhotoGallery()` 的返回语句以包含 `photos` 数组。

```ts
// CHANGE: Add import
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // CHANGE: Create the `fileName` with current timestamp
    const fileName = Date.now() + '.jpeg';
    // CHANGE: Create `savedImageFile` matching `UserPhoto` interface
    const savedImageFile = {
      filepath: fileName,
      webviewPath: capturedPhoto.webPath,
    };

    // CHANGE: Update the `photos` array with the new photo
    photos.value = [savedImageFile, ...photos.value];
  };

  return {
    addNewToGallery,
    // CHANGE: Update return statement to include `photos` array
    photos,
  };
};
```

`usePhotoGallery.ts` 现在应该如下所示：

```ts
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // Take a photo
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

接下来，切换到 `Tab2Page.vue` 以显示图像。我们将添加一个[网格组件](../../api/grid.md)以确保照片添加到图库时整齐显示。在网格内部，循环遍历 `UserPhoto` 的 `photos` 数组中的每张照片。对于每个项目，添加一个[图像组件](../../api/img.md)并将其 `src` 属性设置为照片的路径。

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

      <!-- CHANGE: Add a grid component to display the photos -->
      <ion-grid>
        <ion-row>
          <!-- CHANGE: Create a new column and image component for each photo -->
          <ion-col size="6" :key="photo.filepath" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <!-- CHANGE: Add a click event listener to the floating action button -->
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

// CHANGE: Add `photos` array to destructure from `usePhotoGallery()`
const { photos, addNewToGallery } = usePhotoGallery();
</script>
```

在 Web 浏览器中，点击相机按钮并拍摄另一张照片。这次，照片会显示在相册中！

接下来，我们将添加将照片保存到文件系统的支持，以便以后可以在应用中检索和显示它们。
