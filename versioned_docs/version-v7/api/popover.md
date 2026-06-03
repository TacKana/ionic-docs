---
title: 'ion-popover'
---

import Props from '@ionic-internal/component-api/v7/popover/props.md';
import Events from '@ionic-internal/component-api/v7/popover/events.md';
import Methods from '@ionic-internal/component-api/v7/popover/methods.md';
import Parts from '@ionic-internal/component-api/v7/popover/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/popover/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/popover/slots.md';

<head>
  <title>ion-popover：iOS / Android 弹出框 UI 对话框组件</title>
  <meta
    name="description"
    content="ion-popover 是出现在当前页面上方的对话框。了解适用于 iOS 和 Android 设备的弹出框 UI 组件和 CSS 自定义属性。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

弹出框（Popover）是出现在当前页面上方的对话框。它可以用于任何事情，但通常用于导航栏中放不下的溢出操作。

有两种使用 `ion-popover` 的方式：内联或通过 `popoverController`。每种方法都有不同的考虑因素，因此请确保使用最适合你用例的方法。

## 内联弹出框

`ion-popover` 可以直接在模板中编写组件来使用。这减少了你需要连接以呈现弹出框的处理程序数量。

在 Angular、React 或 Vue 中使用 `ion-popover` 时，你传入的组件将在弹出框关闭时被销毁。由于此功能由 JavaScript 框架提供，在没有 JavaScript 框架的情况下使用 `ion-popover` 不会销毁你传入的组件。如果需要此功能，我们建议使用 `popoverController`。

### 何时使用

当你不想显式连接点击事件来打开弹出框时，内联使用弹出框非常有用。例如，你可以使用 `trigger` 属性指定一个在点击时应呈现弹出框的按钮。你还可以使用 `trigger-action` 属性来自定义弹出框是在左键单击、右键单击还是悬停时呈现。

如果你需要对弹出框的呈现和关闭进行精细控制，我们建议使用 `popoverController`。

### Angular

由于你传入的组件需要在呈现弹出框时创建，在关闭时销毁，我们无法在内部使用 `<ng-content>` 来投影内容。相反，我们使用期望传入 `<ng-template>` 的 `<ng-container>`。因此，在传入组件时，你需要将其包裹在 `<ng-template>` 中：

```html
<ion-popover [isOpen]="isPopoverOpen">
  <ng-template>
    <app-popover-content></app-popover-content>
  </ng-template>
</ion-popover>
```

### 触发器

内联 `ion-popover` 的触发器是在交互时会打开弹出框的元素。交互行为可以通过设置 `trigger-action` 属性来自定义。请注意，`trigger-action="context-menu"` 将阻止系统的默认上下文菜单打开。

:::note
触发器不适用于使用 `popoverController` 的情况，因为 `ion-popover` 不是提前创建的。
:::

import InlineTrigger from '@site/static/usage/v7/popover/presenting/inline-trigger/index.md';

<InlineTrigger />

### isOpen 属性

内联弹出框也可以通过将 `isOpen` 属性设置为 `true` 来打开。如果你需要比使用触发器更精细地控制弹出框，可以使用此方法。

`isOpen` 使用单向数据绑定，这意味着当弹出框关闭时，它不会自动设置为 `false`。开发者应监听 `ionPopoverDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-popover` 的内部实现与应用状态紧密耦合。使用单向数据绑定时，弹出框只需要关心响应式变量提供的布尔值。而使用双向数据绑定时，弹出框需要同时关心布尔值和响应式变量本身的存在性，这可能导致不确定的行为并使应用更难调试。

import IsOpenTrigger from '@site/static/usage/v7/popover/presenting/inline-isopen/index.md';

<IsOpenTrigger />

## 控制器弹出框

通过使用从 Ionic 框架导入的 `popoverController`，也可以以编程方式呈现 `ion-popover`。这让你可以完全控制弹出框何时呈现，超越了内联弹出框给你的自定义程度。

### 何时使用

我们通常建议你内联编写弹出框，因为它简化了应用中的代码量。只有在编写内联弹出框不切实际的复杂用例中，才应使用 `popoverController`。使用控制器时，你的弹出框不是提前创建的，因此 `trigger` 和 `trigger-action` 等属性在此不适用。此外，嵌套弹出框与控制器的方案不兼容，因为调用 `create` 方法时弹出框会自动添加到应用的根部。

### React

React 没有一个控制器，而是有一个名为 `useIonPopover` 的钩子，其行为类似。请注意，`useIonPopover` 需要是 `<IonApp>` 的后代。如果你需要在 `<IonApp>` 外部使用弹出框，请考虑使用内联弹出框。

### 用法

import ControllerExample from '@site/static/usage/v7/popover/presenting/controller/index.md';

<ControllerExample />

## 样式

弹出框在应用的根部呈现，因此它们覆盖整个应用。此行为适用于内联弹出框和从控制器呈现的弹出框。因此，自定义弹出框样式不能限定到特定组件，因为它们不会应用于弹出框。相反，样式必须全局应用。对于大多数开发者来说，将自定义样式放在 `global.css` 中就足够了。

:::note
如果你正在构建 Ionic Angular 应用，样式需要添加到全局样式表文件中。
:::

import Styling from '@site/static/usage/v7/popover/customization/styling/index.md';

<Styling />

## 定位

### 参考点

呈现弹出框时，Ionic 框架需要一个参考点来相对于其呈现弹出框。使用 `reference="event"` 时，弹出框将相对于在触发器元素上分派的指针事件的 x-y 坐标呈现。使用 `reference="trigger"` 时，弹出框将相对于触发器元素的边界框呈现。

### 方向

无论你选择何种参考点，都可以使用 `side` 属性将弹出框定位到参考点的 `top`、`right`、`left` 或 `bottom`。如果希望方向根据 LTR 或 RTL 模式切换，也可以使用 `start` 或 `end` 值。

### 对齐

`alignment` 属性允许你将弹出框的一个边缘与触发器元素上的相应边缘对齐。使用的确切边缘取决于 `side` 属性的值。

### 方向和对齐演示

import Positioning from '@site/static/usage/v7/popover/customization/positioning/index.md';

<Positioning />

### 偏移

如果你需要对弹出框的定位进行更精细的控制，可以使用 `--offset-x` 和 `--offset-y` CSS 变量。例如，`--offset-x: 10px` 将弹出框内容向右移动 `10px`。

## 尺寸

制作下拉菜单时，你可能希望弹出框的宽度与触发器元素的宽度匹配。在不提前知道触发器宽度的情况下做到这一点很棘手。你可以将 `size` 属性设置为 `'cover'`，Ionic 框架将确保弹出框的宽度与触发器元素的宽度匹配。

如果你使用 `popoverController`，必须通过 `event` 选项提供事件，Ionic 框架将使用 `event.target` 作为参考元素。请参阅[控制器演示](#控制器弹出框)了解此模式的示例。

import Sizing from '@site/static/usage/v7/popover/customization/sizing/index.md';

<Sizing />

## 嵌套弹出框

内联使用 `ion-popover` 时，可以嵌套弹出框以创建嵌套下拉菜单。这样做时，只有第一个弹出框的背景遮罩会显示，这样屏幕不会随着打开更多弹出框而逐渐变暗。

你可以使用 `dismissOnSelect` 属性在点击弹出框内容时自动关闭弹出框。此行为不适用于点击另一个弹出框的触发器元素。

:::note
使用 `popoverController` 时无法创建嵌套弹出框，因为调用 `create` 方法时弹出框会自动添加到应用的根部。
:::

import NestedPopover from '@site/static/usage/v7/popover/nested/index.md';

<NestedPopover />

## 接口

以下是在使用 `popoverController` 时可用的所有选项。这些选项应在调用 `popoverController.create()` 时提供。

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

## 无障碍访问

### 键盘交互

`ion-popover` 具有基本的键盘支持，用于在弹出框内的可聚焦元素之间导航。下表详细说明了每个键的作用：

| 键                                  | 描述                                     |
| ----------------------------------- | ---------------------------------------- |
| <kbd>Tab</kbd>                      | 将焦点移动到下一个可聚焦元素。           |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>   | 将焦点移动到上一个可聚焦元素。           |
| <kbd>Esc</kbd>                      | 关闭弹出框。                             |
| <kbd>Space</kbd> 或 <kbd>Enter</kbd>| 点击可聚焦元素。                         |

`ion-popover` 具有完整的方向键支持，用于在具有 `button` 属性的 `ion-item` 元素之间导航。最常见的用例是作为桌面应用中的下拉菜单。除了基本的键盘支持外，下表详细说明了下拉菜单的方向键支持：

| 键                                                              | 描述                                                   |
| --------------------------------------------------------------- | ------------------------------------------------------ |
| <kbd>上箭头</kbd>                                               | 将焦点移动到上一个可聚焦元素。                         |
| <kbd>下箭头</kbd>                                               | 将焦点移动到下一个可聚焦元素。                         |
| <kbd>Home</kbd>                                                 | 将焦点移动到第一个可聚焦元素。                         |
| <kbd>End</kbd>                                                  | 将焦点移动到最后一个可聚焦元素。                       |
| <kbd>左箭头</kbd>                                               | 在子弹出框中使用时，关闭弹出框并将焦点返回到父弹出框。|
| <kbd>Space</kbd>、<kbd>Enter</kbd> 和 <kbd>右箭头</kbd>         | 当聚焦触发器元素时，打开关联的弹出框。                 |

## 性能

### 挂载内部内容

内联 `ion-popover` 的内容在关闭时会被卸载。如果此内容渲染成本高，开发者可以使用 `keepContentsMounted` 属性，在弹出框挂载时立即挂载内容。这有助于优化应用的响应速度，因为在弹出框打开时内部内容已经挂载。

import Mount from '@site/static/usage/v7/popover/performance/mount/index.md';

<Mount />

开发者在使用 `keepContentsMounted` 时应记住以下几点：

- 此功能应作为处理现有性能问题的最后手段。在使用此功能之前，请尝试识别并解决性能瓶颈。此外，不要使用此功能来预判性能问题。

- 此功能仅在使用 JavaScript 框架时需要。未使用框架的开发者可以将要渲染的内容传递给弹出框，内容将自动渲染。

- 此功能仅适用于内联弹出框。使用 `popoverController` 创建的弹出框不是提前创建的，因此内部内容也不会创建。

- 内部组件上的任何 JavaScript 框架生命周期钩子将在弹出框挂载时立即运行，而不是在弹出框呈现时。

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
