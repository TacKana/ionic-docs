---
sidebar_label: 加载照片
---

# 从文件系统加载照片

我们已经实现了拍照和保存到文件系统。还缺少最后一个功能：照片存储在文件系统中，但我们需要一种方法来保存每个文件的指针，以便它们可以再次显示在相册中。

幸运的是，这很简单：我们将利用 Capacitor [Preferences API](https://capacitorjs.com/docs/apis/preferences) 将我们的照片数组存储在键值存储中。

## Preferences API

首先，在 `src/composables/usePhotoGallery.ts` 的 `usePhotoGallery` 函数顶部定义一个常量变量，它将作为存储的键：

```tsx
const PHOTO_STORAGE = 'photos';
```

接下来，添加一个 `cachePhotos` 函数，将照片数组以 JSON 格式保存到 preferences：

```tsx
const cachePhotos = () => {
  Preferences.set({
    key: PHOTO_STORAGE,
    value: JSON.stringify(photos.value),
  });
};
```

接下来，使用 Vue 的 [watch 函数](https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch) 来监视 `photos` 数组。每当数组被修改时（在此情况下，是拍照或删除照片），触发 `cachePhotos` 函数。我们不仅能够复用代码，而且无论应用用户何时关闭应用或切换到其他应用，照片数据始终被保存。

```tsx
watch(photos, cachePhotos);
```

现在照片数组数据已保存，创建一个函数用于在 Tab2 加载时检索数据。首先，从 Preferences 中检索照片数据，然后将每张照片的数据转换为 base64 格式：

```tsx
const loadSaved = async () => {
  const photoList = await Preferences.get({ key: PHOTO_STORAGE });
  const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

  for (const photo of photosInPreferences) {
    const file = await Filesystem.readFile({
      path: photo.filepath,
      directory: Directory.Data,
    });
    photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
  }

  photos.value = photosInPreferences;
};
```

在移动设备上（接下来的内容！），我们可以直接将图像标签的源——`<img src="x" />`——设置为文件系统上的每个照片文件，它们会自动显示。然而，在 Web 上，我们必须从文件系统中将每张图像读取为 base64 格式，因为 Filesystem API 在底层将它们以 base64 格式存储在 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) 中。

最后，我们需要一种方法来在相册页面加载时调用 `loadSaved` 函数。为此，使用 Vue 的 [mounted 生命周期钩子](https://v3.vuejs.org/guide/composition-api-introduction.html#lifecycle-hook-registration-inside-setup)。首先，从 Vue 导入 `onMounted`：

```tsx
import { ref, onMounted, watch } from 'vue';
```

然后，在 `usePhotoGallery` 函数内部，添加 `onMounted` 函数并调用 `loadSaved`：

```tsx
onMounted(loadSaved);
```

就这样！我们已经在 Ionic 应用中构建了一个完整的相册功能，可以在 Web 上运行。接下来，我们将把它转变为适用于 iOS 和 Android 的移动应用！
