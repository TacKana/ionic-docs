---
title: Capacitor Plugins
sidebar_label: 设置
hide_table_of_contents: true
slug: /native/setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Capacitor 插件 | 适用于 Ionic 应用的 Capacitor 核心插件</title>
  <meta
    name="description"
    content="Capacitor 提供了一系列 API，让为您的 Ionic 应用添加原生功能变得像使用任何 JavaScript 库一样简单。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

对于 Ionic 开发者来说，开始使用 Capacitor 相当简单直接。将插件添加到项目与添加项目所需的任何依赖项并无区别。
<intro-end />

## 安装

要安装插件，找到您想使用的插件并使用您的包管理器（如 npm）进行安装：

```shell
# 安装 Capacitor 插件
$ npm install @capacitor/camera
```

## 使用

安装后，可以将插件导入到组件中，并直接从代码中调用原生功能。

以 [Camera 插件](native/camera.md)为例，首先安装它：

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
    { value: 'react', label: 'React' },
  ]
}>
<TabItem value="javascript">

```javascript
import { Camera, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  const imageUrl = image.webPath;
  imageElement.src = imageUrl;
};
```

</TabItem>
<TabItem value="angular">

```javascript
import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({...})
export class CameraComponent{
  public imageSrc: string | undefined = '';

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    this.imageSrc = imageUrl;
  };
}
```

</TabItem>
<TabItem value="vue">

```typescript

<template>
...
</template>

<script setup lang="typescript">
import { ref } from 'vue';
import { Camera, CameraResultType } from '@capacitor/camera';
const imageSrc = ref<string | undefined>('');

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri
  });
  const imageUrl = image.webPath;
  imageSrc.value = imageUrl;
};

</script>

```

</TabItem>
<TabItem value="react">

```javascript
import { Camera, CameraResultType } from '@capacitor/camera';
import { useState } from 'react';

export function CameraComponent() {
  const [imageSrc, setImageSrc] = useState<string | undefined>('');

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    setImageSrc(imageUrl);
  };
  return (...)
}
```

</TabItem>
</Tabs>
````
