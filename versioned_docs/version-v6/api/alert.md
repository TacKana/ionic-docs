---
title: 'ion-alert'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v7/alert/props.md';
import Events from '@ionic-internal/component-api/v7/alert/events.md';
import Methods from '@ionic-internal/component-api/v7/alert/methods.md';
import Parts from '@ionic-internal/component-api/v7/alert/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/alert/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/alert/slots.md';

<head>
  <title>ion-alert：Ionic 警告框按钮与自定义消息提示</title>
  <meta
    name="description"
    content="ion-alert 对话框使用输入控件展示或收集信息。自定义警告框按钮消息显示在应用内容上方，需要手动关闭。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

警告框（Alert）是一种对话框，用于向用户展示信息或通过输入控件从用户处收集信息。警告框显示在应用内容的上方，用户必须手动关闭后才能继续与应用交互。它还可以选择性地包含 `header`、`subHeader` 和 `message`。

## 内联警告框（推荐）

`ion-alert` 可以直接在模板中编写组件来使用。这减少了你需要连接的事件处理程序数量。

import Trigger from '@site/static/usage/v7/alert/presenting/trigger/index.md';

<Trigger />

### 使用 `isOpen`

`ion-alert` 上的 `isOpen` 属性允许开发者从应用状态控制警告框的呈现状态。这意味着当 `isOpen` 设置为 `true` 时，警告框将显示；当 `isOpen` 设置为 `false` 时，警告框将关闭。

`isOpen` 使用单向数据绑定，这意味着当警告框关闭时，它不会自动设置为 `false`。开发者应监听 `ionAlertDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-alert` 的内部实现与应用状态紧密耦合。使用单向数据绑定时，警告框只需要关心响应式变量提供的布尔值。而使用双向数据绑定时，警告框需要同时关心布尔值和响应式变量本身的存在性，这可能导致不确定的行为并使应用更难调试。

import IsOpen from '@site/static/usage/v7/alert/presenting/isOpen/index.md';

<IsOpen />

## 控制器警告框

在需要对警告框的显示和关闭有更多控制的场景下，可以使用 `alertController`。

import Controller from '@site/static/usage/v7/alert/presenting/controller/index.md';

<Controller />

## 按钮

在 `buttons` 数组中，每个按钮包含其 `text` 属性，以及可选的 `handler` 属性。如果处理程序返回 `false`，则点击按钮时警告框不会自动关闭。所有按钮将按照它们在 `buttons` 数组中添加的顺序从左到右显示。注意：最右边的按钮（数组中的最后一个）是主要按钮。

可选地，可以为按钮添加 `role` 属性，例如 `cancel`。如果某个按钮具有 `cancel` 角色，则当通过点击背景遮罩关闭警告框时，将触发具有 cancel 角色的按钮的处理程序。

import Buttons from '@site/static/usage/v7/alert/buttons/index.md';

<Buttons />

## 输入控件

警告框还可以包含多种不同的输入控件，其数据可以传回应用。输入控件可以用作向用户提示信息的简单方式。支持单选按钮、复选框和文本输入，但它们不能混合使用。例如，一个警告框可以全部是单选按钮输入，或全部是复选框输入，但同一个警告框不能混合使用单选和复选框输入。但请注意，不同类型的"文本"输入可以混合使用，例如 `url`、`email`、`text`、`textarea` 等。如果你需要不适合警告框指南的复杂表单 UI，我们建议在模态框中构建表单。

### 文本输入示例

import TextInputs from '@site/static/usage/v7/alert/inputs/text-inputs/index.md';

<TextInputs />

### 单选按钮示例

import Radios from '@site/static/usage/v7/alert/inputs/radios/index.md';

<Radios />

## 自定义

警告框使用 scoped 封装，这意味着它会在运行时通过为每个样式追加额外类来自动限定 CSS 作用域。在 CSS 中覆盖 scoped 选择器需要[更高的特异性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)选择器。

我们建议在 `create` 方法中向 `cssClass` 传递自定义类，并使用该类为主机和内部元素添加自定义样式。此属性也可以接受以空格分隔的多个类。

```css
/* 不起作用 - 特异性不够 */
.alert-wrapper {
  background: #e5e5e5;
}

/* 起作用 - 在 cssClass 中传递 "my-custom-class" 以提高特异性 */
.my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
```

任何已定义的 [CSS 自定义属性](#css-自定义属性) 都可以用于设置警告框的样式，而无需定位单个元素：

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

import Customization from '@site/static/usage/v7/alert/customization/index.md';

<Customization />

:::note
如果你正在构建 Ionic Angular 应用，样式需要添加到全局样式表文件中。
:::

## 无障碍访问

### 屏幕阅读器

警告框设置了 aria 属性以确保[屏幕阅读器](../reference/glossary#a11y)的[无障碍访问](../reference/glossary#a11y)，但如果这些属性描述不够充分或与应用中警告框的使用方式不一致，可以覆盖它们。

#### 角色

Ionic 会自动将警告框的 `role` 设置为 [`alertdialog`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)（如果包含输入控件或按钮），如果没有则设置为 [`alert`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/alert_role)。

#### 警告框描述

如果为警告框定义了 `header` 属性，`aria-labelledby` 属性将自动设置为 header 的 ID。如果未定义 `header`，则将使用 `subHeader` 元素作为回退。类似地，如果定义了 `message` 属性，`aria-describedby` 属性将自动设置为 `message` 元素的 ID。

强烈建议你的警告框包含 `message`，以及 `header` 或 `subHeader`，以符合 ARIA 规范。如果你选择不包含 `header` 或 `subHeader`，另一种方法是使用 `htmlAttributes` 属性提供描述性的 `aria-label`。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const alert = await this.alertController.create({
  message: '这是一个具有自定义 aria 属性的警告框。',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const alert = await this.alertController.create({
  message: '这是一个具有自定义 aria 属性的警告框。',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonAlert({
  message: '这是一个具有自定义 aria 属性的警告框。',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="vue">

```javascript
const alert = await alertController.create({
  message: '这是一个具有自定义 aria 属性的警告框。',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

</Tabs>

所有 ARIA 属性都可以通过在警告框的 `htmlAttributes` 属性中定义自定义值来手动覆盖。

#### 警告框按钮描述

包含文本的按钮将被屏幕阅读器读取。如果需要提供现有文本之外的其他描述，可以通过在按钮的 `htmlAttributes` 属性中传递 `aria-label` 来在按钮上设置标签。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const alert = await this.alertController.create({
  header: 'Header',
  buttons: [
    {
      text: 'Exit',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const alert = await this.alertController.create({
  header: 'Header',
  buttons: [
    {
      text: 'Exit',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonAlert({
  header: 'Header',
  buttons: [
    {
      text: 'Exit',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="vue">

```javascript
const alert = await alertController.create({
  header: 'Header',
  buttons: [
    {
      text: 'Exit',
      htmlAttributes: {
        'aria-label': 'close',
      },
    },
  ],
});
```

</TabItem>

</Tabs>

## 接口

### AlertButton

```typescript
type AlertButtonOverlayHandler = boolean | void | { [key: string]: any };

interface AlertButton {
  text: string;
  role?: 'cancel' | 'destructive' | string;
  cssClass?: string | string[];
  id?: string;
  htmlAttributes?: { [key: string]: any };
  handler?: (value: any) => AlertButtonOverlayHandler | Promise<AlertButtonOverlayHandler>;
}
```

### AlertInput

```typescript
interface AlertInput {
  type?: TextFieldTypes | 'checkbox' | 'radio' | 'textarea';
  name?: string;
  placeholder?: string;
  value?: any;
  /**
   * 输入类型为 `radio` 或 `checkbox` 时，显示在输入旁边的标签文本。
   */
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  handler?: (input: AlertInput) => void;
  min?: string | number;
  max?: string | number;
  cssClass?: string | string[];
  attributes?: { [key: string]: any };
  tabindex?: number;
}
```

### AlertOptions

```typescript
interface AlertOptions {
  header?: string;
  subHeader?: string;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  inputs?: AlertInput[];
  buttons?: (AlertButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  htmlAttributes?: { [key: string]: any };

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

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
