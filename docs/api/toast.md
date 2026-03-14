---
title: 可关闭的应用通知提示组件
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
  <title>ion-toast：可关闭的应用通知提示组件</title>
  <meta name="description" content="ion-toast 组件是一种显示系统消息或反馈的应用通知。Toast 提示会出现在内容上方，关闭后可恢复用户交互。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Toast 是现代应用中常见的轻量级通知。它可用于提供操作反馈或显示系统消息。Toast 会显示在应用内容的上方，并且可以由应用关闭以恢复用户与应用之间的交互。

## 内联 Toast（推荐）

通过在模板中直接编写 `ion-toast` 组件，即可使用它。这减少了为呈现 Toast 而需要连接的处理程序数量。

import InlineToastTriggerExample from '@site/static/usage/v8/toast/inline/basic/index.md';

<InlineToastTriggerExample />

### 使用 `isOpen`

`ion-toast` 上的 `isOpen` 属性允许开发者通过其应用状态来控制 Toast 的呈现状态。这意味着当 `isOpen` 设置为 `true` 时，Toast 将被呈现；当 `isOpen` 设置为 `false` 时，Toast 将被关闭。

`isOpen` 使用单向数据绑定，这意味着当 Toast 被关闭时，它不会自动设置为 `false`。开发者应监听 `ionToastDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做是为了防止 `ion-toast` 的内部实现与应用状态紧密耦合。使用单向数据绑定时，Toast 只需要关注响应式变量提供的布尔值。而使用双向数据绑定时，Toast 需要同时关注布尔值和响应式变量本身的存在。这可能导致非确定性行为，并使应用更难调试。

import InlineToastIsOpenExample from '@site/static/usage/v8/toast/inline/is-open/index.md';

<InlineToastIsOpenExample />

## 控制器 Toast

import ControllerExample from '@site/static/usage/v8/toast/presenting/controller/index.md';

<ControllerExample />

## 关闭

Toast 旨在作为轻量级通知，不应打断用户。因此，不应要求用户交互来关闭 Toast。

可以通过在 Toast 选项的 `duration` 中传递显示毫秒数，使 Toast 在特定时间后自动关闭。如果添加了角色为 `"cancel"` 的按钮，则该按钮将关闭 Toast。要在创建后关闭 Toast，请调用实例上的 `dismiss()` 方法。

由于 Toast 不应打断用户，因此按下硬件返回键不会关闭 Toast。

以下示例演示了如何使用 `buttons` 属性添加一个在点击时自动关闭 Toast 的按钮，以及如何获取关闭事件的 `role`。

import ButtonsPlayground from '@site/static/usage/v8/toast/buttons/index.md';

<ButtonsPlayground />

## 定位

Toast 可以定位在视口的顶部、底部或中间。可以在创建时传入位置。可能的值为 `top`、`bottom` 和 `middle`。如果未指定位置，Toast 将显示在视口的底部。

### 相对定位

如果 Toast 与导航元素（如标题、页脚或 [FAB](./fab.md)）一同呈现，默认情况下 Toast 可能会覆盖这些元素。可以使用 `positionAnchor` 属性来解决此问题，该属性接受元素引用或 ID。Toast 将相对于所选元素进行定位：当使用 `position="top"` 时，Toast 会出现在该元素下方；当使用 `position="bottom"` 时，Toast 会出现在该元素上方。使用 `position="middle"` 时，`positionAnchor` 属性将被忽略。

import PositionAnchor from '@site/static/usage/v8/toast/position-anchor/index.md';

<PositionAnchor />

## 滑动关闭

通过使用 `swipeGesture` 属性，可以滑动关闭 Toast。此功能具有位置感知能力，意味着用户需要滑动的方向会根据 `position` 属性的值而变化。此外，用户需要滑动的距离可能会受到 `positionAnchor` 属性的影响。

import SwipeGesture from '@site/static/usage/v8/toast/swipe-gesture/index.md';

<SwipeGesture />

## 布局

Toast 内的按钮容器可以使用 `layout` 属性显示在与消息同一行，或堆叠在不同行上。堆叠布局应用于具有长文本值的按钮。此外，堆叠 Toast 布局中的按钮可以使用 `side` 值为 `start` 或 `end`，但不能同时使用两者。

import StackedPlayground from '@site/static/usage/v8/toast/layout/index.md';

<StackedPlayground />

## 图标

可以在 Toast 内容旁添加图标。一般来说，Toast 中的图标应用于增加额外的样式或上下文，而不是吸引用户注意力或提升 Toast 的优先级。如果您希望向用户传达更高优先级的消息或确保得到响应，建议改用 [Alert](alert.md)。

import IconPlayground from '@site/static/usage/v8/toast/icon/index.md';

<IconPlayground />

## 主题

import ThemingPlayground from '@site/static/usage/v8/toast/theming/index.md';

<ThemingPlayground />

## 无障碍访问

### 焦点管理

Toast 旨在作为轻量级通知，不应打断用户。因此，不应要求用户交互来关闭 Toast。因此，当呈现 Toast 时，焦点不会自动移动到 Toast。

### 屏幕阅读器

Toast 设置了 aria 属性，以便屏幕阅读器可以 [无障碍访问](../reference/glossary#a11y)，但如果这些属性描述不够充分或与 Toast 在应用中的使用方式不符，可以覆盖这些属性。

#### 角色

`ion-toast` 在内层的 `.toast-content` 元素上设置了 `role="status"` 和 `aria-live="polite"`。这导致屏幕阅读器仅会播报 Toast 消息和标题。当 Toast 呈现时，按钮和图标不会被播报。

`aria-live` 会导致屏幕阅读器在 Toast 内容更新时播报内容。但是，由于该属性设置为 `'polite'`，屏幕阅读器不应打断当前任务。

由于 Toast 旨在作为轻量级通知，`aria-live` 绝不应设置为 `"assertive"`。如果开发者需要用重要消息打断用户，建议使用 [alert](./alert)。

#### Toast 按钮描述

包含文本的按钮在用户与之交互时会被屏幕阅读器播报。如果按钮仅包含图标，或者需要除现有文本以外的描述，可以通过将 `aria-label` 传递给按钮上的 `htmlAttributes` 属性来为按钮分配标签。

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

虽然这不是一个完整的列表，但以下是在使用 Toast 时应遵循的一些准则。

* 不要要求用户交互来关闭 Toast。例如，Toast 中有“关闭”按钮是可以的，但 Toast 也应该在超时后自动关闭。如果通知需要用户交互，请考虑改用 [alert](./alert)。

* 对于包含长消息的 Toast，请考虑调整 `duration` 属性，以便为用户提供足够的时间来阅读 Toast 内容。

* 如果向 Toast 添加按钮，请始终为每个按钮关联的操作提供替代完成方式。这确保了即使用户在阅读之前 Toast 就关闭了，他们仍然可以完成 Toast 中显示的操作。

* 避免在另一个覆盖层（如 [modal](./modal)）内显示带有按钮的 Toast。Modal 和其他覆盖层实现了 [焦点陷阱](./modal#focus-trapping)，会阻止屏幕阅读器将焦点移动到 Toast 以完成操作。这可能会让用户感到困惑，因为屏幕阅读器仍然会播报 Toast。即使为每个按钮关联的操作实现了替代完成方式，也是如此。请考虑在焦点陷阱的 Modal 内创建一个 [实时区域](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)，而不是使用 Toast。

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

## CSS 影子部件
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />