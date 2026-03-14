---
sidebar_label: 'ion-button'
demoUrl: '/docs/demos/api/button/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/button/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/button/props.md';
import Events from '@ionic-internal/component-api/v5/button/events.md';
import Methods from '@ionic-internal/component-api/v5/button/methods.md';
import Parts from '@ionic-internal/component-api/v5/button/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/button/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/button/slots.md';

# ion-button

按钮（Button）提供了一个可点击的元素，可用于表单或任何需要简单、标准按钮功能的场景。它们可以显示文本、图标或两者兼具。按钮可以通过多个属性设置样式，以呈现特定的外观。

## Expand 扩展

此属性允许您指定按钮的宽度。默认情况下，按钮是内联块元素，但设置此属性会将按钮更改为全宽度的块级元素。

| 值      | 说明                                                                 |
| ------- | -------------------------------------------------------------------- |
| `block` | 全角按钮，具有圆角。                                                 |
| `full`  | 全角按钮，具有直角，并且左侧和右侧没有边框。                         |

## Fill 填充

此属性决定按钮的背景和边框颜色。默认情况下，按钮具有实心背景，除非按钮位于工具栏内，此时它拥有透明背景。

| 值        | 说明                                                               |
| --------- | ------------------------------------------------------------------ |
| `clear`   | 背景透明的按钮，类似于扁平按钮。                                   |
| `outline` | 背景透明且具有可见边框的按钮。                                     |
| `solid`   | 具有填充背景的按钮。适用于工具栏中的按钮。                         |

## Size 尺寸

此属性指定按钮的大小。设置此属性将改变按钮的高度和内边距。

| 值        | 说明                                                                 |
| --------- | -------------------------------------------------------------------- |
| `small`   | 高度和内边距较小的按钮。Item 中按钮的默认尺寸。                      |
| `default` | 具有默认高度和内边距的按钮。适用于 Item 中的按钮。                   |
| `large`   | 高度和内边距较大的按钮。                                             |

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认 -->
<ion-button>Default</ion-button>

<!-- 锚点 -->
<ion-button href="#">Anchor</ion-button>

<!-- 颜色 -->
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>

<!-- 扩展 -->
<ion-button expand="full">Full Button</ion-button>
<ion-button expand="block">Block Button</ion-button>

<!-- 圆角 -->
<ion-button shape="round">Round Button</ion-button>

<!-- 填充 -->
<ion-button expand="full" fill="outline">Outline + Full</ion-button>
<ion-button expand="block" fill="outline">Outline + Block</ion-button>
<ion-button shape="round" fill="outline">Outline + Round</ion-button>

<!-- 图标 -->
<ion-button>
  <ion-icon slot="start" name="star"></ion-icon>
  Left Icon
</ion-button>

<ion-button>
  Right Icon
  <ion-icon slot="end" name="star"></ion-icon>
</ion-button>

<ion-button>
  <ion-icon slot="icon-only" name="star"></ion-icon>
</ion-button>

<!-- 尺寸 -->
<ion-button size="large">Large</ion-button>
<ion-button>Default</ion-button>
<ion-button size="small">Small</ion-button>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认 -->
<ion-button>Default</ion-button>

<!-- 锚点 -->
<ion-button href="#">Anchor</ion-button>

<!-- 颜色 -->
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>

<!-- 扩展 -->
<ion-button expand="full">Full Button</ion-button>
<ion-button expand="block">Block Button</ion-button>

<!-- 圆角 -->
<ion-button shape="round">Round Button</ion-button>

<!-- 填充 -->
<ion-button expand="full" fill="outline">Outline + Full</ion-button>
<ion-button expand="block" fill="outline">Outline + Block</ion-button>
<ion-button shape="round" fill="outline">Outline + Round</ion-button>

<!-- 图标 -->
<ion-button>
  <ion-icon slot="start" name="star"></ion-icon>
  Left Icon
</ion-button>

<ion-button>
  Right Icon
  <ion-icon slot="end" name="star"></ion-icon>
</ion-button>

<ion-button>
  <ion-icon slot="icon-only" name="star"></ion-icon>
</ion-button>

<!-- 尺寸 -->
<ion-button size="large">Large</ion-button>
<ion-button>Default</ion-button>
<ion-button size="small">Small</ion-button>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';

import { IonButton, IonIcon, IonContent } from '@ionic/react';
import { star } from 'ionicons/icons';

export const ButtonExample: React.FC = () => (
  <IonContent>
    {/*-- 默认 --*/}
    <IonButton>Default</IonButton>

    {/*-- 锚点 --*/}
    <IonButton href="#">Anchor</IonButton>

    {/*-- 颜色 --*/}
    <IonButton color="primary">Primary</IonButton>
    <IonButton color="secondary">Secondary</IonButton>
    <IonButton color="tertiary">Tertiary</IonButton>
    <IonButton color="success">Success</IonButton>
    <IonButton color="warning">Warning</IonButton>
    <IonButton color="danger">Danger</IonButton>
    <IonButton color="light">Light</IonButton>
    <IonButton color="medium">Medium</IonButton>
    <IonButton color="dark">Dark</IonButton>

    {/*-- 扩展 --*/}
    <IonButton expand="full">Full Button</IonButton>
    <IonButton expand="block">Block Button</IonButton>

    {/*-- 圆角 --*/}
    <IonButton shape="round">Round Button</IonButton>

    {/*-- 填充 --*/}
    <IonButton expand="full" fill="outline">
      Outline + Full
    </IonButton>
    <IonButton expand="block" fill="outline">
      Outline + Block
    </IonButton>
    <IonButton shape="round" fill="outline">
      Outline + Round
    </IonButton>

    {/*-- 图标 --*/}
    <IonButton>
      <IonIcon slot="start" icon={star} />
      Left Icon
    </IonButton>

    <IonButton>
      Right Icon
      <IonIcon slot="end" icon={star} />
    </IonButton>

    <IonButton>
      <IonIcon slot="icon-only" icon={star} />
    </IonButton>

    {/*-- 尺寸 --*/}
    <IonButton size="large">Large</IonButton>
    <IonButton>Default</IonButton>
    <IonButton size="small">Small</IonButton>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-example',
  styleUrl: 'button-example.css',
})
export class ButtonExample {
  render() {
    return [
      // 默认
      <ion-button>Default</ion-button>,

      // 锚点
      <ion-button href="#">Anchor</ion-button>,

      // 颜色
      <ion-button color="primary">Primary</ion-button>,
      <ion-button color="secondary">Secondary</ion-button>,
      <ion-button color="tertiary">Tertiary</ion-button>,
      <ion-button color="success">Success</ion-button>,
      <ion-button color="warning">Warning</ion-button>,
      <ion-button color="danger">Danger</ion-button>,
      <ion-button color="light">Light</ion-button>,
      <ion-button color="medium">Medium</ion-button>,
      <ion-button color="dark">Dark</ion-button>,

      // 扩展
      <ion-button expand="full">Full Button</ion-button>,
      <ion-button expand="block">Block Button</ion-button>,

      // 圆角
      <ion-button shape="round">Round Button</ion-button>,

      // 填充
      <ion-button expand="full" fill="outline">
        Outline + Full
      </ion-button>,
      <ion-button expand="block" fill="outline">
        Outline + Block
      </ion-button>,
      <ion-button shape="round" fill="outline">
        Outline + Round
      </ion-button>,

      // 图标
      <ion-button>
        <ion-icon slot="start" name="star"></ion-icon>
        Left Icon
      </ion-button>,

      <ion-button>
        Right Icon
        <ion-icon slot="end" name="star"></ion-icon>
      </ion-button>,

      <ion-button>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-button>,

      // 尺寸
      <ion-button size="large">Large</ion-button>,
      <ion-button>Default</ion-button>,
      <ion-button size="small">Small</ion-button>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认 -->
  <ion-button>Default</ion-button>

  <!-- 锚点 -->
  <ion-button href="#">Anchor</ion-button>

  <!-- 颜色 -->
  <ion-button color="primary">Primary</ion-button>
  <ion-button color="secondary">Secondary</ion-button>
  <ion-button color="tertiary">Tertiary</ion-button>
  <ion-button color="success">Success</ion-button>
  <ion-button color="warning">Warning</ion-button>
  <ion-button color="danger">Danger</ion-button>
  <ion-button color="light">Light</ion-button>
  <ion-button color="medium">Medium</ion-button>
  <ion-button color="dark">Dark</ion-button>

  <!-- 扩展 -->
  <ion-button expand="full">Full Button</ion-button>
  <ion-button expand="block">Block Button</ion-button>

  <!-- 圆角 -->
  <ion-button shape="round">Round Button</ion-button>

  <!-- 填充 -->
  <ion-button expand="full" fill="outline">Outline + Full</ion-button>
  <ion-button expand="block" fill="outline">Outline + Block</ion-button>
  <ion-button shape="round" fill="outline">Outline + Round</ion-button>

  <!-- 图标 -->
  <ion-button>
    <ion-icon slot="start" name="star"></ion-icon>
    Left Icon
  </ion-button>

  <ion-button>
    Right Icon
    <ion-icon slot="end" name="star"></ion-icon>
  </ion-button>

  <ion-button>
    <ion-icon slot="icon-only" name="star"></ion-icon>
  </ion-button>

  <!-- 尺寸 -->
  <ion-button size="large">Large</ion-button>
  <ion-button>Default</ion-button>
  <ion-button size="small">Small</ion-button>
</template>

<script>
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />