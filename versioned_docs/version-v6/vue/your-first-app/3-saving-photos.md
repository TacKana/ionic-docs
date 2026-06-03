---
sidebar_label: 保存照片
---

# 将照片保存到文件系统

我们现在能够拍摄多张照片并在应用第二个标签的相册中显示它们。然而，这些照片目前并未永久存储，因此当应用关闭时，它们将会丢失。

## Filesystem API

幸运的是，将它们保存到文件系统只需要几个步骤。首先打开 `usePhotoGallery` 函数（`src/composables/usePhotoGallery.ts`），并获取 `Filesystem` 类中 `writeFile` 方法的访问权限：

接下来，创建几个新函数。Filesystem API 要求写入磁盘的文件必须以 base64 数据形式传递，因此这个辅助函数将用于协助处理：

```tsx
const convertBlobToBase64 = (blob: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
```

接下来，添加一个将照片保存到文件系统的函数。我们传入 `photo` 对象（代表新拍摄的设备照片）以及 fileName，它将提供文件存储的路径。

然后，我们使用 Capacitor [Filesystem API](https://capacitorjs.com/docs/apis/filesystem) 将照片保存到文件系统。我们首先将照片转换为 base64 格式，然后将数据提供给 Filesystem 的 `writeFile` 函数：

```tsx
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string;

  // 获取照片，以 blob 形式读取，然后转换为 base64 格式
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();
  base64Data = (await convertBlobToBase64(blob)) as string;

  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  // 使用 webPath 显示新图像而不是 base64，因为它已经加载到内存中
  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  };
};
```

最后，更新 `takePhoto` 函数以调用 `savePicture`。照片保存后，将其插入到响应式 `photos` 数组的前面：

```tsx
const takePhoto = async () => {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
  });

  const fileName = Date.now() + '.jpeg';
  const savedFileImage = await savePicture(photo, fileName);

  photos.value = [savedFileImage, ...photos.value];
};
```

搞定了！每次拍摄新照片时，它现在会自动保存到文件系统。
