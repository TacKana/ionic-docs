---
sidebar_label: 照片加载
---

# 从文件系统加载照片

我们已经实现了照片拍摄和保存到文件系统的功能。现在还缺少最后一项功能：照片虽然存储在文件系统中，但我们需要一种保存每个文件引用的方式，以便它们能再次在照片库中显示。

幸运的是，这很简单：我们将利用 Capacitor 的 [Preferences API](https://capacitorjs.com/docs/apis/preferences) 将照片数组存储为键值对。

## Preferences API

首先定义一个常量作为存储键：

```tsx
export class PhotoService {
  public photos: UserPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';

  // 其他代码
}
```

接下来，在 `addNewToGallery` 函数的末尾，添加对 `Preferences.set()` 的调用来保存照片数组。这样每次拍摄新照片时，照片数组都会被存储。无论应用用户何时关闭应用或切换到其他应用，所有照片数据都会被保存。

```tsx
Preferences.set({
  key: this.PHOTO_STORAGE,
  value: JSON.stringify(this.photos),
});
```

照片数组数据保存后，创建一个名为 `loadSaved()` 的函数来检索这些数据。我们使用相同的键来获取 JSON 格式的照片数组，然后将其解析为数组：

```tsx
public async loadSaved() {
  // 检索缓存的照片数组数据
  const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });
  this.photos = (value ? JSON.parse(value) : []) as UserPhoto[];

  // 后续操作...
}
```

在移动端（接下来会讲到！），我们可以直接将图片标签的源 `<img src="x" />` 设置为文件系统中的每个照片文件，从而自动显示它们。但在 Web 端，我们必须使用 `Photo` 对象上的新属性 `base64`，将每个图像从文件系统读取为 base64 格式。这是因为文件系统 API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。下面是你需要在你刚添加的 `loadSaved()` 函数中添加的代码：

```tsx
// 通过读取为 base64 格式来显示照片
for (let photo of this.photos) {
  // 从文件系统读取每个已保存照片的数据
  const readFile = await Filesystem.readFile({
    path: photo.filepath,
    directory: Directory.Data,
  });

  // 仅限 Web 平台：将照片加载为 base64 数据
  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
}
```

之后，在 `tab2.page.ts` 中调用这个新方法，这样当用户首次导航到标签页 2（照片库）时，所有照片都会被加载并显示在屏幕上。

```tsx
async ngOnInit() {
  await this.photoService.loadSaved();
}
```

大功告成！我们已经在 Ionic 应用中构建了一个完整的照片库功能，并且能在 Web 端运行。接下来，我们将把它改造成适用于 iOS 和 Android 的移动应用！