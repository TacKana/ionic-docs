---
title: 使用 Live Reload 快速开发应用
sidebar_label: Live Reload
---

<head>
  <title>使用 Vue 通过 Live Reload 快速开发应用 | Ionic Capacitor 相机</title>
  <meta
    name="description"
    content="使用 Ionic CLI 的 Live Reload 功能来提升构建 Ionic 应用时的生产力。了解如何利用快速应用开发。"
  />
</head>

到目前为止，我们已经看到了开发一个可以随处运行的跨平台应用是多么容易。开发体验已经相当快捷，但如果我告诉你还有更快的方法呢？

我们可以使用 Ionic CLI 的 [Live Reload 功能](../../cli/livereload.md)来提升构建 Ionic 应用时的生产力。激活后，Live Reload 会在检测到应用中的更改时重新加载浏览器和/或 WebView。

## Live Reload

还记得 `ionic serve` 吗？那就是 Live Reload 在浏览器中工作，使我们能够快速迭代。

我们也可以在使用 iOS 和 Android 设备开发时使用它。这在编写与原生插件交互的代码时特别有用——我们必须使其在设备上运行以验证它是否正常工作。因此，能够快速编写、构建、测试和部署代码对于保持我们的开发速度至关重要。

让我们使用 Live Reload 来实现照片删除功能——这是我们的相册功能中缺失的一部分。选择你喜欢的平台（iOS 或 Android）并将设备连接到你的电脑。然后，根据你选择的平台在终端中运行以下命令：

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

Live Reload 服务器将启动，如果尚未打开，原生 IDE 将打开。在 IDE 中，点击 Play 按钮将应用启动到你的设备上。

## 删除照片

在 Live Reload 运行且应用在设备上打开的情况下，让我们实现照片删除功能。

在 `usePhotoGallery.ts` 中，添加 `deletePhoto()` 方法。首先从 `photos` 数组中移除选中的照片。然后，使用 Filesystem API 删除实际的照片文件本身。

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

  // 变更：添加 `deletePhoto()` 方法
  const deletePhoto = async (photo: UserPhoto) => {
    // 从照片引用数据数组中移除这张照片
    photos.value = photos.value.filter((p) => p.filepath !== photo.filepath);

    // 从文件系统中删除照片文件
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
    // 变更：将 `deletePhoto()` 添加到返回语句中
    deletePhoto,
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

接下来，在 `Tab2Page.vue` 中实现 `showActionSheet()` 方法。我们将添加两个选项："Delete"（删除），它调用 `usePhotoGallery.deletePicture()`，以及"Cancel"（取消）。当取消按钮被分配"cancel"角色时，它将自动关闭操作面板。

```vue
<!-- ...existing code... -->

<script setup lang="ts">
// 变更：更新导入
import { camera, trash, close } from 'ionicons/icons';
// 变更：更新导入
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

// 变更：添加 `UserPhoto` 类型导入
import type { UserPhoto } from '@/composables/usePhotoGallery';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

// 变更：添加 `deletePhoto()` 方法
const { photos, addNewToGallery, deletePhoto } = usePhotoGallery();

// 变更：添加 `showActionSheet()` 方法
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
          // 无需操作，操作面板会自动关闭
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
            <!-- 变更：为每张图片添加点击事件监听器 -->
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

记住，从 `photos` 数组中移除照片会自动触发 `cachePhotos` 方法。

再次点击照片并选择"Delete"选项。照片被删除！使用 Live Reload 实现得更快。

:::note
记住，你可以在[此处](https://github.com/ionic-team/tutorial-photo-gallery-vue)找到此应用的完整源代码。
:::

在本教程的最后部分，我们将为你介绍 Appflow 产品的基础知识，该产品用于构建和部署你的应用程序到用户设备。
