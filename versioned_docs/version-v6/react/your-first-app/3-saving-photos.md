---
sidebar_label: 保存照片
---

# 将照片保存到文件系统

目前我们已经能够拍摄多张照片，并在应用的第二个标签页中显示照片画廊。但这些照片目前并未永久存储，因此当应用关闭时，它们将会丢失。

## 文件系统 API

幸运的是，只需几个步骤即可将它们保存到文件系统。首先打开 `usePhotoGallery` 钩子（`src/hooks/usePhotoGallery.ts`），并从 `Filesystem` 类中获取 `writeFile` 方法的访问权限：

:::note
我们将先使用 `writeFile` 方法，但很快也会用到其他方法，所以现在一并导入它们。
:::

接下来，在 `usePhotoGallery` 中创建两个新函数：

```tsx
export function usePhotoGallery() {
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    const base64Data = await base64FromPath(photo.webPath!);
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    // 使用 webPath 来显示新图像而非 base64，因为它已经加载到内存中
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

我们传入 `photo` 对象（代表新捕获的设备照片）以及 `fileName`（为文件存储提供路径）。

接着，我们使用 Capacitor 的 [Filesystem API](https://capacitorjs.com/docs/apis/filesystem) 将照片保存到文件系统。首先将照片转换为 base64 格式，然后将数据传递给 Filesystem 的 `writeFile` 函数。

最后，在 `takePhoto` 方法中调用 `setPhotos` 的位置下方，直接调用 `savePicture` 并传入照片对象和文件名。以下是完整方法：

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

完成！现在每次拍摄新照片时，它都会自动保存到文件系统中。