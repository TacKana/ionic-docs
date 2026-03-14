---
title: 'Cordova 插件 | Ionic 应用的 Cordova 社区核心插件'
description: '为 Cordova 用户社区提供的开源 Cordova 核心插件 TypeScript 封装集合，可轻松为任何 Ionic 应用添加原生功能。'
sidebar_label: 安装配置
hide_table_of_contents: true
slug: /native/community
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cordova 社区插件

[Apache Cordova](https://cordova.apache.org/) 是一个开源的原生运行时环境，允许开发者使用 HTML、CSS 和 JavaScript 构建原生移动应用。与 Ionic 自家的原生运行时 [Capacitor](https://capacitorjs.com/) 类似，Cordova 允许开发者通过插件系统访问原生设备功能，如摄像头、键盘和地理位置。插件是一小段附加代码，提供原生组件的 JavaScript 接口。它们使您的应用能够使用纯网页应用所不具备的原生设备功能。

对于使用 Ionic 和 Cordova 的开发者，我们的团队为开源 Cordova 插件开发了一系列 TypeScript 封装，可轻松为任何 Ionic 应用添加原生功能。请参阅 [Ionic Native](https://github.com/ionic-team/ionic-native)。

这些插件由 Ionic 社区提交和维护。虽然社区成员通常能快速发现并修复问题，但某些插件可能无法正常运行。

对于需要专业原生插件支持与服务水平协议（SLA）、持续维护和安全补丁的专业开发者和团队，请了解我们的[高级选项](https://ionicframework.com/native)，包括插件支持以及针对常见原生用例的预构建解决方案。

<intro-end />

:::note
本文档适用于使用 Ionic Framework 4.0.0 及以上版本构建的应用。对于较旧的 Ionic v3 项目，请[参阅此处](https://ionicframework.com/docs/v3/native)。
:::

## Capacitor 支持

除了 Cordova，Ionic Native 还可与 Ionic 的官方原生运行时 [Capacitor](https://capacitorjs.com) 协同工作。基本用法如下。完整详情请[参阅 Capacitor 文档](https://capacitorjs.com/docs/cordova/using-cordova-plugins)。

## 使用方法

所有插件都包含两个部分：原生代码（Cordova）和 TypeScript 代码（Ionic Native）。Cordova 插件还被封装在 `Promise` 或 `Observable` 中，以提供统一的插件接口和现代化的开发方式。

以[摄像头插件](native/camera.md)为例，首先安装它：

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

// 安装 Ionic Native TypeScript 封装
$ npm install @awesome-cordova-plugins/camera

// 安装 Ionic Native 核心库（每个项目只需安装一次）
$ npm install @awesome-cordova-plugins/core
```

</TabItem>
<TabItem value="capacitor">

完整详情请[参阅 Capacitor 文档](https://capacitorjs.com/docs/cordova/using-cordova-plugins)。

```shell
// 安装 Ionic Native TypeScript 封装
$ npm install @awesome-cordova-plugins/camera

// 安装 Cordova 插件
$ npm install cordova-plugin-camera

// 更新原生平台项目以包含新添加的插件
$ ionic cap sync
```

</TabItem>
</Tabs>
````

接下来，根据以下不同框架的使用选项开始使用该插件。常见问题解答请参阅[此处](native-faq.md)。

## Angular

Angular 应用可以使用 Cordova 或 Capacitor 构建原生移动应用。在 `@NgModule` 中导入插件并将其添加到 Providers 列表中。对于 Angular，导入路径应以 `/ngx` 结尾。Angular 的变更检测会自动处理。

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

声明插件后，可以像其他服务一样导入和注入：

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
        // 处理新拍摄的照片
      },
      (err) => {
        // 处理错误
        console.log('摄像头问题：' + err);
      }
    );
  }
}
```

## React

React 应用必须使用 Capacitor 构建原生移动应用。但是，仍然可以使用 Ionic Native（以及 Cordova 插件）。

```shell-session
// 安装核心库（每个项目只需安装一次）
$ npm install @awesome-cordova-plugins/core

// 安装 Ionic Native TypeScript 封装
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
    console.log(`条码数据：${data.text}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>标签页 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={openScanner}>扫描条码</IonButton>
      </IonContent>
    </IonPage>
  );
};
```

## 原生 JavaScript

面向 ES2015+ 和/或 TypeScript 的原生 JavaScript 应用可以使用 Cordova 或 Capacitor 构建原生移动应用。要使用任何插件，请从相应的包中导入类并使用其静态方法：

```js
import { Camera } from '@awesome-cordova-plugins/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then((data) => console.log('已拍摄照片！', data))
    .catch((e) => console.log('拍照时发生错误', e));
});
```