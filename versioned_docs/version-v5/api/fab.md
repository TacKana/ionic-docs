---
title: 'ion-fab：适用于 Android 和 iOS Ionic 应用的浮动操作按钮'
description: 'FAB（浮动操作按钮）是包含一个或多个 fab 按钮的容器元素。使用 Ionic Framework 创建 Android 和 iOS 应用时，请使用 ion-fab。'
sidebar_label: 'ion-fab'
demoUrl: '/docs/demos/api/fab/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/fab/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/fab/props.md';
import Events from '@ionic-internal/component-api/v5/fab/events.md';
import Methods from '@ionic-internal/component-api/v5/fab/methods.md';
import Parts from '@ionic-internal/component-api/v5/fab/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/fab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/fab/slots.md';

# ion-fab

FAB 是包含一个或多个 fab 按钮的容器元素。它们应放置在固定的位置，不会随内容滚动。FAB 容器应该有一个主要的 fab-button。FAB 也可以包含 fab-list，其中包含相关的按钮，当点击主要的 fab 按钮时显示。同一个 fab 容器可以包含多个具有不同 `side` 属性值的 [fab-list](fab-list.md) 元素。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-header>
  <ion-toolbar>
    <ion-title>头部</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <!-- fab 置于顶部末尾 -->
  <ion-fab vertical="top" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于底部末尾 -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="arrow-forward-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于顶部开始位置 -->
  <ion-fab vertical="top" horizontal="start" slot="fixed">
    <ion-fab-button>
      <ion-icon name="arrow-back-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于底部开始位置 -->
  <ion-fab vertical="bottom" horizontal="start" slot="fixed">
    <ion-fab-button>
      <ion-icon name="arrow-up-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于（垂直）中间和开始位置 -->
  <ion-fab vertical="center" horizontal="start" slot="fixed">
    <ion-fab-button>
      <ion-icon name="share"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于（垂直）中间和末尾 -->
  <ion-fab vertical="center" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于顶部末尾，位于内容顶部边缘并与头部重叠 -->
  <ion-fab vertical="top" horizontal="end" edge slot="fixed">
    <ion-fab-button>
      <ion-icon name="person"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于底部开始，位于内容底部边缘并与底部重叠，右侧带有一个列表 -->
  <ion-fab vertical="bottom" horizontal="start" edge slot="fixed">
    <ion-fab-button>
      <ion-icon name="settings"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="end">
      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
    </ion-fab-list>
  </ion-fab>

  <!-- fab 置于内容中心，每个方向带有一个列表 -->
  <ion-fab vertical="center" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="share"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="bottom">
      <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="start">
      <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="end">
      <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</ion-content>

<ion-footer>
  <ion-toolbar>
    <ion-title>底部</ion-title>
  </ion-toolbar>
</ion-footer>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-header>
  <ion-toolbar>
    <ion-title>头部</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <!-- fab 置于顶部末尾 -->
  <ion-fab vertical="top" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于底部末尾 -->
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="arrow-forward-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于顶部开始位置 -->
  <ion-fab vertical="top" horizontal="start" slot="fixed">
    <ion-fab-button>
      <ion-icon name="arrow-back-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于底部开始位置 -->
  <ion-fab vertical="bottom" horizontal="start" slot="fixed">
    <ion-fab-button>
      <ion-icon name="arrow-up-circle"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于（垂直）中间和开始位置 -->
  <ion-fab vertical="center" horizontal="start" slot="fixed">
    <ion-fab-button>
      <ion-icon name="share"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于（垂直）中间和末尾 -->
  <ion-fab vertical="center" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于顶部末尾，位于内容顶部边缘并与头部重叠 -->
  <ion-fab vertical="top" horizontal="end" edge slot="fixed">
    <ion-fab-button>
      <ion-icon name="person"></ion-icon>
    </ion-fab-button>
  </ion-fab>

  <!-- fab 置于底部开始，位于内容底部边缘并与底部重叠，右侧带有一个列表 -->
  <ion-fab vertical="bottom" horizontal="start" edge slot="fixed">
    <ion-fab-button>
      <ion-icon name="settings"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="end">
      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
    </ion-fab-list>
  </ion-fab>

  <!-- fab 置于内容中心，每个方向带有一个列表 -->
  <ion-fab vertical="center" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="share"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="bottom">
      <ion-fab-button><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="start">
      <ion-fab-button><ion-icon name="logo-instagram"></ion-icon></ion-fab-button>
    </ion-fab-list>
    <ion-fab-list side="end">
      <ion-fab-button><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</ion-content>

<ion-footer>
  <ion-toolbar>
    <ion-title>底部</ion-title>
  </ion-toolbar>
</ion-footer>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonFooter,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
} from '@ionic/react';
import {
  add,
  settings,
  share,
  person,
  arrowForwardCircle,
  arrowBackCircle,
  arrowUpCircle,
  logoVimeo,
  logoFacebook,
  logoInstagram,
  logoTwitter,
} from 'ionicons/icons';

export const FabExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>头部</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- fab 置于顶部末尾 --*/}
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        {/*-- fab 置于底部末尾 --*/}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab>

        {/*-- fab 置于顶部开始位置 --*/}
        <IonFab vertical="top" horizontal="start" slot="fixed">
          <IonFabButton>
            <IonIcon icon={arrowBackCircle} />
          </IonFabButton>
        </IonFab>

        {/*-- fab 置于底部开始位置 --*/}
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton>
            <IonIcon icon={arrowUpCircle} />
          </IonFabButton>
        </IonFab>

        {/*-- fab 置于（垂直）中间和开始位置 --*/}
        <IonFab vertical="center" horizontal="start" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
        </IonFab>

        {/*-- fab 置于（垂直）中间和末尾 --*/}
        <IonFab vertical="center" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        {/*-- fab 置于顶部末尾，位于内容顶部边缘并与头部重叠 --*/}
        <IonFab vertical="top" horizontal="end" edge slot="fixed">
          <IonFabButton>
            <IonIcon icon={person} />
          </IonFabButton>
        </IonFab>

        {/*-- fab 置于底部开始，位于内容底部边缘并与底部重叠，右侧带有一个列表 --*/}
        <IonFab vertical="bottom" horizontal="start" edge slot="fixed">
          <IonFabButton>
            <IonIcon icon={settings} />
          </IonFabButton>
          <IonFabList side="end">
            <IonFabButton>
              <IonIcon icon={logoVimeo} />
            </IonFabButton>
          </IonFabList>
        </IonFab>

        {/*-- fab 置于内容中心，每个方向带有一个列表 --*/}
        <IonFab vertical="center" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton>
              <IonIcon icon={logoVimeo} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton>
              <IonIcon icon={logoFacebook} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton>
              <IonIcon icon={logoInstagram} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton>
              <IonIcon icon={logoTwitter} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>底部</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'fab-example',
  styleUrl: 'fab-example.css',
})
export class FabExample {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>头部</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        {/* fab 置于顶部末尾 */}
        <ion-fab vertical="top" horizontal="end" slot="fixed">
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab 置于底部末尾 */}
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
          <ion-fab-button>
            <ion-icon name="arrow-forward-circle"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab 置于顶部开始位置 */}
        <ion-fab vertical="top" horizontal="start" slot="fixed">
          <ion-fab-button>
            <ion-icon name="arrow-back-circle"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab 置于底部开始位置 */}
        <ion-fab vertical="bottom" horizontal="start" slot="fixed">
          <ion-fab-button>
            <ion-icon name="arrow-up-circle"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab 置于（垂直）中间和开始位置 */}
        <ion-fab vertical="center" horizontal="start" slot="fixed">
          <ion-fab-button>
            <ion-icon name="share"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab 置于（垂直）中间和末尾 */}
        <ion-fab vertical="center" horizontal="end" slot="fixed">
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab 置于顶部末尾，位于内容顶部边缘并与头部重叠 */}
        <ion-fab vertical="top" horizontal="end" edge slot="fixed">
          <ion-fab-button>
            <ion-icon name="person"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        {/* fab 置于底部开始，位于内容底部边缘并与底部重叠，右侧带有一个列表 */}
        <ion-fab vertical="bottom" horizontal="start" edge slot="fixed">
          <ion-fab-button>
            <ion-icon name="settings"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="end">
            <ion-fab-button>
              <ion-icon name="logo-vimeo"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>

        {/* fab 置于内容中心，每个方向带有一个列表 */}
        <ion-fab vertical="center" horizontal="center" slot="fixed">
          <ion-fab-button>
            <ion-icon name="share"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="top">
            <ion-fab-button>
              <ion-icon name="logo-vimeo"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
          <ion-fab-list side="bottom">
            <ion-fab-button>
              <ion-icon name="logo-facebook"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
          <ion-fab-list side="start">
            <ion-fab-button>
              <ion-icon name="logo-instagram"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
          <ion-fab-list side="end">
            <ion-fab-button>
              <ion-icon name="logo-twitter"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
      </ion-content>,

      <ion-footer>
        <ion-toolbar>
          <ion-title>底部</ion-title>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>头部</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <!-- fab 置于顶部末尾 -->
    <ion-fab vertical="top" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <!-- fab 置于底部末尾 -->
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="arrowForwardCircle"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <!-- fab 置于顶部开始位置 -->
    <ion-fab vertical="top" horizontal="start" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="arrowBackCircle"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <!-- fab 置于底部开始位置 -->
    <ion-fab vertical="bottom" horizontal="start" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="arrowUpCircle"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <!-- fab 置于（垂直）中间和开始位置 -->
    <ion-fab vertical="center" horizontal="start" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="share"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <!-- fab 置于（垂直）中间和末尾 -->
    <ion-fab vertical="center" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <!-- fab 置于顶部末尾，位于内容顶部边缘并与头部重叠 -->
    <ion-fab vertical="top" horizontal="end" edge slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="person"></ion-icon>
      </ion-fab-button>
    </ion-fab>

    <!-- fab 置于底部开始，位于内容底部边缘并与底部重叠，右侧带有一个列表 -->
    <ion-fab vertical="bottom" horizontal="start" edge slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="settings"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="end">
        <ion-fab-button><ion-icon :icon="logoVimeo"></ion-icon></ion-fab-button>
      </ion-fab-list>
    </ion-fab>

    <!-- fab 置于内容中心，每个方向带有一个列表 -->
    <ion-fab vertical="center" horizontal="center" slot="fixed">
      <ion-fab-button>
        <ion-icon :icon="share"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button><ion-icon :icon="logoVimeo"></ion-icon></ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="bottom">
        <ion-fab-button><ion-icon :icon="logoFacebook"></ion-icon></ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="start">
        <ion-fab-button><ion-icon :icon="logoInstagram"></ion-icon></ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="end">
        <ion-fab-button><ion-icon :icon="logoTwitter"></ion-icon></ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>底部</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
  import {
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList,
    IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';
  import {
    add,
    arrowBackCircle,
    arrowForwardCircle,
    arrowUpCircle,
    logoFacebook,
    logoInstagram,
    logoTwitter,
    logoVimeo,
    person,
    settings,
    share,
  } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonFab,
      IonFabButton,
      IonFabList,
      IonFooter,
      IonHeader,
      IonIcon,
      IonTitle,
      IonToolbar,
    },
    setup() {
      return {
        add,
        arrowBackCircle,
        arrowForwardCircle,
        arrowUpCircle,
        logoFacebook,
        logoInstagram,
        logoTwitter,
        logoVimeo,
        person,
        settings,
        share,
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