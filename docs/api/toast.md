---
title: "ion-toast"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v8/toast/props.md';
import Events from '@ionic-internal/component-api/v8/toast/events.md';
import Methods from '@ionic-internal/component-api/v8/toast/methods.md';
import Parts from '@ionic-internal/component-api/v8/toast/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/toast/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/toast/slots.md';

<head>
  <title>ion-toast: 可关闭的应用通知提示组件</title>
  <meta name="description" content="ion-toast 组件是显示系统消息或反馈的应用通知。Toast 提示显示在内容上方，关闭后可恢复交互。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toast 是一种现代应用中常用的微妙通知。它可以用于提供操作反馈或显示系统消息。toast 显示在应用内容的上方，可以通过应用关闭来恢复用户与应用的交互。

## 内联 Toast（推荐）

`ion-toast` 可以通过直接在模板中编写组件来使用。这减少了展示 toast 时需要连接的处理程序数量。

import InlineToastTriggerExample from '@site/static/usage/v8/toast/inline/basic/index.md';

<InlineToastTriggerExample />

### 使用 `isOpen`

`ion-toast` 上的 `isOpen` 属性允许开发者从应用状态控制 toast 的展示状态。这意味着当 `isOpen` 设置为 `true` 时，toast 将显示；当 `isOpen` 设置为 `false` 时，toast 将关闭。

`isOpen` 使用单向数据绑定，意味着当 toast 关闭时它不会自动被设置为 `false`。开发者应监听 `ionToastDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-toast` 的内部实现与应用状态紧密耦合。通过单向数据绑定，toast 只需关心反应式变量提供的布尔值。而使用双向数据绑定时，toast 需要同时关心布尔值和反应式变量本身的存在性。这可能导致非确定性行为并使应用更难调试。

import InlineToastIsOpenExample from '@site/static/usage/v8/toast/inline/is-open/index.md';

<InlineToastIsOpenExample />

## 控制器 Toast

import ControllerExample from '@site/static/usage/v8/toast/presenting/controller/index.md';

<ControllerExample />

## 关闭

Toast 旨在作为微妙的通知，不应打扰用户。因此，关闭 toast 不应需要用户交互。

可以通过在 toast 选项的 `duration` 中传递要显示的毫秒数来使 toast 在特定时间后自动关闭。如果添加了带有 `"cancel"` 角色的按钮，则该按钮将关闭 toast。要在创建后关闭 toast，请调用实例上的 `dismiss()` 方法。

按下硬件返回按钮不会关闭 toast，因为它们不应该打扰用户。

以下示例演示了如何使用 `buttons` 属性添加一个在点击时自动关闭 toast 的按钮，以及如何收集关闭事件的 `role`。

import ButtonsPlayground from '@site/static/usage/v8/toast/buttons/index.md';

<ButtonsPlayground />

## 定位

Toast 可以定位在视口的顶部、底部或中间。位置可以在创建时传递。可选值为 `top`、`bottom` 和 `middle`。如果未指定位置，toast 将显示在视口底部。

### 相对定位

如果 toast 与导航元素（如页眉、页脚或 [FAB](./fab.md)）一起显示，toast 可能会默认覆盖这些元素。这可以通过 `positionAnchor` 属性来解决，该属性接受元素引用或 ID。toast 将相对于所选元素定位，当使用 `position="top"` 时显示在元素下方，当使用 `position="bottom"` 时显示在元素上方。当使用 `position="middle"` 时，`positionAnchor` 属性将被忽略。

import PositionAnchor from '@site/static/usage/v8/toast/position-anchor/index.md';

<PositionAnchor />

## 滑动关闭

可以通过使用 `swipeGesture` 属性来滑动关闭 toast。此功能具有位置感知能力，意味着用户需要滑动的方向将根据 `position` 属性的值而变化。此外，用户需要滑动的距离可能会受到 `positionAnchor` 属性的影响。

import SwipeGesture from '@site/static/usage/v8/toast/swipe-gesture/index.md';

<SwipeGesture />

## 布局

toast 内的按钮容器可以使用 `layout` 属性设置为与消息在同一行显示，或在单独的行上堆叠显示。堆叠布局应用于具有长文本值的按钮。此外，在堆叠的 toast 布局中，按钮可以使用 `start` 或 `end` 的 `side` 值，但不能同时使用两者。

import StackedPlayground from '@site/static/usage/v8/toast/layout/index.md';

<StackedPlayground />

## 图标

可以在 toast 内部的内容旁边添加图标。通常，toast 中的图标应用于增加额外的样式或上下文，而不是吸引用户的注意力或提升 toast 的优先级。如果您想向用户传达更重要的消息或确保获得响应，我们建议使用[提示框](alert.md)代替。

import IconPlayground from '@site/static/usage/v8/toast/icon/index.md';

<IconPlayground />

## 主题

import ThemingPlayground from '@site/static/usage/v8/toast/theming/index.md';

<ThemingPlayground />

## 无障碍

### 焦点管理

Toast 旨在作为微妙的通知，不打算打扰用户。关闭 toast 不应需要用户交互。因此，当 toast 显示时，焦点不会自动移动到 toast 上。

### 屏幕阅读器

Toast 设置了 aria 属性以便屏幕阅读器可以[访问](../reference/glossary#a11y)，但如果这些属性不够描述性或与 toast 在应用中的使用方式不符，可以覆盖它们。

#### 角色

`ion-toast` 在内部的 `.toast-content` 元素上设置了 `role="status"` 和 `aria-live="polite"`。这使屏幕阅读器只播报 toast 消息和标题。按钮和图标在 toast 显示时不会被播报。

`aria-live` 使屏幕阅读器在 toast 内容更新时播报其内容。但是，由于该属性设置为 `'polite'`，屏幕阅读器不应中断当前任务。

由于 toast 旨在作为微妙的通知，`aria-live` 绝不应设置为 `"assertive"`。如果开发者需要用重要消息打扰用户，我们建议使用[提示框](./alert)。

#### Toast 按钮描述

包含文本的按钮在与之交互时将由屏幕阅读器朗读。如果按钮仅包含图标，或需要与现有文本不同的描述，则应通过向按钮的 `htmlAttributes` 属性传递 `aria-label` 来为按钮分配标签。

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

虽然这不是一个完整的列表，但以下是一些使用 toast 时的指导原则。

* 关闭 toast 时不要要求用户交互。例如，在 toast 中放置"关闭"按钮是可以的，但 toast 也应在超时后自动关闭。如果您需要在通知中获取用户交互，请考虑使用[提示框](./alert)代替。

* 对于消息较长的 toast，请考虑调整 `duration` 属性，以便用户有足够时间阅读 toast 的内容。

* 如果在 toast 中添加按钮，请始终为每个按钮关联的操作提供替代完成方式。这确保了即使用户在阅读之前 toast 已关闭，他们仍然可以完成 toast 中显示的操作。

* 避免从其他叠加层（如[模态框](./modal)）内部显示带有按钮的 toast。模态框和其他叠加层实现了[焦点陷阱](./modal#焦点捕获)，这将阻止屏幕阅读器将焦点移动到 toast 上来完成操作。这可能会使用户感到困惑，因为屏幕阅读器仍然会播报 toast。即使实现了每个按钮关联操作的替代方式，情况也是如此。请考虑在焦点陷阱模态框内创建一个[活动区域](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)，而不是使用 toast。

## 接口

### ToastButton

```typescript
interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
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

## CSS Shadow Parts
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />
