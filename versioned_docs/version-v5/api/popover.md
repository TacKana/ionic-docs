---
sidebar_label: 'ion-popover'
demoUrl: '/docs/demos/api/popover/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/popover/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/popover/props.md';
import Events from '@ionic-internal/component-api/v5/popover/events.md';
import Methods from '@ionic-internal/component-api/v5/popover/methods.md';
import Parts from '@ionic-internal/component-api/v5/popover/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/popover/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/popover/slots.md';

# ion-popover

:::warning
Ionic v5 中的 Popover 可能会与新版浏览器中的 [popover](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) 特性冲突，导致 Ionic 的 Popover 无法正常渲染。我们建议升级到最新版本的 Ionic 以避免此问题。
:::

Popover 是一种显示在当前页面上方的对话框。它可以用于多种场景，但通常用于容纳导航栏中无法放置的溢出操作。

## 弹出显示

要显示一个 Popover，请在 Popover 实例上调用 `present` 方法。为了使 Popover 相对于被点击的元素定位，需要将一个点击事件传入 `present` 方法的选项参数中。如果不传入事件，Popover 将默认显示在视口的中央。

## 自定义样式

Popover 使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式附加额外的类来自动限定其 CSS 范围。要覆盖作用域选择器的 CSS，需要使用 [更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) 的选择器。

我们建议在 `create` 方法中向 `cssClass` 传递一个自定义类，并使用该类为宿主元素和内部元素添加自定义样式。该属性也可以接受多个以空格分隔的类。查看[用法](#用法)部分，了解如何使用 `cssClass` 传递类的示例。

```css
/* 无效 - 特异性不足 */
.popover-content {
  background: #222;
}

/* 有效 - 在 cssClass 中传递 "my-custom-class" 以提高特异性 */
.my-custom-class .popover-content {
  background: #222;
}
```

可以使用任何已定义的 [CSS 自定义属性](#css-自定义属性) 来设置 Popover 的样式，而无需针对单个元素：

```css
.my-custom-class {
  --background: #222;
}
```

> 如果您正在构建 Ionic Angular 应用，样式需要添加到全局样式表文件中。请阅读下方 Angular 部分的 [样式放置](#样式放置) 了解更多信息。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'popover-example',
  templateUrl: 'popover-example.html',
  styleUrls: ['./popover-example.css'],
})
export class PopoverExample {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
```

### 样式放置

在 Angular 中，特定页面的 CSS 只作用于该页面的元素。尽管 Popover 可以从页面内部弹出，但 `ion-popover` 元素会被附加到当前页面之外。这意味着任何自定义样式都需要放在全局样式表文件中。在 Ionic Angular 起始项目中，可以是 `src/global.scss` 文件，也可以通过[在 `angular.json` 的 `styles` 构建选项中添加](https://angular.io/guide/workspace-config#style-script-config)来注册新的全局样式文件。

</TabItem>

<TabItem value="javascript">

```javascript
class PopoverExamplePage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <ion-content>
        <ion-list>
          <ion-list-header><ion-label>Ionic</ion-label></ion-list-header>
          <ion-item button><ion-label>Item 0</ion-label></ion-item>
          <ion-item button><ion-label>Item 1</ion-label></ion-item>
          <ion-item button><ion-label>Item 2</ion-label></ion-item>
          <ion-item button><ion-label>Item 3</ion-label></ion-item>
        </ion-list>
      </ion-content>
    `;
  }
}

customElements.define('popover-example-page', PopoverExamplePage);

function presentPopover(ev) {
  const popover = Object.assign(document.createElement('ion-popover'), {
    component: 'popover-example-page',
    cssClass: 'my-custom-class',
    event: ev,
    translucent: true,
  });
  document.body.appendChild(popover);

  await popover.present();

  const { role } = await popover.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
```

</TabItem>

<TabItem value="react">

```tsx
/* 使用 useIonPopover Hook */

import React from 'react';
import { IonButton, IonContent, IonItem, IonList, IonListHeader, IonPage, useIonPopover } from '@ionic/react';

const PopoverList: React.FC<{
  onHide: () => void;
}> = ({ onHide }) => (
  <IonList>
    <IonListHeader>Ionic</IonListHeader>
    <IonItem button>Learn Ionic</IonItem>
    <IonItem button>Documentation</IonItem>
    <IonItem button>Showcase</IonItem>
    <IonItem button>GitHub Repo</IonItem>
    <IonItem lines="none" detail={false} button onClick={onHide}>
      Close
    </IonItem>
  </IonList>
);

const PopoverExample: React.FC = () => {
  const [present, dismiss] = useIonPopover(PopoverList, {
    onHide: () => dismiss(),
  });

  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={(e) =>
            present({
              event: e.nativeEvent,
            })
          }
        >
          显示 Popover
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* 使用 IonPopover 组件 */

import React, { useState } from 'react';
import { IonPopover, IonButton } from '@ionic/react';

export const PopoverExample: React.FC = () => {
  const [popoverState, setShowPopover] = useState({
    showPopover: false,
    event: undefined,
  });

  return (
    <>
      <IonPopover
        cssClass="my-custom-class"
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
      >
        <p>这是 Popover 内容</p>
      </IonPopover>
      <IonButton
        onClick={(e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e });
        }}
      >
        显示 Popover
      </IonButton>
    </>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { popoverController } from '@ionic/core';

@Component({
  tag: 'popover-example',
  styleUrl: 'popover-example.css',
})
export class PopoverExample {
  async presentPopover(ev: any) {
    const popover = await popoverController.create({
      component: 'page-popover',
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={(ev) => this.presentPopover(ev)}>弹出 Popover</ion-button>
      </ion-content>,
    ];
  }
}
```

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-popover',
  styleUrl: 'page-popover.css',
})
export class PagePopover {
  render() {
    return [
      <ion-list>
        <ion-item>
          <ion-label>文档</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>反馈</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>设置</ion-label>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-content class="ion-padding"> Popover 内容 </ion-content>
</template>

<script>
  import { IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Popover',
    components: { IonContent },
  });
</script>
```

```html
<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="openPopover">打开 Popover</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonButton, IonContent, IonPage, popoverController } from '@ionic/vue';
  import Popver from './popover.vue';

  export default {
    components: { IonButton, IonContent, IonPage },
    methods: {
      async openPopover(ev: Event) {
        const popover = await popoverController.create({
          component: Popover,
          cssClass: 'my-custom-class',
          event: ev,
          translucent: true,
        });
        await popover.present();

        const { role } = await popover.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      },
    },
  };
</script>
```

开发者也可以在模板中直接使用此组件：

```html
<template>
  <ion-button @click="setOpen(true, $event)">显示 Popover</ion-button>
  <ion-popover
    :is-open="isOpenRef"
    css-class="my-custom-class"
    :event="event"
    :translucent="true"
    @didDismiss="setOpen(false)"
  >
    <Popover></Popover>
  </ion-popover>
</template>

<script>
  import { IonButton, IonPopover } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import Popver from './popover.vue';

  export default defineComponent({
    components: { IonButton, IonPopover, Popover },
    setup() {
      const isOpenRef = ref(false);
      const event = ref();
      const setOpen = (state: boolean, ev?: Event) => {
        event.value = ev;
        isOpenRef.value = state;
      };
      return { isOpenRef, setOpen, event };
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