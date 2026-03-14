---
sidebar_label: 'ion-fab-list'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/fab-list/props.md';
import Events from '@ionic-internal/component-api/v5/fab-list/events.md';
import Methods from '@ionic-internal/component-api/v5/fab-list/methods.md';
import Parts from '@ionic-internal/component-api/v5/fab-list/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/fab-list/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/fab-list/slots.md';

# ion-fab-list

`ion-fab-list` 元素是用于容纳多个浮动操作按钮（fab buttons）的容器。这组浮动操作按钮包含与主浮动操作按钮相关的操作，点击后会弹出显示。如需指定按钮出现的位置，可将 `side` 属性设置为 'start'、'end'、'top' 或 'bottom'。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-fab vertical="center" horizontal="center">
  <ion-fab-button>分享</ion-fab-button>
  <ion-fab-list side="top">
    <ion-fab-button>
      <ion-icon name="logo-facebook"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-twitter"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-youtube"></ion-icon>
    </ion-fab-button>
  </ion-fab-list>

  <ion-fab-list side="end">
    <ion-fab-button>
      <ion-icon name="logo-pwa"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-npm"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-ionic"></ion-icon>
    </ion-fab-button>
  </ion-fab-list>

  <ion-fab-list side="bottom">
    <ion-fab-button>
      <ion-icon name="logo-github"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-javascript"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-angular"></ion-icon>
    </ion-fab-button>
  </ion-fab-list>

  <ion-fab-list side="start">
    <ion-fab-button>
      <ion-icon name="logo-vimeo"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-chrome"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-react"></ion-icon>
    </ion-fab-button>
  </ion-fab-list>
</ion-fab>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-fab vertical="center" horizontal="center">
  <ion-fab-button>分享</ion-fab-button>
  <ion-fab-list side="top">
    <ion-fab-button>
      <ion-icon name="logo-facebook"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-twitter"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-youtube"></ion-icon>
    </ion-fab-button>
  </ion-fab-list>

  <ion-fab-list side="end">
    <ion-fab-button>
      <ion-icon name="logo-pwa"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-npm"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-ionic"></ion-icon>
    </ion-fab-button>
  </ion-fab-list>

  <ion-fab-list side="bottom">
    <ion-fab-button>
      <ion-icon name="logo-github"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-javascript"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-angular"></ion-icon>
    </ion-fab-button>
  </ion-fab-list>

  <ion-fab-list side="start">
    <ion-fab-button>
      <ion-icon name="logo-vimeo"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-chrome"></ion-icon>
    </ion-fab-button>
    <ion-fab-button>
      <ion-icon name="logo-react"></ion-icon>
    </ion-fab-button>
  </ion-fab-list>
</ion-fab>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonFab, IonFabButton, IonFabList, IonContent, IonIcon } from '@ionic/react';
import {
  logoFacebook,
  logoTwitter,
  logoYoutube,
  logoPwa,
  logoNpm,
  logoIonic,
  logoGithub,
  logoJavascript,
  logoAngular,
  logoVimeo,
  logoChrome,
  logoReact,
} from 'ionicons/icons';

export const FabListExample: React.FC = () => (
  <IonContent>
    <IonFab vertical="center" horizontal="center">
      <IonFabButton>分享</IonFabButton>
      <IonFabList side="top">
        <IonFabButton>
          <IonIcon icon={logoFacebook} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoTwitter} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoYoutube} />
        </IonFabButton>
      </IonFabList>

      <IonFabList side="end">
        <IonFabButton>
          <IonIcon icon={logoPwa} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoNpm} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoIonic} />
        </IonFabButton>
      </IonFabList>

      <IonFabList side="bottom">
        <IonFabButton>
          <IonIcon icon={logoGithub} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoJavascript} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoAngular} />
        </IonFabButton>
      </IonFabList>

      <IonFabList side="start">
        <IonFabButton>
          <IonIcon icon={logoVimeo} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoChrome} />
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={logoReact} />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'fab-list-example',
  styleUrl: 'fab-list-example.css',
})
export class FabListExample {
  render() {
    return [
      <ion-fab vertical="center" horizontal="center">
        <ion-fab-button>分享</ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button>
            <ion-icon name="logo-facebook"></ion-icon>
          </ion-fab-button>
          <ion-fab-button>
            <ion-icon name="logo-twitter"></ion-icon>
          </ion-fab-button>
          <ion-fab-button>
            <ion-icon name="logo-youtube"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>

        <ion-fab-list side="end">
          <ion-fab-button>
            <ion-icon name="logo-pwa"></ion-icon>
          </ion-fab-button>
          <ion-fab-button>
            <ion-icon name="logo-npm"></ion-icon>
          </ion-fab-button>
          <ion-fab-button>
            <ion-icon name="logo-ionic"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>

        <ion-fab-list side="bottom">
          <ion-fab-button>
            <ion-icon name="logo-github"></ion-icon>
          </ion-fab-button>
          <ion-fab-button>
            <ion-icon name="logo-javascript"></ion-icon>
          </ion-fab-button>
          <ion-fab-button>
            <ion-icon name="logo-angular"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>

        <ion-fab-list side="start">
          <ion-fab-button>
            <ion-icon name="logo-vimeo"></ion-icon>
          </ion-fab-button>
          <ion-fab-button>
            <ion-icon name="logo-chrome"></ion-icon>
          </ion-fab-button>
          <ion-fab-button>
            <ion-icon name="logo-react"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-fab vertical="bottom" horizontal="end">
    <ion-fab-button>分享</ion-fab-button>

    <ion-fab-list side="top">
      <ion-fab-button>Facebook</ion-fab-button>
      <ion-fab-button>Twitter</ion-fab-button>
      <ion-fab-button>Youtube</ion-fab-button>
    </ion-fab-list>

    <ion-fab-list side="start">
      <ion-fab-button>Vimeo</ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</template>

<script>
  import { IonFab, IonFabButton, IonFabList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonFab, IonFabButton, IonFabList },
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