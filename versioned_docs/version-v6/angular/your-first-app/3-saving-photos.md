---
sidebar_label: 保存照片
---

# 将照片保存到文件系统

我们现在可以在应用第二个标签页上拍摄多张照片并将其显示在相册中。但是，这些照片目前尚未永久存储，因此当应用关闭时，它们将被删除。

## Filesystem API

幸运的是，将它们保存到文件系统只需要几个步骤。首先，在 `PhotoService` 类（`src/app/services/photo.service.ts`）中创建一个新的类方法 `savePicture()`。我们传入 `photo` 对象，它代表新捕获的设备照片：

```tsx
private async savePicture(photo: Photo) { }
```

我们可以立即在 `addNewToGallery()` 中使用这个新方法：

```tsx
public async addNewToGallery() {
  // 拍照
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, // 基于文件的数据；提供最佳性能
    source: CameraSource.Camera, // 自动用相机拍摄新照片
    quality: 100 // 最高质量（0 到 100）
  });

  // 保存照片并添加到照片集合中
  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

我们将使用 Capacitor [Filesystem API](https://capacitorjs.com/docs/apis/filesystem) 将照片保存到文件系统。首先，将照片转换为 base64 格式，然后将数据提供给 Filesystem 的 `writeFile` 函数。你记得，我们通过在 `tab2.page.html` 中将每个图片的源路径（`src` 属性）设置为 `webviewPath` 属性来在屏幕上显示照片。所以，设置它然后返回新的 Photo 对象。

```tsx
private async savePicture(photo: Photo) {
  // 将照片转换为 base64 格式，Filesystem API 保存时需要
  const base64Data = await this.readAsBase64(photo);

  // 将文件写入数据目录
  const fileName = Date.now() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  });

  // 使用 webPath 显示新图片而不是 base64，因为它
  // 已经加载到内存中
  return {
    filepath: fileName,
    webviewPath: photo.webPath
  };
}
```

`readAsBase64()` 是我们接下来要定义的辅助函数。通过单独的方法来组织它很有用，因为它需要少量的平台特定（Web 与移动端）逻辑——稍后会详细介绍。现在，实现 Web 上运行的逻辑：

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

在 Web 上以 base64 格式获取相机照片似乎比在移动端上稍微棘手一些。实际上，我们只是使用了内置的 Web API：[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 作为一种简洁的方式来将文件读取为 blob 格式，然后使用 FileReader 的 [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) 将照片 blob 转换为 base64。

大功告成！每次拍摄新照片时，它现在会自动保存到文件系统。
