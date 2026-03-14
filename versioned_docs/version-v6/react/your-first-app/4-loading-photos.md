---
title: 从文件系统加载照片
sidebar_label: 加载照片
---

<head>
  <title>使用键值存储从文件系统加载照片</title>
  <meta
    name="description"
    content="我们已经实现了拍照和保存到文件系统的功能，现在来学习 Ionic 如何利用 Capacitor 的 Preferences API 在键值存储中加载照片。"
  />
</head>

我们已经实现了拍照和保存到文件系统的功能。现在还缺少最后一个功能：照片虽然存储在文件系统中，但我们需要一种方法来保存每个文件的引用，以便它们能够再次在照片库中显示。

幸运的是，这很容易实现：我们将利用 Capacitor 的 [Preferences API](https://capacitorjs.com/docs/apis/preferences) 将照片数组存储在键值存储中。

## Preferences API

首先，在 `src/hooks/usePhotoGallery.ts` 文件中的 `usePhotoGallery` 函数定义之前，定义一个常量变量作为存储的键：

```tsx
const PHOTO_STORAGE = 'photos';
export function usePhotoGallery() {}
```

然后，使用 `Storage` 类来访问设备存储的读写方法：

在 `takePhoto` 函数的末尾，添加一个调用 `Preferences.set()` 来保存照片数组。通过在这里添加，每次拍摄新照片时都会存储照片数组。这样，无论应用用户何时关闭或切换到其他应用，所有照片数据都会被保存。

```tsx
Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
```

保存照片数组数据后，我们将创建一个方法，在钩子加载时检索数据。我们将使用 React 的 `useEffect` 钩子来实现。将其插入到 `takePhoto` 声明之前。以下是代码，我们将逐步解析：

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
      // 仅限 Web 平台：将照片加载为 base64 数据
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
    setPhotos(photosInPreferences);
  };
  loadSaved();
}, []);
```

起初这看起来有点复杂，让我们逐步分析，首先看看传递给钩子的第二个参数：依赖数组 `[]`。

默认情况下，`useEffect` 钩子会在每次组件渲染时被调用，除非我们传入一个依赖数组。在这种情况下，它只会在依赖项更新时运行。在我们的例子中，我们只希望它被调用一次。通过传入一个空数组（不会被更改），我们可以防止钩子被多次调用。

`useEffect` 的第一个参数是效果将调用的函数。我们传入一个匿名箭头函数，并在其中定义另一个异步方法，然后立即调用它。我们必须从钩子内部调用这个异步函数，因为钩子回调本身不能是异步的。

在移动端（接下来会讲到！），我们可以直接将图片标签的源 `<img src=”x” />` 设置为文件系统中的每个照片文件，自动显示它们。然而，在 Web 端，我们必须将每个图像从文件系统读取为 base64 格式，因为文件系统 API 在底层将其存储在 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) 中。

就是这样！我们已经在 Ionic 应用中构建了一个完整的照片库功能，可以在 Web 上运行。接下来，我们将把它转换成一个适用于 iOS 和 Android 的移动应用！