---
sidebar_label: 拍照功能
---

# 使用相机拍照

现在到了有趣的部分——使用 Capacitor 的 [Camera API](https://capacitorjs.com/docs/apis/camera) 为应用添加设备相机拍照功能。我们将首先为网页版本构建此功能，然后稍作调整使其在移动端（iOS 和 Android）也能正常工作。

为此，我们将创建一个独立的组合函数，并结合 Vue 的组合式 API 来管理相册中的照片。

:::note
如果你不熟悉 Vue 的组合式 API，官方 Vue 文档中的 [为什么要有组合式 API？](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) 是一个很好的入门资源。
:::

在 `src/composables/usePhotoGallery.ts` 路径下创建一个新文件并打开。

首先导入我们将要用到的 Vue 核心工具和 Capacitor 工具：

```tsx
import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
```

接下来，创建一个名为 `usePhotoGallery` 的函数：

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

我们的 `usePhotoGallery` 函数公开了一个名为 `takePhoto` 的方法，该方法会调用 Capacitor Camera API 的 `getPhoto` 方法。

注意这里的巧妙之处：这里没有特定平台（网页、iOS 或 Android）的代码！Capacitor Camera 插件为我们抽象了这些细节，只留下一个方法调用——`getPhoto()`——它将打开设备的相机并允许我们拍照。

最后一步是在 Tab2 页面中使用这个新函数。回到 Tab2.vue 并导入它：

```tsx
import { usePhotoGallery } from '@/composables/usePhotoGallery';
```

接下来，在默认导出中，添加一个属于[组合式 API](https://v3.vuejs.org/guide/composition-api-setup.html#setup) 的 `setup` 方法。从 `usePhotoGallery` 中解构出 `takePhoto` 函数，然后将其返回：

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

保存文件，如果你还没有这样做，请通过运行 `ionic serve` 在浏览器中重启开发服务器。在相册选项卡中，点击相机按钮。如果你的电脑有摄像头，会弹出一个模态窗口。拍一张自拍照吧！

![显示网络摄像头自拍的相册应用。](/img/guides/first-app-cap-ng/camera-web.png '相册中的网络摄像头自拍')

_(你的自拍可能比我的好得多)_

拍照后，照片会立即消失。我们仍然需要在应用中显示它并保存以备将来访问。

## 显示照片

首先，我们将创建一个新类型来定义我们的照片，它将保存特定的元数据。将以下 `UserPhoto` 接口添加到 `usePhotoGallery.ts` 文件中，放在主函数之外的某个位置：

```tsx
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
```

回到函数的顶部（在引用 Capacitor Camera 插件之后），定义一个数组，以便我们可以存储用相机拍摄的每张照片。使用 Vue 的 [ref 函数](https://v3.vuejs.org/guide/composition-api-introduction.html#reactive-variables-with-ref) 使其成为响应式变量。

```tsx
const photos = ref<UserPhoto[]>([]);
```

当相机完成拍照后，从 Capacitor 返回的 `Photo` 结果将被添加到 `photos` 数组中。更新 `takePhoto` 方法，在 `Camera.getPhoto` 行之后添加以下代码：

```tsx
const fileName = Date.now() + '.jpeg';
const savedFileImage = {
  filepath: fileName,
  webviewPath: photo.webPath,
};

photos.value = [savedFileImage, ...photos.value];
```

接下来，更新返回语句以包含 `photos` 数组：

```tsx
return {
  photos,
  takePhoto,
};
```

回到 Tab2 组件，更新导入语句以包含 `UserPhoto` 接口：

```tsx
import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';
```

然后，获取 `photos` 数组的访问权限：

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

将照片存入主数组后，我们现在可以在屏幕上显示这些图像。添加一个 [Grid 组件](https://ionicframework.com/docs/api/grid)，这样每张照片在添加到相册时都能美观地显示，并遍历 `photos` 数组中的每张照片，为每张照片添加一个 Image 组件 (`<ion-img>`)。将 `src`（源）指向照片的路径：

```tsx
<ion-content>
  <ion-grid>
    <ion-row>
      <ion-col size="6" :key="photo" v-for="photo in photos">
        <ion-img :src="photo.webviewPath"></ion-img>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- <ion-fab> 标签 -->
</ion-content>
```

保存所有文件。在网页浏览器中，点击相机按钮并拍摄另一张照片。这次，照片会显示在相册中！

接下来，我们将添加将照片保存到文件系统的支持，以便以后可以检索并在应用中显示它们。