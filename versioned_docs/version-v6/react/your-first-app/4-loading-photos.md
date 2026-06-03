---
title: 从文件系统加载照片
sidebar_label: 加载照片
---

<head>
  <title>使用键值存储从文件系统加载照片</title>
  <meta
    name="description"
    content="我们已经实现了拍照和保存到文件系统的功能，现在了解 Ionic 如何利用 Capacitor Preferences API 通过键值存储加载我们的照片。"
  />
</head>

我们已经实现了拍照和保存到文件系统的功能。还缺少最后一项功能：照片存储在文件系统中，但我们需要一种方法来保存指向每个文件的指针，以便它们可以再次显示在相册中。

幸运的是，这很简单：我们将利用 Capacitor [Preferences API](https://capacitorjs.com/docs/apis/preferences) 将我们的照片数组存储在键值存储中。

## Preferences API

首先，在 `src/hooks/usePhotoGallery.ts` 中的 `usePhotoGallery` 函数定义之前定义一个常量变量，它将作为存储的键：

```tsx
const PHOTO_STORAGE = 'photos';
export function usePhotoGallery() {}
```

然后，使用 `Storage` 类获取用于读写设备存储的 get 和 set 方法：

在 `takePhoto` 函数的末尾，添加一个 `Preferences.set()` 调用来保存 Photos 数组。通过将其添加到这里，每次拍摄新照片时都会存储 Photos 数组。这样，无论应用用户何时关闭或切换到其他应用，所有照片数据都已保存。

```tsx
Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
```

保存了照片数组数据后，我们将创建一个方法，在 hook 加载时检索数据。我们将使用 React 的 `useEffect` hook 来实现。将此代码插入到 `takePhoto` 声明之前。以下是代码，我们将对其进行分解说明：

```tsx
useEffect(() => {
  const loadSaved = async () => {
    const { value } = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];

    for (let photo of photosInPreferences) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      // 仅限 Web 平台：将照片作为 base64 数据加载
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
    setPhotos(photosInPreferences);
  };
  loadSaved();
}, []);
```

这起初看起来有点吓人，所以让我们逐步分析，首先看看我们传入 hook 的第二个参数：依赖数组 `[]`。

默认情况下，`useEffect` hook 在每次组件渲染时都会被调用，除非我们传入了一个依赖数组。在这种情况下，它只会在依赖项更新时运行。在我们的场景中，我们只希望它被调用一次。通过传入一个不会被更改的空数组，我们可以防止 hook 被多次调用。

`useEffect` 的第一个参数是 effect 将要调用的函数。我们传入一个匿名箭头函数，在其中定义了另一个异步方法，然后立即调用它。我们必须从 hook 内部调用异步函数，因为 hook 回调本身不能是异步的。

在移动设备上（接下来会介绍！），我们可以直接将图像标签的源 `<img src="x" />` 设置为文件系统中每个照片文件，它们将自动显示。然而，在 Web 上，我们必须从文件系统中将每个图像读取为 base64 格式，因为 Filesystem API 在底层将其以 base64 格式存储在 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) 中。

就这样！我们已经在 Ionic 应用中构建了一个完整的相册功能，可以在 Web 上运行。接下来，我们将把它转变为适用于 iOS 和 Android 的移动应用！
