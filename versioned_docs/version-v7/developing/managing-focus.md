---
title: 管理焦点
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>管理焦点</title>
  <meta
    name="description"
    content="学习如何在 Ionic 应用中使用 setFocus API（而非 autofocus 属性）来管理焦点。"
  />
</head>

Ionic 在 [Input](../api/input)、[Searchbar](../api/searchbar) 和 [Textarea](../api/textarea) 等组件上提供了 `setFocus` API，允许开发者手动将焦点设置到某个元素上。应使用此 API 来替代 `autofocus` 属性，并在以下情况下调用：

- 路由应用中，页面进入时的 `ionViewDidEnter` 生命周期事件。
- 覆盖层（overlay）显示时的 `didPresent` 生命周期事件。
- 原生 JavaScript 应用加载时的 `appload` 事件。
- 用户手势或交互的结果。

## 为什么不使用 autofocus？

`autofocus` 属性是一个标准的 HTML 属性，允许开发者在页面加载时将焦点设置到某个元素上。此属性通常用于将焦点设置到页面上的第一个输入元素。然而，在路由应用中进行页面导航时，`autofocus` 属性可能会引发问题。这是因为 `autofocus` 属性会在页面加载时设置焦点，但在重新访问页面时却不会。更多关于 `autofocus` 属性的信息，请参阅 [MDN Web 文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)。

## 平台限制

使用 `setFocus` API 时，需要注意以下平台限制：

1. Android 要求在设置元素焦点之前必须有用户交互，例如用户轻点屏幕。
2. 在移动版 Safari（iOS）上，交互性元素只有在用户手势（例如点击按钮后调用 `setFocus`）的结果下才能获得焦点。

## 基本用法

以下示例演示了如何在用户点击按钮时使用 `setFocus` API 来请求输入框焦点。

import Basic from '@site/static/usage/v7/input/set-focus/index.md';

<Basic />

## 路由

开发者可以在页面进入时，使用 `ionViewDidEnter` 生命周期事件来设置元素焦点。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>

<TabItem value="angular">

```ts
/* example.component.ts */
import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  @ViewChild('input') input!: IonInput;

  ionViewDidEnter() {
    this.input.setFocus();
  }
}
```
</TabItem>
<TabItem value="react">

```tsx
import React, { useRef } from 'react';
import { IonInput, IonPage, useIonViewDidEnter } from '@ionic/react';

const Home = () => {
  const input = useRef<HTMLIonInputElement>(null);

  useIonViewDidEnter(() => {
    input.current?.setFocus();
  });

  return (
    <IonPage>
      <IonInput ref={input} label="setFocus" labelPlacement="floating"></IonInput>
    </IonPage>
  );
};

export default Home;
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-page>
    <ion-input ref="input" label="setFocus" label-placement="floating"></ion-input>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonInput, IonPage, onIonViewDidEnter } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();
  onIonViewDidEnter(() => {
    requestAnimationFrame(() => {
      // 由于以下问题，目前需要 requestAnimationFrame：
      // https://github.com/ionic-team/ionic-framework/issues/24434
      input.value.$el.setFocus();
    });
  });
</script>
```

</TabItem>
</Tabs>
````

## 覆盖层

开发者可以在覆盖层显示时，使用 `didPresent` 生命周期事件来设置元素焦点。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'Javascript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>

<TabItem value="javascript">

```html
<ion-modal>
  <ion-input></ion-input>
</ion-modal>

<script>
  const modal = document.querySelector('ion-modal');
  modal.addEventListener('didPresent', () => {
    const input = modal.querySelector('ion-input');
    input.setFocus();
  });
</script>
```

</TabItem>

<TabItem value="angular">

```ts
/* example.component.ts */
import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  @ViewChild('input') input!: IonInput;

  onDidPresent() {
    this.input.setFocus();
  }
}
```

```html
<!-- example.component.html -->
<ion-modal (didPresent)="onDidPresent()">
  <ion-input #input></ion-input>
</ion-modal>
```

</TabItem>
<TabItem value="react">

```tsx
import React, { useRef } from 'react';
import { IonInput, IonModal } from '@ionic/react';

const Home = () => {
  const input = useRef<HTMLIonInputElement>(null);

  const onDidPresent = () => {
    input.current?.setFocus();
  };

  return (
    <IonModal onDidPresent={onDidPresent}>
      <IonInput ref={input}></IonInput>
    </IonModal>
  );
};

export default Home;
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-modal @didPresent="onDidPresent">
    <ion-input ref="input"></ion-input>
  </ion-modal>
</template>

<script setup lang="ts">
  import { IonInput, IonModal } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();

  function onDidPresent() {
    input.value.$el.setFocus();
  }
</script>
```

</TabItem>
</Tabs>
````