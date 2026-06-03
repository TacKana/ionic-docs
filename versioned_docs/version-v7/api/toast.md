---
title: 'ion-toast'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v7/toast/props.md';
import Events from '@ionic-internal/component-api/v7/toast/events.md';
import Methods from '@ionic-internal/component-api/v7/toast/methods.md';
import Parts from '@ionic-internal/component-api/v7/toast/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/toast/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/toast/slots.md';

<head>
  <title>ion-toast：可关闭的应用通知提醒组件</title>
  <meta
    name="description"
    content="ion-toast 组件是显示系统消息或反馈的应用通知。Toast 提醒显示在内容上方，关闭后可继续交互。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toast（消息提示）是一种现代应用中常用的小型通知。它可以用于提供有关操作的反馈或显示系统消息。Toast 显示在应用内容的上方，应用可以将其关闭以恢复用户与应用的交互。

## 内联 Toast（推荐）

`ion-toast` 可以直接在模板中编写组件来使用。这减少了你需要连接以呈现 toast 的处理程序数量。

import InlineToastTriggerExample from '@site/static/usage/v7/toast/inline/basic/index.md';

<InlineToastTriggerExample />

### 使用 `isOpen​`

`ion-toast` 上的 `isOpen` 属性允许开发者从应用状态控制 toast 的呈现状态。这意味着当 `isOpen` 设置为 `true` 时，toast 将显示；当 `isOpen` 设置为 `false` 时，toast 将关闭。

`isOpen` 使用单向数据绑定，这意味着当 toast 关闭时，它不会自动设置为 `false`。开发者应监听 `ionToastDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-toast` 的内部实现与应用状态紧密耦合。使用单向数据绑定时，toast 只需要关心响应式变量提供的布尔值。而使用双向数据绑定时，toast 需要同时关心布尔值和响应式变量本身的存在性，这可能导致不确定的行为并使应用更难调试。

import InlineToastIsOpenExample from '@site/static/usage/v7/toast/inline/is-open/index.md';

<InlineToastIsOpenExample />

## 控制器 Toast

import ControllerExample from '@site/static/usage/v7/toast/presenting/controller/index.md';

<ControllerExample />

## 关闭

Toast 旨在作为小型的通知，不应中断用户。因此，关闭 toast 不应需要用户交互。

可以通过在 toast 选项的 `duration` 中传递要显示的毫秒数，使 toast 在特定时间后自动关闭。如果添加了带有 `"cancel"` 角色的按钮，则该按钮将关闭 toast。要在创建后关闭 toast，请调用实例上的 `dismiss()` 方法。

按下硬件返回按钮不会关闭 toast，因为它们不应中断用户。

以下示例演示如何使用 `buttons` 属性添加一个在点击时自动关闭 toast 的按钮，以及如何收集关闭事件的 `role`。

import ButtonsPlayground from '@site/static/usage/v7/toast/buttons/index.md';

<ButtonsPlayground />

## 定位

Toast 可以定位在视口的顶部、底部或中间。位置可以在创建时传递。可能的值是 `top`、`bottom` 和 `middle`。如果未指定位置，toast 将显示在视口底部。

### 相对定位

如果 toast 与导航元素（如头部、底部或 [FAB](./fab.md)）一起呈现，则默认情况下 toast 可能会与这些元素重叠。这可以使用 `positionAnchor` 属性来修复，该属性接受元素引用或 ID。toast 将相对于所选元素定位，在使用 `position="top"` 时出现在其下方，在使用 `position="bottom"` 时出现在其上方。使用 `position="middle"` 时，`positionAnchor` 属性将被忽略。

import PositionAnchor from '@site/static/usage/v7/toast/position-anchor/index.md';

<PositionAnchor />

## 布局

Toast 中的按钮容器可以显示在与消息相同的行上，也可以使用 `layout` 属性堆叠在不同的行上。堆叠布局应与具有长文本值的按钮一起使用。此外，堆叠 toast 布局中的按钮可以使用 `start` 或 `end` 的 `side` 值，但不能同时使用两者。

import StackedPlayground from '@site/static/usage/v7/toast/layout/index.md';

<StackedPlayground />

## 图标

可以在 toast 内部的内容旁边添加图标。通常情况下，toast 中的图标应用于添加额外的样式或上下文，而不是吸引用户注意或提升 toast 的优先级。如果你希望向用户传达更高优先级的消息或保证回复，我们建议使用[警告框（Alert）](alert.md)。

import IconPlayground from '@site/static/usage/v7/toast/icon/index.md';

<IconPlayground />

## 主题

import ThemingPlayground from '@site/static/usage/v7/toast/theming/index.md';

<ThemingPlayground />

## 无障碍访问

### 焦点管理

Toast 旨在作为小型的通知，不打算中断用户。关闭 toast 不应需要用户交互。因此，焦点在 toast 呈现时不会自动移动到 toast。

### 屏幕阅读器

Toast 设置了 aria 属性以确保[屏幕阅读器](../reference/glossary#a11y)的[无障碍访问](../reference/glossary#a11y)，但如果这些属性描述不够充分或与应用中 toast 的使用方式不一致，可以覆盖它们。

#### 角色

`ion-toast` 在内部的 `.toast-content` 元素上设置了 `role="status"` 和 `aria-live="polite"`。这导致屏幕阅读器只宣布 toast 消息和头部。按钮和图标在 toast 呈现时不会被宣布。

`aria-live` 使屏幕阅读器在内容更新时宣布 toast 的内容。但是，由于该属性设置为 `'polite'`，屏幕阅读器不应中断当前任务。

由于 toast 旨在作为小型通知，`aria-live` 绝不应设置为 `"assertive"`。如果开发者需要用重要消息中断用户，我们建议使用[警告框（alert）](./alert)。

#### Toast 按钮描述

包含文本的按钮在与用户交互时将被屏幕阅读器读取。如果按钮只包含图标，或希望提供现有文本之外的其他描述，可以通过在按钮的 `htmlAttributes` 属性中传递 `aria-label` 来为按钮分配标签。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```javascript
const toast = await this.toastController.create({
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
const toast = await this.toastController.create({
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
useIonToast({
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
const toast = await toastController.create({
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

### 提示

虽然这不是完整的列表，但以下是一些使用 toast 时应遵循的指南。

- 不要要求用户交互才能关闭 toast。例如，在 toast 中包含"关闭"按钮是可以的，但 toast 也应在一段时间后自动关闭。如果你需要用户对通知进行操作，请考虑使用[警告框（alert）](./alert)。

- 对于消息较长的 toast，请考虑调整 `duration` 属性，让用户有足够的时间阅读 toast 的内容。

## 接口

### ToastButton

```typescript
interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
  cssClass?: string | string[];
  htmlAttributes?: { [key: string]: any };
  handler?: () => boolean | void | Promise<boolean | void>;
}
```

### ToastOptions

```typescript
interface ToastOptions {
  header?: string;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  duration?: number;
  buttons?: (ToastButton | string)[];
  position?: 'top' | 'bottom' | 'middle';
  translucent?: boolean;
  animated?: boolean;
  icon?: string;
  htmlAttributes?: { [key: string]: any };

  color?: Color;
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
