---
title: "ion-popover"
---
import Props from '@ionic-internal/component-api/v8/popover/props.md';
import Events from '@ionic-internal/component-api/v8/popover/events.md';
import Methods from '@ionic-internal/component-api/v8/popover/methods.md';
import Parts from '@ionic-internal/component-api/v8/popover/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/popover/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/popover/slots.md';

<head>
  <title>ion-popover：iOS/Android 弹出式 UI 对话框组件</title>
  <meta name="description" content="ion-popover 是一个显示在当前页面上的对话框。了解适用于 iOS 和 Android 设备的弹出式 UI 组件及 CSS 自定义属性。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Popover 是一个显示在当前页面上的对话框。它可以用于任何用途，但通常用于处理导航栏中放不下的溢出操作。

有两种使用 `ion-popover` 的方式：内联方式或通过 `popoverController`。每种方法都有不同的考量，请务必选择最适合您用例的方法。

## 内联 Popover

`ion-popover` 可以通过直接在模板中编写组件来使用。这减少了呈现弹出框时需要连接的处理程序数量。

在使用 Angular、React 或 Vue 的 `ion-popover` 时，传入的组件将在弹出框关闭时被销毁。由于此功能由 JavaScript 框架提供，未使用 JavaScript 框架时使用 `ion-popover` 不会销毁传入的组件。如果需要此功能，我们建议使用 `popoverController`。

### 何时使用

在您不希望显式连接点击事件来打开弹出框时，使用内联弹出框非常有用。例如，您可以使用 `trigger` 属性来指定一个应在点击时呈现弹出框的按钮。您还可以使用 `trigger-action` 属性来自定义弹出框应在左键点击、右键点击或悬停时呈现。

如果您需要精细控制弹出框的呈现和关闭时机，我们建议使用 `popoverController`。

### Angular

由于传入的组件需要在弹出框呈现时创建、在弹出框关闭时销毁，我们无法在内部使用 `<ng-content>` 来投影内容。因此，我们使用 `<ng-container>`，它需要传入一个 `<ng-template>`。因此，传入组件时，您需要将其包裹在 `<ng-template>` 中：

```html
<ion-popover [isOpen]="isPopoverOpen">
  <ng-template>
    <app-popover-content></app-popover-content>
  </ng-template>
</ion-popover>
```

### 触发器

内联 `ion-popover` 的触发器是指与用户交互后会打开弹出框的元素。交互行为可以通过设置 `trigger-action` 属性来定制。注意，`trigger-action="context-menu"` 将阻止系统默认上下文菜单的打开。

:::note
 使用 `popoverController` 时，触发器不适用，因为 `ion-popover` 不是预先创建的。
:::

import InlineTrigger from '@site/static/usage/v8/popover/presenting/inline-trigger/index.md';

<InlineTrigger />

### isOpen 属性

内联弹出框也可以通过将 `isOpen` 属性设置为 `true` 来打开。如果您需要对弹出框进行比触发器更精细的控制，可以使用此方法。

`isOpen` 使用单向数据绑定，这意味着弹出框关闭时它不会自动设置为 `false`。开发者应监听 `ionPopoverDidDismiss` 或 `didDismiss` 事件并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-popover` 的内部逻辑与应用状态紧密耦合。使用单向数据绑定时，弹出框只需关注响应式变量提供的布尔值。而使用双向数据绑定时，弹出框需要同时关注布尔值和响应式变量本身的存在性。这可能导致不确定的行为，并使应用更难调试。


import IsOpenTrigger from '@site/static/usage/v8/popover/presenting/inline-isopen/index.md';

<IsOpenTrigger />

## 控制器 Popover

`ion-popover` 也可以通过从 Ionic Framework 导入的 `popoverController` 以编程方式呈现。这使您能够完全控制弹出框的呈现时机，超越内联弹出框提供的自定义能力。

### 何时使用

我们通常建议使用内联方式编写弹出框，因为这样可以简化应用中的代码量。仅应在编写内联弹出框不切实际的复杂用例中使用 `popoverController`。使用控制器时，弹出框不是预先创建的，因此 `trigger` 和 `trigger-action` 等属性在此不适用。此外，嵌套弹出框与控制器方法不兼容，因为调用 `create` 方法时弹出框会自动添加到应用的根目录。

### React

与控制器不同，React 有一个名为 `useIonPopover` 的 hook，其行为方式类似。注意，`useIonPopover` 需要是 `<IonApp>` 的后代。如果您需要在 `<IonApp>` 之外使用弹出框，请考虑使用内联弹出框。

### 用法

import ControllerExample from '@site/static/usage/v8/popover/presenting/controller/index.md';

<ControllerExample />


## 样式设计

弹出框在应用的根层级呈现，因此它们覆盖在整个应用之上。此行为适用于内联弹出框和通过控制器呈现的弹出框。因此，自定义弹出框样式不能限定在特定组件内，因为它们不会应用于弹出框。相反，样式必须在全局范围内应用。对于大多数开发者来说，将自定义样式放在 `global.css` 中就足够了。

:::note
 如果您正在构建 Ionic Angular 应用，需要将样式添加到全局样式表文件中。
:::

import Styling from '@site/static/usage/v8/popover/customization/styling/index.md';

<Styling />


## 定位

### 参考点

呈现弹出框时，Ionic Framework 需要一个参考点来相对于该点呈现弹出框。使用 `reference="event"` 时，弹出框将相对于触发元素上分发的指针事件的 x-y 坐标呈现。使用 `reference="trigger"` 时，弹出框将相对于触发元素的边界框呈现。

### 侧

无论您选择什么参考点，您都可以使用 `side` 属性将弹出框定位在参考点的 `top`（上方）、`right`（右侧）、`left`（左侧）或 `bottom`（下方）。如果您希望根据 LTR 或 RTL 模式切换侧，也可以使用 `start` 或 `end` 值。

### 对齐

`alignment` 属性允许您将弹出框的一个边缘与触发元素的相应边缘对齐。具体使用的边缘取决于 `side` 属性的值。

### 侧和对齐演示

import Positioning from '@site/static/usage/v8/popover/customization/positioning/index.md';

<Positioning />

### 偏移

如果您需要对弹出框的定位进行更精细的控制，可以使用 `--offset-x` 和 `--offset-y` CSS 变量。例如，`--offset-x: 10px` 将使弹出框内容向右移动 `10px`。

## 大小

制作下拉菜单时，您可能希望弹出框的宽度与触发元素的宽度匹配。在不预先知道触发宽度的情况下做到这一点很棘手。您可以设置 `size` 属性为 `'cover'`，Ionic Framework 将确保弹出框的宽度与触发元素的宽度匹配。

如果您使用 `popoverController`，则必须通过 `event` 选项提供一个事件，Ionic Framework 将使用 `event.target` 作为参考元素。有关此模式的示例，请参阅[控制器演示](#控制器-popover)。

import Sizing from '@site/static/usage/v8/popover/customization/sizing/index.md';

<Sizing />

## 嵌套 Popover

内联使用 `ion-popover` 时，您可以嵌套弹出框来创建嵌套下拉菜单。这样，只有第一个弹出框的背景层会出现，避免随着打开更多弹出框而使屏幕逐渐变暗。

您可以使用 `dismissOnSelect` 属性在点击弹出框内容时自动关闭弹出框。此行为不适用于点击另一个弹出框的触发元素时。

:::note
 使用 `popoverController` 时无法创建嵌套弹出框，因为调用 `create` 方法时弹出框会自动添加到应用的根目录。
:::

import NestedPopover from '@site/static/usage/v8/popover/nested/index.md';

<NestedPopover />


## 接口

以下是使用 `popoverController` 时所有可用的选项。调用 `popoverController.create()` 时应提供这些选项。

```typescript
interface PopoverOptions {
  component: any;
  componentProps?: { [key: string]: any };
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  translucent?: boolean;
  cssClass?: string | string[];
  event?: Event;
  animated?: boolean;

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  size?: PopoverSize;
  dismissOnSelect?: boolean;
  reference?: PositionReference;
  side?: PositionSide;
  alignment?: PositionAlign;
  arrow?: boolean;
}
```


## 类型

以下是 `ion-popover` 的所有自定义类型：

```typescript
type PopoverSize = 'cover' | 'auto';
type TriggerAction = 'click' | 'hover' | 'context-menu';
type PositionReference = 'trigger' | 'event';
type PositionSide = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
type PositionAlign = 'start' | 'center' | 'end';
```

## 无障碍

### 键盘交互

`ion-popover` 具有基本的键盘支持，用于在弹出框内的可聚焦元素之间导航。下表详细说明了每个键的作用：

| 键                                  | 描述                                           |
| ----------------------------------- | ---------------------------------------------- |
| <kbd>Tab</kbd>                      | 将焦点移动到下一个可聚焦元素。                 |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>   | 将焦点移动到上一个可聚焦元素。                 |
| <kbd>Esc</kbd>                      | 关闭弹出框。                                   |
| <kbd>Space</kbd> 或 <kbd>Enter</kbd> | 点击可聚焦元素。                               |

`ion-popover` 具有完整的方向键支持，用于在具有 `button` 属性的 `ion-item` 元素之间导航。最常见的用例是作为桌面应用中的下拉菜单。除了基本的键盘支持外，下表详细说明了下拉菜单的方向键支持：

| 键                                                              | 描述                                                                 |
| --------------------------------------------------------------- | -------------------------------------------------------------------- |
| <kbd>ArrowUp</kbd>                                              | 将焦点移动到上一个可聚焦元素。                                       |
| <kbd>ArrowDown</kbd>                                            | 将焦点移动到下一个可聚焦元素。                                       |
| <kbd>Home</kbd>                                                 | 将焦点移动到第一个可聚焦元素。                                       |
| <kbd>End</kbd>                                                  | 将焦点移动到最后一个可聚焦元素。                                     |
| <kbd>ArrowLeft</kbd>                                            | 在子弹出框中使用时，关闭弹出框并将焦点返回到父弹出框。               |
| <kbd>Space</kbd>、<kbd>Enter</kbd> 和 <kbd>ArrowRight</kbd>   | 在聚焦触发元素时，打开关联的弹出框。                                 |

## 性能

### 挂载内部内容

内联 `ion-popover` 的内容在关闭时会卸载。如果此内容渲染成本较高，开发者可以使用 `keepContentsMounted` 属性在弹出框挂载时立即挂载内容。这有助于优化应用的响应速度，因为内部内容在弹出框打开时已经挂载完成。

import Mount from '@site/static/usage/v8/popover/performance/mount/index.md';

<Mount />

开发者在使用 `keepContentsMounted` 时应记住以下几点：

- 此功能应作为解决现有性能问题的最后手段。在使用此功能前，请尝试识别并解决性能瓶颈。此外，不要使用此功能来预判性能问题。

- 仅当使用 JavaScript 框架时才需要此功能。未使用框架的开发者可以直接将要渲染的内容传入弹出框，内容将自动渲染。

- 此功能仅适用于内联弹出框。使用 `popoverController` 创建的弹出框不会预先创建，因此内部内容也不会被创建。

- 内部组件上的任何 JavaScript 框架生命周期钩子将在弹出框挂载时立即运行，而不是在弹出框呈现时运行。

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
