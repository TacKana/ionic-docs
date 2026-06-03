---
title: 管理焦点
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>管理焦点</title>
  <meta
    name="description"
    content="了解如何在 Ionic 应用中使用 setFocus API（而非 autofocus 属性）来管理焦点。"
  />
</head>

## 手动焦点管理

Ionic 在 [Input](../api/input)、[Searchbar](../api/searchbar) 和 [Textarea](../api/textarea) 等组件上提供了 `setFocus` API，允许开发者手动将焦点设置到某个元素。应使用此 API 代替 `autofocus` 属性，并在以下时机调用：

- 路由应用中，在页面进入时的 `ionViewDidEnter` 生命周期事件中。
- 覆盖层中，在覆盖层展示时的 `didPresent` 生命周期事件中。
- 纯 JavaScript 应用中，在应用加载时的 `appload` 事件中。
- 用户手势或交互的结果中。

### 为什么不用 autofocus？

`autofocus` 属性是一个标准的 HTML 属性，允许开发者在页面加载时将焦点设置到某个元素。此属性通常用于将焦点设置到页面的第一个输入元素。然而，在路由应用中，`autofocus` 属性在页面之间导航时可能会导致问题。这是因为 `autofocus` 属性会在页面加载时设置焦点，但在重新访问页面时不会设置焦点。在 [MDN Web 文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) 中了解更多关于 `autofocus` 属性的信息。

### 平台限制

在使用 `setFocus` API 时，您应该了解以下平台限制：

1. Android 要求在与元素进行用户交互后才能设置焦点。这可以简单到用户点击屏幕即可。
2. 在 Mobile Safari（iOS）上，交互式元素只能作为用户手势的结果来聚焦，例如在按钮点击时调用 `setFocus`。

### 基本用法

以下示例演示了如何使用 `setFocus` API 在用户点击按钮时请求将焦点设置到输入框。

import Basic from '@site/static/usage/v8/input/set-focus/index.md';

<Basic />

### 路由

开发者可以使用 `ionViewDidEnter` 生命周期事件在页面进入时将焦点设置到某个元素。

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
      // 当前需要 requestAnimationFrame，原因：
      // https://github.com/ionic-team/ionic-framework/issues/24434
      input.value.$el.setFocus();
    });
  });
</script>
```

</TabItem>
</Tabs>
````

### 覆盖层

开发者可以使用 `didPresent` 生命周期事件在覆盖层展示时将焦点设置到某个元素。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
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

## 辅助技术焦点管理

默认情况下，单页应用没有内置的方式通知屏幕阅读器当前视图已在浏览器或 webview 中发生变化。这意味着依赖辅助技术的用户并不总是知道导航事件是否发生。

启用 [focusManagerPriority 配置](./config#ionicconfig) 的开发者可以在页面过渡期间将焦点管理委托给 Ionic。启用后，Ionic 将根据配置选项中指定的内容将焦点移动到正确的元素。这将通知屏幕阅读器发生了导航事件。

### 类型

```typescript
type FocusManagerPriority = 'content' | 'heading' | 'banner';
```

### 内容类型

下表解释了每种内容类型的含义：

| 类型      | 描述                   | Ionic 组件           | 语义 HTML 等效                                                     | 地标等效                                                                                                                                                                                                   |
| --------- | ----------------------------- | ------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content` | 视图的主要内容部分。 | [Content](../api/content) | [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)     | [`role="main"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role)                                                                                                                      |
| `heading` | 视图的标题。        | [Title](../api/title)     | [`h1`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)         | [`role="heading"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) 配合 [`aria-level="1"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) |
| `banner`  | 视图的页眉。       | [Header](../api/header)   | [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) | [`role="banner"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Banner_Role)                                                                                                                  |

:::important
开发者应在每个视图的 [Title](../api/title) 上设置 `role="heading"` 和 `aria-level="1"`。由于单个视图中可以使用多个 [Title](../api/title) 组件，Ionic 不会自动分配这些属性。
:::

### 指定优先级

配置应按优先级递减的顺序指定。在以下示例中，Ionic 将始终首先聚焦标题。仅当视图没有标题时，Ionic 才会继续下一个焦点优先级，即 banner：

```js
focusManagerPriority: ['heading', 'banner'];
```

### 实现说明

- 在指定焦点优先级时，浏览器可能仍会在该焦点优先级内移动焦点。例如，当指定 `'content'` 焦点优先级时，Ionic 会将焦点移动到内容区域。但是，浏览器随后可能会将焦点移动到该内容区域内的第一个可聚焦元素，例如按钮。
- 如果在视图中未找到任何焦点优先级，Ionic 将改为聚焦视图本身，以确保焦点大致移动到正确的位置。浏览器随后可能会在视图中调整焦点。
- 当从当前视图导航到上一个视图时，Ionic 会将焦点移回到展示当前视图的元素上。
- 焦点管理器可以按每个视图进行覆盖，如[使用路由的手动焦点管理](#路由)所示。
