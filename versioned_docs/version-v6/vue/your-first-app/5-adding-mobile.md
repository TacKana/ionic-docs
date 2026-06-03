---
sidebar_label: 添加移动端支持
---

# 添加移动端支持

我们的相册应用在同时在 iOS、Android 和 Web 上运行之前还不算完整——全部使用同一个代码库。只需要一些小的逻辑更改来支持移动平台，安装一些原生工具，然后在设备上运行应用。开始吧！

让我们先从一些小的代码更改开始——然后我们的应用在部署到设备时将"正常工作"。

## 平台特定逻辑

首先，我们将更新照片保存功能以支持移动端。根据平台（移动端或 Web）的不同，我们将运行略有不同的代码。从 Ionic Vue 导入 `Platform` API：

```tsx
import { isPlatform } from '@ionic/vue';
```

在 `savePicture` 函数中，检查应用运行在哪个平台。如果是"hybrid"（Capacitor，原生运行时），则使用 `readFile` 方法将照片文件读取为 base64 格式。同时，使用 Filesystem API 返回照片的完整文件路径。设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc` 方法（[详情在此](https://capacitorjs.com/docs/basics/utilities#convertfilesrc)）。否则，在 Web 上运行时使用与之前相同的逻辑。

```tsx
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string;
  // "hybrid" 将检测到移动端 - iOS 或 Android
  if (isPlatform('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!,
    });
    base64Data = file.data;
  } else {
    // 获取照片，以 blob 形式读取，然后转换为 base64 格式
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
    // 通过将 'file://' 路径重写为 HTTP 来显示新图像
    // 详情：https://ionicframework.com/docs/building/webview#file-protocol
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
    // 使用 webPath 显示新图像而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }
};
```

接下来，在 `loadSaved` 函数中添加新的逻辑。在移动设备上，我们可以直接指向文件系统上的每个照片文件并自动显示它们。然而，在 Web 上，我们必须从文件系统中将每张图像读取为 base64 格式。这是因为 Filesystem API 在底层使用 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。更新 `loadSaved` 函数：

```tsx
const loadSaved = async () => {
  const photoList = await Preferences.get({ key: PHOTO_STORAGE });
  const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

  // 如果在 Web 上运行...
  if (!isPlatform('hybrid')) {
    for (const photo of photosInPreferences) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      // 仅 Web 平台：将照片加载为 base64 数据
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
  }

  photos.value = photosInPreferences;
};
```

我们的相册现在由可以在 Web、Android 和 iOS 上运行的单一代码库组成。接下来，是你期待已久的部分——将应用部署到设备上。
