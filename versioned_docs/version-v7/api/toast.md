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
  <title>ion-toast: 可关闭的应用通知提示组件</title>
  <meta
    name="description"
    content="ion-toast 组件是用于显示系统消息或反馈的应用通知。Toast 提示会显示在内容上方，关闭后可恢复交互。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toast 是现代应用中常用的轻量通知。它可用于提供操作反馈或显示系统消息。Toast 会显示在应用内容之上，可以被应用关闭以恢复用户与应用交互。

## 内联 Toast（推荐）

直接在模板中编写 `ion-toast` 组件即可使用。这减少了为显示 Toast 所需连接的处理程序数量。

import InlineToastTriggerExample from '@site/static/usage/v7/toast/inline/basic/index.md';

<InlineToastTriggerExample />

### 使用 `isOpen`

`ion-toast` 上的 `isOpen` 属性允许开发者从其应用状态控制 Toast 的显示状态。这意味着当 `isOpen` 设置为 `true` 时 Toast 将显示，当设置为 `false` 时 Toast 将关闭。

`isOpen` 使用单向数据绑定，这意味着当 Toast 关闭时它不会自动设置为 `false`。开发者应监听 `ionToastDidDismiss` 或 `didDismiss` 事件并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-toast` 的内部实现与应用状态紧密耦合。使用单向数据绑定时，Toast 只需要关心响应式变量提供的布尔值。而使用双向数据绑定时，Toast 需要同时关心布尔值以及响应式变量本身的存在。这可能导致非确定性行为并使应用更难调试。

import InlineToastIsOpenExample from '@site/static/usage/v7/toast/inline/is-open/index.md';

<InlineToastIsOpenExample />

## 控制器式 Toast

import ControllerExample from '@site/static/usage/v7/toast/presenting/controller/index.md';

<ControllerExample />

## 关闭

Toast 旨在提供轻量通知，不应打断用户。因此，关闭 Toast 不应要求用户交互。

可以通过在 Toast 选项的 `duration` 中传递显示的毫秒数，使 Toast 在特定时间后自动关闭。如果添加了角色为 `"cancel"` 的按钮，那么该按钮将关闭 Toast。要在创建后关闭 Toast，请在实例上调用 `dismiss()` 方法。

由于 Toast 不应打断用户，因此按下硬件返回按钮不会关闭 Toast。

以下示例演示了如何使用 `buttons` 属性添加一个点击后自动关闭 Toast 的按钮，以及如何收集关闭事件的 `role`。

import ButtonsPlayground from '@site/static/usage/v7/toast/buttons/index.md';

<ButtonsPlayground />

## 定位

Toast 可以定位在视口的顶部、底部或中间。创建时可以传递位置。可能的值为 `top`、`bottom` 和 `middle`。如果未指定位置，Toast 将显示在视口底部。

### 相对定位

如果 Toast 与导航元素（如页眉、页脚或[浮动操作按钮（FAB）](./fab.md)）一起显示，默认情况下 Toast 可能会与这些元素重叠。这可以通过使用 `positionAnchor` 属性来修复，该属性接受元素引用或 ID。Toast 将相对于所选元素定位，当使用 `position="top"` 时出现在其下方，使用 `position="bottom"` 时出现在其上方。使用 `position="middle"` 时，`positionAnchor` 属性将被忽略。

import PositionAnchor from '@site/static/usage/v7/toast/position-anchor/index.md';

<PositionAnchor />

## 布局

Toast 内的按钮容器可以使用 `layout` 属性显示在与消息同一行或堆叠在单独行上。堆叠布局应用于具有长文本值的按钮。此外，堆叠 Toast 布局中的按钮可以使用 `side` 值为 `start` 或 `end`，但不能同时使用两者。

import StackedPlayground from '@site/static/usage/v7/toast/layout/index.md';

<StackedPlayground />

## 图标

可以在 Toast 内容旁边添加图标。通常，Toast 中的图标应用于添加额外的样式或上下文，而不是吸引用户注意力或提升 Toast 的优先级。如果您希望向用户传达更高优先级的消息或确保响应，我们建议使用[警告框（Alert）](alert.md)。

import IconPlayground from '@site/static/usage/v7/toast/icon/index.md';

<IconPlayground />

## 主题

import ThemingPlayground from '@site/static/usage/v7/toast/theming/index.md';

<ThemingPlayground />

## 无障碍访问

### 焦点管理

Toast 旨在提供轻量通知，不应打断用户。关闭 Toast 不应要求用户交互。因此，显示 Toast 时焦点不会自动移动到 Toast 上。

### 屏幕阅读器

Toast 设置了 aria 属性以便屏幕阅读器能够[无障碍访问](../reference/glossary#a11y)，但如果这些属性描述不够充分或与 Toast 在应用中的使用方式不一致，可以覆盖这些属性。

#### 角色

`ion-toast` 在内部的 `.toast-content` 元素上设置了 `role="status"` 和 `aria-live="polite"`。这会导致屏幕阅读器仅播报 Toast 消息和标题。显示 Toast 时，按钮和图标不会被播报。

`aria-live` 使屏幕阅读器在 Toast 内容更新时播报其内容。但由于该属性设置为 `'polite'`，屏幕阅读器不应中断当前任务。

由于 Toast 旨在提供轻量通知，`aria-live` 永远不应设置为 `"assertive"`。如果开发者需要用重要消息打断用户，我们建议使用[警告框（alert）](./alert)。

#### Toast 按钮描述

包含文本的按钮在被交互时会被屏幕阅读器读取。如果按钮仅包含图标，或者需要现有文本之外的描述，应通过将 `aria-label` 传递给按钮上的 `htmlAttributes` 属性来为按钮分配标签。

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

### 使用建议

虽然这不是一个完整的列表，但以下是使用 Toast 时应遵循的一些准则：

- 不要要求用户交互来关闭 Toast。例如，Toast 中有“关闭”按钮是可以的，但 Toast 也应该在超时后自动关闭。如果通知需要用户交互，请考虑使用[警告框（alert）](./alert)。

- 对于包含长消息的 Toast，考虑调整 `duration` 属性，为用户提供足够的时间阅读 Toast 内容。

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

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />