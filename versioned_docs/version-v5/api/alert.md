---
sidebar_label: 'ion-alert'
demoUrl: '/docs/demos/api/alert/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/alert/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/alert/props.md';
import Events from '@ionic-internal/component-api/v5/alert/events.md';
import Methods from '@ionic-internal/component-api/v5/alert/methods.md';
import Parts from '@ionic-internal/component-api/v5/alert/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/alert/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/alert/slots.md';

# ion-alert

警告框（Alert）是一个对话框，用于向用户显示信息或通过输入框收集用户信息。警告框显示在应用内容的上方，并且必须由用户手动关闭后，才能继续与应用进行交互。它还可以选择性地包含`header`（头部）、`subHeader`（副头部）和`message`（消息）。

## 按钮

在`buttons`（按钮）数组中，每个按钮都包含其`text`（文本）属性，并可选择包含一个`handler`（处理函数）。如果处理函数返回`false`，则点击按钮时警告框不会自动关闭。所有按钮将按照它们在`buttons`数组中添加的顺序从左到右显示。注意：最右边的按钮（数组中的最后一个）是主按钮。

可以选择为按钮添加一个`role`（角色）属性，例如`cancel`。如果某个按钮具有`cancel`角色，那么当通过点击背景关闭警告框时，将触发具有取消角色的按钮的处理函数。

## 输入框

警告框还可以包含多种不同的输入框，其数据可以传回给应用。输入框可以用作提示用户输入信息的简单方式。支持单选框、复选框和文本输入框，但它们不能混合使用。例如，一个警告框可以包含所有单选按钮输入框，或者所有复选框输入框，但同一个警告框不能混合使用单选和复选框输入框。但请注意，不同类型的"文本"输入框可以混合使用，例如`url`、`email`、`text`、`textarea`等。如果您需要不符合警告框设计准则的复杂表单UI，那么我们建议改用模态框（modal）来构建表单。

## 自定义

警告框使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式附加一个额外的类来自动限定其CSS的作用域。在CSS中覆盖作用域内的选择器需要使用[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。

我们建议在`create`方法的`cssClass`中传递一个自定义类，并使用该类向宿主元素和内部元素添加自定义样式。此属性也可以接受由空格分隔的多个类。查看[使用](#usage)部分，了解如何通过`cssClass`传递类的示例。

```css
/* 不起作用 - 特异性不够 */
.alert-wrapper {
  background: #e5e5e5;
}

/* 有效 - 在 cssClass 中传递 "my-custom-class" 以提高特异性 */
.my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
```

可以使用任何已定义的[CSS自定义属性](#css-custom-properties)来设置警告框的样式，而无需定位单个元素：

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

> 如果您正在构建 Ionic Angular 应用，则需要将样式添加到全局样式表文件中。请阅读下方 Angular 章节的[样式放置](#style-placement)以获取更多信息。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```tsx
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'alert-example',
  templateUrl: 'alert-example.html',
  styleUrls: ['./alert-example.css'],
})
export class AlertExample {
  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '警告',
      subHeader: '副标题',
      message: '这是一条警告消息。',
      buttons: ['确定'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss 已解析，角色为', role);
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '警告',
      subHeader: '副标题',
      message: '这是一条警告消息。',
      buttons: ['取消', '打开模态框', '删除'],
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '确认！',
      message: '消息 <strong>文本</strong>！！！',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('确认取消: blah');
          },
        },
        {
          text: '好的',
          handler: () => {
            console.log('确认好的');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '提示！',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: '占位符 1',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: '你好',
          placeholder: '占位符 2',
        },
        // 多行输入。
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: '占位符 3',
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: '最喜欢的网站',
        },
        // 带最小值和最大值的日期输入
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12',
        },
        // 不带最小值和最大值的日期输入
        {
          name: 'name5',
          type: 'date',
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10,
        },
        {
          name: 'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: '高级属性',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal',
          },
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('确认取消');
          },
        },
        {
          text: '确定',
          handler: () => {
            console.log('确认确定');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '单选',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '单选 1',
          value: 'value1',
          handler: () => {
            console.log('已选择单选 1');
          },
          checked: true,
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '单选 2',
          value: 'value2',
          handler: () => {
            console.log('已选择单选 2');
          },
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '单选 3',
          value: 'value3',
          handler: () => {
            console.log('已选择单选 3');
          },
        },
        {
          name: 'radio4',
          type: 'radio',
          label: '单选 4',
          value: 'value4',
          handler: () => {
            console.log('已选择单选 4');
          },
        },
        {
          name: 'radio5',
          type: 'radio',
          label: '单选 5',
          value: 'value5',
          handler: () => {
            console.log('已选择单选 5');
          },
        },
        {
          name: 'radio6',
          type: 'radio',
          label: '单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 ',
          value: 'value6',
          handler: () => {
            console.log('已选择单选 6');
          },
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('确认取消');
          },
        },
        {
          text: '确定',
          handler: () => {
            console.log('确认确定');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '复选框',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: '复选框 1',
          value: 'value1',
          handler: () => {
            console.log('已选择复选框 1');
          },
          checked: true,
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: '复选框 2',
          value: 'value2',
          handler: () => {
            console.log('已选择复选框 2');
          },
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: '复选框 3',
          value: 'value3',
          handler: () => {
            console.log('已选择复选框 3');
          },
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: '复选框 4',
          value: 'value4',
          handler: () => {
            console.log('已选择复选框 4');
          },
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: '复选框 5',
          value: 'value5',
          handler: () => {
            console.log('已选择复选框 5');
          },
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label:
            '复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6',
          value: 'value6',
          handler: () => {
            console.log('已选择复选框 6');
          },
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('确认取消');
          },
        },
        {
          text: '确定',
          handler: () => {
            console.log('确认确定');
          },
        },
      ],
    });

    await alert.present();
  }
}
```

### 样式放置

在 Angular 中，特定页面的 CSS 仅作用于该页面的元素。尽管警告框可以从页面内呈现，但 `ion-alert` 元素是附加到当前页面之外的。这意味着任何自定义样式都需要放在全局样式表文件中。在 Ionic Angular 启动项目中，这可以是 `src/global.scss` 文件，或者您可以通过[添加到 `angular.json` 中的 `styles` 构建选项](https://angular.io/guide/workspace-config#style-script-config)来注册新的全局样式文件。

</TabItem>

<TabItem value="javascript">

```javascript
async function presentAlert() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = '警告';
  alert.subHeader = '副标题';
  alert.message = '这是一条警告消息。';
  alert.buttons = ['确定'];

  document.body.appendChild(alert);
  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss 已解析，角色为', role);
}

function presentAlertMultipleButtons() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = '警告';
  alert.subHeader = '副标题';
  alert.message = '这是一条警告消息。';
  alert.buttons = ['取消', '打开模态框', '删除'];

  document.body.appendChild(alert);
  return alert.present();
}

function presentAlertConfirm() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = '确认！';
  alert.message = '消息 <strong>文本</strong>！！！';
  alert.buttons = [
    {
      text: '取消',
      role: 'cancel',
      cssClass: 'secondary',
      handler: (blah) => {
        console.log('确认取消: blah');
      },
    },
    {
      text: '好的',
      handler: () => {
        console.log('确认好的');
      },
    },
  ];

  document.body.appendChild(alert);
  return alert.present();
}

function presentAlertPrompt() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = '提示！';
  alert.inputs = [
    {
      placeholder: '占位符 1',
    },
    {
      name: 'name2',
      id: 'name2-id',
      value: '你好',
      placeholder: '占位符 2',
    },
    // 多行输入。
    {
      name: 'paragraph',
      id: 'paragraph',
      type: 'textarea',
      placeholder: '占位符 3',
    },
    {
      name: 'name3',
      value: 'http://ionicframework.com',
      type: 'url',
      placeholder: '最喜欢的网站',
    },
    // 带最小值和最大值的日期输入
    {
      name: 'name4',
      type: 'date',
      min: '2017-03-01',
      max: '2018-01-12',
    },
    // 不带最小值和最大值的日期输入
    {
      name: 'name5',
      type: 'date',
    },
    {
      name: 'name6',
      type: 'number',
      min: -5,
      max: 10,
    },
    {
      name: 'name7',
      type: 'number',
    },
    {
      name: 'name8',
      type: 'password',
      placeholder: '高级属性',
      cssClass: 'specialClass',
      attributes: {
        maxlength: 4,
        inputmode: 'decimal',
      },
    },
  ];
  alert.buttons = [
    {
      text: '取消',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('确认取消');
      },
    },
    {
      text: '确定',
      handler: () => {
        console.log('确认确定');
      },
    },
  ];

  document.body.appendChild(alert);
  return alert.present();
}

function presentAlertRadio() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = '单选';
  alert.inputs = [
    {
      type: 'radio',
      label: '单选 1',
      value: 'value1',
      handler: () => {
        console.log('已选择单选 1');
      },
      checked: true,
    },
    {
      type: 'radio',
      label: '单选 2',
      value: 'value2',
      handler: () => {
        console.log('已选择单选 2');
      },
    },
    {
      type: 'radio',
      label: '单选 3',
      value: 'value3',
      handler: () => {
        console.log('已选择单选 3');
      },
    },
    {
      type: 'radio',
      label: '单选 4',
      value: 'value4',
      handler: () => {
        console.log('已选择单选 4');
      },
    },
    {
      type: 'radio',
      label: '单选 5',
      value: 'value5',
      handler: () => {
        console.log('已选择单选 5');
      },
    },
    {
      type: 'radio',
      label: '单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 ',
      value: 'value6',
      handler: () => {
        console.log('已选择单选 6');
      },
    },
  ];
  alert.buttons = [
    {
      text: '取消',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('确认取消');
      },
    },
    {
      text: '确定',
      handler: () => {
        console.log('确认确定');
      },
    },
  ];
  document.body.appendChild(alert);
  return alert.present();
}

function presentAlertCheckbox() {
  const alert = document.createElement('ion-alert');
  alert.cssClass = 'my-custom-class';
  alert.header = '复选框';
  alert.inputs = [
    {
      type: 'checkbox',
      label: '复选框 1',
      value: 'value1',
      handler: () => {
        console.log('已选择复选框 1');
      },
      checked: true,
    },

    {
      type: 'checkbox',
      label: '复选框 2',
      value: 'value2',
      handler: () => {
        console.log('已选择复选框 2');
      },
    },

    {
      type: 'checkbox',
      label: '复选框 3',
      value: 'value3',
      handler: () => {
        console.log('已选择复选框 3');
      },
    },

    {
      type: 'checkbox',
      label: '复选框 4',
      value: 'value4',
      handler: () => {
        console.log('已选择复选框 4');
      },
    },

    {
      type: 'checkbox',
      label: '复选框 5',
      value: 'value5',
      handler: () => {
        console.log('已选择复选框 5');
      },
    },

    {
      type: 'checkbox',
      label:
        '复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6',
      value: 'value6',
      handler: () => {
        console.log('已选择复选框 6');
      },
    },
  ];
  alert.buttons = [
    {
      text: '取消',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('确认取消');
      },
    },
    {
      text: '确定',
      handler: () => {
        console.log('确认确定');
      },
    },
  ];

  document.body.appendChild(alert);
  return alert.present();
}
```

</TabItem>

<TabItem value="react">

```tsx
/* 使用 useIonAlert Hook */

import React from 'react';
import { IonButton, IonContent, IonPage, useIonAlert } from '@ionic/react';

const AlertExample: React.FC = () => {
  const [present] = useIonAlert();
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              cssClass: 'my-css',
              header: '警告',
              message: '来自 hook 的警告',
              buttons: ['取消', { text: '确定', handler: (d) => console.log('按下了确定') }],
              onDidDismiss: (e) => console.log('已关闭'),
            })
          }
        >
          显示警告
        </IonButton>
        <IonButton expand="block" onClick={() => present('带参数的问候', [{ text: '确定' }])}>
          使用参数显示警告
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* 使用 IonAlert 组件 */

import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';

export const AlertExample: React.FC = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);
  const [showAlert6, setShowAlert6] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowAlert1(true)} expand="block">
        显示警告 1
      </IonButton>
      <IonButton onClick={() => setShowAlert2(true)} expand="block">
        显示警告 2
      </IonButton>
      <IonButton onClick={() => setShowAlert3(true)} expand="block">
        显示警告 3
      </IonButton>
      <IonButton onClick={() => setShowAlert4(true)} expand="block">
        显示警告 4
      </IonButton>
      <IonButton onClick={() => setShowAlert5(true)} expand="block">
        显示警告 5
      </IonButton>
      <IonButton onClick={() => setShowAlert6(true)} expand="block">
        显示警告 6
      </IonButton>
      <IonAlert
        isOpen={showAlert1}
        onDidDismiss={() => setShowAlert1(false)}
        cssClass="my-custom-class"
        header={'警告'}
        subHeader={'副标题'}
        message={'这是一条警告消息。'}
        buttons={['确定']}
      />

      <IonAlert
        isOpen={showAlert2}
        onDidDismiss={() => setShowAlert2(false)}
        cssClass="my-custom-class"
        header={'警告'}
        subHeader={'副标题'}
        message={'这是一条警告消息。'}
        buttons={['取消', '打开模态框', '删除']}
      />

      <IonAlert
        isOpen={showAlert3}
        onDidDismiss={() => setShowAlert3(false)}
        cssClass="my-custom-class"
        header={'确认！'}
        message={'消息 <strong>文本</strong>！！！'}
        buttons={[
          {
            text: '取消',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('确认取消: blah');
            },
          },
          {
            text: '好的',
            handler: () => {
              console.log('确认好的');
            },
          },
        ]}
      />

      <IonAlert
        isOpen={showAlert4}
        onDidDismiss={() => setShowAlert4(false)}
        cssClass="my-custom-class"
        header={'提示！'}
        inputs={[
          {
            name: 'name1',
            type: 'text',
            placeholder: '占位符 1',
          },
          {
            name: 'name2',
            type: 'text',
            id: 'name2-id',
            value: '你好',
            placeholder: '占位符 2',
          },
          {
            name: 'name3',
            value: 'http://ionicframework.com',
            type: 'url',
            placeholder: '最喜欢的网站',
          },
          // 带最小值和最大值的日期输入
          {
            name: 'name4',
            type: 'date',
            min: '2017-03-01',
            max: '2018-01-12',
          },
          // 不带最小值和最大值的日期输入
          {
            name: 'name5',
            type: 'date',
          },
          {
            name: 'name6',
            type: 'number',
            min: -5,
            max: 10,
          },
          {
            name: 'name7',
            type: 'number',
          },
          {
            name: 'name8',
            type: 'password',
            placeholder: '高级属性',
            cssClass: 'specialClass',
            attributes: {
              maxlength: 4,
              inputmode: 'decimal',
            },
          },
        ]}
        buttons={[
          {
            text: '取消',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('确认取消');
            },
          },
          {
            text: '确定',
            handler: () => {
              console.log('确认确定');
            },
          },
        ]}
      />

      <IonAlert
        isOpen={showAlert5}
        onDidDismiss={() => setShowAlert5(false)}
        cssClass="my-custom-class"
        header={'单选'}
        inputs={[
          {
            name: 'radio1',
            type: 'radio',
            label: '单选 1',
            value: 'value1',
            handler: () => {
              console.log('已选择单选 1');
            },
            checked: true,
          },
          {
            name: 'radio2',
            type: 'radio',
            label: '单选 2',
            value: 'value2',
            handler: () => {
              console.log('已选择单选 2');
            },
          },
          {
            name: 'radio3',
            type: 'radio',
            label: '单选 3',
            value: 'value3',
            handler: () => {
              console.log('已选择单选 3');
            },
          },
          {
            name: 'radio4',
            type: 'radio',
            label: '单选 4',
            value: 'value4',
            handler: () => {
              console.log('已选择单选 4');
            },
          },
          {
            name: 'radio5',
            type: 'radio',
            label: '单选 5',
            value: 'value5',
            handler: () => {
              console.log('已选择单选 5');
            },
          },
          {
            name: 'radio6',
            type: 'radio',
            label: '单选 6',
            value: 'value6',
            handler: () => {
              console.log('已选择单选 6');
            },
          },
        ]}
        buttons={[
          {
            text: '取消',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('确认取消');
            },
          },
          {
            text: '确定',
            handler: () => {
              console.log('确认确定');
            },
          },
        ]}
      />

      <IonAlert
        isOpen={showAlert6}
        onDidDismiss={() => setShowAlert6(false)}
        cssClass="my-custom-class"
        header={'复选框'}
        inputs={[
          {
            name: 'checkbox1',
            type: 'checkbox',
            label: '复选框 1',
            value: 'value1',
            handler: () => {
              console.log('已选择复选框 1');
            },
            checked: true,
          },
          {
            name: 'checkbox2',
            type: 'checkbox',
            label: '复选框 2',
            value: 'value2',
            handler: () => {
              console.log('已选择复选框 2');
            },
          },
          {
            name: 'checkbox3',
            type: 'checkbox',
            label: '复选框 3',
            value: 'value3',
            handler: () => {
              console.log('已选择复选框 3');
            },
          },
          {
            name: 'checkbox4',
            type: 'checkbox',
            label: '复选框 4',
            value: 'value4',
            handler: () => {
              console.log('已选择复选框 4');
            },
          },
          {
            name: 'checkbox5',
            type: 'checkbox',
            label: '复选框 5',
            value: 'value5',
            handler: () => {
              console.log('已选择复选框 5');
            },
          },
          {
            name: 'checkbox6',
            type: 'checkbox',
            label: '复选框 6',
            value: 'value6',
            handler: () => {
              console.log('已选择复选框 6');
            },
          },
        ]}
        buttons={[
          {
            text: '取消',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('确认取消');
            },
          },
          {
            text: '确定',
            handler: () => {
              console.log('确认确定');
            },
          },
        ]}
      />
    </IonContent>
  );
};

export default AlertExample;
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { alertController } from '@ionic/core';

@Component({
  tag: 'alert-example',
  styleUrl: 'alert-example.css',
})
export class AlertExample {
  async presentAlert() {
    const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: '警告',
      subHeader: '副标题',
      message: '这是一条警告消息。',
      buttons: ['确定'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss 已解析，角色为', role);
  }

  async presentAlertMultipleButtons() {
    const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: '警告',
      subHeader: '副标题',
      message: '这是一条警告消息。',
      buttons: ['取消', '打开模态框', '删除'],
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: '确认！',
      message: '消息 <strong>文本</strong>！！！',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('确认取消: blah');
          },
        },
        {
          text: '好的',
          handler: () => {
            console.log('确认好的');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: '提示！',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: '占位符 1',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: '你好',
          placeholder: '占位符 2',
        },
        // 多行输入。
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: '占位符 3',
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: '最喜欢的网站',
        },
        // 带最小值和最大值的日期输入
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12',
        },
        // 不带最小值和最大值的日期输入
        {
          name: 'name5',
          type: 'date',
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10,
        },
        {
          name: 'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: '高级属性',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal',
          },
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('确认取消');
          },
        },
        {
          text: '确定',
          handler: () => {
            console.log('确认确定');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: '单选',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '单选 1',
          value: 'value1',
          handler: () => {
            console.log('已选择单选 1');
          },
          checked: true,
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '单选 2',
          value: 'value2',
          handler: () => {
            console.log('已选择单选 2');
          },
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '单选 3',
          value: 'value3',
          handler: () => {
            console.log('已选择单选 3');
          },
        },
        {
          name: 'radio4',
          type: 'radio',
          label: '单选 4',
          value: 'value4',
          handler: () => {
            console.log('已选择单选 4');
          },
        },
        {
          name: 'radio5',
          type: 'radio',
          label: '单选 5',
          value: 'value5',
          handler: () => {
            console.log('已选择单选 5');
          },
        },
        {
          name: 'radio6',
          type: 'radio',
          label: '单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 单选 6 ',
          value: 'value6',
          handler: () => {
            console.log('已选择单选 6');
          },
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('确认取消');
          },
        },
        {
          text: '确定',
          handler: () => {
            console.log('确认确定');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: '复选框',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: '复选框 1',
          value: 'value1',
          handler: () => {
            console.log('已选择复选框 1');
          },
          checked: true,
        },
        {
          name: 'checkbox2',
          type: 'checkbox',
          label: '复选框 2',
          value: 'value2',
          handler: () => {
            console.log('已选择复选框 2');
          },
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: '复选框 3',
          value: 'value3',
          handler: () => {
            console.log('已选择复选框 3');
          },
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: '复选框 4',
          value: 'value4',
          handler: () => {
            console.log('已选择复选框 4');
          },
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: '复选框 5',
          value: 'value5',
          handler: () => {
            console.log('已选择复选框 5');
          },
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label:
            '复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6 复选框 6',
          value: 'value6',
          handler: () => {
            console.log('已选择复选框 6');
          },
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('确认取消');
          },
        },
        {
          text: '确定',
          handler: () => {
            console.log('确认确定');
          },
        },
      ],
    });

    await alert.present();
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={() => this.presentAlert()}>显示警告</ion-button>
        <ion-button onClick={() => this.presentAlertMultipleButtons()}>显示警告：多个按钮</ion-button>
        <ion-button onClick={() => this.presentAlertConfirm()}>显示警告：确认</ion-button>
        <ion-button onClick={() => this.presentAlertPrompt()}>显示警告：提示</ion-button>
        <ion-button onClick={() => this.presentAlertRadio()}>显示警告：单选</ion-button>
        <ion-button onClick={() => this.presentAlertCheckbox()}>显示警告：复选框</ion-button>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-button @click="presentAlert">显示警告</ion-button>
  <ion-button @click="presentAlertMultipleButtons">显示警告（多个按钮）</ion-button>
  <ion-button @click="presentAlertConfirm">显示警告（确认）</ion-button>
  <ion-button @click="presentAlertPrompt">显示警告（提示）</ion-button>
  <ion-button @click="presentAlertRadio">显示警告（单选）</ion-button>
  <ion-button @click="presentAlertCheckbox">显示警告（复选框）</ion-button>
</template>

<script>
  import { IonButton, alertController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
    methods: {
      async presentAlert() {
        const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header: '警告',
          subHeader: '副标题',
          message: '这是一条警告消息。',
          buttons: ['确定'],
        });
        await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss 已解析，角色为', role);
      },

      async presentAlertMultipleButtons() {
        const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header: '警告',
          subHeader: '副标题',
          message: '这是一条警告消息。',
          buttons: ['取消', '打开模态框', '删除'],
        });
        return alert.present();
      },

      async presentAlertConfirm() {
        const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header: '确认！',
          message: '消息 <strong>文本</strong>！！！',
          buttons: [
            {
              text: '取消',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('确认取消:', blah);
              },
            },
            {
              text: '好的',
              handler: () => {
                console.log('确认好的');
              },
            },
          ],
        });
        return alert.present();
      },

      async presentAlertPrompt() {
        const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header: '提示！',
          inputs: [
            {
              placeholder: '占位符 1',
            },
            {
              name: 'name2',
              id: 'name2-id',
              value: '你好',
              placeholder: '占位符 2',
            },
            {
              name: 'name3',
              value: 'http://ionicframework.com',
              type: 'url',
              placeholder: '最喜欢的网站',
            },
            // 带最小值和最大值的日期输入
            {
              name: 'name4',
              type: 'date',
              min: '2017-03-01',
              max: '2018-01-12',
            },
            // 不带最小值和最大值的日期输入
            {
              name: 'name5',
              type: 'date',
            },
            {
              name: 'name6',
              type: 'number',
              min: -5,
              max: 10,
            },
            {
              name: 'name7',
              type: 'number',
            },
            {
              name: 'name8',
              type: 'password',
              placeholder: '高级属性',
              cssClass: 'specialClass',
              attributes: {
                maxlength: 4,
                inputmode: 'decimal',
              },
            },
          ],
          buttons: [
            {
              text: '取消',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('确认取消');
              },
            },
            {
              text: '确定',
              handler: () => {
                console.log('确认确定');
              },
            },
          ],
        });
        return alert.present();
      },

      async presentAlertRadio() {
        const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header: '单选',
          inputs: [
            {
              type: 'radio',
              label: '单选 1',
              value: 'value1',
              handler: () => {
                console.log('已选择单选 1');
              },
              checked: true,
            },
            {
              type: 'radio',
              label: '单选 2',
              value: 'value2',
              handler: () => {
                console.log('已选择单选 2');
              },
            },
            {
              type: 'radio',
              label: '单选 3',
              value: 'value3',
              handler: () => {
                console.log('已选择单选 3');
              },
            },
            {
              type: 'radio',
              label: '单选 4',
              value: 'value4',
              handler: () => {
                console.log('已选择单选 4');
              },
            },
            {
              type: 'radio',
              label: '单选 5',
              value: 'value5',
              handler: () => {
                console.log('已选择单选 5');
              },
            },
            {
              type: 'radio',
              label: '单选 6',
              value: 'value6',
              handler: () => {
                console.log('已选择单选 6');
              },
            },
          ],
          buttons: [
            {
              text: '取消',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('确认取消');
              },
            },
            {
              text: '确定',
              handler: () => {
                console.log('确认确定');
              },
            },
          ],
        });
        return alert.present();
      },

      async presentAlertCheckbox() {
        const alert = await alertController.create({
          cssClass: 'my-custom-class',
          header: '复选框',
          inputs: [
            {
              type: 'checkbox',
              label: '复选框 1',
              value: 'value1',
              handler: () => {
                console.log('已选择复选框 1');
              },
              checked: true,
            },

            {
              type: 'checkbox',
              label: '复选框 2',
              value: 'value2',
              handler: () => {
                console.log('已选择复选框 2');
              },
            },

            {
              type: 'checkbox',
              label: '复选框 3',
              value: 'value3',
              handler: () => {
                console.log('已选择复选框 3');
              },
            },

            {
              type: 'checkbox',
              label: '复选框 4',
              value: 'value4',
              handler: () => {
                console.log('已选择复选框 4');
              },
            },

            {
              type: 'checkbox',
              label: '复选框 5',
              value: 'value5',
              handler: () => {
                console.log('已选择复选框 5');
              },
            },

            {
              type: 'checkbox',
              label: '复选框 6',
              value: 'value6',
              handler: () => {
                console.log('已选择复选框 6');
              },
            },
          ],
          buttons: [
            {
              text: '取消',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('确认取消');
              },
            },
            {
              text: '确定',
              handler: () => {
                console.log('确认确定');
              },
            },
          ],
        });
        return alert.present();
      },
    },
  });
</script>
```

开发者也可以直接在模板中使用此组件：

```html
<template>
  <ion-button @click="setOpen(true)">显示警告</ion-button>
  <ion-alert
    :is-open="isOpenRef"
    header="警告"
    sub-header="副标题"
    message="这是一条警告消息。"
    css-class="my-custom-class"
    :buttons="buttons"
    @didDismiss="setOpen(false)"
  >
  </ion-alert>
</template>

<script>
  import { IonAlert, IonButton } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonAlert, IonButton },
    setup() {
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);
      const buttons = ['确定'];

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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />