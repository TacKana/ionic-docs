---
title: 'ion-action-sheet'
---

import Props from '@ionic-internal/component-api/v6/action-sheet/props.md';
import Events from '@ionic-internal/component-api/v6/action-sheet/events.md';
import Methods from '@ionic-internal/component-api/v6/action-sheet/methods.md';
import Parts from '@ionic-internal/component-api/v6/action-sheet/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/action-sheet/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/action-sheet/slots.md';

<head>
  <title>ion-action-sheet | iOS 与 Android 应用的操作表对话框</title>
  <meta
    name="description"
    content="操作表是一种显示一组选项的对话框。它出现在应用内容上方，用户必须手动关闭它才能继续与应用交互。在 iOS 模式下，破坏性选项会以醒目的方式呈现。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

操作表（Action Sheet）是一种显示一组选项的对话框。它会出现在应用内容的上方，用户必须手动关闭它才能继续与应用交互。在 `ios` 模式下，破坏性选项会以醒目的方式呈现。关闭操作表有多种方式，包括点击背景遮罩或在桌面端按下 Esc 键。

import Basic from '@site/static/usage/v6/action-sheet/basic/index.md';

<Basic />

## 按钮

按钮的 `role` 属性可以是 `destructive`（破坏性）或 `cancel`（取消）。没有设置 `role` 属性的按钮将采用平台默认样式。具有 `cancel` 角色的按钮总是会显示在底部，无论它们在数组中的位置如何。所有其他按钮将按照添加到 `buttons` 数组中的顺序显示。注意：我们建议将 `destructive` 按钮始终作为数组的第一个元素，使其显示在顶部。此外，如果通过点击背景遮罩来关闭操作表，则会触发具有 `cancel` 角色的按钮的处理函数。

也可以通过 `ActionSheetButton` 上的 `data` 属性向按钮传递数据。这会在 `onDidDismiss` 方法的返回值中填充 `data` 字段。

## 主题定制

操作表使用作用域封装（scoped encapsulation），这意味着它会在运行时为每个样式追加一个额外的类来自动限定 CSS 的作用域。要覆盖 CSS 中的作用域选择器，需要使用[更高优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)的选择器。

### 样式定制

我们建议在 `create` 方法的 `cssClass` 参数中传入一个自定义类，并使用该类为宿主和内部元素添加自定义样式。该属性也可以接受多个以空格分隔的类名。

```css
/* 无效 - 优先级不足 */
.action-sheet-group {
  background: #e5e5e5;
}

/* 有效 - 在 cssClass 中传入 "my-custom-class" 以提高优先级 */
.my-custom-class .action-sheet-group {
  background: #e5e5e5;
}
```

import Styling from '@site/static/usage/v6/action-sheet/theming/styling/index.md';

<Styling />

### CSS 自定义属性

可以使用任何已定义的 [CSS 自定义属性](#css-custom-properties-1) 来设置操作表的样式，而无需针对单个元素进行定位。

import CssCustomProperties from '@site/static/usage/v6/action-sheet/theming/css-properties/index.md';

<CssCustomProperties />

## 无障碍访问

操作表被赋予了 [`dialog`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role) 角色。为了符合 ARIA 规范，必须设置 `aria-label` 或 `aria-labelledby` 属性。

强烈建议为每个操作表定义 `header` 属性，因为 Ionic 会自动将 `aria-labelledby` 指向标题元素。但是，如果你选择不包含 `header`，另一种方法是使用 `htmlAttributes` 属性提供描述性的 `aria-label` 或设置自定义的 `aria-labelledby` 值。

## 接口

### ActionSheetButton

```typescript
interface ActionSheetButton<T = any> {
  text?: string;
  role?: 'cancel' | 'destructive' | 'selected' | string;
  icon?: string;
  cssClass?: string | string[];
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