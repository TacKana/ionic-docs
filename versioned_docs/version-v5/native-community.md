---
title: 'Cordova 插件 | 用于 Ionic 应用的 Cordova 社区核心插件'
description: '对于 Cordova 用户社区，我们为开源 Cordova 核心插件收集的 TypeScript 包装器可轻松为任何 Ionic 应用添加原生功能。'
sidebar_label: 设置
hide_table_of_contents: true
slug: /native/community
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cordova 社区插件

[Apache Cordova](https://cordova.apache.org/) 是一个开源原生运行时，允许开发者使用 HTML、CSS 和 JavaScript 构建原生移动应用。与 Ionic 自己的原生运行时 [Capacitor](https://capacitorjs.com/) 类似，Cordova 允许开发者通过插件系统访问原生设备功能，如相机、键盘和地理位置。插件是一小段附加代码，为原生组件提供 JavaScript 接口。它们允许您的应用使用纯 Web 应用无法使用的原生设备能力。

对于使用 Ionic 搭配 Cordova 的开发者，我们的团队开发了一系列适用于开源 Cordova 插件的 TypeScript 包装器，使得为任何 Ionic 应用添加原生功能变得容易。参见 [Ionic Native](https://github.com/ionic-team/ionic-native)。

这些插件由 Ionic 社区提交和维护。虽然社区成员通常能够快速发现和修复问题，但某些插件可能无法正常工作。

对于需要专用原生插件支持和 SLA、持续维护和安全补丁的专业开发者和团队，请探索我们的[高级选项](https://ionicframework.com/native)，包括插件支持和常见原生用例的预构建解决方案。

<intro-end />

:::note
本文档适用于使用 Ionic Framework 4.0.0 及以上版本构建的应用。对于较旧的 Ionic v3 项目，请[参见此处](https://ionicframework.com/docs/v3/native)。
:::

## Capacitor 支持

除了 Cordova 之外，Ionic Native 还与 [Capacitor](https://capacitorjs.com) 配合使用，Capacitor 是 Ionic 的官方原生运行时。以下是基本用法。有关完整详情，[请参阅 Capacitor 文档](https://capacitorjs.com/docs/cordova/using-cordova-plugins)。

## 用法

所有插件都有两个组件——原生代码（Cordova）和 TypeScript 代码（Ionic Native）。
Cordova 插件也被包装在 `Promise` 或 `Observable` 中，以提供通用的插件接口和现代化的开发方法。

以[相机插件](native/camera.md)为例，首先安装它：

````mdx-code-block
<Tabs
  groupId="runtime"
  defaultValue="cordova"
  values={[
    { value: 'cordova', label: 'Cordova' },
    { value: 'capacitor', label: 'Capacitor' },
  ]
}>
<TabItem value="cordova">

```shell
// 安装 Cordova 插件
$ ionic cordova plugin add cordova-plugin-camera

// 安装 Ionic Native TypeScript 包装器
$ npm install @awesome-cordova-plugins/camera

// 安装 Ionic Native 核心库（每个项目一次）
$ npm install @awesome-cordova-plugins/core
```

</TabItem>
<TabItem value="capacitor">

有关完整详情，[请参阅 Capacitor 文档](https://capacitorjs.com/docs/cordova/using-cordova-plugins)。

```shell
// 安装 Ionic Native TypeScript 包装器
$ npm install @awesome-cordova-plugins/camera

// 安装 Cordova 插件
$ npm install cordova-plugin-camera

// 更新原生平台项目以包含新添加的插件
$ ionic cap sync
```

</TabItem>
</Tabs>
````

接下来，开始使用该插件，按照下面的各种框架使用选项进行操作。有关常见问题，请参见[此处](native-faq.md)。

## Angular

Angular 应用可以使用 Cordova 或 Capacitor 构建原生移动应用。在 `@NgModule` 中导入插件并将其添加到 Provider 列表中。对于 Angular，导入路径应以 `/ngx` 结尾。Angular 的变更检测会自动处理。

```tsx
// app.module.ts
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

...

@NgModule({
  ...

  providers: [
    ...
    Camera
    ...
  ]
  ...
})
export class AppModule { }
```

声明插件后，可以像任何其他服务一样导入和注入它：

```tsx
// camera.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private camera: Camera) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // 对新照片进行处理
      },
      (err) => {
        // 处理错误
        console.log('相机问题：' + err);
      }
    );
  }
}
```

## React

React 应用必须使用 Capacitor 构建原生移动应用。但是，仍然可以使用 Ionic Native（以及 Cordova 插件）。

```shell-session
// 安装核心库（每个项目一次）
$ npm install @awesome-cordova-plugins/core

// 安装 Ionic Native TypeScript 包装器
$ npm install @awesome-cordova-plugins/barcode-scanner

// 安装 Cordova 插件
$ npm install phonegap-plugin-barcodescanner

// 更新原生平台项目以包含新添加的插件
$ ionic cap sync
```

导入插件对象，然后使用其静态方法：

```tsx
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

const Tab1: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`条形码数据：${data.text}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={openScanner}>扫描条形码</IonButton>
      </IonContent>
    </IonPage>
  );
};
```

## 原生 JavaScript

面向 ES2015+ 和/或 TypeScript 的原生 JavaScript 应用可以使用 Cordova 或 Capacitor 构建原生移动应用。要使用任何插件，从适当的包中导入类并使用其静态方法：

```js
import { Camera } from '@awesome-cordova-plugins/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then((data) => console.log('拍摄了照片！', data))
    .catch((e) => console.log('拍照时发生错误', e));
});
```
