---
title: 'Toggle | ion-toggle: Ionic 应用的自定义切换按钮'
description: '切换按钮用于改变单个选项的状态。使用 ion-toggle 可为您的应用创建可自定义的切换按钮，支持开关操作。'
sidebar_label: 'ion-toggle'
demoUrl: '/docs/demos/api/toggle/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toggle/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/toggle/props.md';
import Events from '@ionic-internal/component-api/v5/toggle/events.md';
import Methods from '@ionic-internal/component-api/v5/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v5/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/toggle/slots.md';

# ion-toggle

切换按钮用于改变单个选项的状态。通过点击或滑动可以开关切换按钮。也可以通过设置 `checked` 属性以编程方式选中。

## 自定义样式

### 自定义背景

切换按钮的轨道和手柄背景可以使用 CSS 变量进行自定义。还有用于在切换按钮选中时设置不同背景的变量。

```css
ion-toggle {
  --background: #000;
  --background-checked: #7a49a5;

  --handle-background: #7a49a5;
  --handle-background-checked: #000;
}
```

由于这些变量设置了 `background` 属性（这是一个简写属性），它可以接受 [background 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/background) 接受的任何值。

更复杂的情况可能涉及在手柄背景上添加图像。

```css
ion-toggle {
  --handle-background-checked: #fff url(/assets/power-icon.png) no-repeat center / contain;
}
```

更进一步，我们可以使用 `::before` 或 `::after` 伪元素在背景上定位文本。

```css
ion-toggle::before {
  position: absolute;

  top: 16px;
  left: 10px;

  content: 'ON';

  color: white;
  font-size: 8px;

  z-index: 1;
}
```

### 自定义宽度

将切换按钮的宽度调**小**会导致轨道变窄，而手柄保持默认宽度。如果需要，设置 `--handle-width` 可以使手柄变窄。

```css
ion-toggle {
  width: 40px;
}
```

将切换按钮的宽度调**大**会导致轨道变宽，而手柄保持默认宽度。如果需要，设置 `--handle-width` 可以使手柄变宽。

```css
ion-toggle {
  width: 100px;
}
```

### 自定义高度

将切换按钮的高度调得比默认值**小**会导致手柄高度自动调整以适应轨道。在 `ios` 模式下，手柄比轨道短（`100% - 4px`），而在 `md` 模式下，手柄比轨道高（`100% + 6px`）。

```css
ion-toggle {
  height: 15px;
}
```

> 注意：这不会影响手柄宽度，宽度应使用 `--handle-width` 设置。

将切换按钮的高度调**大**会使手柄保持在中心位置，保持默认高度。可以通过设置 `--handle-height` 来修改，它可以设置为任意值，但不会超过 `--handle-max-height`。

```css
ion-toggle {
  height: 60px;
}
```

> 注意：这不会影响手柄宽度，宽度应使用 `--handle-width` 设置。

### 自定义间距

间距指的是手柄与轨道之间的水平间隙。默认情况下，在 `ios` 模式下，手柄周围有 `2px` 的间距。在 `md` 模式下没有默认间距。

要移除**水平**间距，将 `--handle-spacing` 设置为 `0px`。

```css
ion-toggle {
  --handle-spacing: 0px;
}
```

由于手柄有固定高度，要移除顶部和底部的间距，将高度设置为 100%。

```css
ion-toggle {
  --handle-spacing: 0px;
  --handle-height: 100%;
}
```

### 自定义边框圆角

`--handle-border-radius` 可用于更改手柄的 `border-radius`。

```css
ion-toggle {
  --handle-border-radius: 14px 4px 4px 14px;
}
```

要仅在切换按钮选中时针对 `border-radius`，请选择 `.toggle-checked`：

```css
ion-toggle.toggle-checked {
  --handle-border-radius: 4px 14px 14px 4px;
}
```

### 自定义盒阴影

`--handle-box-shadow` 可用于更改手柄的 `box-shadow`。

```css
ion-toggle {
  --handle-box-shadow: 4px 0 2px 0 red;
}
```

要仅在切换按钮选中时针对盒阴影，请选择 `.toggle-checked`：

```css
ion-toggle.toggle-checked {
  --handle-box-shadow: -4px 0 2px 0 red;
}
```

请参阅[自定义溢出](#自定义溢出)部分，以允许 `box-shadow` 溢出切换按钮容器。

### 自定义溢出

在切换按钮上设置 `overflow` 将被切换按钮手柄继承。默认情况下，仅在 `ios` 模式下，溢出设置为 `hidden`。由于 `contain` CSS 属性，`box-shadow` 仍会显示被截断。将 `contain` 设置为 `none` 以允许溢出切换按钮容器。

```css
ion-toggle {
  --handle-box-shadow: 0 3px 12px rgba(255, 0, 0, 0.6), 0 3px 1px rgba(50, 70, 255, 0.6);

  overflow: visible;

  contain: none;
}
```

## 使用示例

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认切换按钮 -->
<ion-toggle></ion-toggle>

<!-- 禁用切换按钮 -->
<ion-toggle disabled></ion-toggle>

<!-- 选中切换按钮 -->
<ion-toggle checked></ion-toggle>

<!-- 切换按钮颜色 -->
<ion-toggle color="primary"></ion-toggle>
<ion-toggle color="secondary"></ion-toggle>
<ion-toggle color="danger"></ion-toggle>
<ion-toggle color="light"></ion-toggle>
<ion-toggle color="dark"></ion-toggle>

<!-- 列表中的切换按钮 -->
<ion-list>
  <ion-item>
    <ion-label>Pepperoni</ion-label>
    <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Sausage</ion-label>
    <ion-toggle [(ngModel)]="sausage" disabled="true"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Mushrooms</ion-label>
    <ion-toggle [(ngModel)]="mushrooms"></ion-toggle>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认切换按钮 -->
<ion-toggle></ion-toggle>

<!-- 禁用切换按钮 -->
<ion-toggle disabled></ion-toggle>

<!-- 选中切换按钮 -->
<ion-toggle checked></ion-toggle>

<!-- 切换按钮颜色 -->
<ion-toggle color="primary"></ion-toggle>
<ion-toggle color="secondary"></ion-toggle>
<ion-toggle color="danger"></ion-toggle>
<ion-toggle color="light"></ion-toggle>
<ion-toggle color="dark"></ion-toggle>

<!-- 列表中的切换按钮 -->
<ion-list>
  <ion-item>
    <ion-label>Pepperoni</ion-label>
    <ion-toggle slot="end" value="pepperoni" checked></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Sausage</ion-label>
    <ion-toggle slot="end" value="sausage" disabled></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Mushrooms</ion-label>
    <ion-toggle slot="end" value="mushrooms"></ion-toggle>
  </ion-item>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToggle,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
} from '@ionic/react';

export const ToggleExamples: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>切换按钮示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>默认切换按钮</IonItemDivider>
          <IonItem>
            <IonLabel>选中状态: {JSON.stringify(checked)}</IonLabel>
            <IonToggle checked={checked} onIonChange={(e) => setChecked(e.detail.checked)} />
          </IonItem>

          <IonItemDivider>禁用切换按钮</IonItemDivider>
          <IonItem>
            <IonToggle disabled />
          </IonItem>

          <IonItemDivider>选中切换按钮</IonItemDivider>
          <IonItem>
            <IonToggle checked />
          </IonItem>

          <IonItemDivider>切换按钮颜色</IonItemDivider>
          <IonItem>
            <IonToggle color="primary" />
          </IonItem>
          <IonItem>
            <IonToggle color="secondary" />
          </IonItem>
          <IonItem>
            <IonToggle color="danger" />
          </IonItem>
          <IonItem>
            <IonToggle color="light" />
          </IonItem>
          <IonItem>
            <IonToggle color="dark" />
          </IonItem>

          <IonItemDivider>列表中的切换按钮</IonItemDivider>
          <IonItem>
            <IonLabel>Pepperoni</IonLabel>
            <IonToggle value="pepperoni" />
          </IonItem>

          <IonItem>
            <IonLabel>Sausage</IonLabel>
            <IonToggle value="sausage" disabled={true} />
          </IonItem>

          <IonItem>
            <IonLabel>Mushrooms</IonLabel>
            <IonToggle value="mushrooms" />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'toggle-example',
  styleUrl: 'toggle-example.css',
})
export class ToggleExample {
  @State() pepperoni: boolean = false;
  @State() sausage: boolean = true;
  @State() mushrooms: boolean = false;

  render() {
    return [
      // 默认切换按钮
      <ion-toggle></ion-toggle>,

      // 禁用切换按钮
      <ion-toggle disabled></ion-toggle>,

      // 选中切换按钮
      <ion-toggle checked></ion-toggle>,

      // 切换按钮颜色
      <ion-toggle color="primary"></ion-toggle>,
      <ion-toggle color="secondary"></ion-toggle>,
      <ion-toggle color="danger"></ion-toggle>,
      <ion-toggle color="light"></ion-toggle>,
      <ion-toggle color="dark"></ion-toggle>,

      // 列表中的切换按钮
      <ion-list>
        <ion-item>
          <ion-label>Pepperoni</ion-label>
          <ion-toggle checked={this.pepperoni} onIonChange={(ev) => (this.pepperoni = ev.detail.checked)}></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Sausage</ion-label>
          <ion-toggle
            checked={this.sausage}
            onIonChange={(ev) => (this.sausage = ev.detail.checked)}
            disabled={true}
          ></ion-toggle>
        </ion-item>

        <ion-item>
          <ion-label>Mushrooms</ion-label>
          <ion-toggle checked={this.mushrooms} onIonChange={(ev) => (this.mushrooms = ev.detail.checked)}></ion-toggle>
        </ion-item>
      </ion-list>,

      <div>
        Pepperoni: {this.pepperoni ? 'true' : 'false'}
        <br />
        Sausage: {this.sausage ? 'true' : 'false'}
        <br />
        Mushrooms: {this.mushrooms ? 'true' : 'false'}
      </div>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认切换按钮 -->
  <ion-toggle></ion-toggle>

  <!-- 禁用切换按钮 -->
  <ion-toggle disabled></ion-toggle>

  <!-- 选中切换按钮 -->
  <ion-toggle checked></ion-toggle>

  <!-- 切换按钮颜色 -->
  <ion-toggle color="primary"></ion-toggle>
  <ion-toggle color="secondary"></ion-toggle>
  <ion-toggle color="danger"></ion-toggle>
  <ion-toggle color="light"></ion-toggle>
  <ion-toggle color="dark"></ion-toggle>

  <!-- 列表中的切换按钮 -->
  <ion-list>
    <ion-item>
      <ion-label>Pepperoni</ion-label>
      <ion-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="pepperoni"
        :checked="toppings.value.indexOf('pepperoni') !== -1"
      >
      </ion-toggle>
    </ion-item>

    <ion-item>
      <ion-label>Sausage</ion-label>
      <ion-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="sausage"
        :checked="toppings.value.indexOf('sausage') !== -1"
        disabled="true"
      >
      </ion-toggle>
    </ion-item>

    <ion-item>
      <ion-label>Mushrooms</ion-label>
      <ion-toggle
        @ionChange="toppings.value.push($event.target.value)"
        value="mushrooms"
        :checked="toppings.value.indexOf('mushrooms') !== -1"
      >
      </ion-toggle>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonLabel, IonList, IonItem, IonToggle } from '@ionic/vue';
  import { defineComponent, vue } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonList, IonItem, IonToggle },
    setup() {
      const toppings = ref([]);

      return { toppings };
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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />