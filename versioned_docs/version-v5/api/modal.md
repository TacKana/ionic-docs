---
sidebar_label: 'ion-modal'
demoUrl: '/docs/demos/api/modal/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/modal/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/modal/props.md';
import Events from '@ionic-internal/component-api/v5/modal/events.md';
import Methods from '@ionic-internal/component-api/v5/modal/methods.md';
import Parts from '@ionic-internal/component-api/v5/modal/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/modal/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/modal/slots.md';

# ion-modal

模态框是一个出现在应用内容上方的对话框，在交互恢复之前必须由应用将其关闭。当有大量选项需要选择、需要过滤列表项以及许多其他用例时，它作为选择组件非常有用。

## 关闭

模态框创建后，可以通过调用模态框控制器上的 `dismiss()` 方法来关闭。可以调用 `onDidDismiss` 函数在模态框关闭后执行某些操作。

## 自定义

模态框使用作用域封装，这意味着它会在运行时为每个样式附加一个额外的类来自动限定其 CSS 的作用域。覆盖 CSS 中的作用域选择器需要[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。

我们建议在 `create` 方法中向 `cssClass` 传递一个自定义类，并使用该类为主机元素和内部元素添加自定义样式。此属性也可以接受由空格分隔的多个类。查看 [使用](#usage) 部分以获取有关如何使用 `cssClass` 传递类的示例。

```css
/* 无效 - 特异性不足 */
.modal-wrapper {
  background: #222;
}

/* 有效 - 在 cssClass 中传递 "my-custom-class" 以提高特异性 */
.my-custom-class .modal-wrapper {
  background: #222;
}
```

可以使用任何已定义的 [CSS 自定义属性](#css-custom-properties) 来设置模态框的样式，而无需定位单个元素：

```css
.my-custom-class {
  --background: #222;
}
```

> 如果您正在构建 Ionic Angular 应用，则需要将样式添加到全局样式表文件中。请阅读下文 Angular 部分中的[样式放置](#style-placement)以获取更多信息。

> `ion-modal` 工作于堆叠模态框尺寸相同的假设下。因此，每个后续模态框将没有阴影且背景透明度为 `0`。这是为了避免随着添加的模态框增多而导致阴影和背景变暗的效果。可以通过设置 `--box-shadow` 和 `--backdrop-opacity` CSS 变量来更改此行为：

```
ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}
```

## 使用

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'modal-example',
  templateUrl: 'modal-example.html',
  styleUrls: ['./modal-example.css'],
})
export class ModalExample {
  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
}
```

```tsx
import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-page',
})
export class ModalPage {
  constructor() {}
}
```

> 如果您需要在模态框组件内部使用一个包装元素，我们建议使用 `<div class="ion-page">`，以便组件尺寸仍能正确计算。

### 传递数据

在创建模态框期间，可以通过 `componentProps` 传入数据。
上面的示例可以改写为包含数据：

```tsx
async presentModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
    cssClass: 'my-custom-class',
    componentProps: {
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
    }
  });
  return await modal.present();
}
```

要获取通过 `componentProps` 传入的数据，请将其设置为 `@Input`：

```tsx
export class ModalPage {
  // 通过 componentProps 传入的数据
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
}
```

### 关闭模态框

可以通过调用模态框控制器上的 dismiss 方法来关闭模态框，并可选择从模态框中传递任何数据。

```javascript
export class ModalPage {
  ...

  dismiss() {
    // 使用注入的 ModalController，此页面可以“关闭”自身，并可选择传回数据
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
```

关闭后，可以通过创建后附加到模态框的 `onWillDismiss` 或 `onDidDismiss` 读取数据：

```javascript
const { data } = await modal.onWillDismiss();
console.log(data);
```

#### 惰性加载

当惰性加载模态框时，重要的是要注意模态框不会在打开时加载，而是在导入模态框模块的模块加载时加载。

例如，假设存在一个 `CalendarComponent` 和一个 `EventModal`。通过单击 `CalendarComponent` 中的按钮来呈现模态框。在 Angular 中，需要将 `EventModalModule` 包含在 `CalendarComponentModule` 中，因为模态框是在 `CalendarComponent` 中创建的：

```tsx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CalendarComponent } from './calendar.component';
import { EventModalModule } from '../modals/event/event.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [IonicModule, CommonModule, EventModalModule],
  exports: [CalendarComponent],
})
export class CalendarComponentModule {}
```

### 可滑动的模态框

iOS 模式下的模态框能够以卡片样式呈现并滑动关闭。卡片样式呈现和滑动关闭手势并不互斥，这意味着您可以选择要使用的功能。例如，您可以使用不能滑动的卡片样式模态框，或可以滑动的全尺寸模态框。

> 在 iPhone 尺寸设备上运行时，卡片样式模态框没有背景层。因此，`--backdrop-opacity` 变量不会产生任何效果。

如果您正在构建使用 `ion-tabs` 的应用程序，建议您使用 `this.routerOutlet.parentOutlet.nativeEl` 获取父级 `ion-router-outlet`，否则当模态框打开时，标签栏不会缩小。

```javascript
import { IonRouterOutlet } from '@ionic/angular';

constructor(private routerOutlet: IonRouterOutlet) {}

async presentModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
    cssClass: 'my-custom-class',
    swipeToClose: true,
    presentingElement: this.routerOutlet.nativeEl
  });
  return await modal.present();
}
```

在大多数情况下，使用 `ion-router-outlet` 元素作为 `presentingElement` 是可行的。如果您需要从另一个模态框内部呈现卡片样式模态框，则应将最顶层的 `ion-modal` 元素作为 `presentingElement` 传入。

```javascript
import { ModalController } from '@ionic/angular';

constructor(private modalController: ModalController) {}

async presentModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
    cssClass: 'my-custom-class',
    swipeToClose: true,
    presentingElement: await this.modalController.getTop() // 获取最顶层的 ion-modal
  });
  return await modal.present();
}
```

### 样式放置

在 Angular 中，特定页面的 CSS 仅作用于该页面的元素。尽管模态框可以从页面内呈现，但 `ion-modal` 元素是附加到当前页面之外的。这意味着任何自定义样式都需要放在全局样式表文件中。在 Ionic Angular 启动项目中，可以是 `src/global.scss` 文件，或者您可以通过[添加到 `angular.json` 中的 `styles` 构建选项](https://angular.io/guide/workspace-config#style-script-config)来注册新的全局样式文件。

</TabItem>

<TabItem value="javascript">

```javascript
customElements.define(
  'modal-page',
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
<ion-header>
  <ion-toolbar>
    <ion-title>模态框头部</ion-title>
    <ion-buttons slot="primary">
      <ion-button onClick="dismissModal()">
        <ion-icon slot="icon-only" name="close"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  模态框内容
</ion-content>`;
    }
  }
);

function presentModal() {
  // 使用 `modal-page` 组件创建模态框
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page';
  modalElement.cssClass = 'my-custom-class';

  // 呈现模态框
  document.body.appendChild(modalElement);
  return modalElement.present();
}
```

> 如果您需要在模态框组件内部使用一个包装元素，我们建议使用 `<div class="ion-page">`，以便组件尺寸仍能正确计算。

### 传递数据

在创建模态框期间，可以通过 `componentProps` 传入数据。上面的示例可以改写为包含数据：

```javascript
const modalElement = document.createElement('ion-modal');
modalElement.component = 'modal-page';
modalElement.cssClass = 'my-custom-class';
modalElement.componentProps = {
  firstName: 'Douglas',
  lastName: 'Adams',
  middleInitial: 'N',
};
```

要获取通过 `componentProps` 传入的数据，请在 `modal-page` 中查询模态框：

```js
customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    const modalElement = document.querySelector('ion-modal');
    console.log(modalElement.componentProps.firstName);

    ...
  }
}
```

### 关闭模态框

可以通过调用 dismiss 方法来关闭模态框，并可选择从模态框中传递任何数据。

```javascript
async function dismissModal() {
  await modal.dismiss({
    dismissed: true,
  });
}
```

关闭后，可以通过创建后附加到模态框的 `onWillDismiss` 或 `onDidDismiss` 读取数据：

```javascript
const { data } = await modalElement.onWillDismiss();
console.log(data);
```

### 可滑动的模态框

iOS 模式下的模态框能够以卡片样式呈现并滑动关闭。卡片样式呈现和滑动关闭手势并不互斥，这意味着您可以选择要使用的功能。例如，您可以使用不能滑动的卡片样式模态框，或可以滑动的全尺寸模态框。

> 在 iPhone 尺寸设备上运行时，卡片样式模态框没有背景层。因此，`--backdrop-opacity` 变量不会产生任何效果。

```javascript
const modalElement = document.createElement('ion-modal');
modalElement.component = 'modal-page';
modalElement.cssClass = 'my-custom-class';
modalElement.swipeToClose = true;
modalElement.presentingElement = document.querySelector('ion-nav');
```

在大多数情况下，使用 `ion-nav` 元素作为 `presentingElement` 是可行的。如果您需要从模态框内部呈现卡片样式模态框，则应将最顶层的 `ion-modal` 元素作为 `presentingElement` 传入。

```javascript
const modalElement = document.createElement('ion-modal');
modalElement.component = 'modal-page';
modalElement.cssClass = 'my-custom-class';
modalElement.swipeToClose = true;
modalElement.presentingElement = await modalController.getTop(); // 获取最顶层的 ion-modal
```

</TabItem>

<TabItem value="react">

```tsx
/* 使用 useIonModal Hook */

import React, { useState } from 'react';
import { IonButton, IonContent, IonPage, useIonModal } from '@ionic/react';

const Body: React.FC<{
  count: number;
  onDismiss: () => void;
  onIncrement: () => void;
}> = ({ count, onDismiss, onIncrement }) => (
  <div>
    计数: {count}
    <IonButton expand="block" onClick={() => onIncrement()}>
      增加计数
    </IonButton>
    <IonButton expand="block" onClick={() => onDismiss()}>
      关闭
    </IonButton>
  </div>
);

const ModalExample: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDismiss = () => {
    dismiss();
  };

  /**
   * 第一个参数是要显示的组件，第二个是要传递的属性
   */
  const [present, dismiss] = useIonModal(Body, {
    count,
    onDismiss: handleDismiss,
    onIncrement: handleIncrement,
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton
          expand="block"
          onClick={() => {
            present({
              cssClass: 'my-class',
            });
          }}
        >
          显示模态框
        </IonButton>
        <div>计数: {count}</div>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* 使用 IonModal 组件 */

import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';

export const ModalExample: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal} cssClass="my-custom-class">
        <p>这是模态框内容</p>
        <IonButton onClick={() => setShowModal(false)}>关闭模态框</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>显示模态框</IonButton>
    </IonContent>
  );
};
```

### 可滑动的模态框

iOS 模式下的模态框能够以卡片样式呈现并滑动关闭。卡片样式呈现和滑动关闭手势并不互斥，这意味着您可以选择要使用的功能。例如，您可以使用不能滑动的卡片样式模态框，或可以滑动的全尺寸模态框。

> 在 iPhone 尺寸设备上运行时，卡片样式模态框没有背景层。因此，`--backdrop-opacity` 变量不会产生任何效果。

```tsx
const App: React.FC = () => {
  const routerRef = useRef<HTMLIonRouterOutletElement | null>(null);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet ref={routerRef}>
          <Route path="/home" render={() => <Home router={routerRef.current} />}  exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

...

interface HomePageProps {
  router: HTMLIonRouterOutletElement | null;
}

const Home: React.FC<HomePageProps> = ({ router }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    ...

    <IonModal
      isOpen={showModal}
      cssClass='my-custom-class'
      swipeToClose={true}
      presentingElement={router || undefined}
      onDidDismiss={() => setShowModal(false)}>
      <p>这是模态框内容</p>
    </IonModal>

    ...
  );
};

```

在大多数情况下，在 `IonRouterOutlet` 上设置 ref 并将该 ref 的 `current` 值传递给 `presentingElement` 是可行的。如果您需要从另一个模态框内部呈现卡片样式模态框，则应将最顶层的 `ion-modal` ref 作为 `presentingElement` 传入。

```tsx
<IonModal
  ref={firstModalRef}
  isOpen={showModal}
  cssClass='my-custom-class'
  swipeToClose={true}
  presentingElement={router || undefined}
  onDidDismiss={() => setShowModal(false)}>
    <p>这是模态框内容</p>
    <IonButton onClick={() => setShow2ndModal(true)}>显示第二个模态框</IonButton>
    <IonButton onClick={() => setShowModal(false)}>关闭模态框</IonButton>
</IonModal>
<IonModal
  isOpen={show2ndModal}
  cssClass='my-custom-class'
  presentingElement={firstModalRef.current}
  onDidDismiss={() => setShow2ndModal(false)}>
  <p>这是更多模态框内容</p>
  <IonButton onClick={() => setShow2ndModal(false)}>关闭模态框</IonButton>
</IonModal>
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { modalController } from '@ionic/core';

@Component({
  tag: 'modal-example',
  styleUrl: 'modal-example.css',
})
export class ModalExample {
  async presentModal() {
    const modal = await modalController.create({
      component: 'page-modal',
      cssClass: 'my-custom-class',
    });
    await modal.present();
  }
}
```

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-modal',
  styleUrl: 'page-modal.css',
})
export class PageModal {
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

> 如果您需要在模态框组件内部使用一个包装元素，我们建议使用 `<div class="ion-page">`，以便组件尺寸仍能正确计算。

### 传递数据

在创建模态框期间，可以通过 `componentProps` 传入数据。
上面的示例可以改写为包含数据：

```tsx
async presentModal() {
  const modal = await modalController.create({
    component: 'page-modal',
    cssClass: 'my-custom-class',
    componentProps: {
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
    }
  });
  await modal.present();
}
```

要获取通过 `componentProps` 传入的数据，请将每个数据设置为 `@Prop`：

```tsx
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'page-modal',
  styleUrl: 'page-modal.css',
})
export class PageModal {
  // 通过 componentProps 传入的数据
  @Prop() firstName: string;
  @Prop() lastName: string;
  @Prop() middleInitial: string;
}
```

### 关闭模态框

可以通过调用模态框控制器上的 dismiss 方法来关闭模态框，并可选择从模态框中传递任何数据。

```tsx
export class ModalPage {
  ...

  dismiss(data?: any) {
    // 关闭最近的模态框并可选择传回数据
    (this.el.closest('ion-modal') as any).dismiss({
      'dismissed': true
    });
  }
}
```

关闭后，可以通过创建后附加到模态框的 `onWillDismiss` 或 `onDidDismiss` 读取数据：

```tsx
const { data } = await modal.onWillDismiss();
console.log(data);
```

### 可滑动的模态框

iOS 模式下的模态框能够以卡片样式呈现并滑动关闭。卡片样式呈现和滑动关闭手势并不互斥，这意味着您可以选择要使用的功能。例如，您可以使用不能滑动的卡片样式模态框，或可以滑动的全尺寸模态框。

> 在 iPhone 尺寸设备上运行时，卡片样式模态框没有背景层。因此，`--backdrop-opacity` 变量不会产生任何效果。

```tsx
import { Component, Element, h } from '@stencil/core';

import { modalController } from '@ionic/core';

@Component({
  tag: 'modal-example',
  styleUrl: 'modal-example.css',
})
export class ModalExample {
  @Element() el: any;

  async presentModal() {
    const modal = await modalController.create({
      component: 'page-modal',
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.el.closest('ion-router-outlet'),
    });
    await modal.present();
  }
}
```

在大多数情况下，使用 `ion-router-outlet` 元素作为 `presentingElement` 是可行的。如果您需要从另一个模态框内部呈现卡片样式模态框，则应将最顶层的 `ion-modal` 元素作为 `presentingElement` 传入。

```tsx
async presentModal() {
  const modal = await modalController.create({
    component: 'page-modal',
    cssClass: 'my-custom-class',
    swipeToClose: true,
    presentingElement: await modalController.getTop() // 获取最顶层的 ion-modal
  });
  await modal.present();
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding"> {{ content }} </ion-content>
</template>

<script>
  import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Modal',
    props: {
      title: { type: String, default: '超级模态框' },
    },
    data() {
      return {
        content: '内容',
      };
    },
    components: { IonContent, IonHeader, IonTitle, IonToolbar },
  });
</script>
```

```html
<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="openModal">打开模态框</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonButton, IonContent, IonPage, modalController } from '@ionic/vue';
  import Modal from './modal.vue';

  export default {
    components: { IonButton, IonContent, IonPage },
    methods: {
      async openModal() {
        const modal = await modalController.create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: '新标题',
          },
        });
        return modal.present();
      },
    },
  };
</script>
```

开发者也可以直接在模板中使用此组件：

```html
<template>
  <ion-button @click="setOpen(true)">显示模态框</ion-button>
  <ion-modal :is-open="isOpenRef" css-class="my-custom-class" @didDismiss="setOpen(false)">
    <Modal :data="data"></Modal>
  </ion-modal>
</template>

<script>
  import { IonModal, IonButton } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import Modal from './modal.vue';

  export default defineComponent({
    components: { IonModal, IonButton, Modal },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);
      const data = { content: '新内容' };
      return { isOpenRef, setOpen, data };
    },
  });
</script>
```

> 如果您需要在模态框组件内部使用一个包装元素，我们建议使用 `<ion-page>`，以便组件尺寸仍能正确计算。

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