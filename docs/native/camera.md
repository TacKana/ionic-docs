---
title: Camera Capacitor 插件 API
description: Camera API 提供使用相机拍照或从相册中选择已有照片的功能。
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/camera/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/camera/src/definitions.ts
sidebar_label: 相机
translated: true
source_hash: 9e1b4f3
---
# @capacitor/camera

Camera API 提供使用相机拍照或从相册中选择已有照片的功能。

## 安装

```bash
npm install @capacitor/camera
npx cap sync
```

## iOS

iOS 需要在 `Info.plist` 中添加并填写以下使用说明：

- `NSCameraUsageDescription`（隐私 - 相机使用说明）
- `NSPhotoLibraryAddUsageDescription`（隐私 - 相册添加使用说明）
- `NSPhotoLibraryUsageDescription`（隐私 - 相册使用说明）

阅读 [iOS 指南](https://capacitorjs.com/docs/ios) 中的 [配置 `Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) 了解有关在 Xcode 中设置 iOS 权限的更多信息。

## Android

从设备相册选取现有图片时，现在使用 Android Photo Picker 组件。Photo Picker 可在满足以下条件的设备上使用：

- 运行 Android 11（API 级别 30）或更高版本
- 通过 Google 系统更新接收模块化系统组件变更

较旧的设备和运行 Android 11 或 12 且支持 Google Play 服务的 Android Go 设备可以安装回溯移植版本的 photo picker。要启用通过 Google Play 服务自动安装回溯移植的 photo picker 模块，请在 `AndroidManifest.xml` 文件的 `<application>` 标签中添加以下条目：

```xml

<service android:name="com.google.android.gms.metadata.ModuleDependencies"
    android:enabled="false"
    android:exported="false"
    tools:ignore="MissingClass">
    <intent-filter>
        <action android:name="com.google.android.gms.metadata.MODULE_DEPENDENCIES" />
    </intent-filter>
    <meta-data android:name="photopicker_activity:0:required" android:value="" />
</service>
```

如果不添加该条目，在不支持 Photo Picker 的设备上，Photo Picker 组件将回退到 `Intent.ACTION_OPEN_DOCUMENT`。

Camera 插件不需要权限，除非使用 `saveToGallery: true`，在这种情况下，应将以下权限添加到 `AndroidManifest.xml`：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

您也可以仅在需要这些权限的 Android 版本上指定它们：

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="29"/>
```

存储权限用于读取/保存照片文件。

阅读 [Android 指南](https://capacitorjs.com/docs/android) 中的 [设置权限](https://capacitorjs.com/docs/android/configuration#setting-permissions) 了解有关设置 Android 权限的更多信息。

此外，由于 Camera API 会启动一个单独的 Activity 来处理拍照，您应该在 `App` 插件中监听 `appRestoredResult`，以处理在 Activity 运行时应用被操作系统终止时可能发送的相机数据。

### 变量

此插件将使用以下项目变量（在应用的 `variables.gradle` 文件中定义）：

- `androidxExifInterfaceVersion`：`androidx.exifinterface:exifinterface` 的版本（默认值：`1.4.1`）
- `androidxMaterialVersion`：`com.google.android.material:material` 的版本（默认值：`1.13.0`）

## PWA 注意事项

在 Web 上，`takePhoto` 可以使用 [PWA Elements](https://capacitorjs.com/docs/web/pwa-elements) 的 `pwa-camera-modal` 自定义元素提供类似原生的相机 UI。如果未注册该元素，插件将回退到 `<input type="file">` 选择器。无论是否安装了 PWA Elements，`chooseFromGallery` 在 Web 上始终使用 `<input type="file">`。

### 以编程方式安装 PWA Elements

有关完整说明，请参阅 [PWA Elements 安装指南](https://capacitorjs.com/docs/web/pwa-elements#installation)。

### 提供自定义相机元素

您无需使用 `@ionic/pwa-elements`，而是可以注册自己的 `pwa-camera-modal` 自定义元素。插件通过以下接口与其交互：

| 成员 | 类型 | 描述 |
|---|---|---|
| `facingMode` | `string` 属性 | 在显示前设置为 `'user'`（前置摄像头）或 `'environment'`（后置摄像头） |
| `componentOnReady()` | 方法 → `Promise<void>` | 插件创建元素后调用；当元素就绪时 resolve |
| `present()` | 方法 | 由插件调用以显示相机 UI |
| `dismiss()` | 方法 | 由插件调用以在拍照或取消后关闭相机 UI |
| `onPhoto` | 事件 | 当用户拍照或取消时触发。`event.detail` 必须是 `Blob`（已拍照）、`null`（用户取消）或 `Error`（出现问题） |

```typescript
class MyCameraModal extends HTMLElement {
  facingMode = 'environment';

  componentOnReady() {
    return Promise.resolve();
  }

  present() {
    // 显示您的自定义相机 UI，完成后只触发一次 'onPhoto' 事件：
    //   - Blob：用户拍照
    //   - null：用户取消
    //   - Error：出现问题
    // 示例：
    this.dispatchEvent(new CustomEvent('onPhoto', { detail: photoBlob }));
  }

  dismiss() {
    // 隐藏您的自定义相机 UI（插件在接收到 'onPhoto' 后调用）
  }
}

customElements.define('pwa-camera-modal', MyCameraModal);
```

## 示例

### 拍照

```typescript
import { Camera } from '@capacitor/camera';

const takePicture = async () => {
  try {
    const result = await Camera.takePhoto({
      quality: 90,
      includeMetadata: true,
    });

    // result.webPath 可以直接设置为图片元素的 src
    imageElement.src = result.webPath;

    // 在原生平台：将 result.uri 传递给 Filesystem API 获取全分辨率 base64，
    // 或使用 result.thumbnail 获取较低分辨率的 base64 预览。
    // 在 Web 上：result.thumbnail 包含完整的 base64 编码图片。

    console.log('Format:', result.metadata?.format);
    console.log('Resolution:', result.metadata?.resolution);
  } catch (e) {
    const error = e as any;
    // error.code 包含结构化的错误代码（例如 'OS-PLUG-CAMR-0003'）
    // 当从原生层抛出时。有关所有代码，请参阅错误部分。
    const message = error.code ? `[${error.code}] ${error.message}` : error.message;
    console.error('takePhoto failed:', message);
  }
};
```

### 从相册选择

```typescript
import { Camera, MediaTypeSelection } from '@capacitor/camera';

const pickMedia = async () => {
  try {
    const { results } = await Camera.chooseFromGallery({
      mediaType: MediaTypeSelection.All, // 照片、视频或两者
      allowMultipleSelection: true,
      limit: 5,
      includeMetadata: true,
    });

    for (const item of results) {
      console.log('Type:', item.type);       // MediaType.Photo 或 MediaType.Video
      console.log('webPath:', item.webPath);
      console.log('Format:', item.metadata?.format);
      console.log('Size:', item.metadata?.size);
    }
  } catch (e) {
    const error = e as any;
    const message = error.code ? `[${error.code}] ${error.message}` : error.message;
    console.error('chooseFromGallery failed:', message);
  }
};
```

### 录制和播放视频

```typescript
import { Camera } from '@capacitor/camera';

const recordAndPlay = async () => {
  let videoUri: string | undefined;

  try {
    const result = await Camera.recordVideo({
      saveToGallery: false,
      isPersistent: true, // 保持文件在应用启动间可用
      includeMetadata: true,
    });

    videoUri = result.uri;
    console.log('Duration:', result.metadata?.duration);
    console.log('Saved to gallery:', result.saved);
  } catch (e) {
    const error = e as any;
    const message = error.code ? `[${error.code}] ${error.message}` : error.message;
    console.error('recordVideo failed:', message);
    return;
  }

  if (videoUri) {
    try {
      await Camera.playVideo({ uri: videoUri });
    } catch (e) {
      const error = e as any;
      const message = error.code ? `[${error.code}] ${error.message}` : error.message;
      console.error('playVideo failed:', message);
    }
  }
};
```

### 从 base64 字符串编辑照片

`editPhoto` 从 base64 编码的图片打开应用内编辑器，并在 `outputImage` 中返回编辑后的图片作为 base64 字符串。

```typescript
import { Camera } from '@capacitor/camera';

const editFromBase64 = async (base64Image: string) => {
  try {
    const { outputImage } = await Camera.editPhoto({
      inputImage: base64Image, // 原始 base64，无 data URL 前缀
    });

    // outputImage 是编辑后的图片，base64 编码
    imageElement.src = `data:image/jpeg;base64,${outputImage}`;
  } catch (e) {
    const error = e as any;
    const message = error.code ? `[${error.code}] ${error.message}` : error.message;
    console.error('editPhoto failed:', message);
  }
};
```

### 从 URI 编辑照片

`editURIPhoto` 从文件 URI（例如从 `takePhoto` 或 Filesystem API 获取）打开应用内编辑器，并返回 `MediaResult`。

```typescript
import { Camera } from '@capacitor/camera';

const editFromURI = async (uri: string) => {
  try {
    const result = await Camera.editURIPhoto({
      uri,
      saveToGallery: false,
      includeMetadata: true,
    });

    // result.webPath 可以直接用作图片的 src
    imageElement.src = result.webPath;

    console.log('Format:', result.metadata?.format);
    console.log('Size:', result.metadata?.size);
    console.log('Saved to gallery:', result.saved);
  } catch (e) {
    const error = e as any;
    const message = error.code ? `[${error.code}] ${error.message}` : error.message;
    console.error('editURIPhoto failed:', message);
  }
};
```

## 迁移到新 API

版本 8.1.0 引入了新的改进 API，并弃用了 `getPhoto` 和 `pickImages`。

### 替换 `getPhoto`

`getPhoto` 通过 `CameraSource` 处理三种来源：`Camera`、`Photos` 和 `Prompt`。`Camera` 和 `Photos` 现在映射到不同的方法，而 `Prompt` 已被移除。

#### `CameraSource.Camera` 改为 `takePhoto`

新 API 不支持 `CameraResultType.Base64` 和 `CameraResultType.DataUrl`。请参阅 [结果类型变更](#结果类型变更) 了解替代方案。

```typescript
// 之前
const photo = await Camera.getPhoto({
  source: CameraSource.Camera,
  quality: 90,
  allowEditing: true,
  resultType: CameraResultType.Uri,
  direction: CameraDirection.Rear,
  width: 1280,
  height: 720,
});
const imageUrl = photo.webPath;

// 之后
const result = await Camera.takePhoto({
  quality: 90,
  editable: 'in-app',        // 替换 allowEditing: true
  cameraDirection: CameraDirection.Rear, // 替换 direction
  targetWidth: 1280,         // 替换 width (1)
  targetHeight: 720,         // 替换 height (1)
});
const imageUrl = result.webPath;
```

**(1)** `width`/`height` 各自独立工作，在保持宽高比的同时设置最大尺寸。`targetWidth`/`targetHeight` 必须一起使用——仅设置一个无效。

#### `CameraSource.Photos` 改为 `chooseFromGallery`

```typescript
// 之前
const photo = await Camera.getPhoto({
  source: CameraSource.Photos,
  quality: 90,
  resultType: CameraResultType.Uri,
});
const imageUrl = photo.webPath;

// 之后
const { results } = await Camera.chooseFromGallery({
  quality: 90,
});
const imageUrl = results[0].webPath;
```

#### `CameraSource.Prompt`（或默认）

`getPhoto` 之前显示一个原生提示，让用户在相机和相册之间选择。此提示不再属于插件的一部分。您应使用自己的 UI（例如使用 `@capacitor/action-sheet`）构建提示，然后根据用户的选择调用 `takePhoto` 或 `chooseFromGallery`。

```typescript
// 之前
const photo = await Camera.getPhoto({
  // source 默认为 CameraSource.Prompt
  quality: 90,
  resultType: CameraResultType.Uri,
});

// 之后：显示您自己的 UI 来确定来源，然后调用相应的方法
const result = await Camera.takePhoto({ quality: 90 });
// 或
const { results } = await Camera.chooseFromGallery({ quality: 90 });
```

#### 结果类型变更

`getPhoto` 返回一个 `Photo` 对象，其中可用字段取决于 `resultType`。新 API 完全移除了 `resultType`——`MediaResult` 具有固定的字段集，无论照片是如何拍摄的。

| `Photo` 字段 | `MediaResult` 等效字段 |
|---|---|
| `path` | `uri` |
| `webPath` | `webPath` |
| `base64String` | `thumbnail`（在 Web 上包含完整的 base64 编码图片；在原生平台上包含缩略图） |
| `dataUrl` | 无直接等效项——请参阅下面的说明 |
| `saved` | `saved` |
| `format` | `metadata.format`（需要 `includeMetadata: true`） |
| `exif` | `metadata.exif`（需要 `includeMetadata: true`） |

**构造 data URL**——根据您的需求有两种选择：

在所有平台上，您可以结合使用 `thumbnail` 和 `metadata.format`（需要 `includeMetadata: true`）。在原生平台上，`thumbnail` 是较低分辨率的：

```typescript
const dataUrl = `data:image/${result.metadata.format};base64,${result.thumbnail}`;
```

在原生平台上，如果您需要全分辨率的 base64，请通过 Filesystem API 读取 `uri` 并从中构造 data URL：

```typescript
import { Filesystem } from '@capacitor/filesystem';

const { data } = await Filesystem.readFile({ path: result.uri });
const dataUrl = `data:image/${result.metadata.format};base64,${data}`;
```

### 替换 `pickImages` → `chooseFromGallery`

`pickImages` 允许从相册中选择多张照片。向 `chooseFromGallery` 传递 `allowMultipleSelection: true` 以获得相同的行为。

```typescript
// 之前
const { photos } = await Camera.pickImages({
  quality: 90,
  limit: 5,
  width: 1280,
  height: 720,
});
for (const photo of photos) {
  console.log(photo.webPath);
}

// 之后
const { results } = await Camera.chooseFromGallery({
  allowMultipleSelection: true,
  quality: 90,
  limit: 5,
  targetWidth: 1280,  // 替换 width (1)
  targetHeight: 720,  // 替换 height (1)
});
for (const result of results) {
  console.log(result.webPath);
}
```

**(1)** `width`/`height` 各自独立工作，在保持宽高比的同时设置最大尺寸。`targetWidth`/`targetHeight` 必须一起使用——仅设置一个无效。

`chooseFromGallery` 还可以通过设置 `mediaType` 为 `MediaTypeSelection.Video` 或 `MediaTypeSelection.All` 来选择视频或混合媒体。

### 选项重命名摘要

| 旧选项 | 新选项 | 适用范围 |
|---|---|---|
| `width` | `targetWidth` (1) | `takePhoto`, `chooseFromGallery` |
| `height` | `targetHeight` (1) | `takePhoto`, `chooseFromGallery` |
| `direction` | `cameraDirection` | `takePhoto` |
| `allowEditing` | `editable: 'in-app'` | `takePhoto`, `chooseFromGallery` |
| `resultType` | —（已移除，见 [结果类型变更](#结果类型变更)） | — |
| `source` | —（已移除，请使用独立方法） | — |
| `promptLabel*` | —（已移除，请构建自己的 UI） | — |

**(1)** `width`/`height` 各自独立工作，在保持宽高比的同时设置最大尺寸。`targetWidth`/`targetHeight` 必须一起使用——仅设置一个无效。

## API

<docgen-index>

* [`takePhoto(...)`](#takephoto)
* [`recordVideo(...)`](#recordvideo)
* [`playVideo(...)`](#playvideo)
* [`chooseFromGallery(...)`](#choosefromgallery)
* [`editPhoto(...)`](#editphoto)
* [`editURIPhoto(...)`](#edituriphoto)
* [`pickLimitedLibraryPhotos()`](#picklimitedlibraryphotos)
* [`getLimitedLibraryPhotos()`](#getlimitedlibraryphotos)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions(...)`](#requestpermissions)
* [`getPhoto(...)`](#getphoto)
* [`pickImages(...)`](#pickimages)
* [Interfaces](#接口)
* [Type Aliases](#类型别名)
* [Enums](#枚举)

</docgen-index>

有关现有错误代码的列表，请参阅 [错误](#错误)。

<docgen-api>


### takePhoto(...)

```typescript
takePhoto(options: TakePhotoOptions) => Promise<MediaResult>
```

打开设备相机并允许用户拍照。

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#takephotooptions">TakePhotoOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#mediaresult">MediaResult</a>&gt;</code>

**自版本：** 8.1.0

--------------------


### recordVideo(...)

```typescript
recordVideo(options: RecordVideoOptions) => Promise<MediaResult>
```

打开设备相机并允许用户录制视频。
在 Web 上不可用。

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#recordvideooptions">RecordVideoOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#mediaresult">MediaResult</a>&gt;</code>

**自版本：** 8.1.0

--------------------


### playVideo(...)

```typescript
playVideo(options: PlayVideoOptions) => Promise<void>
```

打开原生视频播放器。
在 Web 上不可用。

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#playvideooptions">PlayVideoOptions</a></code> |

**自版本：** 8.1.0

--------------------


### chooseFromGallery(...)

```typescript
chooseFromGallery(options: ChooseFromGalleryOptions) => Promise<MediaResults>
```

允许用户直接从相册中选择图片、视频或两者。

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code><a href="#choosefromgalleryoptions">ChooseFromGalleryOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#mediaresults">MediaResults</a>&gt;</code>

**自版本：** 8.1.0

--------------------


### editPhoto(...)

```typescript
editPhoto(options: EditPhotoOptions) => Promise<EditPhotoResult>
```

打开应用内屏幕，使用提供的 base64 字符串编辑给定的照片。
在 Web 上不可用。

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#editphotooptions">EditPhotoOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#editphotoresult">EditPhotoResult</a>&gt;</code>

**自版本：** 8.1.0

--------------------


### editURIPhoto(...)

```typescript
editURIPhoto(options: EditURIPhotoOptions) => Promise<MediaResult>
```

打开应用内屏幕，使用提供的 URI 编辑照片。
在 Web 上不可用。

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#edituriphotooptions">EditURIPhotoOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#mediaresult">MediaResult</a>&gt;</code>

**自版本：** 8.1.0

--------------------


### pickLimitedLibraryPhotos()

```typescript
pickLimitedLibraryPhotos() => Promise<GalleryPhotos>
```

允许用户更新其有限的照片库选择。
在选择器关闭后返回所有有限的照片。
如果用户授予了对照片的完全访问权限，则返回空数组。

**返回：** <code>Promise&lt;<a href="#galleryphotos">GalleryPhotos</a>&gt;</code>

**自版本：** 4.1.0

--------------------


### getLimitedLibraryPhotos()

```typescript
getLimitedLibraryPhotos() => Promise<GalleryPhotos>
```

返回从有限的照片库中选择的照片数组。

**返回：** <code>Promise&lt;<a href="#galleryphotos">GalleryPhotos</a>&gt;</code>

**自版本：** 4.1.0

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

检查相机和相册权限。

**返回：** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### requestPermissions(...)

```typescript
requestPermissions(permissions?: CameraPluginPermissions | undefined) => Promise<PermissionStatus>
```

请求相机和相册权限。

| Param             | Type                                                                        |
| ----------------- | --------------------------------------------------------------------------- |
| **`permissions`** | <code><a href="#camerapluginpermissions">CameraPluginPermissions</a></code> |

**返回：** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### getPhoto(...)

```typescript
getPhoto(options: ImageOptions) => Promise<Photo>
```

提示用户从相册选择照片，或用相机拍摄新照片。

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#imageoptions">ImageOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#photo">Photo</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### pickImages(...)

```typescript
pickImages(options: GalleryImageOptions) => Promise<GalleryPhotos>
```

允许用户从相册中选择多张图片。

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#galleryimageoptions">GalleryImageOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#galleryphotos">GalleryPhotos</a>&gt;</code>

**自版本：** 1.2.0

--------------------


### 接口


#### MediaResult

| 属性            | 类型                                                    | 描述                                                                                                                                                                                                                                                                                                                | 自版本 |
| --------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`type`**      | <code><a href="#mediatype">MediaType</a></code>         | 媒体结果的类型。可以是 <a href="#photo">`Photo`</a> 或 `Video`。                                                                                                                                                                                                                                                  | 8.1.0 |
| **`uri`**       | <code>string</code>                                     | 指向媒体文件的 URI。在 Web 上不可用。在 Web 上请使用 `webPath`。                                                                                                                                                                                                                                   | 8.1.0 |
| **`thumbnail`** | <code>string</code>                                     | 返回媒体的缩略图，base64 编码。在 Web 上，对于 <a href="#mediatype">`MediaType.Photo`</a>，完整的图像在此处返回，也是 base64 编码。在 Web 上，对于 <a href="#mediatype">`MediaType.Video`</a>，返回从视频中捕获的全分辨率 JPEG 帧，以 80% 质量 base64 编码。 | 8.1.0 |
| **`saved`**     | <code>boolean</code>                                    | 媒体是否成功保存到相册。仅在输入选项中 `saveToGallery` 设置为 `true` 时适用。否则，`save` 始终返回 `false`。在 Web 上不可用。                                                                                                          | 8.1.0 |
| **`webPath`**   | <code>string</code>                                     | webPath 返回一个路径，可用于设置媒体项的 src 属性，以实现高效的加载和渲染。                                                                                                                                                                                                      | 8.1.0 |
| **`metadata`**  | <code><a href="#mediametadata">MediaMetadata</a></code> | 与媒体结果关联的元数据。仅在输入选项中 `includeMetadata` 设置为 `true` 时包含。                                                                                                                                                                                                            | 8.1.0 |


#### MediaMetadata

| 属性               | 类型                | 描述                                                                                                                                                                                                                                                                                                                                                                                                      | 自版本 |
| ------------------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`size`**         | <code>number</code> | 媒体的文件大小，以字节为单位。                                                                                                                                                                                                                                                                                                                                                                                | 8.1.0 |
| **`duration`**     | <code>number</code> | 仅适用于 <a href="#mediatype">`MediaType.Video`</a>——媒体的持续时间，以秒为单位。                                                                                                                                                                                                                                                                                                          | 8.1.0 |
| **`format`**       | <code>string</code> | 图像的格式，例如 jpeg、png、mp4。Android 和 iOS 可能返回 'jpg' 而不是 'jpeg'。格式相同，只是名称不同。在检查返回媒体格式是否为 JPEG 时，请同时检查 'jpeg' 和 'jpg'。Web 支持 jpeg、png 和 gif，但具体可用性可能因浏览器而异。gif 仅在 Web 上的 `chooseFromGallery` 中支持。 | 8.1.0 |
| **`resolution`**   | <code>string</code> | 媒体的分辨率，格式为 `&lt;width&gt;x&lt;height&gt;`。例如：'1920x1080'。                                                                                                                                                                                                                                                                                                                     | 8.1.0 |
| **`creationDate`** | <code>string</code> | 媒体创建的日期和时间，采用 ISO 8601 格式。如果创建日期不可用（例如 Android 7 及以下），则返回最后修改日期。对于 Web，始终返回最后修改日期。                                                                                                                                                                                               | 8.1.0 |
| **`exif`**         | <code>string</code> | 从媒体项中检索到的 Exif 数据（如果有）。仅适用于 <a href="#mediatype">`MediaType.Photo`</a>。在 Web 上不可用。                                                                                                                                                                                                                                                                           | 8.1.0 |


#### TakePhotoOptions

| 属性                     | 类型                                                        | 描述                                                                                                                                                                                                                                                                                                                                                                       | 默认值                           | 自版本 |
| ------------------------ | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----- |
| **`quality`**            | <code>number</code>                                         | 返回图像的质量，0-100。仅适用于 <a href="#encodingtype">`EncodingType.JPEG`</a>。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                          | <code>100</code>                  | 8.1.0 |
| **`targetWidth`**        | <code>number</code>                                         | 照片的目标宽度。必须是正数，并与 `targetHeight` 一起使用。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                                            |                                   | 8.1.0 |
| **`targetHeight`**       | <code>number</code>                                         | 照片的目标高度。必须是正数，并与 `targetWidth` 一起使用。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                                             |                                   | 8.1.0 |
| **`correctOrientation`** | <code>boolean</code>                                        | 是否自动旋转图像"向上"以纠正竖屏模式下的方向。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                                                | <code>true</code>                 | 8.1.0 |
| **`encodingType`**       | <code><a href="#encodingtype">EncodingType</a></code>       | 拍摄照片的编码类型——JPEG 或 PNG。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                                                                                   | <code>EncodingType.JPEG</code>    | 8.1.0 |
| **`saveToGallery`**      | <code>boolean</code>                                        | 是否将照片保存到相册。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                                                                                                 | <code>false</code>                | 8.1.0 |
| **`cameraDirection`**    | <code><a href="#cameradirection">CameraDirection</a></code> | 仅 iOS 和 Web：相机方向。                                                                                                                                                                                                                                                                                                                                           | <code>CameraDirection.Rear</code> | 8.1.0 |
| **`editable`**           | <code>'in-app' \| 'external' \| 'no'</code>                 | 决定用户是否可以以及如何编辑照片。- 'in-app'：使用应用内编辑器进行照片编辑。- 'external'：打开单独的（平台特定的）原生应用来处理照片编辑，如果没有可用的，则回退到应用内编辑器。注意：iOS 不支持外部编辑，将使用 'in-app'。- 'no'：不允许编辑。在 Web 上不可用。 | <code>'no'</code>                 | 8.1.0 |
| **`presentationStyle`**  | <code>'fullscreen' \| 'popover'</code>                      | 仅 iOS：相机的呈现样式。                                                                                                                                                                                                                                                                                                                                   | <code>'fullscreen'</code>         | 8.1.0 |
| **`webUseInput`**        | <code>boolean</code>                                        | 仅 Web：是否使用 PWA Element 体验或文件输入。默认是使用 PWA Elements（如果已安装），否则回退到文件输入。要始终使用文件输入，请将此设置为 `true`。了解更多关于 PWA Elements：https://capacitorjs.com/docs/web/pwa-elements                                                                                                        |                                   | 8.1.0 |
| **`includeMetadata`**    | <code>boolean</code>                                        | <a href="#mediaresult">MediaResult</a> 是否应包含其元数据。如果获取元数据时发生错误，将返回空值。                                                                                                                                                                                                                          | <code>false</code>                | 8.1.0 |


#### RecordVideoOptions

| 属性                  | 类型                 | 描述                                                                                                                                                                                                          | 默认值            | 自版本 |
| --------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----- |
| **`saveToGallery`**   | <code>boolean</code> | 是否将视频保存到相册。                                                                                                                                                                            | <code>false</code> | 8.1.0 |
| **`includeMetadata`** | <code>boolean</code> | <a href="#mediaresult">MediaResult</a> 是否应包含其元数据。如果获取元数据时发生错误，将返回空值。                                                             | <code>false</code> | 8.1.0 |
| **`isPersistent`**    | <code>boolean</code> | 是否将视频存储在持久性应用存储中或临时缓存中。如果您计划在应用启动间使用返回的 `MediaResult#URI`，您可能希望设置为 true。否则，可以设置为 false。 | <code>true</code>  | 8.1.0 |


#### PlayVideoOptions

| 属性      | 类型                | 描述                                                                                                                  | 自版本 |
| --------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`uri`** | <code>string</code> | 要播放的视频的 URI。您可以直接使用从 `recordVideo` 或 `chooseFromGallery` 返回的 `MediaResult#URI`。 | 8.1.0 |


#### MediaResults

| 属性          | 类型                       | 描述                | 自版本 |
| ------------- | -------------------------- | -------------------------- | ----- |
| **`results`** | <code>MediaResult[]</code> | 媒体结果列表。 | 8.1.0 |


#### ChooseFromGalleryOptions

| 属性                         | 类型                                                              | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 默认值                               | 自版本 |
| ---------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ----- |
| **`mediaType`**              | <code><a href="#mediatypeselection">MediaTypeSelection</a></code> | 要选择的媒体类型。可以是图片、视频或两者。                                                                                                                                                                                                                                                                                                                                                                                                                                                  | <code>MediaTypeSelection.Photo</code> | 8.1.0 |
| **`allowMultipleSelection`** | <code>boolean</code>                                              | 是否允许从相册中选择多个媒体文件。                                                                                                                                                                                                                                                                                                                                                                                                                                        | <code>false</code>                    | 8.1.0 |
| **`limit`**                  | <code>number</code>                                               | 用户可以选择的最大媒体文件数。仅在 `allowMultipleSelection` 为 `true` 时适用。任何非正数都将被视为无限制。注意：此选项仅在 Android 13+ 和 iOS 上受支持。                                                                                                                                                                                                                                                                            | <code>0</code>                        | 8.1.0 |
| **`includeMetadata`**        | <code>boolean</code>                                              | <a href="#mediaresult">MediaResult</a> 是否应包含其元数据。如果获取元数据时发生错误，将返回空值。                                                                                                                                                                                                                                                                                                                                                        | <code>false</code>                    | 8.1.0 |
| **`editable`**               | <code>'in-app' \| 'external' \| 'no'</code>                       | 决定用户是否可以以及如何编辑照片。- 'in-app'：使用应用内编辑器进行照片编辑。- 'external'：打开单独的（平台特定的）原生应用来处理照片编辑，如果没有可用的，则回退到应用内编辑器。注意：iOS 不支持外部编辑，将使用 'in-app'。- 'no'：不允许编辑。仅适用于 <a href="#mediatypeselection">`MediaTypeSelection.Photo`</a> 且 `allowMultipleSelection` 设置为 `false`。在 Web 上不可用。 | <code>'no'</code>                     | 8.1.0 |
| **`presentationStyle`**      | <code>'fullscreen' \| 'popover'</code>                            | 仅 iOS：媒体选择器的呈现样式。                                                                                                                                                                                                                                                                                                                                                                                                                                                               | <code>'fullscreen'</code>             | 8.1.0 |
| **`quality`**                | <code>number</code>                                               | 返回图像的质量，0-100。仅适用于 <a href="#mediatype">`MediaType.Photo`</a> 和 JPEG 格式。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                                                                                                                                            | <code>100</code>                      | 8.1.0 |
| **`targetWidth`**            | <code>number</code>                                               | 照片的目标宽度。必须是正数，并与 `targetHeight` 一起使用。选择视频时不适用。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                                                                                                                                 |                                       | 1.0.0 |
| **`targetHeight`**           | <code>number</code>                                               | 照片的目标高度。必须是正数，并与 `targetWidth` 一起使用。选择视频时不适用。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                                                                                                                                  |                                       | 8.1.0 |
| **`correctOrientation`**     | <code>boolean</code>                                              | 是否自动旋转图像"向上"以纠正竖屏模式下的方向。选择视频时不适用。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                                                                                                                                                                     | <code>true</code>                     | 8.1.0 |
| **`webUseInput`**            | <code>boolean</code>                                              | 仅 Web：是否使用 PWA Element 体验或文件输入。默认是使用 PWA Elements（如果已安装），否则回退到文件输入。要始终使用文件输入，请将此设置为 `true`。了解更多关于 PWA Elements：https://capacitorjs.com/docs/web/pwa-elements                                                                                                                                                                                                                                      |                                       | 8.1.0 |


#### EditPhotoResult

| 属性              | 类型                | 描述                       | 自版本 |
| ----------------- | ------------------- | --------------------------------- | ----- |
| **`outputImage`** | <code>string</code> | 编辑后的图像，base64 编码。 | 8.1.0 |


#### EditPhotoOptions

| 属性             | 类型                | 描述                       | 自版本 |
| ---------------- | ------------------- | --------------------------------- | ----- |
| **`inputImage`** | <code>string</code> | 要编辑的 base64 编码图像。 | 8.1.0 |


#### EditURIPhotoOptions

| 属性                  | 类型                 | 描述                                                                                                                                              | 默认值            | 自版本 |
| --------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----- |
| **`uri`**             | <code>string</code>  | 包含要编辑的照片的 URI。                                                                                                                 |                    | 8.1.0 |
| **`saveToGallery`**   | <code>boolean</code> | 是否将编辑后的照片保存到相册。                                                                                                         | <code>false</code> | 8.1.0 |
| **`includeMetadata`** | <code>boolean</code> | <a href="#mediaresult">MediaResult</a> 是否应包含其元数据。如果获取元数据时发生错误，将返回空值。 | <code>false</code> | 8.1.0 |


#### GalleryPhotos

| 属性         | 类型                        | 描述                     | 自版本 |
| ------------ | --------------------------- | ------------------------------- | ----- |
| **`photos`** | <code>GalleryPhoto[]</code> | 所有选取的照片的数组。 | 1.2.0 |


#### GalleryPhoto

| 属性          | 类型                | 描述                                                                                                       | 自版本 |
| ------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- | ----- |
| **`path`**    | <code>string</code> | 完整的、平台特定的文件 URL，之后可以使用 Filesystem API 读取。                                 | 1.2.0 |
| **`webPath`** | <code>string</code> | webPath 返回一个路径，可用于设置图像的 src 属性，以实现高效的加载和渲染。 | 1.2.0 |
| **`exif`**    | <code>any</code>    | 从图像中检索到的 Exif 数据（如果有）。                                                                       | 1.2.0 |
| **`format`**  | <code>string</code> | 图像的格式，例如 jpeg、png、gif。iOS 和 Android 仅支持 jpeg。Web 支持 jpeg、png 和 gif。   | 1.2.0 |


#### PermissionStatus

| 属性         | 类型                                                                    |
| ------------ | ----------------------------------------------------------------------- |
| **`camera`** | <code><a href="#camerapermissionstate">CameraPermissionState</a></code> |
| **`photos`** | <code><a href="#camerapermissionstate">CameraPermissionState</a></code> |


#### CameraPluginPermissions

| 属性              | 类型                                |
| ----------------- | ----------------------------------- |
| **`permissions`** | <code>CameraPermissionType[]</code> |


#### Photo

| 属性               | 类型                 | 描述                                                                                                                                                                                                                                                              | 自版本 |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| **`base64String`** | <code>string</code>  | 图像的 base64 编码字符串表示，如果使用 <a href="#cameraresulttype">CameraResultType.Base64</a>。                                                                                                                                                 | 1.0.0 |
| **`dataUrl`**      | <code>string</code>  | 以 'data:image/jpeg;base64,' 开头的 URL 加上图像的 base64 编码字符串表示，如果使用 <a href="#cameraresulttype">CameraResultType.DataUrl</a>。注意：在 Web 上，文件格式可能因浏览器而异。                       | 1.0.0 |
| **`path`**         | <code>string</code>  | 如果使用 <a href="#cameraresulttype">CameraResultType.Uri</a>，路径将包含完整的、平台特定的文件 URL，之后可以使用 Filesystem API 读取。                                                                                                 | 1.0.0 |
| **`webPath`**      | <code>string</code>  | webPath 返回一个路径，可用于设置图像的 src 属性，以实现高效的加载和渲染。                                                                                                                                                        | 1.0.0 |
| **`exif`**         | <code>any</code>     | 从图像中检索到的 Exif 数据（如果有）。                                                                                                                                                                                                                              | 1.0.0 |
| **`format`**       | <code>string</code>  | 图像的格式，例如 jpeg、png、gif。iOS 和 Android 仅支持 jpeg。Web 支持 jpeg、png 和 gif，但具体可用性可能因浏览器而异。仅当 `webUseInput` 设置为 `true` 或 `source` 设置为 `Photos` 时支持 gif。 | 1.0.0 |
| **`saved`**        | <code>boolean</code> | 图像是否已保存到相册。在 Android 和 iOS 上，如果用户未授予所需权限，保存到相册可能会失败。在 Web 上没有相册，因此始终返回 false。                                                         | 1.1.0 |


#### ImageOptions

| 属性                     | 类型                                                          | 描述                                                                                                                                                                                                                                                                     | 默认值                           | 自版本 |
| ------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----- |
| **`quality`**            | <code>number</code>                                           | 返回为 JPEG 的图像质量，0-100。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                                                      |                                   | 1.0.0 |
| **`allowEditing`**       | <code>boolean</code>                                          | 是否允许用户裁剪或进行小的编辑（平台特定）。注意：此选项仅在 Android 和 iOS 上受支持。在 iOS 上仅支持 <a href="#camerasource">CameraSource.Camera</a>，而不支持 <a href="#camerasource">CameraSource.Photos</a>。 |                                   | 1.0.0 |
| **`resultType`**         | <code><a href="#cameraresulttype">CameraResultType</a></code> | 数据的返回方式。目前仅支持 'Base64'、'DataUrl' 或 'Uri'。                                                                                                                                                                                      |                                   | 1.0.0 |
| **`saveToGallery`**      | <code>boolean</code>                                          | 是否将照片保存到相册。如果是从相册选取的照片，则仅在编辑后保存。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                    | <code>false</code>                | 1.0.0 |
| **`width`**              | <code>number</code>                                           | 保存图像的最大期望宽度。保持宽高比。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                            |                                   | 1.0.0 |
| **`height`**             | <code>number</code>                                           | 保存图像的最大期望高度。保持宽高比。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                                           |                                   | 1.0.0 |
| **`correctOrientation`** | <code>boolean</code>                                          | 是否自动旋转图像"向上"以纠正竖屏模式下的方向。注意：此选项仅在 Android 和 iOS 上受支持。                                                                                                                             | <code>true</code>                 | 1.0.0 |
| **`source`**             | <code><a href="#camerasource">CameraSource</a></code>         | 获取照片的来源。默认情况下，提示用户选择相册或拍照。                                                                                                                                                            | <code>CameraSource.Prompt</code>  | 1.0.0 |
| **`direction`**          | <code><a href="#cameradirection">CameraDirection</a></code>   | 仅 iOS 和 Web：相机方向。                                                                                                                                                                                                                                         | <code>CameraDirection.Rear</code> | 1.0.0 |
| **`presentationStyle`**  | <code>'fullscreen' \| 'popover'</code>                        | 仅 iOS：相机的呈现样式。                                                                                                                                                                                                                                 | <code>'fullscreen'</code>         | 1.0.0 |
| **`webUseInput`**        | <code>boolean</code>                                          | 仅 Web：是否使用 PWA Element 体验或文件输入。默认是使用 PWA Elements（如果已安装），否则回退到文件输入。要始终使用文件输入，请将此设置为 `true`。了解更多关于 PWA Elements：https://capacitorjs.com/docs/web/pwa-elements      |                                   | 1.0.0 |
| **`promptLabelHeader`**  | <code>string</code>                                           | 显示提示时使用的文本值。                                                                                                                                                                                                                                   | <code>'Photo'</code>              | 1.0.0 |
| **`promptLabelCancel`**  | <code>string</code>                                           | 显示提示时使用的文本值。仅 iOS：'取消'按钮的标签。                                                                                                                                                                                       | <code>'Cancel'</code>             | 1.0.0 |
| **`promptLabelPhoto`**   | <code>string</code>                                           | 显示提示时使用的文本值。选择已保存图像的按钮标签。                                                                                                                                                                                  | <code>'From Photos'</code>        | 1.0.0 |
| **`promptLabelPicture`** | <code>string</code>                                           | 显示提示时使用的文本值。打开相机的按钮标签。                                                                                                                                                                                       | <code>'Take Picture'</code>       | 1.0.0 |


#### GalleryImageOptions

| 属性                     | 类型                                   | 描述                                                                                                             | 默认值                    | 自版本 |
| ------------------------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----- |
| **`quality`**            | <code>number</code>                    | 返回为 JPEG 的图像质量，0-100。注意：此选项仅在 Android 和 iOS 上受支持。                                              |                            | 1.2.0 |
| **`width`**              | <code>number</code>                    | 保存图像的最大期望宽度。保持宽高比。                                            |                            | 1.2.0 |
| **`height`**             | <code>number</code>                    | 保存图像的最大期望高度。保持宽高比。                                           |                            | 1.2.0 |
| **`correctOrientation`** | <code>boolean</code>                   | 是否自动旋转图像"向上"以纠正竖屏模式下的方向。                              | <code>true</code>          | 1.2.0 |
| **`presentationStyle`**  | <code>'fullscreen' \| 'popover'</code> | 仅 iOS：相机的呈现样式。                                                                         | <code>'fullscreen'</code>  | 1.2.0 |
| **`limit`**              | <code>number</code>                    | 用户能够选择的最大图片数量。注意：此选项仅在 Android 13+ 和 iOS 上受支持。 | <code>0（无限制）</code> | 1.2.0 |


### 类型别名


#### CameraPermissionState

<code><a href="#permissionstate">PermissionState</a> | 'limited'</code>


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>


#### CameraPermissionType

<code>'camera' | 'photos'</code>


### 枚举


#### MediaType

| 成员     | 值          |
| ----------- | -------------- |
| **`Photo`** | <code>0</code> |
| **`Video`** | <code>1</code> |


#### EncodingType

| 成员    | 值          |
| ---------- | -------------- |
| **`JPEG`** | <code>0</code> |
| **`PNG`**  | <code>1</code> |


#### CameraDirection

| 成员     | 值                |
| ----------- | -------------------- |
| **`Rear`**  | <code>'REAR'</code>  |
| **`Front`** | <code>'FRONT'</code> |


#### MediaTypeSelection

| 成员     | 值          |
| ----------- | -------------- |
| **`Photo`** | <code>0</code> |
| **`Video`** | <code>1</code> |
| **`All`**   | <code>2</code> |


#### CameraResultType

| 成员       | 值                  |
| ------------- | ---------------------- |
| **`Uri`**     | <code>'uri'</code>     |
| **`Base64`**  | <code>'base64'</code>  |
| **`DataUrl`** | <code>'dataUrl'</code> |


#### CameraSource

| 成员      | 值                 | 描述                                                        |
| ------------ | --------------------- | ------------------------------------------------------------------ |
| **`Prompt`** | <code>'PROMPT'</code> | 提示用户选择相册或拍照。 |
| **`Camera`** | <code>'CAMERA'</code> | 使用相机拍摄新照片。                                 |
| **`Photos`** | <code>'PHOTOS'</code> | 从相册或照片库中选择现有照片。            |

</docgen-api>

### 错误

插件在 Android 和 iOS 上返回结构化错误。每个错误都有一个 `code`（例如 `OS-PLUG-CAMR-0003`）和一个带有可读描述的 `message`。请注意，这些仅适用于从版本 `8.1.0` 开始引入的新 API 的原生平台：`takePhoto`、`chooseFromGallery`、`editPhoto`、`editURIPhoto`、`recordVideo` 和 `playVideo`。

| 错误代码 | 平台 | 描述 |
|---|---|---|
| OS-PLUG-CAMR-0003 | Android, iOS | 无法访问相机。请检查您的相机权限并重试。 |
| OS-PLUG-CAMR-0005 | Android, iOS | 无法访问您的相册，因为未提供访问权限。 |
| OS-PLUG-CAMR-0006 | Android, iOS | 无法拍照，因为过程被取消。 |
| OS-PLUG-CAMR-0007 | Android, iOS | 没有可用的相机。 |
| OS-PLUG-CAMR-0008 | iOS | 所选文件包含无效数据。 |
| OS-PLUG-CAMR-0009 | Android, iOS | 无法编辑图像。 |
| OS-PLUG-CAMR-0010 | Android, iOS | 无法拍照。 |
| OS-PLUG-CAMR-0011 | iOS | 无法从相册获取图像。 |
| OS-PLUG-CAMR-0012 | Android, iOS | 无法处理图像。 |
| OS-PLUG-CAMR-0013 | Android, iOS | 无法编辑照片，因为过程被取消。 |
| OS-PLUG-CAMR-0014 | iOS | 无法解码'拍照'操作参数。 |
| OS-PLUG-CAMR-0016 | Android, iOS | 无法录制视频。 |
| OS-PLUG-CAMR-0017 | Android, iOS | 无法录制视频，因为过程被取消。 |
| OS-PLUG-CAMR-0018 | Android, iOS | 无法从相册选择媒体。 |
| OS-PLUG-CAMR-0019 | iOS | 无法编码媒体结果。 |
| OS-PLUG-CAMR-0020 | Android, iOS | 无法从相册选择媒体，因为过程被取消。 |
| OS-PLUG-CAMR-0021 | Android | 无法获取媒体文件路径。 |
| OS-PLUG-CAMR-0023 | Android, iOS | 无法播放视频。 |
| OS-PLUG-CAMR-0024 | Android | URI 参数不能为空。 |
| OS-PLUG-CAMR-0025 | iOS | 无法从相册获取视频。 |
| OS-PLUG-CAMR-0026 | iOS | 插件出现问题。 |
| OS-PLUG-CAMR-0027 | Android, iOS | 所选文件不存在。 |
| OS-PLUG-CAMR-0028 | Android, iOS | 无法从 URI 检索图像。 |
| OS-PLUG-CAMR-0031 | Android | 为插件方法提供了无效参数。 |
| OS-PLUG-CAMR-0033 | Android | 无法获取上下文。 |
