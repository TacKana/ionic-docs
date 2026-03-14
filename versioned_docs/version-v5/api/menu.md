---
sidebar_label: 'ion-menu'
demoUrl: '/docs/demos/api/menu/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/menu/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/menu/props.md';
import Events from '@ionic-internal/component-api/v5/menu/events.md';
import Methods from '@ionic-internal/component-api/v5/menu/methods.md';
import Parts from '@ionic-internal/component-api/v5/menu/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/menu/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/menu/slots.md';

# ion-menu

菜单（Menu）组件是一种从当前视图侧面滑入的导航抽屉。
默认情况下，它从左侧滑入，但这个方向可以被覆盖。
菜单在不同模式下的显示方式不同，但其显示类型可以更改为任何可用的菜单类型。
菜单元素应该是根内容元素的同级元素。
可以有任意数量的菜单附加到内容上。
这些菜单可以通过模板控制，也可以通过 `MenuController` 以编程方式控制。

## 使用方式

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-menu side="start" menuId="first" contentId="main">
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>起始菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-menu side="start" menuId="custom" contentId="main" class="my-custom-menu">
  <ion-header>
    <ion-toolbar color="tertiary">
      <ion-title>自定义菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-menu side="end" type="push" contentId="main">
  <ion-header>
    <ion-toolbar color="danger">
      <ion-title>结束菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
      <ion-item>菜单项</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-router-outlet id="main"></ion-router-outlet>
```

```tsx
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'menu-example',
  templateUrl: 'menu-example.html',
  styleUrls: ['./menu-example.css'],
})
export class MenuExample {
  constructor(private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
```

```css
.my-custom-menu {
  --width: 500px;
}
```

</TabItem>

<TabItem value="javascript">

```html
<ion-app>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>起始菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-menu side="start" menu-id="custom" class="my-custom-menu" content-id="main">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>自定义菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-menu side="end" type="push" content-id="main">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>结束菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <div class="ion-page" id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>菜单 - 基础</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button expand="block" onclick="openFirst()">打开起始菜单</ion-button>
      <ion-button expand="block" onclick="openEnd()">打开结束菜单</ion-button>
      <ion-button expand="block" onclick="openCustom()">打开自定义菜单</ion-button>
    </ion-content>
  </div>
</ion-app>
```

```javascript
<script type="module">
    import { menuController } from '@ionic/core';
    window.menuController = menuController;
</script>

<script>
  function openFirst() {
    menuController.enable(true, 'first');
    menuController.open('first');
  }

  function openEnd() {
    menuController.open('end');
  }

  function openCustom() {
    menuController.enable(true, 'custom');
    menuController.open('custom');
  }
</script>
```

```css
.my-custom-menu {
  --width: 500px;
}
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

export const MenuExample: React.FC = () => (
  <>
    <IonMenu side="start" menuId="first">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>起始菜单</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>菜单项</IonItem>
          <IonItem>菜单项</ion-item>
          <IonItem>菜单项</ion-item>
          <IonItem>菜单项</ion-item>
          <IonItem>菜单项</ion-item>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonMenu side="start" menuId="custom" className="my-custom-menu">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>自定义菜单</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>菜单项</IonItem>
          <IonItem>菜单项</IonItem>
          <IonItem>菜单项</IonItem>
          <IonItem>菜单项</IonItem>
          <IonItem>菜单项</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonMenu side="end" type="push">
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>结束菜单</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>菜单项</IonItem>
          <IonItem>菜单项</IonItem>
          <IonItem>菜单项</IonItem>
          <IonItem>菜单项</IonItem>
          <IonItem>菜单项</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet></IonRouterOutlet>
  </>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { menuController } from '@ionic/core';

@Component({
  tag: 'menu-example',
  styleUrl: 'menu-example.css',
})
export class MenuExample {
  openFirst() {
    menuController.enable(true, 'first');
    menuController.open('first');
  }

  openEnd() {
    menuController.open('end');
  }

  openCustom() {
    menuController.enable(true, 'custom');
    menuController.open('custom');
  }

  render() {
    return [
      <ion-menu side="start" menuId="first" contentId="main">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>起始菜单</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>,

      <ion-menu side="start" menuId="custom" contentId="main" class="my-custom-menu">
        <ion-header>
          <ion-toolbar color="tertiary">
            <ion-title>自定义菜单</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>,

      <ion-menu side="end" type="push" contentId="main">
        <ion-header>
          <ion-toolbar color="danger">
            <ion-title>结束菜单</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
            <ion-item>菜单项</ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>,

      // 这里也可以放置一个路由出口
      <ion-content id="main">
        <ion-button expand="block" onClick={() => this.openFirst()}>
          打开起始菜单
        </ion-button>
        <ion-button expand="block" onClick={() => this.openEnd()}>
          打开结束菜单
        </ion-button>
        <ion-button expand="block" onClick={() => this.openCustom()}>
          打开自定义菜单
        </ion-button>
      </ion-content>,
    ];
  }
}
```

```css
.my-custom-menu {
  --width: 500px;
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>起始菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-menu side="start" menu-id="custom" class="my-custom-menu" content-id="main">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>自定义菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-menu side="end" type="push" content-id="main">
    <ion-header>
      <ion-toolbar color="danger">
        <ion-title>结束菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
        <ion-item>菜单项</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main"></ion-router-outlet>
</template>
<style>
  .my-custom-menu {
    --width: 500px;
  }
</style>

<script>
  import {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
    menuController,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonItem,
      IonList,
      IonMenu,
      IonRouterOutlet,
      IonTitle,
      IonToolbar,
    },
    methods: {
      openFirst() {
        menuController.enable(true, 'first');
        menuController.open('first');
      },
      openEnd() {
        menuController.open('end');
      },
      openCustom() {
        menuController.enable(true, 'custom');
        menuController.open('custom');
      },
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

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />