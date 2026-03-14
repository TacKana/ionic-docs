---
sidebar_label: 'ion-action-sheet'
demoUrl: '/docs/demos/api/action-sheet/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/action-sheet/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/action-sheet/props.md';
import Events from '@ionic-internal/component-api/v5/action-sheet/events.md';
import Methods from '@ionic-internal/component-api/v5/action-sheet/methods.md';
import Parts from '@ionic-internal/component-api/v5/action-sheet/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/action-sheet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/action-sheet/slots.md';

# ion-action-sheet

操作表（Action Sheet）是一种显示一组选项的对话框。它会出现在应用程序内容的上方，用户必须手动关闭它才能继续与应用进行交互。在 `ios` 模式下，具有破坏性（destructive）的选项会以醒目的方式呈现。关闭操作表有多种方式，包括点击背景遮罩或在桌面端按下 Esc 键。

## 按钮

按钮的 `role` 属性可以是 `destructive`（破坏性）或 `cancel`（取消）。没有设置 `role` 属性的按钮将采用该平台的默认外观。带有 `cancel` 角色的按钮始终会作为底部按钮显示，无论它们在数组中的位置如何。所有其他按钮将按照它们被添加到 `buttons` 数组中的顺序显示。注意：我们建议将 `destructive` 按钮始终放在数组的第一个位置，使其成为顶部按钮。此外，如果通过点击背景遮罩来关闭操作表，则会触发具有 `cancel` 角色的按钮的处理函数。

## 自定义样式

操作表使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式追加一个额外的类来自动限定其 CSS 的作用域。要覆盖 CSS 中的作用域选择器，需要使用具有[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。

我们建议在 `create` 方法中向 `cssClass` 传递一个自定义类，并使用该类为宿主元素和内部元素添加自定义样式。此属性也可以接受多个以空格分隔的类。查看[用法](#用法)部分，了解如何使用 `cssClass` 传递类的示例。

```css
/* 不生效 - 选择器不够具体 */
.action-sheet-group {
  background: #e5e5e5;
}

/* 生效 - 在 cssClass 中传递 "my-custom-class" 以提高特异性 */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

任何已定义的 [CSS 自定义属性](#css-自定义属性) 都可以用于设置操作表的样式，而无需针对单个元素：

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

> 如果你正在构建一个 Ionic Angular 应用，样式需要添加到全局样式表文件中。阅读下方 Angular 部分中的[样式放置](#样式放置)以获取更多信息。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'action-sheet-example',
  templateUrl: 'action-sheet-example.html',
  styleUrls: ['./action-sheet-example.css'],
})
export class ActionSheetExample {
  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
```

### 样式放置

在 Angular 中，特定页面的 CSS 仅作用于该页面的元素。尽管操作表可以从页面内部呈现，但 `ion-action-sheet` 元素会被附加到当前页面之外。这意味着任何自定义样式都需要放在全局样式表文件中。在 Ionic Angular 初始项目中，这可以是 `src/global.scss` 文件，或者你也可以[在 `angular.json` 的 `styles` 构建选项中添加](https://angular.io/guide/workspace-config#style-script-config)一个新的全局样式文件。

</TabItem>

<TabItem value="javascript">

```javascript
async function presentActionSheet() {
  const actionSheet = document.createElement('ion-action-sheet');

  actionSheet.header = 'Albums';
  actionSheet.cssClass = 'my-custom-class';
  actionSheet.buttons = [
    {
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      },
    },
    {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      },
    },
    {
      text: 'Play (open modal)',
      icon: 'caret-forward-circle',
      handler: () => {
        console.log('Play clicked');
      },
    },
    {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      },
    },
    {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      },
    },
  ];
  document.body.appendChild(actionSheet);
  await actionSheet.present();

  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
```

</TabItem>

<TabItem value="react">

```tsx
/* 使用 useIonActionSheet 钩子 */

import React from 'react';
import { IonButton, IonContent, IonPage, useIonActionSheet } from '@ionic/react';

const ActionSheetExample: React.FC = () => {
  const [present, dismiss] = useIonActionSheet();

  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: 'Ok' }, { text: 'Cancel' }],
              header: 'Action Sheet',
            })
          }
        >
          显示操作表
        </IonButton>
        <IonButton expand="block" onClick={() => present([{ text: 'Ok' }, { text: 'Cancel' }], 'Action Sheet')}>
          使用参数显示操作表
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => {
            present([{ text: 'Ok' }, { text: 'Cancel' }], 'Action Sheet');
            setTimeout(dismiss, 3000);
          }}
        >
          显示操作表，3 秒后自动关闭
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* 使用 IonActionSheet 组件 */

import React, { useState } from 'react';
import { IonActionSheet, IonContent, IonButton } from '@ionic/react';
import { trash, share, caretForwardCircle, heart, close } from 'ionicons/icons';

export const ActionSheetExample: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowActionSheet(true)} expand="block">
        显示操作表
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        cssClass="my-custom-class"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              console.log('Delete clicked');
            },
          },
          {
            text: 'Share',
            icon: share,
            handler: () => {
              console.log('Share clicked');
            },
          },
          {
            text: 'Play (open modal)',
            icon: caretForwardCircle,
            handler: () => {
              console.log('Play clicked');
            },
          },
          {
            text: 'Favorite',
            icon: heart,
            handler: () => {
              console.log('Favorite clicked');
            },
          },
          {
            text: 'Cancel',
            icon: close,
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            },
          },
        ]}
      ></IonActionSheet>
    </IonContent>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { actionSheetController } from '@ionic/core';

@Component({
  tag: 'action-sheet-example',
  styleUrl: 'action-sheet-example.css',
})
export class ActionSheetExample {
  async presentActionSheet() {
    const actionSheet = await actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={() => this.presentActionSheet()}>显示操作表</ion-button>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-button @click="presentActionSheet">显示操作表</ion-button>
</template>

<script>
  import { IonButton, actionSheetController } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { caretForwardCircle, close, heart, trash, share } from 'ionicons/icons';

  export default defineComponent({
    components: { IonButton },
    methods: {
      async presentActionSheet() {
        const actionSheet = await actionSheetController.create({
          header: 'Albums',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                console.log('Delete clicked');
              },
            },
            {
              text: 'Share',
              icon: share,
              handler: () => {
                console.log('Share clicked');
              },
            },
            {
              text: 'Play (open modal)',
              icon: caretForwardCircle,
              handler: () => {
                console.log('Play clicked');
              },
            },
            {
              text: 'Favorite',
              icon: heart,
              handler: () => {
                console.log('Favorite clicked');
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              },
            },
          ],
        });
        await actionSheet.present();

        const { role } = await actionSheet.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      },
    },
  });
</script>
```

开发者也可以在模板中直接使用此组件：

```html
<template>
  <ion-button @click="setOpen(true)">显示操作表</ion-button>
  <ion-action-sheet
    :is-open="isOpenRef"
    header="Albums"
    css-class="my-custom-class"
    :buttons="buttons"
    @didDismiss="setOpen(false)"
  >
  </ion-action-sheet>
</template>

<script>
  import { IonActionSheet, IonButton } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { caretForwardCircle, close, heart, trash, share } from 'ionicons/icons';

  export default defineComponent({
    components: { IonActionSheet, IonButton },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);
      const buttons = [
        {
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: share,
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: caretForwardCircle,
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: heart,
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ];

      return { buttons, isOpenRef, setOpen };
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

## CSS 阴影部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />