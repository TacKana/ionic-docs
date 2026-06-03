---
sidebar_label: 加载照片
---

# 从文件系统加载照片

我们已经实现了拍照和保存到文件系统。还缺少最后一项功能：照片存储在文件系统中，但我们需要一种方法来保存每个文件的指针，以便它们可以再次显示在相册中。

幸运的是，这很容易：我们将利用 Capacitor [Preferences API](https://capacitorjs.com/docs/apis/preferences) 将我们的 Photos 数组存储在键值存储中。

## Preferences API

首先，定义一个将作为存储键的常量变量：

```tsx
export class PhotoService {
  public photos: UserPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';

  // other code
}
```

接下来，在 `addNewToGallery` 函数的最后添加一个调用 `Preferences.set()` 来保存 Photos 数组。通过在这里添加，每次拍摄新照片时都会存储 Photos 数组。这样，无论应用用户何时关闭或切换到其他应用，所有照片数据都会被保存。

```tsx
Preferences.set({
  key: this.PHOTO_STORAGE,
  value: JSON.stringify(this.photos),
});
```

保存了照片数组数据后，创建一个名为 `loadSaved()` 的函数来检索该数据。我们使用相同的键以 JSON 格式检索照片数组，然后将其解析为数组：

```tsx
public async loadSaved() {
  // 检索缓存的照片数组数据
  const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });
  this.photos = (photoList ? JSON.parse(photoList.value) : []) as UserPhoto[];

  // more to come...
}
```

在移动端（接下来会介绍），我们可以直接将图片标签的源 `<img src="x" />` 设置为文件系统上的每个照片文件，从而自动显示它们。但在 Web 上，我们必须使用 `Photo` 对象上的新 `base64` 属性，将每个图像从文件系统读取为 base64 格式。这是因为 Filesystem API 底层使用 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。以下是你需要在刚添加的 `loadSaved()` 函数中添加的代码：

```tsx
// 通过读取为 base64 格式来显示照片
for (let photo of this.photos) {
  // 从文件系统读取每张已保存照片的数据
  const readFile = await Filesystem.readFile({
    path: photo.filepath,
    directory: Directory.Data,
  });

  // 仅 Web 平台：将照片加载为 base64 数据
  photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
}
```

之后，在 `tab2.page.ts` 中调用这个新方法，这样当用户首次导航到 Tab 2（相册）时，所有照片都会被加载并显示在屏幕上。

```tsx
async ngOnInit() {
  await this.photoService.loadSaved();
}
```

就是这样！我们在 Ionic 应用中构建了一个完整的相册功能，可以在 Web 上运行。接下来，我们将把它转变为 iOS 和 Android 的移动应用！
