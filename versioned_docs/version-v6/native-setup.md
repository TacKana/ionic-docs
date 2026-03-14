---
title: Capacitor 插件
sidebar_label: 设置
hide_table_of_contents: true
slug: /native/setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Capacitor 插件 | 面向 Ionic 应用的 Capacitor 核心插件</title>
  <meta
    name="description"
    content="Capacitor 提供了一系列 API，让你可以像使用任何 JavaScript 库一样，轻松地为你的 Ionic 应用添加原生功能。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Capacitor 的入门对于 Ionic 开发者来说相当直接。为你的项目添加插件，与你为项目添加任何所需的依赖项并无二致。
<intro-end />

## 安装

要安装一个插件，找到你想使用的插件，然后使用你的包管理器（例如 npm）进行安装：

```shell
# 安装 Capacitor 插件
$ npm install @capacitor/camera
```

## 使用方法

安装完成后，插件就可以被导入到组件中，你可以直接从你的代码调用原生功能。

以 [Camera 插件](native/camera.md) 为例，首先安装它：

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
  public imageSrc = '';

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
const imageSrc = ref('');

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
  const [imageSrc, setImageSrc] = usetState('');

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