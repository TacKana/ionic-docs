---
sidebar_label: 'ion-card'
demoUrl: '/docs/demos/api/card/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/card/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/card/props.md';
import Events from '@ionic-internal/component-api/v5/card/events.md';
import Methods from '@ionic-internal/component-api/v5/card/methods.md';
import Parts from '@ionic-internal/component-api/v5/card/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/card/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/card/slots.md';

# ion-card

卡片是一种标准的用户界面组件，作为查看更详细信息的入口。一个卡片可以是一个单独的组件，但通常由一些头部、标题、副标题和内容组成。`ion-card` 被拆分成若干子组件来体现这一点。请参阅 `ion-card-content`、`ion-card-header`、`ion-card-title`、`ion-card-subtitle`。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>卡片副标题</ion-card-subtitle>
    <ion-card-title>卡片标题</ion-card-title>
  </ion-card-header>

  <ion-card-content>
    时常亲近自然之心……偶尔远离喧嚣，去爬山或在林中度过一周。洗涤你的心灵。
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item>
    <ion-icon name="pin" slot="start"></ion-icon>
    <ion-label>卡片中的 ion-item，图标在左，按钮在右</ion-label>
    <ion-button fill="outline" slot="end">查看</ion-button>
  </ion-item>

  <ion-card-content>
    这是 ion-card-content 元素内的内容，没有使用任何段落或标题标签。
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item href="#" class="ion-activated">
    <ion-icon name="wifi" slot="start"></ion-icon>
    <ion-label>卡片链接项 1 已激活</ion-label>
  </ion-item>

  <ion-item href="#">
    <ion-icon name="wine" slot="start"></ion-icon>
    <ion-label>卡片链接项 2</ion-label>
  </ion-item>

  <ion-item class="ion-activated">
    <ion-icon name="warning" slot="start"></ion-icon>
    <ion-label>卡片按钮项 1 已激活</ion-label>
  </ion-item>

  <ion-item>
    <ion-icon name="walk" slot="start"></ion-icon>
    <ion-label>卡片按钮项 2</ion-label>
  </ion-item>
</ion-card>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>卡片副标题</ion-card-subtitle>
    <ion-card-title>卡片标题</ion-card-title>
  </ion-card-header>

  <ion-card-content>
    时常亲近自然之心……偶尔远离喧嚣，去爬山或在林中度过一周。洗涤你的心灵。
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item>
    <ion-icon name="pin" slot="start"></ion-icon>
    <ion-label>卡片中的 ion-item，图标在左，按钮在右</ion-label>
    <ion-button fill="outline" slot="end">查看</ion-button>
  </ion-item>

  <ion-card-content>
    这是 ion-card-content 元素内的内容，没有使用任何段落或标题标签。
  </ion-card-content>
</ion-card>

<ion-card>
  <ion-item href="#" class="ion-activated">
    <ion-icon name="wifi" slot="start"></ion-icon>
    <ion-label>卡片链接项 1 已激活</ion-label>
  </ion-item>

  <ion-item href="#">
    <ion-icon name="wine" slot="start"></ion-icon>
    <ion-label>卡片链接项 2</ion-label>
  </ion-item>

  <ion-item class="ion-activated">
    <ion-icon name="warning" slot="start"></ion-icon>
    <ion-label>卡片按钮项 1 已激活</ion-label>
  </ion-item>

  <ion-item>
    <ion-icon name="walk" slot="start"></ion-icon>
    <ion-label>卡片按钮项 2</ion-label>
  </ion-item>
</ion-card>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

export const CardExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>卡片示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>卡片副标题</IonCardSubtitle>
            <IonCardTitle>卡片标题</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            时常亲近自然之心……偶尔远离喧嚣，去爬山或在林中度过一周。洗涤你的心灵。
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>卡片中的 ion-item，图标在左，按钮在右</IonLabel>
            <IonButton fill="outline" slot="end">
              查看
            </IonButton>
          </IonItem>

          <IonCardContent>
            这是 ion-cardContent 元素内的内容，没有使用任何段落或标题标签。
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>卡片链接项 1 已激活</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>卡片链接项 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>卡片按钮项 1 已激活</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>卡片按钮项 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'card-example',
  styleUrl: 'card-example.css',
})
export class CardExample {
  render() {
    return [
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>卡片副标题</ion-card-subtitle>
          <ion-card-title>卡片标题</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          时常亲近自然之心……偶尔远离喧嚣，去爬山或在林中度过一周。洗涤你的心灵。
        </ion-card-content>
      </ion-card>,

      <ion-card>
        <ion-item>
          <ion-icon name="pin" slot="start"></ion-icon>
          <ion-label>卡片中的 ion-item，图标在左，按钮在右</ion-label>
          <ion-button fill="outline" slot="end">
            查看
          </ion-button>
        </ion-item>

        <ion-card-content>
          这是 ion-card-content 元素内的内容，没有使用任何段落或标题标签。
        </ion-card-content>
      </ion-card>,

      <ion-card>
        <ion-item href="#" class="ion-activated">
          <ion-icon name="wifi" slot="start"></ion-icon>
          <ion-label>卡片链接项 1 已激活</ion-label>
        </ion-item>

        <ion-item href="#">
          <ion-icon name="wine" slot="start"></ion-icon>
          <ion-label>卡片链接项 2</ion-label>
        </ion-item>

        <ion-item class="ion-activated">
          <ion-icon name="warning" slot="start"></ion-icon>
          <ion-label>卡片按钮项 1 已激活</ion-label>
        </ion-item>

        <ion-item>
          <ion-icon name="walk" slot="start"></ion-icon>
          <ion-label>卡片按钮项 2</ion-label>
        </ion-item>
      </ion-card>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>卡片副标题</ion-card-subtitle>
      <ion-card-title>卡片标题</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      时常亲近自然之心……偶尔远离喧嚣，去爬山或在林中度过一周。洗涤你的心灵。
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-item>
      <ion-icon :icon="pin" slot="start"></ion-icon>
      <ion-label>卡片中的 ion-item，图标在左，按钮在右</ion-label>
      <ion-button fill="outline" slot="end">查看</ion-button>
    </ion-item>

    <ion-card-content>
      这是 ion-card-content 元素内的内容，没有使用任何段落或标题标签。
    </ion-card-content>
  </ion-card>

  <ion-card>
    <ion-item href="#" class="ion-activated">
      <ion-icon :icon="wifi" slot="start"></ion-icon>
      <ion-label>卡片链接项 1 已激活</ion-label>
    </ion-item>

    <ion-item href="#">
      <ion-icon :icon="wine" slot="start"></ion-icon>
      <ion-label>卡片链接项 2</ion-label>
    </ion-item>

    <ion-item class="ion-activated">
      <ion-icon :icon="warning" slot="start"></ion-icon>
      <ion-label>卡片按钮项 1 已激活</ion-label>
    </ion-item>

    <ion-item>
      <ion-icon :icon="walk" slot="start"></ion-icon>
      <ion-label>卡片按钮项 2</ion-label>
    </ion-item>
  </ion-card>
</template>

<script>
  import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue';
  import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel }
    setup() {
      return { pin, walk, warning, wifi, wine };
    }
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