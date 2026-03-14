---
title: 使用相机拍照
sidebar_label: 拍照
---

<head>
  <title>使用 Vue 为 iOS、Android 和 Web 实现相机拍照功能 | Ionic Capacitor 相机 API</title>
  <meta
    name="description"
    content="使用 Ionic Capacitor 相机 API 为移动端 iOS、Android 和 Web 添加设备相机拍照功能。在此了解具体实现方法。"
  />
</head>

现在进入有趣的部分——使用 Capacitor [相机 API](../../native/camera.md) 添加设备相机拍照功能。我们将从 Web 端开始构建，然后稍作调整使其能在移动端（iOS 和 Android）上运行。

## 照片画廊组合函数

我们将创建一个独立的组合方法，搭配 [Vue 组合式 API](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) 来管理画廊的照片。

在 `src/composables/usePhotoGallery.ts` 创建新文件并打开。

接下来，定义一个新方法 `usePhotoGallery()`，该方法将包含拍摄设备照片并保存到文件系统的核心逻辑。让我们从打开设备相机开始。

```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery = () => {
  const addNewToGallery = async () => {
    // 拍摄照片
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

注意这里的巧妙之处：没有平台特定的代码（Web、iOS 或 Android）！Capacitor 相机插件为我们抽象了这些细节，只需调用一个方法——`Camera.getPhoto()`——就能打开设备相机并允许我们拍照。

接下来，在 `Tab2Page.vue` 中导入 `usePhotoGallery()` 方法，并通过解构调用其 `addNewToGallery()` 方法。

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>照片画廊</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">照片画廊</ion-title>
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

如果尚未运行，请在浏览器中通过运行 `ionic serve` 重启开发服务器。在照片画廊标签页，点击相机按钮。如果你的电脑有任何类型的摄像头，将会出现一个模态窗口。拍张自拍照吧！

![显示网络摄像头自拍的照片画廊应用。](/img/guides/first-app-cap-ng/camera-web.png '照片画廊中的网络摄像头自拍')

_(你的自拍可能比我的好看多了)_

拍摄照片后，它立即消失了。我们需要在应用中显示它并保存以供将来访问。

## 显示照片

为了定义照片元数据的结构，创建一个名为 `UserPhoto` 的新接口。将此接口添加到 `usePhotoGallery.ts` 文件的最底部，紧接在 `usePhotoGallery()` 方法定义之后。

```ts
export const usePhotoGallery = () => {
  // ...现有代码...
};

// 变更：添加 `UserPhoto` 接口
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

在 `addNewToGallery()` 方法上方，定义一个 `UserPhoto` 数组，用于存储通过相机拍摄的每张照片的引用。使用 Vue 的 [ref 方法](https://vuejs.org/api/reactivity-core.html#ref) 将其设为响应式变量。

```ts
export const usePhotoGallery = () => {
  // 变更：添加 `photos` 数组
  const photos = ref<UserPhoto[]>([]);

  // ...现有代码...
};
```

在 `addNewToGallery()` 方法中，将新拍摄的照片添加到 `photos` 数组的开头。然后，在 `userPhotoGallery()` 的返回语句中更新 `photos` 数组。

```ts
// 变更：添加导入
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // 拍摄照片
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // 变更：使用当前时间戳创建 `fileName`
    const fileName = Date.now() + '.jpeg';
    // 变更：创建与 `UserPhoto` 接口匹配的 `savedImageFile`
    const savedImageFile = {
      filepath: fileName,
      webviewPath: capturedPhoto.webPath,
    };

    // 变更：用新照片更新 `photos` 数组
    photos.value = [savedImageFile, ...photos.value];
  };

  return {
    addNewToGallery,
    // 变更：更新返回语句以包含 `photos` 数组
    photos,
  };
};
```

现在 `usePhotoGallery.ts` 应该如下所示：

```ts
import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);

  const addNewToGallery = async () => {
    // 拍摄照片
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

接下来，切换到 `Tab2Page.vue` 以显示图像。我们将添加一个[网格组件](../../api/grid.md)，确保照片在添加到画廊时能整齐地显示。在网格内部，遍历 `UserPhoto` 的 `photos` 数组中的每张照片。为每个项目添加一个[图像组件](../../api/img.md)，并将其 `src` 属性设置为照片的路径。

```vue
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>照片画廊</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">照片画廊</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- 变更：添加网格组件以显示照片 -->
      <ion-grid>
        <ion-row>
          <!-- 变更：为每张照片创建新列和图像组件 -->
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

// 变更：添加从 `usePhotoGallery()` 解构的 `photos` 数组
const { photos, addNewToGallery } = usePhotoGallery();
</script>
```

在 Web 浏览器中，点击相机按钮并拍摄另一张照片。这次，照片会显示在照片画廊中！

接下来，我们将添加对将照片保存到文件系统的支持，以便以后可以检索并在应用中显示它们。