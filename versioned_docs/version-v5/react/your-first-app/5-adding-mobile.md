---
sidebar_label: 移动端适配
---

# 添加移动端支持

要让我们的照片画廊应用真正完整，就需要让它能在 iOS、Android 和 Web 上运行——而且使用同一套代码。只需要对移动平台做一些逻辑调整，安装一些原生工具，然后在设备上运行应用即可。让我们开始吧！

我们先从一些小的代码修改开始——这样当我们将应用部署到设备上时，它就能“正常工作”了。

## 平台特定逻辑

首先，我们需要更新照片保存功能以支持移动端。在 `savePicture` 函数中，检查应用运行在哪个平台上。如果是“混合”平台（Capacitor 或 Cordova，这两种原生运行时），则使用 `readFile` 方法将照片文件读取为 base64 格式。同时，使用 Filesystem API 返回照片的完整文件路径。设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc` 方法（[详情在此](https://ionicframework.com/docs/core-concepts/webview#file-protocol)）。否则，在 Web 上运行时使用与之前相同的逻辑。

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
    // 通过将 'file://' 路径重写为 HTTP 来显示新图片
    // 详情：https://ionicframework.com/docs/building/webview#file-protocol
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  } else {
    // 使用 webPath 显示新图片，而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  }
};
```

接下来，在 `loadSaved` 函数中添加一些新逻辑。在移动设备上，我们可以直接指向文件系统中的每个照片文件并自动显示它们。然而在 Web 上，我们必须将每个图像从文件系统读取为 base64 格式。这是因为 Filesystem API 底层使用了 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)。更新 `useEffect` 中的 `loadSaved` 函数：

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
      // 仅限 Web 平台：将照片加载为 base64 数据
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }
  }
  setPhotos(photosInPreferences);
};
```

我们的照片画廊现在由一套代码库组成，可以在 Web、Android 和 iOS 上运行。接下来，就是你期待的部分——将应用部署到设备上。