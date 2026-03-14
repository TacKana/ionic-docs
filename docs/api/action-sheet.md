---
title: 操作表组件
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
  <title>ion-action-sheet: iOS 与 Android 平台的操作表对话框</title>
  <meta name="description" content="操作表（Action Sheet）是一种显示在应用内容上方的选项对话框，需要用户手动关闭。了解如何在 iOS 和 Android 设备上使用。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


操作表（Action Sheet）是一种显示一组选项的对话框。它会出现在应用内容的上方，用户必须手动关闭它，才能继续与应用交互。在 `ios` 模式下，具有破坏性的选项会以明显的方式呈现。有多种方式可以关闭操作表，包括点击背景遮罩或在桌面上按下 Esc 键。

## 内联操作表（推荐）

直接在模板中编写 `ion-action-sheet` 组件即可使用内联操作表。这减少了展示操作表时需要连接的处理程序数量。

import Trigger from '@site/static/usage/v8/action-sheet/inline/trigger/index.md';

<Trigger />

### 使用 `isOpen` 属性

`ion-action-sheet` 上的 `isOpen` 属性允许开发者通过应用程序状态来控制操作表的显示状态。这意味着当 `isOpen` 设置为 `true` 时，操作表将显示；当 `isOpen` 设置为 `false` 时，操作表将关闭。

`isOpen` 使用单向数据绑定，这意味着当操作表关闭时，它不会自动设置为 `false`。开发者应监听 `ionActionSheetDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-action-sheet` 的内部实现与应用程序状态紧密耦合。使用单向数据绑定，操作表只需关注响应式变量提供的布尔值。而使用双向数据绑定，操作表则需要同时关注布尔值以及响应式变量本身的存在性。这可能导致非确定性的行为，并使应用程序更难调试。

import IsOpen from '@site/static/usage/v8/action-sheet/inline/isOpen/index.md';

<IsOpen />

## 控制器操作表

在需要更精确控制操作表显示和关闭时机的情况下，可以使用 `actionSheetController`。

import Controller from '@site/static/usage/v8/action-sheet/controller/index.md';

<Controller />

## 按钮

按钮的 `role` 属性可以是 `destructive`（破坏性）或 `cancel`（取消）。没有设置 `role` 属性的按钮将采用平台默认样式。具有 `cancel` 角色的按钮无论其在数组中的位置如何，始终会显示在底部。所有其他按钮将按照它们添加到 `buttons` 数组中的顺序显示。注意：我们建议 `destructive` 按钮始终作为数组的第一个元素，使其成为顶部按钮。此外，如果通过点击背景遮罩来关闭操作表，则会触发具有 `cancel` 角色的按钮的处理程序。

也可以通过 `ActionSheetButton` 上的 `data` 属性向按钮传递数据。这将填充 `onDidDismiss` 方法返回值中的 `data` 字段。

## 关闭时收集角色信息

当触发 `didDismiss` 事件时，可以使用事件详情中的 `data` 和 `role` 字段来收集有关操作表如何被关闭的信息。

import RoleInfo from '@site/static/usage/v8/action-sheet/role-info-on-dismiss/index.md';

<RoleInfo />

## 主题定制

操作表使用作用域封装（scoped encapsulation），这意味着它会在运行时通过为每个样式附加一个额外的类来自动限定其 CSS 的作用域。覆盖 CSS 中的作用域选择器需要 [更高特异性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity) 的选择器。

### 样式设置

我们建议在 `create` 方法中向 `cssClass` 传递一个自定义类，并使用该类为宿主元素和内部元素添加自定义样式。此属性也可以接受多个以空格分隔的类。

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

任何已定义的 [CSS 自定义属性](#css-custom-properties-1) 都可以用来设置操作表的样式，而无需针对单个元素。

import CssCustomProperties from '@site/static/usage/v8/action-sheet/theming/css-properties/index.md';

<CssCustomProperties />

## 无障碍访问

### 屏幕阅读器

操作表会设置 ARIA 属性以便屏幕阅读器能够 [无障碍访问](../reference/glossary#a11y)，但如果这些属性描述不够充分或与应用中操作表的使用方式不符，可以覆盖这些属性。

#### 角色

操作表被赋予 [`dialog`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role) 的 `role`。为了符合 ARIA 规范，必须设置 `aria-label` 或 `aria-labelledby` 属性。

#### 操作表描述

强烈建议为每个操作表定义 `header` 属性，因为 Ionic 会自动将 `aria-labelledby` 设置为指向标题元素。但是，如果您选择不包含 `header`，另一种方法是使用 `htmlAttributes` 属性提供一个描述性的 `aria-label` 或设置自定义的 `aria-labelledby` 值。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const actionSheet = await this.actionSheetController.create({
  htmlAttributes: {
    'aria-label': '操作表对话框',
  },
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const actionSheet = await this.actionSheetController.create({
  htmlAttributes: {
    'aria-label': '操作表对话框',
  },
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonActionSheet({
  htmlAttributes: {
    'aria-label': '操作表对话框',
  },
});
```

</TabItem>

<TabItem value="vue">

```javascript
const actionSheet = await actionSheetController.create({
  htmlAttributes: {
    'aria-label': '操作表对话框',
  },
});
```

</TabItem>

</Tabs>

#### 操作表按钮描述

包含文本的按钮会被屏幕阅读器读出。如果按钮仅包含图标，或者需要除现有文本以外的描述，应通过向按钮的 `htmlAttributes` 属性传递 `aria-label` 来为按钮分配标签。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const actionSheet = await this.actionSheetController.create({
  header: '标题',
  buttons: [
    {
      icon: 'close',
      htmlAttributes: {
        'aria-label': '关闭',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="javascript">

```javascript
const actionSheet = await this.actionSheetController.create({
  header: '标题',
  buttons: [
    {
      icon: 'close',
      htmlAttributes: {
        'aria-label': '关闭',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="react">

```javascript
useIonActionSheet({
  header: '标题',
  buttons: [
    {
      icon: 'close',
      htmlAttributes: {
        'aria-label': '关闭',
      },
    },
  ],
});
```

</TabItem>

<TabItem value="vue">

```javascript
const actionSheet = await actionSheetController.create({
  header: '标题',
  buttons: [
    {
      icon: 'close',
      htmlAttributes: {
        'aria-label': '关闭',
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

## CSS Shadow Parts
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />