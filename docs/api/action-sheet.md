---
title: "ion-action-sheet"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v8/action-sheet/props.md';
import Events from '@ionic-internal/component-api/v8/action-sheet/events.md';
import Methods from '@ionic-internal/component-api/v8/action-sheet/methods.md';
import Parts from '@ionic-internal/component-api/v8/action-sheet/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/action-sheet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/action-sheet/slots.md';

<head>
  <title>ion-action-sheet：iOS 和 Android 的操作列表对话框</title>
  <meta name="description" content="操作列表是在应用内容上方显示一组选项的对话框，必须手动关闭。阅读了解在 iOS 和 Android 设备上的使用。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


操作列表是一个显示一组选项的对话框。它显示在应用内容的上方，用户必须手动关闭后才能继续与应用交互。在 `ios` 模式下，破坏性选项会明显标出。有多种方式可以关闭操作列表，包括点击背景遮罩或在桌面上按退出键。

## 内联操作列表（推荐）

`ion-action-sheet` 可以直接在模板中编写组件来使用。这减少了呈现操作列表所需绑定的处理程序数量。

import Trigger from '@site/static/usage/v8/action-sheet/inline/trigger/index.md';

<Trigger />

### 使用 `isOpen`

`ion-action-sheet` 上的 `isOpen` 属性允许开发者从应用状态控制操作列表的展示状态。这意味着当 `isOpen` 设置为 `true` 时，操作列表将显示；当 `isOpen` 设置为 `false` 时，操作列表将关闭。

`isOpen` 使用单向数据绑定，这意味着当操作列表关闭时，它不会自动设置为 `false`。开发者应监听 `ionActionSheetDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是为了防止 `ion-action-sheet` 的内部逻辑与应用状态紧密耦合。使用单向数据绑定时，操作列表只需关注响应式变量提供的布尔值。而使用双向数据绑定时，操作列表需要同时关注布尔值和响应式变量本身的存在性。这可能导致非确定性的行为，并使应用的调试更加困难。

import IsOpen from '@site/static/usage/v8/action-sheet/inline/isOpen/index.md';

<IsOpen />

## 控制器操作列表

在需要对操作列表的显示和关闭进行更多控制的情况下，可以使用 `actionSheetController`。

import Controller from '@site/static/usage/v8/action-sheet/controller/index.md';

<Controller />

## 按钮

按钮的 `role` 属性可以是 `destructive` 或 `cancel`。没有角色属性的按钮将具有平台的默认外观。具有 `cancel` 角色的按钮始终作为底部按钮加载，无论它们在数组中的位置如何。所有其他按钮将按照它们在 `buttons` 数组中的添加顺序显示。注意：我们建议 `destructive` 按钮始终是数组中的第一个按钮，使其成为顶部按钮。此外，如果通过点击背景遮罩关闭操作列表，则会触发具有取消角色的按钮的处理程序。

按钮还可以通过 `ActionSheetButton` 上的 `data` 属性传递数据。这将填充 `onDidDismiss` 方法返回值中的 `data` 字段。

## 关闭时收集角色信息

当 `didDismiss` 事件触发时，事件详情中的 `data` 和 `role` 字段可用于收集有关操作列表如何关闭的信息。

import RoleInfo from '@site/static/usage/v8/action-sheet/role-info-on-dismiss/index.md';

<RoleInfo />

## 主题

操作列表使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式附加额外的类来自动限定其 CSS 的作用域。在 CSS 中覆盖作用域选择器需要[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。

### 样式

我们建议在 `create` 方法中通过 `cssClass` 传递自定义类，并使用该类为主机元素和内部元素添加自定义样式。此属性也可以接受以空格分隔的多个类。

```css
/* 不起作用 - 特异性不够 */
.action-sheet-group {
  background: #e5e5e5;
}

/* 有效 - 在 cssClass 中传递 "my-custom-class" 以提高特异性 */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

import Styling from '@site/static/usage/v8/action-sheet/theming/styling/index.md';

<Styling />

### CSS 自定义属性

任何已定义的 [CSS 自定义属性](#css-custom-properties) 都可以用于设置操作列表的样式，而无需定位单个元素。

import CssCustomProperties from '@site/static/usage/v8/action-sheet/theming/css-properties/index.md';

<CssCustomProperties />

## 无障碍

### 屏幕阅读器

操作列表设置了 aria 属性以便屏幕阅读器可以[访问](../reference/glossary#a11y)，但如果这些属性描述不够充分或与应用中使用操作列表的方式不一致，则可以覆盖这些属性。

#### 角色

操作列表的 `role` 为 [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)。为了符合 ARIA 规范，必须设置 `aria-label` 或 `aria-labelledby` 属性。

#### 操作列表描述

强烈建议每个操作列表都定义 `header` 属性，因为 Ionic 会自动设置 `aria-labelledby` 指向头部元素。但是，如果您选择不包含 `header`，另一种方法是使用 `htmlAttributes` 属性来提供描述性的 `aria-label` 或设置自定义的 `aria-labelledby` 值。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const actionSheet = await this.actionSheetController.create({
  htmlAttributes: {
    'aria-label': 'action sheet dialog',
  },
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const actionSheet = await this.actionSheetController.create({
  htmlAttributes: {
    'aria-label': 'action sheet dialog',
  },
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonActionSheet({
  htmlAttributes: {
    'aria-label': 'action sheet dialog',
  },
});
```

</TabItem>

<TabItem value="vue">

```javascript
const actionSheet = await actionSheetController.create({
  htmlAttributes: {
    'aria-label': 'action sheet dialog',
  },
});
```

</TabItem>

</Tabs>

#### 操作列表按钮描述

包含文本的按钮将被屏幕阅读器读取。如果按钮只包含图标，或者需要现有文本之外的描述，则应通过向按钮的 `htmlAttributes` 属性传递 `aria-label` 来为按钮分配标签。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const actionSheet = await this.actionSheetController.create({
  header: 'Header',
  buttons: [
    {
      icon: 'close',
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
const actionSheet = await this.actionSheetController.create({
  header: 'Header',
  buttons: [
    {
      icon: 'close',
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
useIonActionSheet({
  header: 'Header',
  buttons: [
    {
      icon: 'close',
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
const actionSheet = await actionSheetController.create({
  header: 'Header',
  buttons: [
    {
      icon: 'close',
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

### ActionSheetButton

```typescript
interface ActionSheetButton<T = any> {
  text?: string;
  role?: 'cancel' | 'destructive' | 'selected' | string;
  icon?: string;
  cssClass?: string | string[];
  id?: string;
  htmlAttributes?: { [key: string]: any };
  handler?: () => boolean | void | Promise<boolean | void>;
  data?: T;
}
```

### ActionSheetOptions

```typescript
interface ActionSheetOptions {
  header?: string;
  subHeader?: string;
  cssClass?: string | string[];
  buttons: (ActionSheetButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

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
