# 添加移动端支持

我们的照片应用要能在 iOS、Android 和 Web 上运行才算完整，而且所有平台都使用同一套代码。我们只需要做一些小的逻辑调整来支持移动平台，安装一些原生工具，然后在设备上运行应用。让我们开始吧！

首先进行一些小的代码修改，这样当我们将应用部署到设备时，它就能"正常运行"了。

## 平台特定逻辑

首先，我们需要更新照片保存功能以支持移动端。根据平台（移动端或Web端）的不同，我们将运行略有不同的代码。从 Ionic Vue 导入 `Platform` API：

```tsx
import { isPlatform } from '@ionic/vue';
```

在 `savePicture` 函数中，检查应用运行在哪个平台上。如果是"混合"平台（Capacitor，原生运行时），则使用 `readFile` 方法将照片文件读取为 base64 格式。同时，使用 Filesystem API 返回照片的完整文件路径。设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc` 方法（[详情见此](https://capacitorjs.com/docs/basics/utilities#convertfilesrc)）。否则，在 Web 上运行应用时使用与之前相同的逻辑。

```tsx
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string;
  // "hybrid" 将检测移动端 - iOS 或 Android
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

接下来，在 `loadSaved` 函数中添加一些新逻辑。在移动端，我们可以直接指向文件系统中的每个照片文件并自动显示它们。然而在 Web 端，我们必须将每个图像从文件系统读取为 base64 格式。这是因为文件系统 API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。更新 `loadSaved` 函数：

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
      // 仅限 Web 平台：将照片加载为 base64 数据
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
  }

  photos.value = photosInPreferences;
};
```

现在我们的照片应用已经可以在一套代码的基础上运行在 Web、Android 和 iOS 上。接下来，就是你期待已久的部分——将应用部署到设备上。