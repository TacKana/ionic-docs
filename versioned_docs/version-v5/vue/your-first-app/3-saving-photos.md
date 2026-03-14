---
sidebar_label: 保存照片
---

# 将照片保存至文件系统

目前我们已经能够拍摄多张照片，并在应用第二个标签页的相册中显示它们。然而这些照片目前并未被永久存储，因此当应用关闭时，它们将会丢失。

## 文件系统 API

幸运的是，将照片保存到文件系统只需几个步骤。首先打开 `usePhotoGallery` 函数（位于 `src/composables/usePhotoGallery.ts`），并从 `Filesystem` 类中获取 `writeFile` 方法的访问权限：

接下来，创建几个新函数。文件系统 API 要求写入磁盘的文件必须以 base64 数据格式传递，因此这个辅助函数稍后将用于协助完成此任务：

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

接着，添加一个将照片保存到文件系统的函数。我们传入表示新拍摄设备照片的 `photo` 对象，以及提供文件存储路径的 `fileName` 参数。

然后我们使用 Capacitor 的[文件系统 API](https://capacitorjs.com/docs/apis/filesystem) 将照片保存到文件系统。我们首先将照片转换为 base64 格式，然后将数据传递给文件系统的 `writeFile` 函数：

```tsx
const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
  let base64Data: string;

  // 获取照片，读取为 blob，然后转换为 base64 格式
  const response = await fetch(photo.webPath!);
  const blob = await response.blob();
  base64Data = (await convertBlobToBase64(blob)) as string;

  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data,
  });

  // 使用 webPath 显示新图像而非 base64 格式，
  // 因为它已经加载到内存中
  return {
    filepath: fileName,
    webviewPath: photo.webPath,
  };
};
```

最后，更新 `takePhoto` 函数以调用 `savePicture`。照片保存后，将其插入响应式 `photos` 数组的前端：

```tsx
const takePhoto = async () => {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
  });

  const fileName = new Date().getTime() + '.jpeg';
  const savedFileImage = await savePicture(photo, fileName);

  photos.value = [savedFileImage, ...photos.value];
};
```

大功告成！现在每次拍摄新照片时，它都会自动保存到文件系统中。