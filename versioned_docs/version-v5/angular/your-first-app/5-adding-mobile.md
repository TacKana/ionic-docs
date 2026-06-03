---
strip_number_prefixes: false
---

# 添加移动端支持

我们的相册应用只有在 iOS、Android 和 Web 上都运行时才算完整 - 全部使用同一个代码库。只需要做一些小的逻辑更改来支持移动平台，安装一些原生工具，然后在设备上运行应用。让我们开始吧！

## 导入 Platform API

让我们从做一些小的代码更改开始 - 这样当我们部署到设备时，应用就能"直接运行"。

将 Ionic [Platform API](https://ionicframework.com/docs/angular/platform) 导入到 `photo.service.ts` 中，该 API 用于获取有关当前设备的信息。在这种情况下，它有助于根据应用运行的平台（Web 或移动端）选择要执行的代码：

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

首先，我们将更新照片保存功能以支持移动端。在 `readAsBase64()` 函数中，检查应用运行在哪个平台上。如果是 "hybrid"（Capacitor 或 Cordova，两种原生运行时），则使用 Filesystem 的 `readFile()` 方法将照片文件读取为 base64 格式。否则，保持之前运行在 Web 上的逻辑：

```tsx
private async readAsBase64(photo: Photo) {
  // "hybrid" 会检测 Cordova 或 Capacitor
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

接下来，更新 `savePicture()` 方法。在移动端运行时，将 `filepath` 设置为 `writeFile()` 操作的结果 `savedFile.uri`。设置 `webviewPath` 时，使用特殊的 `Capacitor.convertFileSrc()` 方法（[详细信息在此](https://ionicframework.com/docs/core-concepts/webview#file-protocol)）。

```tsx
// 将图片保存到设备上的文件
  private async savePicture(photo: Photo) {
    // 将照片转换为 base64 格式，Filesystem API 需要此格式来保存
    const base64Data = await this.readAsBase64(photo);

    // 将文件写入数据目录
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    if (this.platform.is('hybrid')) {
      // 通过重写 'file://' 路径为 HTTP 来显示新图像
      // 详细信息：https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      // 使用 webPath 显示新图像而不是 base64，因为它已经加载到内存中
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      };
    }
  }
```

接下来，回到我们之前为 Web 实现的 `loadSaved()` 函数。在移动端，我们可以直接将图像标签的来源 `<img src="x" />` 设置为文件系统上的每个照片文件，从而自动显示它们。因此，只有 Web 需要将每张图像从文件系统读取为 base64 格式。更新此函数，在 Filesystem 代码周围添加一个 _if 语句_：

```tsx
public async loadSaved() {
  // 检索缓存的照片数组数据
  const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photoList.value) || [];

  // 检测在 Web 上运行的最简单方法：
  // "当平台不是 hybrid 时，执行此操作"
  if (!this.platform.is('hybrid')) {
    // 通过读取为 base64 格式来显示照片
    for (let photo of this.photos) {
      // 从文件系统读取每张已保存照片的数据
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

我们的相册现在由一个代码库组成，可以在 Web、Android 和 iOS 上运行。接下来，您期待已久的时刻到了 - 将应用部署到设备上。
