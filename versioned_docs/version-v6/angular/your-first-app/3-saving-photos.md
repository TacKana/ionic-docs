---
sidebar_label: 保存照片
---

# 将照片保存到文件系统

现在我们已经能够拍摄多张照片，并在应用的第二个标签页中显示照片画廊。然而，这些照片目前并未被永久存储，因此当应用关闭时，它们将被删除。

## 文件系统 API

幸运的是，将它们保存到文件系统只需几个步骤。首先在 `PhotoService` 类 (`src/app/services/photo.service.ts`) 中创建一个新的类方法 `savePicture()`。我们传入表示新拍摄设备照片的 `photo` 对象：

```tsx
private async savePicture(photo: Photo) { }
```

我们可以立即在 `addNewToGallery()` 中使用这个新方法：

```tsx
public async addNewToGallery() {
  // 拍摄照片
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, // 基于文件的数据；提供最佳性能
    source: CameraSource.Camera, // 自动使用相机拍摄新照片
    quality: 100 // 最高质量（0 到 100）
  });

  // 保存照片并添加到照片集合
  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

我们将使用 Capacitor 的[文件系统 API](https://capacitorjs.com/docs/apis/filesystem) 将照片保存到文件系统。首先，将照片转换为 base64 格式，然后将数据提供给文件系统的 `writeFile` 函数。回想一下，我们通过在 `tab2.page.html` 中将每个图像的源路径（`src` 属性）设置为 webviewPath 属性来在屏幕上显示每张照片。因此，设置它然后返回新的 Photo 对象。

```tsx
private async savePicture(photo: Photo) {
  // 将照片转换为 base64 格式，这是文件系统 API 保存所必需的
  const base64Data = await this.readAsBase64(photo);

  // 将文件写入数据目录
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  // 使用 webPath 显示新图像，而不是 base64，因为它已经加载到内存中
  return {
    filepath: fileName,
    webviewPath: photo.webPath
  };
}
```

`readAsBase64()` 是我们接下来要定义的辅助函数。通过单独的方法来组织是有用的，因为它需要少量特定于平台（Web 与移动设备）的逻辑——稍后会详细介绍。现在，先实现 Web 运行时的逻辑：

```tsx
private async readAsBase64(photo: Photo) {
  // 获取照片，读取为 blob，然后转换为 base64 格式
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();

  return await this.convertBlobToBase64(blob) as string;
}

private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
```

在 Web 上获取相机照片的 base64 格式似乎比在移动设备上更复杂一些。实际上，我们只是使用内置的 Web API：[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 作为将文件读取为 blob 格式的简洁方式，然后使用 FileReader 的 [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) 将照片 blob 转换为 base64。

好了！现在每次拍摄新照片时，它都会自动保存到文件系统。