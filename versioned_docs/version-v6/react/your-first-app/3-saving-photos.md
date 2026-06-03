---
sidebar_label: 保存照片
---

# 将照片保存到文件系统

我们现在能够拍摄多张照片并在应用的第二个标签上以相册形式显示它们。但是，这些照片目前还没有被永久存储，因此当应用关闭时，它们将会丢失。

## Filesystem API

幸运的是，将它们保存到文件系统只需要几个步骤。首先打开 `usePhotoGallery` hook（`src/hooks/usePhotoGallery.ts`），并获取 `Filesystem` 类的 `writeFile` 方法：

:::note
我们将首先使用 `writeFile` 方法，但很快就会用到其他方法，所以我们先提前导入它们。
:::

接下来，在 `usePhotoGallery` 中创建几个新函数：

```tsx
export function usePhotoGallery() {
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    const base64Data = await base64FromPath(photo.webPath!);
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // 使用 webPath 显示新图像而不是 base64，因为它
    // 已经加载到内存中
    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };
}

export async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('method did not return a string');
      }
    };
    reader.readAsDataURL(blob);
  });
}
```

:::note
base64FromPath 方法是一个辅助工具，它从提供的路径下载文件并返回该文件的 base64 表示。
:::

我们传入 `photo` 对象，它表示新拍摄的设备照片，以及 fileName，它将提供文件的存储路径。

接下来，我们使用 Capacitor [Filesystem API](https://capacitorjs.com/docs/apis/filesystem) 将照片保存到文件系统。我们首先将照片转换为 base64 格式，然后将数据提供给 Filesystem 的 `writeFile` 函数。

最后，在 `takePhoto` 方法中调用 `setPhotos` 的正下方，调用 `savePicture` 并传入 photo 对象和文件名。以下是完整的方法：

```tsx
const takePhoto = async () => {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
  });

  const fileName = Date.now() + '.jpeg';
  const savedFileImage = await savePicture(photo, fileName);
  const newPhotos = [savedFileImage, ...photos];
  setPhotos(newPhotos);
};
```

大功告成！每次拍摄新照片时，它现在会自动保存到文件系统。
