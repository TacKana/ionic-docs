# 添加移动端支持

我们的照片库应用要真正完整，就需要能在 iOS、Android 和 Web 上运行——而且使用同一套代码。只需要对移动平台进行一些小的逻辑调整，安装一些本地工具，然后在设备上运行应用就可以了。让我们开始吧！

首先进行一些小的代码改动——这样当我们部署到设备上时，应用就能"正常运作"了。

## 平台特定逻辑

首先，我们将更新照片保存功能以支持移动端。根据平台的不同——移动端还是 Web端，我们会运行稍微不同的代码。从 Ionic Vue 导入 `Platform` API：

```tsx
import { isPlatform } from '@ionic/vue';
```

在 `savePicture` 函数中，检查应用运行的平台。如果是"混合"平台（Capacitor，本地运行时），则使用 `readFile` 方法将照片文件读取为 base64 格式。同时，使用 Filesystem API 返回照片的完整文件路径。设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc` 方法（[详情在此](https://capacitorjs.com/docs/basics/utilities#convertfilesrc)）。否则，当应用在 Web 上运行时，使用与之前相同的逻辑。

```tsx
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string;
  // "hybrid" 将检测移动端——iOS 或 Android
  if (isPlatform('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!,
    });
    base64Data = file.data;
  } else {
    // 获取照片，读取为 blob，然后转换为 base64 格式
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    base64Data = (await convertBlobToBase64(blob)) as string;
  }
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  if (isPlatform('hybrid')) {
    // 通过将 'file://' 路径重写为 HTTP 来显示新图片
    // 详情：https://ionicframework.com/docs/building/webview#file-protocol
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
    // 使用 webPath 显示新图片而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }
};
```

接下来，在 `loadSaved` 函数中添加一点新逻辑。在移动端，我们可以直接指向 Filesystem 上的每个照片文件并自动显示它们。但在 Web 端，我们必须将每个图像从 Filesystem 读取为 base64 格式。这是因为 Filesystem API 在底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。更新 `loadSaved` 函数：

```tsx
const loadSaved = async () => {
  const photoList = await Preferences.get({ key: PHOTO_STORAGE });
  const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

  // 如果在 Web 端运行...
  if (!isPlatform('hybrid')) {
    for (const photo of photosInPreferences) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      // 仅 Web 平台：以 base64 数据形式加载照片
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
  }

  photos.value = photosInPreferences;
};
```

现在我们的照片库应用由一套可以在 Web、Android 和 iOS 上运行的代码组成。接下来，到了你期待已久的部分——将应用部署到设备上。