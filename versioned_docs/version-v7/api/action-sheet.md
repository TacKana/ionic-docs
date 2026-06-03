---
title: 'ion-action-sheet'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v7/action-sheet/props.md';
import Events from '@ionic-internal/component-api/v7/action-sheet/events.md';
import Methods from '@ionic-internal/component-api/v7/action-sheet/methods.md';
import Parts from '@ionic-internal/component-api/v7/action-sheet/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/action-sheet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/action-sheet/slots.md';

<head>
  <title>ion-action-sheet：适用于 iOS 和 Android 的操作列表对话框</title>
  <meta
    name="description"
    content="操作列表（Action Sheet）是在应用内容上方显示一组选项的对话框，需要手动关闭。了解在 iOS 和 Android 设备上的使用。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

操作列表（Action Sheet）是显示一组选项的对话框。它显示在应用内容的上方，用户必须手动关闭后才能继续与应用交互。在 `ios` 模式下，破坏性选项会明显标识。有多种方式可以关闭操作列表，包括点击背景遮罩或在桌面上按 Escape 键。

## 内联操作列表（推荐）

`ion-action-sheet` 可以直接在模板中编写组件来使用。这减少了你需要连接的事件处理程序数量。

import Trigger from '@site/static/usage/v7/action-sheet/inline/trigger/index.md';

<Trigger />

### 使用 `isOpen`

`ion-action-sheet` 上的 `isOpen` 属性允许开发者从应用状态控制操作列表的呈现状态。这意味着当 `isOpen` 设置为 `true` 时，操作列表将显示；当 `isOpen` 设置为 `false` 时，操作列表将关闭。

`isOpen` 使用单向数据绑定，这意味着当操作列表关闭时，它不会自动设置为 `false`。开发者应监听 `ionActionSheetDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-action-sheet` 的内部实现与应用状态紧密耦合。使用单向数据绑定时，操作列表只需要关心响应式变量提供的布尔值。而使用双向数据绑定时，操作列表需要同时关心布尔值和响应式变量本身的存在性，这可能导致不确定的行为并使应用更难调试。

import IsOpen from '@site/static/usage/v7/action-sheet/inline/isOpen/index.md';

<IsOpen />

## 控制器操作列表

在需要对操作列表的显示和关闭有更多控制的场景下，可以使用 `actionSheetController`。

import Controller from '@site/static/usage/v7/action-sheet/controller/index.md';

<Controller />

## 按钮

按钮的 `role` 属性可以是 `destructive` 或 `cancel`。没有 role 属性的按钮将使用平台的默认外观。具有 `cancel` 角色的按钮将始终加载为底部按钮，无论它们在数组中的位置如何。所有其他按钮将按照它们在 `buttons` 数组中添加的顺序显示。注意：我们建议 `destructive` 按钮始终是数组中的第一个按钮，使其成为顶部按钮。此外，如果通过点击背景遮罩关闭操作列表，则会触发具有 cancel 角色的按钮的处理程序。

按钮还可以通过 `ActionSheetButton` 上的 `data` 属性传递数据。这将填充 `onDidDismiss` 方法返回值中的 `data` 字段。

## 关闭时收集角色信息

当 `didDismiss` 事件触发时，事件详情的 `data` 和 `role` 字段可用于收集关于操作列表如何被关闭的信息。

import RoleInfo from '@site/static/usage/v7/action-sheet/role-info-on-dismiss/index.md';

<RoleInfo />

## 主题

操作列表使用 scoped 封装，这意味着它会在运行时通过为每个样式追加额外类来自动限定 CSS 作用域。在 CSS 中覆盖 scoped 选择器需要[更高的特异性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)选择器。

### 样式

我们建议在 `create` 方法中向 `cssClass` 传递自定义类，并使用该类为主机和内部元素添加自定义样式。此属性也可以接受以空格分隔的多个类。

```css
/* 不起作用 - 特异性不够 */
.action-sheet-group {
  background: #e5e5e5;
}

/* 起作用 - 在 cssClass 中传递 "my-custom-class" 以提高特异性 */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

import Styling from '@site/static/usage/v7/action-sheet/theming/styling/index.md';

<Styling />

### CSS 自定义属性

任何已定义的 [CSS 自定义属性](#css-自定义属性-1) 都可以用于设置操作列表的样式，而无需定位单个元素。

import CssCustomProperties from '@site/static/usage/v7/action-sheet/theming/css-properties/index.md';

<CssCustomProperties />

## 无障碍访问

### 屏幕阅读器

操作列表设置了 aria 属性以确保[屏幕阅读器](../reference/glossary#a11y)的[无障碍访问](../reference/glossary#a11y)，但如果这些属性描述不够充分或与应用中操作列表的使用方式不一致，可以覆盖它们。

#### 角色

操作列表被赋予 `dialog` 角色。为了符合 ARIA 规范，必须设置 `aria-label` 或 `aria-labelledby` 属性。

#### 操作列表描述

强烈建议每个操作列表都定义 `header` 属性，因为 Ionic 会自动将 `aria-labelledby` 指向 header 元素。然而，如果你选择不包含 `header`，另一种方法是使用 `htmlAttributes` 属性提供描述性的 `aria-label` 或设置自定义的 `aria-labelledby` 值。

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

包含文本的按钮将被屏幕阅读器读取。如果按钮只包含图标，或希望提供现有文本之外的其他描述，可以通过在按钮的 `htmlAttributes` 属性中传递 `aria-label` 来为按钮分配标签。

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

## 接口

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
