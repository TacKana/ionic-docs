---
sidebar_label: 保存照片
---

# 将照片保存到文件系统

我们现在能够在应用的第二标签页中拍摄多张照片并将其显示在相册中。然而，这些照片目前并未永久存储，因此当应用关闭时，它们将被删除。

## Filesystem API

幸运的是，将它们保存到文件系统只需要几个步骤。首先，在 `PhotoService` 类（`src/app/services/photo.service.ts`）中创建一个新的类方法 `savePicture()`。我们传入 `photo` 对象，该对象代表新拍摄的设备照片：

```tsx
private async savePicture(photo: Photo) { }
```

我们可以立即在 `addNewToGallery()` 中使用这个新方法：

```tsx
public async addNewToGallery() {
  // 拍照
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, // 基于文件的数据；提供最佳性能
    source: CameraSource.Camera, // 使用相机自动拍摄新照片
    quality: 100 // 最高质量 (0 到 100)
  });

  // 保存图片并添加到照片集合
  const savedImageFile = await this.savePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

我们将使用 Capacitor [Filesystem API](https://capacitorjs.com/docs/apis/filesystem) 将照片保存到文件系统。首先，将照片转换为 base64 格式，然后将数据提供给 Filesystem 的 `writeFile` 函数。如您所记得，我们在 `tab2.page.html` 中通过将每个图像的源路径（`src` 属性）设置为 webviewPath 属性来在屏幕上显示照片。因此，设置它然后返回新的 Photo 对象。

```tsx
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

  // 使用 webPath 显示新图像而不是 base64，因为它已经加载到内存中
  return {
    filepath: fileName,
    webviewPath: photo.webPath
  };
}
```

接下来我们将定义 `readAsBase64()` 辅助函数。将其组织为单独的方法是有用的，因为它需要少量平台特定（Web 与移动端）的逻辑 - 稍后再详细说明。现在，先实现在 Web 上运行的逻辑：

```tsx
private async readAsBase64(photo: Photo) {
  // 获取照片，读取为 blob，然后转换为 base64 格式
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();

  return await this.convertBlobToBase64(blob) as string;
}

convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onerror = reject;
  reader.onload = () => {
      resolve(reader.result);
  };
  reader.readAsDataURL(blob);
});
```

在 Web 上以 base64 格式获取相机照片似乎比在移动端稍微复杂一些。实际上，我们只是使用内置的 Web API：[fetch()](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) 作为将文件读取为 blob 格式的简便方法，然后使用 FileReader 的 [readAsDataURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/readAsDataURL) 将照片 blob 转换为 base64。

完成了！每次拍摄新照片时，它现在会自动保存到文件系统。
