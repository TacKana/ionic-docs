---
title: "ion-alert"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v8/alert/props.md';
import Events from '@ionic-internal/component-api/v8/alert/events.md';
import Methods from '@ionic-internal/component-api/v8/alert/methods.md';
import Parts from '@ionic-internal/component-api/v8/alert/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/alert/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/alert/slots.md';

<head>
  <title>ion-alert：Ionic 自定义消息提示的警示按钮</title>
  <meta name="description" content="ion-alert 对话框通过输入框呈现或收集信息。自定义警示按钮消息显示在应用内容上方，必须手动关闭。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

警告框是一个向用户呈现信息或使用输入框收集信息的对话框。警告框显示在应用内容上方，用户必须手动关闭后才能继续与应用交互。它还可以选择性地包含 `header`、`subHeader` 和 `message`。

## 内联警告框（推荐）

`ion-alert` 可以直接在模板中编写组件来使用。这减少了呈现警告框所需绑定的处理程序数量。

import Trigger from '@site/static/usage/v8/alert/presenting/trigger/index.md';

<Trigger />

### 使用 `isOpen`

`ion-alert` 上的 `isOpen` 属性允许开发者从应用状态控制警告框的展示状态。这意味着当 `isOpen` 设置为 `true` 时，警告框将显示；当 `isOpen` 设置为 `false` 时，警告框将关闭。

`isOpen` 使用单向数据绑定，这意味着当警告框关闭时，它不会自动设置为 `false`。开发者应监听 `ionAlertDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是为了防止 `ion-alert` 的内部逻辑与应用状态紧密耦合。使用单向数据绑定时，警告框只需关注响应式变量提供的布尔值。而使用双向数据绑定时，警告框需要同时关注布尔值和响应式变量本身的存在性。这可能导致非确定性的行为，并使应用的调试更加困难。

import IsOpen from '@site/static/usage/v8/alert/presenting/isOpen/index.md';

<IsOpen />

## 控制器警告框

在需要对警告框的显示和关闭进行更多控制的情况下，可以使用 `alertController`。

import Controller from '@site/static/usage/v8/alert/presenting/controller/index.md';

<Controller />

## 按钮

在 `buttons` 数组中，每个按钮包含其 `text` 属性，以及可选的 `handler`。如果处理程序返回 `false`，则点击按钮时警告框不会自动关闭。所有按钮将按照它们在 `buttons` 数组中的添加顺序从左到右显示。注意：最右侧的按钮（数组中的最后一个）是主按钮。

可选地，可以为按钮添加 `role` 属性，例如 `cancel`。如果某个按钮具有 `cancel` 角色，那么当通过点击背景遮罩关闭警告框时，将触发具有取消角色的按钮的处理程序。

import Buttons from '@site/static/usage/v8/alert/buttons/index.md';

<Buttons />


## 输入框

警告框还可以包含多种不同的输入框，其数据可以传回应用。输入框可以作为提示用户输入信息的简单方式。支持单选按钮、复选框和文本输入框，但它们不能混合使用。例如，一个警告框可以全部使用单选按钮输入，或者全部使用复选框输入，但同一个警告框不能混合使用单选按钮和复选框输入。不过请注意，不同类型的"文本"输入框可以混合使用，例如 `url`、`email`、`text`、`textarea` 等。如果您需要不符合警告框指南的复杂表单 UI，我们建议改用模态框构建表单。

### 文本输入框示例

import TextInputs from '@site/static/usage/v8/alert/inputs/text-inputs/index.md';

<TextInputs />

### 单选按钮示例

import Radios from '@site/static/usage/v8/alert/inputs/radios/index.md';

<Radios />

## 自定义

警告框使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式附加额外的类来自动限定其 CSS 的作用域。在 CSS 中覆盖作用域选择器需要[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。

我们建议在 `create` 方法中通过 `cssClass` 传递自定义类，并使用该类为主机元素和内部元素添加自定义样式。此属性也可以接受以空格分隔的多个类。

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

任何已定义的 [CSS 自定义属性](#css-custom-properties) 都可以用于设置警告框的样式，而无需定位单个元素：

```css
.my-custom-class {
  --background: #e5e5e5;
}
```

import Customization from '@site/static/usage/v8/alert/customization/index.md';

<Customization />

:::note
 如果您正在构建 Ionic Angular 应用，需要将样式添加到全局样式表文件中。
:::

## 无障碍

### 屏幕阅读器

警告框设置了 aria 属性以便屏幕阅读器可以[访问](../reference/glossary#a11y)，但如果这些属性描述不够充分或与应用中使用警告框的方式不一致，则可以覆盖这些属性。

#### 角色

Ionic 会自动将警告框的 `role` 设置为 [`alertdialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)（如果包含任何输入框或按钮）或 [`alert`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)（如果没有输入框或按钮）。

#### 警告框描述

如果为警告框定义了 `header` 属性，`aria-labelledby` 属性将自动设置为头部的 ID。如果未定义 `header`，则将使用 `subHeader` 元素作为备用。类似地，如果定义了 `message` 属性，`aria-describedby` 属性将自动设置为 `message` 元素的 ID。

强烈建议您的警告框包含 `message` 以及 `header` 或 `subHeader`，以符合 ARIA 规范。如果您选择不包含 `header` 或 `subHeader`，另一种方法是使用 `htmlAttributes` 属性提供描述性的 `aria-label`。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const alert = await this.alertController.create({
  message: 'This is an alert with custom aria attributes.',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const alert = await this.alertController.create({
  message: 'This is an alert with custom aria attributes.',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonAlert({
  message: 'This is an alert with custom aria attributes.',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="vue">

```javascript
const alert = await alertController.create({
  message: 'This is an alert with custom aria attributes.',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

</Tabs>


所有 ARIA 属性都可以通过在警告框的 `htmlAttributes` 属性中定义自定义值来手动覆盖。

#### 警告框按钮描述

包含文本的按钮将被屏幕阅读器读取。如果需要现有文本之外的描述，可以通过向按钮的 `htmlAttributes` 属性传递 `aria-label` 来设置标签。

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

## Interfaces

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
   * The label text to display next to the input, if the input type is `radio` or `checkbox`.
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

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
