---
title: 使用 Live Reload 快速开发应用
sidebar_label: Live Reload
---

<head>
  <title>使用 Live Reload 快速开发应用 | Vue Ionic Capacitor Camera</title>
  <meta
    name="description"
    content="使用 Ionic CLI 的 Live Reload 功能来提高构建 Ionic 应用时的生产力。了解如何利用快速应用开发。"
  />
</head>

到目前为止，我们已经看到了开发一个无处不在的跨平台应用是多么容易。开发体验已经相当快速了，但如果我告诉你还有更快的方法呢？

我们可以使用 Ionic CLI 的 [Live Reload 功能](../../cli/livereload.md)来提高构建 Ionic 应用时的生产力。激活后，Live Reload 会在检测到应用中的更改时重新加载浏览器和/或 WebView。

## Live Reload

还记得 `ionic serve` 吗？那就是在浏览器中工作的 Live Reload，让我们能够快速迭代。

我们也可以在 iOS 和 Android 设备上进行开发时使用它。这在编写与原生插件交互的代码时特别有用——我们必须在设备上运行它来验证其是否工作。因此，能够快速编写、构建、测试和部署代码对于保持我们的开发速度至关重要。

让我们使用 Live Reload 来实现照片删除功能，这是我们相册功能中缺失的部分。选择你偏好的平台（iOS 或 Android）并将设备连接到计算机。接下来，根据你选择的平台在终端中运行以下任一命令：

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

Live Reload 服务器将启动，如果尚未打开，所选的原生 IDE 也会打开。在 IDE 中，单击 Play 按钮将应用启动到你的设备上。

## 删除照片

在 Live Reload 运行并且应用在你的设备上打开时，让我们实现照片删除功能。

在 `usePhotoGallery.ts` 中，添加 `deletePhoto()` 方法。首先从 `photos` 数组中移除选定的照片。然后，使用 Filesystem API 删除实际的照片文件本身。

```ts
import { ref, watch, onMounted } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/vue';
import { Capacitor } from '@capacitor/core';

export const usePhotoGallery = () => {
  // ...existing code...

  // CHANGE: Add `deletePhoto()` method
  const deletePhoto = async (photo: UserPhoto) => {
    // Remove this photo from the Photos reference data array
    photos.value = photos.value.filter((p) => p.filepath !== photo.filepath);

    // Delete photo file from filesystem
    const filename = photo.filepath.slice(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
  };

  onMounted(loadSaved);
  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
    // CHANGE: Add `deletePhoto()` to the return statement
    deletePhoto,
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来，在 `Tab2Page.vue` 中，实现 `showActionSheet()` 方法。我们添加了两个选项："Delete"，它调用 `usePhotoGallery.deletePicture()`，以及"Cancel"。当取消按钮分配了"cancel"角色时，它会自动关闭操作面板。

```vue
<!-- ...existing code... -->

<script setup lang="ts">
// CHANGE: Update import
import { camera, trash, close } from 'ionicons/icons';
// CHANGE: Update import
import {
  IonPage,
  IonHeader,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToolbar,
  IonTitle,
  IonContent,
  actionSheetController,
} from '@ionic/vue';

// CHANGE: Add `UserPhoto` type import
import type { UserPhoto } from '@/composables/usePhotoGallery';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

// CHANGE: Add `deletePhoto()` method
const { photos, addNewToGallery, deletePhoto } = usePhotoGallery();

// CHANGE: Add `showActionSheet()` method
const showActionSheet = async (photo: UserPhoto) => {
  const actionSheet = await actionSheetController.create({
    header: 'Photos',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        icon: trash,
        handler: () => {
          deletePhoto(photo);
        },
      },
      {
        text: 'Cancel',
        icon: close,
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        },
      },
    ],
  });
  await actionSheet.present();
};
</script>
```

为 `<ion-img>` 元素添加一个点击处理程序。当应用用户点击相册中的照片时，我们将显示一个[操作面板](../../api/action-sheet.md)对话框，提供删除所选照片或取消（关闭）对话框的选项。

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

      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo.filepath" v-for="photo in photos">
            <!-- CHANGE: Add a click event listener to each image -->
            <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="addNewToGallery()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
```

请记住，从 `photos` 数组中删除照片会自动触发 `cachePhotos` 方法。

再次点击一张照片并选择"Delete"选项。照片被删除了！使用 Live Reload 实现得更快。

:::note
请记住，你可以在[此处](https://github.com/ionic-team/tutorial-photo-gallery-vue)找到此应用的完整源代码。
:::

在本教程的最后部分，我们将向你介绍用于构建应用并将其部署到用户设备的 Appflow 产品的基础知识。
