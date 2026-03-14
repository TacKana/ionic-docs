---
title: '滑动按钮 | 使用 ion-item-sliding 实现从右向左滑动'
description: 'ion-item-sliding 组件包含可通过拖拽显示按钮的项目。当滑动项从左向右滑动时，会显示操作选项。'
sidebar_label: 'ion-item-sliding'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/item-sliding/props.md';
import Events from '@ionic-internal/component-api/v5/item-sliding/events.md';
import Methods from '@ionic-internal/component-api/v5/item-sliding/methods.md';
import Parts from '@ionic-internal/component-api/v5/item-sliding/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/item-sliding/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/item-sliding/slots.md';

# ion-item-sliding

滑动项组件包含一个可以通过拖拽显示按钮的项目。它需要一个 [item](item.md) 组件作为子元素。所有要显示的操作选项都应放在 [item options](item-options.md) 元素中。

## 滑动方向

默认情况下，按钮位于 `"end"` 侧。这意味着当滑动项从末尾向起始方向滑动时（即从左向右滑动？），操作选项会显示出来。具体来说，在 LTR（从左到右）布局下是从右向左滑动，在 RTL（从右到左）布局下是从左向右滑动。要将它们放在相反的一侧，使其在相反方向滑动时显示，可以在 [`ion-item-options`](item-options.md) 元素上设置 `side` 属性为 `"start"`。可以同时使用两个 `ion-item-options`，以便根据滑动方向显示两组不同的操作选项。

## 选项布局

默认情况下，如果在 [item option](item-option.md) 中同时放置图标和文本，图标会显示在文本上方，但可以通过更改图标插槽（slot）来改变其在选项中的位置，可选值如下：

| 插槽        | 描述                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `start`     | 在 LTR 布局中，`start` 是按钮的左侧；在 RTL 布局中，是按钮的右侧 |
| `top`       | 图标位于文本上方                                               |
| `icon-only` | 图标是按钮的唯一内容                               |
| `bottom`    | 图标位于文本下方                                               |
| `end`       | 在 LTR 布局中，`end` 是按钮的右侧；在 RTL 布局中，是按钮的左侧   |

## 可展开选项

如果你滑动超过特定阈值，选项可以展开以占据项目的整个宽度。这可以与 `ionSwipe` 事件结合使用，以调用类上的方法。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-list>
  <!-- 两侧带有文本选项的滑动项 -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option (click)="favorite(item)">收藏</ion-item-option>
      <ion-item-option color="danger" (click)="share(item)">分享</ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>项目选项</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option (click)="unread(item)">标为未读</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 两侧带有可展开选项的滑动项 -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="danger" expandable> 删除 </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>可展开选项</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option color="tertiary" expandable> 归档 </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 两侧带有图标选项的多行滑动项 -->
  <ion-item-sliding id="item100">
    <ion-item href="#">
      <ion-label>
        <h2>HubStruck 通知</h2>
        <p>您网络中的新消息</p>
        <p>Oceanic Next 已加入您的网络</p>
      </ion-label>
      <ion-note slot="end"> 上午 10:45 </ion-note>
    </ion-item>

    <ion-item-options side="start">
      <ion-item-option>
        <ion-icon slot="icon-only" name="heart"></ion-icon>
      </ion-item-option>
    </ion-item-options>

    <ion-item-options side="end">
      <ion-item-option color="danger">
        <ion-icon slot="icon-only" name="trash"></ion-icon>
      </ion-item-option>
      <ion-item-option>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 结束侧带有图标位于开始位置的选项的滑动项 -->
  <ion-item-sliding>
    <ion-item>
      <ion-label> 滑动项，图标在开始位置 </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        更多
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="start" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 结束侧带有图标位于结束位置的选项的滑动项 -->
  <ion-item-sliding>
    <ion-item>
      <ion-label> 滑动项，图标在结束位置 </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        更多
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="end" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 结束侧带有图标位于顶部位置的选项的滑动项 -->
  <ion-item-sliding>
    <ion-item>
      <ion-label> 滑动项，图标在顶部 </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        更多
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="top" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 结束侧带有图标位于底部位置的选项的滑动项 -->
  <ion-item-sliding>
    <ion-item>
      <ion-label> 滑动项，图标在底部 </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        更多
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="bottom" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-list>
  <!-- 两侧带有文本选项的滑动项 -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option onClick="favorite(item)">收藏</ion-item-option>
      <ion-item-option color="danger" onClick="share(item)">分享</ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>项目选项</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option onClick="unread(item)">标为未读</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 两侧带有可展开选项的滑动项 -->
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="danger" expandable> 删除 </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>可展开选项</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option color="tertiary" expandable> 归档 </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 两侧带有图标选项的多行滑动项 -->
  <ion-item-sliding id="item100">
    <ion-item href="#">
      <ion-label>
        <h2>HubStruck 通知</h2>
        <p>您网络中的新消息</p>
        <p>Oceanic Next 已加入您的网络</p>
      </ion-label>
      <ion-note slot="end"> 上午 10:45 </ion-note>
    </ion-item>

    <ion-item-options side="start">
      <ion-item-option>
        <ion-icon slot="icon-only" name="heart"></ion-icon>
      </ion-item-option>
    </ion-item-options>

    <ion-item-options side="end">
      <ion-item-option color="danger">
        <ion-icon slot="icon-only" name="trash"></ion-icon>
      </ion-item-option>
      <ion-item-option>
        <ion-icon slot="icon-only" name="star"></ion-icon>
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 结束侧带有图标位于开始位置的选项的滑动项 -->
  <ion-item-sliding>
    <ion-item>
      <ion-label> 滑动项，图标在开始位置 </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        更多
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="start" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 结束侧带有图标位于结束位置的选项的滑动项 -->
  <ion-item-sliding>
    <ion-item>
      <ion-label> 滑动项，图标在结束位置 </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        更多
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="end" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 结束侧带有图标位于顶部位置的选项的滑动项 -->
  <ion-item-sliding>
    <ion-item>
      <ion-label> 滑动项，图标在顶部 </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        更多
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="top" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <!-- 结束侧带有图标位于底部位置的选项的滑动项 -->
  <ion-item-sliding>
    <ion-item>
      <ion-label> 滑动项，图标在底部 </ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option color="primary">
        <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
        更多
      </ion-item-option>
      <ion-item-option color="secondary">
        <ion-icon slot="bottom" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonList,
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonNote,
} from '@ionic/react';

import { heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

export const ItemSlidingExample: React.FC = () => (
  <IonList>
    {/* 两侧带有文本选项的滑动项 */}
    <IonItemSliding>
      <IonItemOptions side="start">
        <IonItemOption onClick={() => console.log('收藏 clicked')}>收藏</IonItemOption>
        <IonItemOption color="danger" onClick={() => console.log('分享 clicked')}>
          分享
        </IonItemOption>
      </IonItemOptions>

      <IonItem>
        <IonLabel>项目选项</IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption onClick={() => console.log('标为未读 clicked')}>标为未读</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>

    {/* 两侧带有可展开选项的滑动项 */}
    <IonItemSliding>
      <IonItemOptions side="start">
        <IonItemOption color="danger" expandable>
          删除
        </IonItemOption>
      </IonItemOptions>

      <IonItem>
        <IonLabel>可展开选项</IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="tertiary" expandable>
          归档
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>

    {/* 两侧带有图标选项的多行滑动项 */}
    <IonItemSliding id="item100">
      <IonItem href="#">
        <IonLabel>
          <h2>HubStruck 通知</h2>
          <p>您网络中的新消息</p>
          <p>Oceanic Next 已加入您的网络</p>
        </IonLabel>
        <IonNote slot="end">上午 10:45</IonNote>
      </IonItem>

      <IonItemOptions side="start">
        <IonItemOption>
          <IonIcon slot="icon-only" icon={heart} />
        </IonItemOption>
      </IonItemOptions>

      <IonItemOptions side="end">
        <IonItemOption color="danger">
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
        <IonItemOption>
          <IonIcon slot="icon-only" icon={star} />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>

    {/* 结束侧带有图标位于开始位置的选项的滑动项 */}
    <IonItemSliding>
      <IonItem>
        <IonLabel>滑动项，图标在开始位置</IonLabel>
      </IonItem>
      <IonItemOptions>
        <IonItemOption color="primary">
          <IonIcon slot="start" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
          更多
        </IonItemOption>
        <IonItemOption color="secondary">
          <IonIcon slot="start" icon={archive} />
          归档
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>

    {/* 结束侧带有图标位于结束位置的选项的滑动项 */}
    <IonItemSliding>
      <IonItem>
        <IonLabel>滑动项，图标在结束位置</IonLabel>
      </IonItem>
      <IonItemOptions>
        <IonItemOption color="primary">
          <IonIcon slot="end" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
          更多
        </IonItemOption>
        <IonItemOption color="secondary">
          <IonIcon slot="end" icon={archive} />
          归档
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>

    {/* 结束侧带有图标位于顶部位置的选项的滑动项 */}
    <IonItemSliding>
      <IonItem>
        <IonLabel>滑动项，图标在顶部</IonLabel>
      </IonItem>
      <IonItemOptions>
        <IonItemOption color="primary">
          <IonIcon slot="top" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
          更多
        </IonItemOption>
        <IonItemOption color="secondary">
          <IonIcon slot="top" icon={archive} />
          归档
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>

    {/* 结束侧带有图标位于底部位置的选项的滑动项 */}
    <IonItemSliding>
      <IonItem>
        <IonLabel>滑动项，图标在底部</IonLabel>
      </IonItem>
      <IonItemOptions>
        <IonItemOption color="primary">
          <IonIcon slot="bottom" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
          更多
        </IonItemOption>
        <IonItemOption color="secondary">
          <IonIcon slot="bottom" icon={archive} />
          归档
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  </IonList>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-sliding-example',
  styleUrl: 'item-sliding-example.css',
})
export class ItemSlidingExample {
  favorite(ev: any) {
    console.log('收藏 clicked', ev);
  }

  share(ev: any) {
    console.log('收藏 clicked', ev);
  }

  unread(ev: any) {
    console.log('收藏 clicked', ev);
  }

  render() {
    return [
      <ion-list>
        {/* 两侧带有文本选项的滑动项 */}
        <ion-item-sliding>
          <ion-item-options side="start">
            <ion-item-option onClick={(ev) => this.favorite(ev)}>收藏</ion-item-option>
            <ion-item-option color="danger" onClick={(ev) => this.share(ev)}>
              分享
            </ion-item-option>
          </ion-item-options>

          <ion-item>
            <ion-label>项目选项</ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option onClick={(ev) => this.unread(ev)}>标为未读</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* 两侧带有可展开选项的滑动项 */}
        <ion-item-sliding>
          <ion-item-options side="start">
            <ion-item-option color="danger" expandable>
              删除
            </ion-item-option>
          </ion-item-options>

          <ion-item>
            <ion-label>可展开选项</ion-label>
          </ion-item>

          <ion-item-options side="end">
            <ion-item-option color="tertiary" expandable>
              归档
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* 两侧带有图标选项的多行滑动项 */}
        <ion-item-sliding id="item100">
          <ion-item href="#">
            <ion-label>
              <h2>HubStruck 通知</h2>
              <p>您网络中的新消息</p>
              <p>Oceanic Next 已加入您的网络</p>
            </ion-label>
            <ion-note slot="end">上午 10:45</ion-note>
          </ion-item>

          <ion-item-options side="start">
            <ion-item-option>
              <ion-icon slot="icon-only" name="heart"></ion-icon>
            </ion-item-option>
          </ion-item-options>

          <ion-item-options side="end">
            <ion-item-option color="danger">
              <ion-icon slot="icon-only" name="trash"></ion-icon>
            </ion-item-option>
            <ion-item-option>
              <ion-icon slot="icon-only" name="star"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* 结束侧带有图标位于开始位置的选项的滑动项 */}
        <ion-item-sliding>
          <ion-item>
            <ion-label>滑动项，图标在开始位置</ion-label>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="primary">
              <ion-icon slot="start" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              更多
            </ion-item-option>
            <ion-item-option color="secondary">
              <ion-icon slot="start" name="archive"></ion-icon>
              归档
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* 结束侧带有图标位于结束位置的选项的滑动项 */}
        <ion-item-sliding>
          <ion-item>
            <ion-label>滑动项，图标在结束位置</ion-label>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="primary">
              <ion-icon slot="end" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              更多
            </ion-item-option>
            <ion-item-option color="secondary">
              <ion-icon slot="end" name="archive"></ion-icon>
              归档
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* 结束侧带有图标位于顶部位置的选项的滑动项 */}
        <ion-item-sliding>
          <ion-item>
            <ion-label>滑动项，图标在顶部</ion-label>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="primary">
              <ion-icon slot="top" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              更多
            </ion-item-option>
            <ion-item-option color="secondary">
              <ion-icon slot="top" name="archive"></ion-icon>
              归档
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        {/* 结束侧带有图标位于底部位置的选项的滑动项 */}
        <ion-item-sliding>
          <ion-item>
            <ion-label>滑动项，图标在底部</ion-label>
          </ion-item>
          <ion-item-options>
            <ion-item-option color="primary">
              <ion-icon slot="bottom" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              更多
            </ion-item-option>
            <ion-item-option color="secondary">
              <ion-icon slot="bottom" name="archive"></ion-icon>
              归档
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-list>
    <!-- 两侧带有文本选项的滑动项 -->
    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option @click="favorite(item)">收藏</ion-item-option>
        <ion-item-option color="danger" @click="share(item)">分享</ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>项目选项</ion-label>
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option @click="unread(item)">标为未读</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <!-- 两侧带有可展开选项的滑动项 -->
    <ion-item-sliding>
      <ion-item-options side="start">
        <ion-item-option color="danger" expandable> 删除 </ion-item-option>
      </ion-item-options>

      <ion-item>
        <ion-label>可展开选项</ion-label>
      </ion-item>

      <ion-item-options side="end">
        <ion-item-option color="tertiary" expandable> 归档 </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <!-- 两侧带有图标选项的多行滑动项 -->
    <ion-item-sliding id="item100">
      <ion-item href="#">
        <ion-label>
          <h2>HubStruck 通知</h2>
          <p>您网络中的新消息</p>
          <p>Oceanic Next 已加入您的网络</p>
        </ion-label>
        <ion-note slot="end"> 上午 10:45 </ion-note>
      </ion-item>

      <ion-item-options side="start">
        <ion-item-option>
          <ion-icon slot="icon-only" :icon="heart"></ion-icon>
        </ion-item-option>
      </ion-item-options>

      <ion-item-options side="end">
        <ion-item-option color="danger">
          <ion-icon slot="icon-only" :icon="trash"></ion-icon>
        </ion-item-option>
        <ion-item-option>
          <ion-icon slot="icon-only" :icon="star"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <!-- 结束侧带有图标位于开始位置的选项的滑动项 -->
    <ion-item-sliding>
      <ion-item>
        <ion-label> 滑动项，图标在开始位置 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary">
          <ion-icon slot="start" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          更多
        </ion-item-option>
        <ion-item-option color="secondary">
          <ion-icon slot="start" :icon="archive"></ion-icon>
          归档
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    {/* 结束侧带有图标位于结束位置的选项的滑动项 */}
    <ion-item-sliding>
      <ion-item>
        <ion-label> 滑动项，图标在结束位置 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary">
          <ion-icon slot="end" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          更多
        </ion-item-option>
        <ion-item-option color="secondary">
          <ion-icon slot="end" :icon="archive"></ion-icon>
          归档
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    {/* 结束侧带有图标位于顶部位置的选项的滑动项 */}
    <ion-item-sliding>
      <ion-item>
        <ion-label> 滑动项，图标在顶部 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary">
          <ion-icon slot="top" :ios="ellipsis-horizontal" :md="ellipsis-vertical"></ion-icon>
          更多
        </ion-item-option>
        <ion-item-option color="secondary">
          <ion-icon slot="top" :icon="archive"></ion-icon>
          归档
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    {/* 结束侧带有图标位于底部位置的选项的滑动项 */}
    <ion-item-sliding>
      <ion-item>
        <ion-label> 滑动项，图标在底部 </ion-label>
      </ion-item>
      <ion-item-options>
        <ion-item-option color="primary">
          <ion-icon slot="bottom" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
          更多
        </ion-item-option>
        <ion-item-option color="secondary">
          <ion-icon slot="bottom" :icon="archive"></ion-icon>
          归档
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
</template>

<script>
  import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/vue';
  import { archive, ellipsisHorizontal, ellipsisVertical, heart, star, trash } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonIcon,
      IonItem,
      IonItemOption,
      IonItemOptions,
      IonItemSliding,
      IonLabel,
      IonList,
    },
    setup() {
      return {
        archive,
        ellipsisHorizontal,
        ellipsisVertical,
        heart,
        star,
        trash,
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