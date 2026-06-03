---
sidebar_label: 添加移动端支持
---

# 添加移动端支持

我们的相册应用直到能在 iOS、Android 和 Web 上运行才算完成——全部使用同一套代码库。只需进行一些小的逻辑更改来支持移动平台，安装一些原生工具，然后在设备上运行应用。让我们开始吧！

让我们先做一些小的代码更改——这样当我们部署到设备时，应用就能"直接运行"。

## 平台特定逻辑

首先，我们将更新照片保存功能以支持移动端。在 `savePicture` 函数中，检查应用运行在哪个平台上。如果是"hybrid"（Capacitor 或 Cordova，两种原生运行时），则使用 `readFile` 方法将照片文件读取为 base64 格式。同时，使用 Filesystem API 返回照片的完整文件路径。在设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc` 方法（[详情见此处](https://ionicframework.com/docs/core-concepts/webview#file-protocol)）。否则，在 Web 上运行应用时使用与之前相同的逻辑。

```tsx
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string;
  // "hybrid" 将检测 Cordova 或 Capacitor；
  if (isPlatform('hybrid')) {
    const file = await Filesystem.readFile({
      path: photo.path!,
    });
    base64Data = file.data;
  } else {
    base64Data = await base64FromPath(photo.webPath!);
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
    // 使用 webPath 来显示新图像而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }
};
```

接下来，在 `loadSaved` 函数中添加新的逻辑。在移动端，我们可以直接指向文件系统上的每个照片文件，它们会自动显示。然而在 Web 上，我们必须从文件系统中将每个图像读取为 base64 格式。这是因为 Filesystem API 在底层使用 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。将 `useEffect` 中的 `loadSaved` 函数更新为：

```tsx
const loadSaved = async () => {
  const { value } = await Preferences.get({ key: PHOTO_STORAGE });

  const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];
  // 如果在 Web 上运行...
  if (!isPlatform('hybrid')) {
    for (let photo of photosInPreferences) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      // Web 平台专用：将照片作为 base64 数据加载
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
  }
  setPhotos(photosInPreferences);
};
```

我们的相册现在由一套代码库组成，可在 Web、Android 和 iOS 上运行。接下来是您一直期待的部分——将应用部署到设备上。
