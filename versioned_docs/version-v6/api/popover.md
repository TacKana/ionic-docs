---
title: 'ion-popover'
---

import Props from '@ionic-internal/component-api/v6/popover/props.md';
import Events from '@ionic-internal/component-api/v6/popover/events.md';
import Methods from '@ionic-internal/component-api/v6/popover/methods.md';
import Parts from '@ionic-internal/component-api/v6/popover/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/popover/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/popover/slots.md';

<head>
  <title>ion-popover: iOS / Android 弹出层 UI 组件与 CSS 属性</title>
  <meta
    name="description"
    content="ion-popover 是出现在当前页面顶部的对话框。了解适用于 iOS 和 Android 设备的弹出层 UI 组件和 CSS 自定义属性。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Popover（弹出层）是一个显示在当前页面顶部的对话框。它可以用于任何场景，但通常用于容纳导航栏中放不下的溢出操作。

使用 `ion-popover` 有两种方式：内联方式或通过 `popoverController`。每种方法都有不同的注意事项，因此请确保选择最适合你使用场景的方式。

## 内联弹出层

`ion-popover` 可以直接在模板中编写组件来使用。这减少了为显示弹出层而需要连接的处理程序数量。

当在 Angular、React 或 Vue 中使用 `ion-popover` 时，传入的组件会在弹出层关闭时被销毁。由于此功能由 JavaScript 框架提供，在没有 JavaScript 框架的情况下使用 `ion-popover` 将不会销毁你传入的组件。如果需要此功能，我们建议改用 `popoverController`。

### 何时使用

当你不想显式连接点击事件来打开弹出层时，使用内联弹出层很有用。例如，你可以使用 `trigger` 属性指定一个按钮，当点击该按钮时应显示弹出层。你还可以使用 `trigger-action` 属性自定义弹出层是应在触发器被左键点击、右键点击还是悬停时显示。

如果你需要对弹出层的显示和关闭进行精细控制，我们建议使用 `popoverController`。

### Angular

由于传入的组件需要在弹出层显示时创建，并在弹出层关闭时销毁，我们无法在内部使用 `<ng-content>` 来投影内容。相反，我们使用 `<ng-container>`，它期望传入一个 `<ng-template>`。因此，当传入你的组件时，你需要将其包装在 `<ng-template>` 中：

```html
<ion-popover [isOpen]="isPopoverOpen">
  <ng-template>
    <app-popover-content></app-popover-content>
  </ng-template>
</ion-popover>
```

### 触发器

内联 `ion-popover` 的触发器是当与之交互时会打开弹出层的元素。可以通过设置 `trigger-action` 属性来自定义交互行为。请注意，`trigger-action="context-menu"` 将阻止系统默认的上下文菜单打开。

:::note
当使用 `popoverController` 时，触发器不适用，因为 `ion-popover` 不是提前创建的。
:::

import InlineTrigger from '@site/static/usage/v6/popover/presenting/inline-trigger/index.md';

<InlineTrigger />

### isOpen 属性

内联弹出层也可以通过将 `isOpen` 属性设置为 `true` 来打开。如果你需要比触发器更精细地控制弹出层，可以使用此方法。

`isOpen` 使用单向数据绑定，这意味着当弹出层关闭时，它不会自动设置为 `false`。开发者应监听 `ionPopoverDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-popover` 的内部实现与应用程序状态紧密耦合。使用单向数据绑定，弹出层只需要关心响应式变量提供的布尔值。而使用双向数据绑定，弹出层需要同时关心布尔值以及响应式变量本身的存在。这可能导致不确定的行为，并使应用程序更难调试。

import IsOpenTrigger from '@site/static/usage/v6/popover/presenting/inline-isopen/index.md';

<IsOpenTrigger />

## 控制器弹出层

`ion-popover` 也可以通过使用从 Ionic Framework 导入的 `popoverController` 以编程方式显示。这使你可以完全控制弹出层的显示时机，其定制程度超出了内联弹出层所提供的功能。

### 何时使用

我们通常建议你以内联方式编写弹出层，因为这可以简化应用程序中的代码量。只有当内联编写弹出层不切实际的复杂使用场景时，才应使用 `popoverController`。使用控制器时，你的弹出层不会提前创建，因此 `trigger` 和 `trigger-action` 等属性在此不适用。此外，嵌套弹出层与控制器方法不兼容，因为当调用 `create` 方法时，弹出层会自动添加到应用程序的根目录。

### React

与控制器不同，React 有一个名为 `useIonPopover` 的钩子，其行为方式类似。请注意，`useIonPopover` 要求必须是 `<IonApp>` 的后代。如果你需要在 `<IonApp>` 之外使用弹出层，请考虑改用内联弹出层。

### 使用方式

import ControllerExample from '@site/static/usage/v6/popover/presenting/controller/index.md';

<ControllerExample />

## 样式设置

弹出层显示在应用程序的根目录，因此它们会覆盖整个应用程序。此行为适用于内联弹出层和通过控制器显示的弹出层。因此，自定义弹出层样式不能限定在特定组件的作用域内，因为它们不会应用于弹出层。相反，样式必须全局应用。对于大多数开发者来说，将自定义样式放在 `global.css` 中就足够了。

:::note
如果你正在构建 Ionic Angular 应用程序，样式需要添加到全局样式表文件中。
:::

import Styling from '@site/static/usage/v6/popover/customization/styling/index.md';

<Styling />

## 定位

### 参考点

显示弹出层时，Ionic Framework 需要一个参考点来相对于它显示弹出层。使用 `reference="event"` 时，弹出层将相对于触发器元素上分发的指针事件的 x-y 坐标显示。使用 `reference="trigger"` 时，弹出层将相对于触发器元素的边界框显示。

### 边

无论你为参考点选择什么，都可以使用 `side` 属性将弹出层定位在参考点的 `top`（顶部）、`right`（右侧）、`left`（左侧）或 `bottom`（底部）。如果你希望边根据 LTR 或 RTL 模式切换，也可以使用 `start` 或 `end` 值。

### 对齐

`alignment` 属性允许你将弹出层的一条边与触发器元素上的对应边对齐。使用的确切边取决于 `side` 属性的值。

### 边和对齐演示

import Positioning from '@site/static/usage/v6/popover/customization/positioning/index.md';

<Positioning />

### 偏移量

如果你需要对弹出层的位置进行更精细的控制，可以使用 `--offset-x` 和 `--offset-y` CSS 变量。例如，`--offset-x: 10px` 会将你的弹出层内容向右移动 `10px`。

## 尺寸调整

在制作下拉菜单时，你可能希望弹出层的宽度与触发器元素的宽度匹配。在不提前知道触发器宽度的情况下做到这一点很棘手。你可以将 `size` 属性设置为 `'cover'`，Ionic Framework 将确保弹出层的宽度与触发器元素的宽度匹配。

如果你使用 `popoverController`，则必须通过 `event` 选项提供一个事件，Ionic Framework 将使用 `event.target` 作为参考元素。有关此模式的示例，请参见 [控制器演示](#controller-popovers)。

import Sizing from '@site/static/usage/v6/popover/customization/sizing/index.md';

<Sizing />

## 嵌套弹出层

当内联使用 `ion-popover` 时，你可以嵌套弹出层以创建嵌套的下拉菜单。这样做时，只有第一个弹出层上的背景会出现，这样当你打开更多弹出层时，屏幕不会逐渐变暗。

你可以使用 `dismissOnSelect` 属性在点击弹出层内容时自动关闭弹出层。此行为不适用于点击另一个弹出层的触发器元素。

:::note
当使用 `popoverController` 时，无法创建嵌套弹出层，因为调用 `create` 方法时，弹出层会自动添加到应用程序的根目录。
:::

import NestedPopover from '@site/static/usage/v6/popover/nested/index.md';

<NestedPopover />

## 接口

下面你将找到使用 `popoverController` 时可用的所有选项。这些选项应在调用 `popoverController.create()` 时提供。

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

下面你将找到 `ion-popover` 的所有自定义类型：

```typescript
type PopoverSize = 'cover' | 'auto';
type TriggerAction = 'click' | 'hover' | 'context-menu';
type PositionReference = 'trigger' | 'event';
type PositionSide = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
type PositionAlign = 'start' | 'center' | 'end';
```

## 无障碍访问

### 键盘导航

`ion-popover` 具有基本的键盘支持，用于在弹出层内的可聚焦元素之间导航。下表详细说明了每个键的功能：

| 键                   | 功能                                         |
| -------------------- | -------------------------------------------- |
| `Tab`                | 将焦点移动到下一个可聚焦元素。               |
| `Shift` + `Tab`      | 将焦点移动到上一个可聚焦元素。               |
| `Esc`                | 关闭弹出层。                                 |
| `Space` 或 `Enter`   | 点击可聚焦元素。                             |

`ion-popover` 具有完整的箭头键支持，用于在具有 `button` 属性的 `ion-item` 元素之间导航。这最常见的用例是面向桌面应用程序中的下拉菜单。除了基本的键盘支持外，下表详细说明了用于下拉菜单的箭头键支持：

| 键                                 | 功能                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------- |
| `ArrowUp`                          | 将焦点移动到上一个可聚焦元素。                                            |
| `ArrowDown`                        | 将焦点移动到下一个可聚焦元素。                                            |
| `Home`                             | 将焦点移动到第一个可聚焦元素。                                            |
| `End`                              | 将焦点移动到最后一个可聚焦元素。                                          |
| `ArrowLeft`                        | 在子弹出层中使用时，关闭弹出层并将焦点返回到父弹出层。                    |
| `Space`、`Enter` 和 `ArrowRight`   | 当聚焦在触发器元素上时，打开关联的弹出层。                                |

## 性能

### 挂载内部内容

内联 `ion-popover` 的内容在关闭时会被卸载。如果此内容渲染成本很高，开发者可以使用 `keepContentsMounted` 属性在弹出层挂载时立即挂载内容。这有助于优化应用程序的响应性，因为内部内容在弹出层打开时已经挂载完毕。

import Mount from '@site/static/usage/v6/popover/performance/mount/index.md';

<Mount />

开发人员在使用 `keepContentsMounted` 时应牢记以下几点：

- 此功能应作为处理现有性能问题的最后手段。在使用此功能之前，请尝试识别并解决性能瓶颈。此外，不要使用它来预测性能问题。

- 此功能仅在需要使用 JavaScript 框架时才需要。不使用框架的开发者可以将要渲染的内容传递给弹出层，内容将自动渲染。

- 此功能仅适用于内联弹出层。使用 `popoverController` 创建的弹出层不会提前创建，因此内部内容也不会创建。

- 内部组件上的任何 JavaScript 框架生命周期钩子都将在弹出层挂载时立即运行，而不是在弹出层显示时运行。

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