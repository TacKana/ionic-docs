---
strip_number_prefixes: false
---

# 添加移动端支持

我们的照片画廊应用需要能够在 iOS、Android 和 Web 上运行——所有这些都使用同一套代码库——才算真正完成。只需要做一些小的逻辑调整来支持移动平台，安装一些原生工具，然后在设备上运行应用即可。让我们开始吧！

## 导入 Platform API

让我们先从一些小的代码修改开始——这样当我们把应用部署到设备上时，它就能“正常运行”了。

将 Ionic 的 [Platform API](https://ionicframework.com/docs/angular/platform) 导入到 `photo.service.ts` 中，这个 API 用于获取当前设备的信息。在这种情况下，它对于根据应用运行平台（Web 或移动端）选择执行哪些代码非常有用：

```tsx
import { Platform } from '@ionic/angular';

export class PhotoService {
  public photos: UserPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  // 其他代码
}
```

## 平台特定逻辑

首先，我们将更新照片保存功能以支持移动端。在 `readAsBase64()` 函数中，检查应用运行在哪个平台上。如果是“混合”平台（Capacitor 或 Cordova，两种原生运行时），则使用 Filesystem 的 `readFile()` 方法将照片文件读取为 base64 格式。否则，当应用在 Web 上运行时，使用与之前相同的逻辑：

```tsx
private async readAsBase64(photo: Photo) {
  // "hybrid" 将检测到 Cordova 或 Capacitor
  if (this.platform.is('hybrid')) {
    // 将文件读取为 base64 格式
    const file = await Filesystem.readFile({
      path: photo.path
    });

    return file.data;
  }
  else {
    // 获取照片，读取为 blob，然后转换为 base64 格式
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
}
```

接下来，更新 `savePicture()` 方法。当在移动端运行时，将 `filepath` 设置为 `writeFile()` 操作的结果——`savedFile.uri`。设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc()` 方法（[详情在此](https://ionicframework.com/docs/core-concepts/webview#file-protocol)）。

```tsx
// 将图片保存到设备文件中
private async savePicture(photo: Photo) {
  // 将照片转换为 base64 格式，这是 Filesystem API 保存所必需的
  const base64Data = await this.readAsBase64(photo);

  // 将文件写入数据目录
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  if (this.platform.is('hybrid')) {
    // 通过将 'file://' 路径重写为 HTTP 来显示新图像
    // 详情：https://ionicframework.com/docs/building/webview#file-protocol
    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri),
    };
  }
  else {
    // 使用 webPath 来显示新图像，而不是 base64，因为它已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }
}
```

接下来，回到我们之前为 Web 实现的 `loadSaved()` 函数。在移动端，我们可以直接将图片标签 `<img src="x" />` 的源设置为 Filesystem 中的每个照片文件，从而自动显示它们。因此，只有 Web 需要将每个图像从 Filesystem 读取为 base64 格式。更新这个函数，在 Filesystem 代码周围添加一个 _if 语句_：

```tsx
public async loadSaved() {
  // 检索缓存的照片数组数据
  const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });
  this.photos = (value ? JSON.parse(value) : []) as UserPhoto[];

  // 检测是否在 Web 上运行的最简单方法：
  // “当平台不是混合平台时，执行此操作”
  if (!this.platform.is('hybrid')) {
    // 通过读取为 base64 格式来显示照片
    for (let photo of this.photos) {
      // 从 Filesystem 读取每个已保存照片的数据
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data
      });

      // 仅 Web 平台：将照片加载为 base64 数据
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

现在，我们的照片画廊应用已经拥有了一个可以在 Web、Android 和 iOS 上运行的统一代码库。接下来，就是您一直期待的环节——将应用部署到设备上。