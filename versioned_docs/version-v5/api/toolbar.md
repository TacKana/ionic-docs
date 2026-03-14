---
title: '工具栏 | 自定义应用菜单工具栏按钮和图标'
description: 'Ion-toolbar 组件允许您自定义应用菜单上的工具栏按钮。在内容上方或下方添加固定工具栏，或使用全屏模式使其随内容滚动。'
sidebar_label: 'ion-toolbar'
demoUrl: '/docs/demos/api/toolbar/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toolbar/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/toolbar/props.md';
import Events from '@ionic-internal/component-api/v5/toolbar/events.md';
import Methods from '@ionic-internal/component-api/v5/toolbar/methods.md';
import Parts from '@ionic-internal/component-api/v5/toolbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/toolbar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/toolbar/slots.md';

# ion-toolbar

工具栏位于内容的上方或下方。当工具栏放置在 `<ion-header>` 中时，它将固定在内容的顶部；当放置在 `<ion-footer>` 中时，它将固定在内容的底部。全屏内容滚动时，会从位于头部或尾部的工具栏下方穿过。当放置在 `<ion-content>` 内部时，工具栏将随内容一起滚动。

## 按钮

放置在工具栏中的按钮应位于 `<ion-buttons>` 元素内部。`<ion-buttons>` 元素可以使用具名插槽放置在工具栏内。下表描述了各个插槽。

| 插槽名      | 描述                                                                                   |
| ----------- | -------------------------------------------------------------------------------------- |
| `secondary` | 在 `ios` 模式下，将元素定位到内容的 `左侧`；在 `md` 模式下，直接定位到内容的 `右侧`。     |
| `primary`   | 在 `ios` 模式下，将元素定位到内容的 `右侧`；在 `md` 模式下，定位到内容的 `最右侧`。       |
| `start`     | 在 LTR 布局中定位到内容的 `左侧`，在 RTL 布局中定位到内容的 `右侧`。                     |
| `end`       | 在 LTR 布局中定位到内容的 `右侧`，在 RTL 布局中定位到内容的 `左侧`。                     |

## 边框

在 `md` 模式下，`<ion-header>` 底部会显示一个盒阴影，`<ion-footer>` 顶部会显示一个盒阴影。在 `ios` 模式下，`<ion-header>` 底部会显示一个边框，`<ion-footer>` 顶部会显示一个边框。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-toolbar>
  <ion-title>仅标题</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="start">
    <ion-back-button></ion-back-button>
  </ion-buttons>
  <ion-title>返回按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-title size="small">默认标题上方的小标题</ion-title>
</ion-toolbar>
<ion-toolbar>
  <ion-title>默认标题</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="secondary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>默认按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button fill="solid">
      <ion-icon slot="start" name="person-circle"></ion-icon>
      联系人
    </ion-button>
  </ion-buttons>
  <ion-title>实体按钮</ion-title>
  <ion-buttons slot="primary">
    <ion-button fill="solid" color="secondary">
      帮助
      <ion-icon slot="end" name="help-circle"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button fill="outline">
      <ion-icon slot="start" name="star"></ion-icon>
      收藏
    </ion-button>
  </ion-buttons>
  <ion-title>轮廓按钮</ion-title>
  <ion-buttons slot="primary">
    <ion-button color="danger" fill="outline">
      编辑
      <ion-icon slot="end" name="create"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button> 账户 </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="danger"> 编辑 </ion-button>
  </ion-buttons>
  <ion-title>纯文本按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="start">
    <ion-menu-button autoHide="false"></ion-menu-button>
  </ion-buttons>
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>左侧菜单切换</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="primary">
    <ion-button (click)="clickedStar()">
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>右侧菜单切换</ion-title>
  <ion-buttons slot="end">
    <ion-menu-button autoHide="false"></ion-menu-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="primary">
    <ion-button (click)="clickedSearch()">
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-searchbar placeholder="搜索收藏"></ion-searchbar>
</ion-toolbar>

<ion-toolbar>
  <ion-segment value="all">
    <ion-segment-button value="all"> 全部 </ion-segment-button>
    <ion-segment-button value="favorites"> 收藏 </ion-segment-button>
  </ion-segment>
</ion-toolbar>

<ion-toolbar color="secondary">
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="primary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>次要工具栏</ion-title>
</ion-toolbar>

<ion-toolbar color="dark">
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="danger">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>深色工具栏</ion-title>
</ion-toolbar>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-toolbar>
  <ion-title>仅标题</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="start">
    <ion-back-button></ion-back-button>
  </ion-buttons>
  <ion-title>返回按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-title size="small">默认标题上方的小标题</ion-title>
</ion-toolbar>
<ion-toolbar>
  <ion-title>默认标题</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="secondary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>默认按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button fill="solid">
      <ion-icon slot="start" name="person-circle"></ion-icon>
      联系人
    </ion-button>
  </ion-buttons>
  <ion-title>实体按钮</ion-title>
  <ion-buttons slot="primary">
    <ion-button fill="solid" color="secondary">
      帮助
      <ion-icon slot="end" name="help-circle"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button fill="outline">
      <ion-icon slot="start" name="star"></ion-icon>
      收藏
    </ion-button>
  </ion-buttons>
  <ion-title>轮廓按钮</ion-title>
  <ion-buttons slot="primary">
    <ion-button color="danger" fill="outline">
      编辑
      <ion-icon slot="end" name="create"></ion-icon>
    </ion-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button> 账户 </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="danger"> 编辑 </ion-button>
  </ion-buttons>
  <ion-title>纯文本按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="start">
    <ion-menu-button auto-hide="false"></ion-menu-button>
  </ion-buttons>
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>左侧菜单切换</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="primary">
    <ion-button onclick="clickedStar()">
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>右侧菜单切换</ion-title>
  <ion-buttons slot="end">
    <ion-menu-button auto-hide="false"></ion-menu-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="primary">
    <ion-button onclick="clickedSearch()">
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-searchbar placeholder="搜索收藏"></ion-searchbar>
</ion-toolbar>

<ion-toolbar>
  <ion-segment value="all">
    <ion-segment-button value="all"> 全部 </ion-segment-button>
    <ion-segment-button value="favorites"> 收藏 </ion-segment-button>
  </ion-segment>
</ion-toolbar>

<ion-toolbar color="secondary">
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="primary">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>次要工具栏</ion-title>
</ion-toolbar>

<ion-toolbar color="dark">
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="danger">
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>深色工具栏</ion-title>
</ion-toolbar>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

export const ToolbarExample: React.FC = () => (
  <IonToolbar>
    <IonTitle>仅标题</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonBackButton defaultHref="/" />
    </IonButtons>
    <IonTitle>返回按钮</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonTitle size="small">默认标题上方的小标题</IonTitle>
  </IonToolbar>
  <IonToolbar>
    <IonTitle>默认标题</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="secondary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>默认按钮</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="solid">
        <IonIcon slot="start" icon={personCircle} />
        联系人
      </IonButton>
    </IonButtons>
    <IonTitle>实体按钮</IonTitle>
    <IonButtons slot="primary">
      <IonButton fill="solid" color="secondary">
        帮助
        <IonIcon slot="end" icon={helpCircle} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton fill="outline">
        <IonIcon slot="start" icon={star} />
        收藏
      </IonButton>
    </IonButtons>
    <IonTitle>轮廓按钮</IonTitle>
    <IonButtons slot="primary">
      <IonButton color="danger" fill="outline">
        编辑
        <IonIcon slot="end" icon={create} />
      </IonButton>
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="secondary">
      <IonButton>账户</IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">编辑</IonButton>
    </IonButtons>
    <IonTitle>纯文本按钮</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="start">
      <IonMenuButton autoHide={false} />
    </IonButtons>
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>左侧菜单切换</IonTitle>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>
    </IonButtons>
    <IonTitle>右侧菜单切换</IonTitle>
    <IonButtons slot="end">
      <IonMenuButton autoHide={false} />
    </IonButtons>
  </IonToolbar>

  <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonSearchbar placeholder="搜索收藏" />
  </IonToolbar>

  <IonToolbar>
    <IonSegment value="all">
      <IonSegmentButton value="all">
        全部
      </IonSegmentButton>
      <IonSegmentButton value="favorites">收藏</IonSegmentButton>
    </IonSegment>
  </IonToolbar>

  <IonToolbar color="secondary">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="primary">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>次要工具栏</IonTitle>
  </IonToolbar>

  <IonToolbar color="dark">
    <IonButtons slot="secondary">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
      <IonButton>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="danger">
        <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical} />
      </IonButton>
    </IonButtons>
    <IonTitle>深色工具栏</IonTitle>
  </IonToolbar>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'toolbar-example',
  styleUrl: 'toolbar-example.css',
})
export class ToolbarExample {
  clickedStar() {
    console.log('点击了收藏按钮');
  }

  clickedSearch() {
    console.log('点击了搜索按钮');
  }

  render() {
    return [
      <ion-toolbar>
        <ion-title>仅标题</ion-title>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>返回按钮</ion-title>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-title size="small">默认标题上方的小标题</ion-title>
      </ion-toolbar>,
      <ion-toolbar>
        <ion-title>默认标题</ion-title>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="secondary">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>默认按钮</ion-title>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button fill="solid">
            <ion-icon slot="start" name="person-circle"></ion-icon>
            联系人
          </ion-button>
        </ion-buttons>
        <ion-title>实体按钮</ion-title>
        <ion-buttons slot="primary">
          <ion-button fill="solid" color="secondary">
            帮助
            <ion-icon slot="end" name="help-circle"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button fill="outline">
            <ion-icon slot="start" name="star"></ion-icon>
            收藏
          </ion-button>
        </ion-buttons>
        <ion-title>轮廓按钮</ion-title>
        <ion-buttons slot="primary">
          <ion-button color="danger" fill="outline">
            编辑
            <ion-icon slot="end" name="create"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>账户</ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="danger">编辑</ion-button>
        </ion-buttons>
        <ion-title>纯文本按钮</ion-title>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button autoHide={false}></ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" name="star"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>左侧菜单切换</ion-title>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button onClick={() => this.clickedStar()}>
            <ion-icon slot="icon-only" name="star"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>右侧菜单切换</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button autoHide={false}></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button onClick={() => this.clickedSearch()}>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-searchbar placeholder="搜索收藏"></ion-searchbar>
      </ion-toolbar>,

      <ion-toolbar>
        <ion-segment value="all">
          <ion-segment-button value="all">全部</ion-segment-button>
          <ion-segment-button value="favorites">收藏</ion-segment-button>
        </ion-segment>
      </ion-toolbar>,

      <ion-toolbar color="secondary">
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="primary">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>次要工具栏</ion-title>
      </ion-toolbar>,

      <ion-toolbar color="dark">
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" name="person-circle"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="danger">
            <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>深色工具栏</ion-title>
      </ion-toolbar>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-toolbar>
    <ion-title>仅标题</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>返回按钮</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-title size="small">默认标题上方的小标题</ion-title>
  </ion-toolbar>
  <ion-toolbar>
    <ion-title>默认标题</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </ion-button>
      <ion-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button color="secondary">
        <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>默认按钮</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button fill="solid">
        <ion-icon slot="start" :icon="person-circle"></ion-icon>
        联系人
      </ion-button>
    </ion-buttons>
    <ion-title>实体按钮</ion-title>
    <ion-buttons slot="primary">
      <ion-button fill="solid" color="secondary">
        帮助
        <ion-icon slot="end" :icon="help-circle"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button fill="outline">
        <ion-icon slot="start" :icon="star"></ion-icon>
        收藏
      </ion-button>
    </ion-buttons>
    <ion-title>轮廓按钮</ion-title>
    <ion-buttons slot="primary">
      <ion-button color="danger" fill="outline">
        编辑
        <ion-icon slot="end" :icon="create"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="secondary">
      <ion-button> 账户 </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button color="danger"> 编辑 </ion-button>
    </ion-buttons>
    <ion-title>纯文本按钮</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" :icon="star"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>左侧菜单切换</ion-title>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="primary">
      <ion-button @click="clickedStar()">
        <ion-icon slot="icon-only" :icon="star"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>右侧菜单切换</ion-title>
    <ion-buttons slot="end">
      <ion-menu-button auto-hide="false"></ion-menu-button>
    </ion-buttons>
  </ion-toolbar>

  <ion-toolbar>
    <ion-buttons slot="primary">
      <ion-button @click="clickedSearch()">
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-searchbar placeholder="搜索收藏"></ion-searchbar>
  </ion-toolbar>

  <ion-toolbar>
    <ion-segment value="all">
      <ion-segment-button value="all"> 全部 </ion-segment-button>
      <ion-segment-button value="favorites"> 收藏 </ion-segment-button>
    </ion-segment>
  </ion-toolbar>

  <ion-toolbar color="secondary">
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </ion-button>
      <ion-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button color="primary">
        <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>次要工具栏</ion-title>
  </ion-toolbar>

  <ion-toolbar color="dark">
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
      </ion-button>
      <ion-button>
        <ion-icon slot="icon-only" :icon="search"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-buttons slot="primary">
      <ion-button color="danger">
        <ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>深色工具栏</ion-title>
  </ion-toolbar>
</template>

<script>
  import { IonButton, IonButtons, IonIcon, IonTitle, IonToolbar } from '@ionic/vue';
  import { ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonButtons,
      IonIcon,
      IonTitle,
      IonToolbar,
    },
    setup() {
      return {
        ellipsisHorizontal,
        ellipsisVertical,
        helpCircle,
        personCircle,
        search,
        star,
      };
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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />