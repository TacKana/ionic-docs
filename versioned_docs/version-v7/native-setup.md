---
title: Capacitor 插件
sidebar_label: 安装配置
hide_table_of_contents: true
slug: /native/setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Capacitor 插件 | 适用于 Ionic 应用的 Capacitor 核心插件</title>
  <meta
    name="description"
    content="Capacitor 提供了一系列 API，让你可以像使用任何 JavaScript 库一样轻松地为 Ionic 应用添加原生功能。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

对于 Ionic 开发者来说，上手 Capacitor 相当简单。向项目中添加插件与添加任何其他项目所需的依赖项没有区别。
<intro-end />

## 安装

要安装一个插件，找到你想要使用的插件，然后使用你的包管理器（如 npm）进行安装：

```shell
# 安装 Capacitor 插件
$ npm install @capacitor/camera
```

## 使用方法

安装完成后，插件就可以导入到组件中，你可以直接从代码中调用原生功能。

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
  const [imageSrc, setImageSrc] = useState('');

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