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
  <title>ion-alert: 带自定义消息提示的 Ionic 警告框按钮</title>
  <meta
    name="description"
    content="ion-alert 对话框使用输入框展示或收集信息。自定义警告框消息会出现在应用内容上方，必须手动关闭。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

警告框（Alert）是一种通过输入框向用户展示信息或从用户处收集信息的对话框。警告框会显示在应用内容的上方，用户必须手动关闭它才能继续与应用交互。它还可以选择性地包含 `header`、`subHeader` 和 `message`。

## 内联警告框（推荐）

通过在模板中直接编写 `ion-alert` 组件来使用它。这种方式可以减少你为呈现警告框而需要连接的处理程序数量。

import Trigger from '@site/static/usage/v7/alert/presenting/trigger/index.md';

<Trigger />

### 使用 `isOpen`

`ion-alert` 的 `isOpen` 属性允许开发者通过应用状态来控制警告框的展示状态。这意味着当 `isOpen` 设置为 `true` 时，警告框会呈现；当 `isOpen` 设置为 `false` 时，警告框会关闭。

`isOpen` 使用单向数据绑定，这意味着当警告框关闭时，它不会自动设置为 `false`。开发者应该监听 `ionAlertDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-alert` 的内部实现与应用状态紧密耦合。使用单向数据绑定，警告框只需要关注响应式变量提供的布尔值。而使用双向数据绑定，警告框需要同时关注布尔值以及响应式变量本身的存在。这可能导致非确定性行为，并使应用更难调试。

import IsOpen from '@site/static/usage/v7/alert/presenting/isOpen/index.md';

<IsOpen />

## 控制器警告框

在需要更多控制警告框展示和关闭时机的情况下，可以使用 `alertController`。

import Controller from '@site/static/usage/v7/alert/presenting/controller/index.md';

<Controller />

## 按钮

在 `buttons` 数组中，每个按钮都包含其 `text` 属性，以及可选的 `handler`。如果处理程序返回 `false`，那么点击按钮时警告框不会自动关闭。所有按钮将按照它们添加到 `buttons` 数组的顺序从左到右显示。注意：最右侧的按钮（数组中的最后一个）是主按钮。

可以选择为按钮添加 `role` 属性，例如 `cancel`。如果某个按钮具有 `cancel` 角色，那么当通过点击背景遮罩关闭警告框时，将触发具有取消角色的按钮的处理程序。

import Buttons from '@site/static/usage/v7/alert/buttons/index.md';

<Buttons />

## 输入框

警告框也可以包含多种不同的输入框，其数据可以传回应用。输入框可以作为提示用户信息的简单方式。支持单选框、复选框和文本输入框，但它们不能混合使用。例如，一个警告框可以包含所有单选框输入，或所有复选框输入，但同一个警告框不能混合单选框和复选框输入。但请注意，不同类型的"文本"输入框可以混合使用，例如 `url`、`email`、`text`、`textarea` 等。如果你需要复杂的表单 UI，不适合在警告框的规范内，我们建议在模态框（modal）内构建表单。

### 文本输入框示例

import TextInputs from '@site/static/usage/v7/alert/inputs/text-inputs/index.md';

<TextInputs />

### 单选框示例

import Radios from '@site/static/usage/v7/alert/inputs/radios/index.md';

<Radios />

## 自定义

警告框使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式追加一个额外的类来自动限定其 CSS 范围。在 CSS 中覆盖作用域选择器需要具有[更高的特异性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)的选择器。

我们建议在 `create` 方法中向 `cssClass` 传递一个自定义类，并使用该类为宿主和内部元素添加自定义样式。此属性也可以接受多个以空格分隔的类。

```css
/* 不生效 - 特异性不够 */
.alert-wrapper {
  background: #e5e5e5;
}

/* 生效 - 在 cssClass 中传递 "my-custom-class" 以提高特异性 */
.my-custom-class .alert-wrapper {
  background: #e5e5e5;
}
```

任何已定义的 [CSS 自定义属性](#css-custom-properties) 都可以用于设置警告框的样式，而无需针对单个元素：

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

警告框设置了 ARIA 属性以便于屏幕阅读器[访问](../reference/glossary#a11y)，但如果这些属性描述不够充分或与警告框在应用中的使用方式不一致，可以覆盖它们。

#### 角色

Ionic 会自动将警告框的 `role` 设置为 [`alertdialog`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)（如果包含任何输入框或按钮），或者设置为 [`alert`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/alert_role)（如果不包含任何输入框或按钮）。

#### 警告框描述

如果为警告框定义了 `header` 属性，`aria-labelledby` 属性将自动设置为标题的 ID。如果未定义 `header`，则 `subHeader` 元素将作为备用。类似地，如果定义了 `message` 属性，`aria-describedby` 属性将自动设置为 `message` 元素的 ID。

强烈建议你的警告框包含 `message`，以及 `header` 或 `subHeader` 中的至少一个，以符合 ARIA 规范。如果你选择不包含 `header` 或 `subHeader`，另一种方法是使用 `htmlAttributes` 属性提供描述性的 `aria-label`。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const alert = await this.alertController.create({
  message: '这是一个带有自定义 ARIA 属性的警告框。',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const alert = await this.alertController.create({
  message: '这是一个带有自定义 ARIA 属性的警告框。',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonAlert({
  message: '这是一个带有自定义 ARIA 属性的警告框。',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

<TabItem value="vue">

```javascript
const alert = await alertController.create({
  message: '这是一个带有自定义 ARIA 属性的警告框。',
  htmlAttributes: {
    'aria-label': 'alert dialog',
  },
});
```

</TabItem>

</Tabs>

所有 ARIA 属性都可以通过在警告框的 `htmlAttributes` 属性中定义自定义值来手动覆盖。

#### 警告框按钮描述

包含文本的按钮将被屏幕阅读器读取。如果需要不同于现有文本的描述，可以通过在按钮的 `htmlAttributes` 属性中传递 `aria-label` 来为按钮设置标签。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const alert = await this.alertController.create({
  header: '标题',
  buttons: [
    {
      text: '退出',
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
  header: '标题',
  buttons: [
    {
      text: '退出',
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
  header: '标题',
  buttons: [
    {
      text: '退出',
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
  header: '标题',
  buttons: [
    {
      text: '退出',
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
   * 如果输入类型是 `radio` 或 `checkbox`，则显示在输入框旁边的标签文本。
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

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />