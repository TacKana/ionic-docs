---
title: 管理焦点
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>管理焦点</title>
  <meta
    name="description"
    content="了解如何在 Ionic 应用中使用 setFocus API 替代 autofocus 属性来管理焦点。"
  />
</head>

## 手动焦点管理

Ionic 在 [Input](../api/input)、[Searchbar](../api/searchbar) 和 [Textarea](../api/textarea) 等组件上提供了 `setFocus` API，允许开发者手动设置元素焦点。此 API 应替代 `autofocus` 属性使用，并在以下场景中调用：

- 路由应用中页面进入时的 `ionViewDidEnter` 生命周期事件。
- 叠加层显示时的 `didPresent` 生命周期事件。
- 原生 JavaScript 应用加载时的 `appload` 事件。
- 用户手势或交互的结果。

### 为什么不使用 autofocus？

`autofocus` 属性是一个标准的 HTML 属性，允许开发者在页面加载时设置元素焦点。此属性常用于设置页面中第一个输入元素的焦点。然而，在路由应用中进行页面导航时，`autofocus` 属性可能会导致问题。这是因为 `autofocus` 属性仅在页面加载时设置焦点，而不会在页面重新访问时设置焦点。更多关于 `autofocus` 属性的信息，请参阅 [MDN Web 文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)。

### 平台限制

使用 `setFocus` API 时，您需要注意以下平台限制：

1. Android 要求在与元素交互后才能设置焦点。这可以简单到用户轻触屏幕。
2. 在移动版 Safari (iOS) 上，仅能通过用户手势（例如点击按钮后调用 `setFocus`）对交互元素设置焦点。

### 基本用法

以下示例展示了如何使用 `setFocus` API，在用户点击按钮时请求输入框的焦点。

import Basic from '@site/static/usage/v8/input/set-focus/index.md';

<Basic />

<LegacyAnchor id="routing" />

### 路由

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

### 叠加层

开发者可以在叠加层显示时，使用 `didPresent` 生命周期事件来设置元素焦点。

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

<LegacyAnchor id="assistive-technology-focus-management" />

## 辅助技术焦点管理

默认情况下，单页应用（SPA）没有内置的方式来通知屏幕阅读器浏览器或 Webview 中的活动视图已更改。这意味着依赖辅助技术的用户并不总是知道导航事件是否发生。

启用 [focusManagerPriority 配置](./config#ionicconfig) 的开发者可以将页面切换期间的焦点管理委托给 Ionic。启用后，Ionic 将根据配置选项将焦点移动到正确的元素。这将通知屏幕阅读器发生了导航事件。

### 类型

```typescript
type FocusManagerPriority = 'content' | 'heading' | 'banner';
```

<LegacyAnchor id="types" />

### 内容类型

下表说明了每种内容类型代表的含义：

| 类型       | 描述                     | Ionic 组件             | 语义化 HTML 等效                                                              | 地标（Landmark）等效                                                                                                                                                                                                   |
| ---------- | ------------------------ | ---------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content`  | 视图的主要部分。         | [Content](../api/content) | [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)      | [`role="main"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role)                                                                                                                      |
| `heading`  | 视图的标题。             | [Title](../api/title)  | [`h1`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)          | [`role="heading"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) 配合 [`aria-level="1"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) |
| `banner`   | 视图的页眉。             | [Header](../api/header)| [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)  | [`role="banner"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Banner_Role)                                                                                                                  |

:::important
开发者应在每个视图的主 [Title](../api/title) 上分配 `role="heading"` 和 `aria-level="1"`。由于单个视图中可以使用多个 [Title](../api/title) 组件，Ionic 不会自动分配这些属性。
:::

### 指定优先级

配置应按优先级降序指定。在以下示例中，Ionic 将始终优先聚焦标题。仅当视图没有标题时，Ionic 才会继续处理下一个焦点优先级（banner）：

```js
focusManagerPriority: ['heading', 'banner'];
```

### 实现说明

- 指定焦点优先级时，浏览器仍可能在该优先级内移动焦点。例如，指定 `'content'` 焦点优先级时，Ionic 会将焦点移动到内容区域。然而，浏览器随后可能会在该内容区域内将焦点移动到第一个可聚焦元素（例如按钮）。
- 如果在视图中未找到任何焦点优先级，Ionic 将转而聚焦视图本身，以确保焦点大致移动到正确的位置。浏览器随后可能会在视图内调整焦点。
- 从当前视图导航到上一个视图时，Ionic 会将焦点移回呈现当前视图的元素。
- 焦点管理器可以基于每个视图进行覆盖，如[手动焦点管理与路由](#routing)所示。