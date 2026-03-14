---
sidebar_label: 加载照片
---

# 从文件系统加载照片

我们已经实现了拍照和保存到文件系统的功能。现在还缺少最后一项功能：照片虽然存储在文件系统中，但我们需要一种方法来保存每个文件的引用，以便它们能在照片库中再次显示。

幸运的是，这很简单：我们将利用 Capacitor 的 [Preferences API](https://capacitorjs.com/docs/apis/preferences) 将照片数组存储在键值对存储中。

## Preferences API

首先，在 `src/composables/usePhotoGallery.ts` 文件的 `usePhotoGallery` 函数顶部定义一个常量，作为存储的键名：

```tsx
const PHOTO_STORAGE = 'photos';
```

接下来，添加一个 `cachePhotos` 函数，将照片数组以 JSON 格式保存到偏好设置中：

```tsx
const cachePhotos = () => {
  Preferences.set({
    key: PHOTO_STORAGE,
    value: JSON.stringify(photos.value),
  });
};
```

然后，使用 Vue 的 [watch 函数](https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch) 来监听 `photos` 数组。每当数组被修改时（例如拍照或删除照片），就触发 `cachePhotos` 函数。这样不仅能重用代码，而且无论应用用户何时关闭或切换到其他应用，照片数据都能得到保存。

```tsx
watch(photos, cachePhotos);
```

现在照片数组数据已经可以保存了，接下来创建一个函数，在 Tab2 加载时检索数据。首先从 Preferences 中获取照片数据，然后将每张照片的数据转换为 base64 格式：

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

在移动端（即将实现！），我们可以直接将图片标签的来源 `<img src="x" />` 设置为文件系统中的每张照片文件，从而自动显示它们。然而在 Web 端，我们必须将每张图片从文件系统读取为 base64 格式，因为文件系统 API 在底层将图片以 base64 格式存储在 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) 中。

最后，我们需要一种方式在照片库页面加载时调用 `loadSaved` 函数。为此，可以使用 Vue 的 [mounted 生命周期钩子](https://v3.vuejs.org/guide/composition-api-introduction.html#lifecycle-hook-registration-inside-setup)。首先从 Vue 中导入 `onMounted`：

```tsx
import { ref, onMounted, watch } from 'vue';
```

然后，在 `usePhotoGallery` 函数中添加 `onMounted` 函数并调用 `loadSaved`：

```tsx
onMounted(loadSaved);
```

大功告成！我们已经在 Ionic 应用中构建了一个完整的照片库功能，并且可以在 Web 端运行。接下来，我们将把它改造成适用于 iOS 和 Android 的移动应用！