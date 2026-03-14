---
sidebar_label: 'ion-ripple-effect'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/ripple-effect/props.md';
import Events from '@ionic-internal/component-api/v5/ripple-effect/events.md';
import Methods from '@ionic-internal/component-api/v5/ripple-effect/methods.md';
import Parts from '@ionic-internal/component-api/v5/ripple-effect/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/ripple-effect/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/ripple-effect/slots.md';

# ion-ripple-effect

涟漪效果组件用于添加 [Material Design 的墨水涟漪交互效果](https://material.io/develop/web/components/ripples/)。该组件只能在 `<ion-app>` 内部使用，并且可以添加到任何组件中。

需要特别注意的是，父级元素必须具有 [相对定位（relative positioning）](https://developer.mozilla.org/en-US/docs/Web/CSS/position)。因为涟漪效果是绝对定位的，它会覆盖最近一个具有相对定位的父元素。父元素还应添加 `ion-activatable` 类，该类会告知涟漪效果该元素是可点击的。

默认类型 `"bounded"` 会从点击位置向外扩展涟漪效果。若要添加一个始终从元素中心开始并以圆形扩展的涟漪效果，请添加 `"unbounded"` 类型。建议为父元素添加 `overflow: hidden` 样式，以防止涟漪效果溢出其容器，特别是对于无边界（unbounded）涟漪。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-app>
  <ion-content>
    <div class="ion-activatable ripple-parent">
      一个带有边界涟漪效果的普通 div
      <ion-ripple-effect></ion-ripple-effect>
    </div>

    <button class="ion-activatable ripple-parent">
      一个带有边界涟漪效果的按钮
      <ion-ripple-effect></ion-ripple-effect>
    </button>

    <div class="ion-activatable ripple-parent">
      一个带有无边界涟漪效果的普通 div
      <ion-ripple-effect type="unbounded"></ion-ripple-effect>
    </div>

    <button class="ion-activatable ripple-parent">
      一个带有无边界涟漪效果的按钮
      <ion-ripple-effect type="unbounded"></ion-ripple-effect>
    </button>
  </ion-content>
</ion-app>
```

```css
.ripple-parent {
  position: relative;
  overflow: hidden;
}
```

</TabItem>

<TabItem value="javascript">

```html
<ion-app>
  <ion-content>
    <div class="ion-activatable ripple-parent">
      一个带有边界涟漪效果的普通 div
      <ion-ripple-effect></ion-ripple-effect>
    </div>

    <button class="ion-activatable ripple-parent">
      一个带有边界涟漪效果的按钮
      <ion-ripple-effect></ion-ripple-effect>
    </button>

    <div class="ion-activatable ripple-parent">
      一个带有无边界涟漪效果的普通 div
      <ion-ripple-effect type="unbounded"></ion-ripple-effect>
    </div>

    <button class="ion-activatable ripple-parent">
      一个带有无边界涟漪效果的按钮
      <ion-ripple-effect type="unbounded"></ion-ripple-effect>
    </button>
  </ion-content>
</ion-app>
```

```css
.ripple-parent {
  position: relative;
  overflow: hidden;
}
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonApp, IonContent, IonRippleEffect } from '@ionic/react';
import './RippleEffectExample.css';

export const RippleExample: React.FC = () => (
  <IonApp>
    <IonContent>
      <div className="ion-activatable ripple-parent">
        一个带有边界涟漪效果的普通 div
        <IonRippleEffect></IonRippleEffect>
      </div>

      <button className="ion-activatable ripple-parent">
        一个带有边界涟漪效果的按钮
        <IonRippleEffect></IonRippleEffect>
      </button>

      <div className="ion-activatable ripple-parent">
        一个带有无边界涟漪效果的普通 div
        <IonRippleEffect type="unbounded"></IonRippleEffect>
      </div>

      <button className="ion-activatable ripple-parent">
        一个带有无边界涟漪效果的按钮
        <IonRippleEffect type="unbounded"></IonRippleEffect>
      </button>
    </IonContent>
  </IonApp>
);
```

```css
.ripple-parent {
  position: relative;
  overflow: hidden;
}
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'ripple-effect-example',
  styleUrl: 'ripple-effect-example.css',
})
export class RippleEffectExample {
  render() {
    return [
      <ion-app>
        <ion-content>
          <div class="ion-activatable ripple-parent">
            一个带有边界涟漪效果的普通 div
            <ion-ripple-effect></ion-ripple-effect>
          </div>

          <button class="ion-activatable ripple-parent">
            一个带有边界涟漪效果的按钮
            <ion-ripple-effect></ion-ripple-effect>
          </button>

          <div class="ion-activatable ripple-parent">
            一个带有无边界涟漪效果的普通 div
            <ion-ripple-effect type="unbounded"></ion-ripple-effect>
          </div>

          <button class="ion-activatable ripple-parent">
            一个带有无边界涟漪效果的按钮
            <ion-ripple-effect type="unbounded"></ion-ripple-effect>
          </button>
        </ion-content>
      </ion-app>,
    ];
  }
}
```

```css
.ripple-parent {
  position: relative;
  overflow: hidden;
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-app>
    <ion-content>
      <div class="ion-activatable ripple-parent">
        一个带有边界涟漪效果的普通 div
        <ion-ripple-effect></ion-ripple-effect>
      </div>

      <button class="ion-activatable ripple-parent">
        一个带有边界涟漪效果的按钮
        <ion-ripple-effect></ion-ripple-effect>
      </button>

      <div class="ion-activatable ripple-parent">
        一个带有无边界涟漪效果的普通 div
        <ion-ripple-effect type="unbounded"></ion-ripple-effect>
      </div>

      <button class="ion-activatable ripple-parent">
        一个带有无边界涟漪效果的按钮
        <ion-ripple-effect type="unbounded"></ion-ripple-effect>
      </button>
    </ion-content>
  </ion-app>
</template>

<style>
  .ripple-parent {
    position: relative;
    overflow: hidden;
  }
</style>

<script>
  import { IonApp, IonContent, IonRippleEffect } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonApp, IonContent, IonRippleEffect },
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