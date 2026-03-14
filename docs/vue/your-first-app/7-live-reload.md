---
title: 使用实时重载进行快速应用开发
sidebar_label: 实时重载
---

<head>
  <title>使用Vue进行实时重载的快速应用开发 | Ionic Capacitor相机</title>
  <meta
    name="description"
    content="使用Ionic CLI的实时重载功能来提升构建Ionic应用时的生产效率。学习如何利用快速应用开发。"
  />
</head>

到目前为止，我们已经看到了开发一个能在所有平台上运行的跨平台应用是多么简单。开发体验相当快速，但如果我们告诉你还有一种更快的方法呢？

我们可以使用Ionic CLI的[实时重载功能](../../cli/livereload.md)来提升构建Ionic应用时的生产效率。当启用时，实时重载会在检测到应用中的变更时重新加载浏览器和/或WebView。

## 实时重载

还记得 `ionic serve` 吗？那就是在浏览器中工作的实时重载，允许我们进行快速迭代。

我们也可以在iOS和Android设备上进行开发时使用它。这在编写与原生插件交互的代码时特别有用——我们必须将其运行在设备上以验证其工作。因此，能够快速编写、构建、测试和部署代码对于保持我们的开发速度至关重要。

让我们使用实时重载来实现照片删除功能，这是我们照片库功能中缺失的一环。选择你喜欢的平台（iOS或Android）并将设备连接到计算机。接下来，根据你选择的平台，在终端中运行以下命令之一：

```shell
ionic cap run ios -l --external

ionic cap run android -l --external
```

实时重载服务器将启动，如果尚未打开，相应的原生IDE也会打开。在IDE中，点击播放按钮以在你的设备上启动应用。

## 删除照片

在实时重载运行且应用在你的设备上打开的情况下，让我们实现照片删除功能。

在 `usePhotoGallery.ts` 中，添加 `deletePhoto()` 方法。首先从 `photos` 数组中移除选中的照片。然后，我们使用文件系统API删除实际的图片文件。

```ts
import { ref, watch, onMounted } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/vue';
import { Capacitor } from '@capacitor/core';

export const usePhotoGallery = () => {
  // ...现有代码...

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

接下来，在 `Tab2Page.vue` 中，实现 `showActionSheet()` 方法。我们添加两个选项："Delete"（调用 `usePhotoGallery.deletePicture()`）和"Cancel"。取消按钮在被分配"cancel"角色时将自动关闭操作表。

```vue
<!-- ...现有代码... -->

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
          // 无需操作，操作表会自动关闭
        },
      },
    ],
  });
  await actionSheet.present();
};
</script>
```

为 `<ion-img>` 元素添加点击处理程序。当应用用户点击我们图库中的照片时，我们将显示一个[操作表](../../api/action-sheet.md)对话框，提供删除选定照片或取消（关闭）对话框的选项。

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

请记住，从 `photos` 数组中移除照片会自动为我们触发 `cachePhotos` 方法。

再次点击一张照片并选择"Delete"选项。照片被删除了！使用实时重载实现得更快。💪

:::note
记住，你可以在这里找到本应用的完整源代码 [here](https://github.com/ionic-team/tutorial-photo-gallery-vue)
:::

在本教程的最后一部分，我们将向你介绍Appflow产品的基础知识，该产品用于构建应用并将其部署到用户设备上。