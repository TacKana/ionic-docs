---
title: 'Loading | 应用加载指示器遮罩层 | ion-loading'
description: "ion-loading 遮罩层在阻止用户交互时指示活动状态。加载指示器显示在应用内容之上，可以被关闭。"
sidebar_label: 'ion-loading'
demoUrl: '/docs/demos/api/loading/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/loading/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/loading/props.md';
import Events from '@ionic-internal/component-api/v5/loading/events.md';
import Methods from '@ionic-internal/component-api/v5/loading/methods.md';
import Parts from '@ionic-internal/component-api/v5/loading/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/loading/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/loading/slots.md';

# ion-loading

一种遮罩层，可用于在阻止用户交互时指示活动状态。加载指示器显示在应用内容之上，并且可以被应用关闭以恢复用户与应用交互。它包含一个可选的后置背景层，可以通过在创建时设置 `showBackdrop: false` 来禁用。

## 关闭

可以通过在加载选项的 `duration` 中传递显示的毫秒数，让加载指示器在特定时间后自动关闭。要在创建后关闭加载指示器，可以在加载实例上调用 `dismiss()` 方法。可以在加载指示器被关闭后调用 `onDidDismiss` 函数来执行操作。

## 自定义样式

Loading 使用作用域封装，这意味着它会在运行时通过为每个样式附加一个额外的类来自动限定其 CSS 范围。在 CSS 中覆盖作用域选择器需要一个[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。

我们建议向 `create` 方法中的 `cssClass` 传递一个自定义类，并使用该类向宿主和内部元素添加自定义样式。此属性也可以接受多个以空格分隔的类。查看[用法](#usage)部分可以了解如何使用 `cssClass` 传递类的示例。

```css
/* 不起作用 - 不够具体 */
ion-loading {
  color: green;
}

/* 有效 - 在 cssClass 中传递 "my-custom-class" 以增加特异性 */
.my-custom-class {
  color: green;
}
```

任何已定义的 [CSS 自定义属性](#css-custom-properties) 都可以用于设置 Loading 样式，无需针对单个元素：

```css
.my-custom-class {
  --background: #222;
  --spinner-color: #fff;

  color: #fff;
}
```

> 如果你正在构建 Ionic Angular 应用，样式需要添加到全局样式表文件中。请阅读下方 Angular 部分中的[样式放置位置](#style-placement)获取更多信息。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'loading-example',
  templateUrl: 'loading-example.html',
  styleUrls: ['./loading-example.css'],
})
export class LoadingExample {
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: '请稍候...',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('加载已关闭！');
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: '点击后置背景层可提前关闭...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('加载已关闭，关闭方式为：', role);
  }
}
```

### 样式放置位置

在 Angular 中，特定页面的 CSS 仅作用于该页面的元素。即使 Loading 可以从页面内呈现，但 `ion-loading` 元素被附加到当前页面之外。这意味着任何自定义样式都需要放在全局样式表文件中。在 Ionic Angular 启动项目中，这可以是 `src/global.scss` 文件，或者你可以通过[在 `angular.json` 的 `styles` 构建选项中添加](https://angular.io/guide/workspace-config#style-script-config)来注册新的全局样式文件。

</TabItem>

<TabItem value="javascript">

```javascript
async function presentLoading() {
  const loading = document.createElement('ion-loading');

  loading.cssClass = 'my-custom-class';
  loading.message = '请稍候...';
  loading.duration = 2000;

  document.body.appendChild(loading);
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('加载已关闭！');
}

async function presentLoadingWithOptions() {
  const loading = document.createElement('ion-loading');

  loading.spinner = null;
  loading.duration = 5000;
  loading.message = '点击后置背景层可提前关闭...';
  loading.translucent = true;
  loading.cssClass = 'custom-class custom-loading';
  loading.backdropDismiss = true;

  document.body.appendChild(loading);
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('加载已关闭，关闭方式为：', role);
}
```

</TabItem>

<TabItem value="react">

```tsx
/* 使用 useIonLoading Hook */

import React from 'react';
import { IonButton, IonContent, IonPage, useIonLoading } from '@ionic/react';

interface LoadingProps {}

const LoadingExample: React.FC<LoadingProps> = () => {
  const [present] = useIonLoading();
  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              duration: 3000,
            })
          }
        >
          显示加载指示器
        </IonButton>
        <IonButton expand="block" onClick={() => present('加载中', 2000, 'dots')}>
          使用参数显示加载指示器
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* 使用 IonLoading 组件 */

import React, { useState } from 'react';
import { IonLoading, IonButton, IonContent } from '@ionic/react';

export const LoadingExample: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 2000);

  return (
    <IonContent>
      <IonButton onClick={() => setShowLoading(true)}>显示加载指示器</IonButton>
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'请稍候...'}
        duration={5000}
      />
    </IonContent>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { loadingController } from '@ionic/core';

@Component({
  tag: 'loading-example',
  styleUrl: 'loading-example.css',
})
export class LoadingExample {
  async presentLoading() {
    const loading = await loadingController.create({
      cssClass: 'my-custom-class',
      message: '请稍候...',
      duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('加载已关闭！', role, data);
  }

  async presentLoadingWithOptions() {
    const loading = await loadingController.create({
      spinner: null,
      duration: 5000,
      message: '点击后置背景层可提前关闭...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('加载已关闭，关闭方式为：', role, data);
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={() => this.presentLoading()}>显示加载指示器</ion-button>
        <ion-button onClick={() => this.presentLoadingWithOptions()}>显示加载指示器：选项</ion-button>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-button @click="presentLoading">显示加载指示器</ion-button>
  <br />
  <ion-button @click="presentLoadingWithOptions">显示加载指示器</ion-button>
</template>

<script>
  import { IonButton, loadingController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      timeout: { type: Number, default: 1000 },
    },
    methods: {
      async presentLoading() {
        const loading = await loadingController
          .create({
            cssClass: 'my-custom-class',
            message: '请稍候...',
            duration: this.timeout,
          });

        await loading.present();

        setTimeout(function() {
          loading.dismiss()
        }, this.timeout);
      },
      async presentLoadingWithOptions() {
        const loading = await loadingController
          .create({
            spinner: null,
            duration: this.timeout,
            message: '点击后置背景层可提前关闭...',
            translucent: true,
            cssClass: 'custom-class custom-loading',
            backdropDismiss: true
          });

        await loading.present();

        setTimeout(function() {
          loading.dismiss()
        }, this.timeout);
      },
    },
    components: { IonButton }
  });
</script>
```

开发者也可以在模板中直接使用此组件：

```html
<template>
  <ion-button @click="setOpen(true)">显示加载指示器</ion-button>
  <ion-loading
    :is-open="isOpenRef"
    cssClass="my-custom-class"
    message="请稍候..."
    :duration="timeout"
    @didDismiss="setOpen(false)"
  >
  </ion-loading>
</template>

<script>
  import { IonLoading, IonButton } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    props: {
      timeout: { type: Number, default: 1000 },
    },
    components: { IonLoading, IonButton },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);

      return { isOpenRef, setOpen };
    },
  });
</script>
```

</TabItem>

</Tabs>

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />