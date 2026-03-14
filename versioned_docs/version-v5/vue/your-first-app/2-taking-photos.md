---
sidebar_label: 拍摄照片
---

# 使用相机拍摄照片

现在到了有趣的部分——使用 Capacitor 的[相机 API](https://capacitorjs.com/docs/apis/camera)为设备添加拍照功能。我们将首先构建网页版本，然后进行一些微调使其能在移动设备（iOS 和 Android）上运行。

为此，我们将创建一个独立的组合函数，配合 Vue 的组合式 API 来管理相册中的照片。

:::note
如果你不熟悉 Vue 的组合式 API，官方 Vue 文档中的[为什么需要组合式 API？](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api)是一个很好的入门资源。
:::

在 `src/composables/usePhotoGallery.ts` 创建新文件并打开。

首先从 Vue 核心库和 Capacitor 导入我们将使用的各种工具：

```tsx
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
```

接下来，创建一个名为 usePhotoGallery 的函数：

```tsx
export function usePhotoGallery() {
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  return {
    takePhoto,
  };
}
```

我们的 `usePhotoGallery` 函数公开了一个名为 takePhoto 的方法，该方法会调用 Capacitor 相机 API 的 `getPhoto` 方法。

注意这里的魔法：没有任何平台特定代码（网页、iOS 或 Android）！Capacitor 相机插件为我们抽象了这些，只需一个方法调用——`getPhoto()`——就能打开设备相机并允许我们拍照。

最后一步是在 Tab2 页面中使用这个新函数。回到 Tab2.vue 并导入它：

```tsx
import { usePhotoGallery } from '@/composables/usePhotoGallery';
```

接下来，在默认导出中，添加一个属于[组合式 API](https://v3.vuejs.org/guide/composition-api-setup.html#setup)的 setup 方法。从 `usePhotoGallery` 中解构出 `takePhoto` 函数，然后返回它：

```tsx
<script lang="ts">
import { camera, trash, close } from 'ionicons/icons';
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
         IonCol, IonImg } from '@ionic/vue';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

export default  {
  name: 'Tab2',
  components: { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
         IonCol, IonImg },
  setup() {
    const { takePhoto } = usePhotoGallery();

    return {
      takePhoto,
      camera, trash, close
    }
  }
}
</script>
```

保存文件，如果尚未运行，请在浏览器中通过运行 `ionic serve` 重启开发服务器。在照片库标签页中，点击相机按钮。如果你的电脑有摄像头，会出现一个模态窗口。拍一张自拍照吧！

![显示网络摄像头自拍照的照片库应用。](/img/guides/first-app-cap-ng/camera-web.png '照片库中的网络摄像头自拍照')

_(你的自拍可能比我的好看多了)_

拍照后，照片会立即消失。我们仍需在应用中显示它并保存以备将来访问。

## 显示照片

首先，我们将创建一个新类型来定义我们的 Photo，它将保存特定的元数据。将以下 UserPhoto 接口添加到 `usePhotoGallery.ts` 文件中，放在主函数之外的某个位置：

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

回到函数的顶部（在引用 Capacitor 相机插件之后），定义一个数组以便存储使用相机拍摄的每张照片。使用 Vue 的[ref 函数](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref)使其成为响应式变量。

```tsx
const photos = ref<UserPhoto[]>([]);
```

当相机完成拍照后，从 Capacitor 返回的 `Photo` 将被添加到 `photos` 数组中。更新 `takePhoto` 方法，在 `Camera.getPhoto` 行之后添加以下代码：

```tsx
const fileName = new Date().getTime() + '.jpeg';
const savedFileImage = {
  filepath: fileName,
  webviewPath: photo.webPath,
};

photos.value = [savedFileImage, ...photos.value];
```

接下来，更新 return 语句以包含 photos 数组：

```tsx
return {
  photos,
  takePhoto,
};
```

回到 Tab2 组件中，更新导入语句以包含 `UserPhoto` 接口：

```tsx
import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';
```

然后，获取对 photos 数组的访问权限：

```tsx
const { photos, takePhoto } = usePhotoGallery();
```

最后，将 `photos` 添加到 `setup()` 的返回中：

```tsx
return {
  photos,
  takePhoto,
  camera,
  trash,
  close,
};
```

随着照片被存储到主数组中，我们现在可以在屏幕上显示图像了。添加一个[网格组件](https://ionicframework.com/docs/api/grid)，这样每张照片在添加到相册时都能很好地显示，并遍历 Photos 数组中的每张照片，为每张照片添加一个 Image 组件（`<ion-img>`）。将 `src`（源）指向照片的路径：

```tsx
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size="6" :key="photo" v-for="photo in photos">
        <ion-img :src="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- <ion-fab> 标记 -->
</ion-content>
```

保存所有文件。在网页浏览器中，点击相机按钮并拍摄另一张照片。这次，照片会显示在照片库中！

接下来，我们将添加对将照片保存到文件系统的支持，以便以后可以检索并在我们的应用中显示。