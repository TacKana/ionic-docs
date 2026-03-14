---
title: 浮动操作面板组件
---
import Props from '@ionic-internal/component-api/v8/popover/props.md';
import Events from '@ionic-internal/component-api/v8/popover/events.md';
import Methods from '@ionic-internal/component-api/v8/popover/methods.md';
import Parts from '@ionic-internal/component-api/v8/popover/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/popover/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/popover/slots.md';

<head>
  <title>ion-popover: iOS / Android 浮动操作面板组件</title>
  <meta name="description" content="ion-popover 是显示在当前页面上方的对话框。了解适用于 iOS 和 Android 设备的浮动操作面板 UI 组件及 CSS 自定义属性。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


浮动操作面板（Popover）是显示在当前页面上方的对话框。它可用于各种场景，但通常用于容纳导航栏中放不下的溢出操作。

使用 `ion-popover` 有两种方式：内联方式或通过 `popoverController`。每种方法都有不同的注意事项，因此请务必选择最适合您用例的方式。

## 内联浮动操作面板

`ion-popover` 可以通过直接在模板中编写组件来使用。这减少了您为了呈现浮动操作面板而需要连接的处理程序数量。

在 Angular、React 或 Vue 中使用 `ion-popover` 时，您传入的组件将在浮动操作面板关闭时被销毁。由于此功能由 JavaScript 框架提供，因此在不使用 JavaScript 框架的情况下使用 `ion-popover` 将不会销毁您传入的组件。如果需要此功能，我们建议改用 `popoverController`。

### 何时使用

当您不希望显式连接点击事件来打开浮动操作面板时，使用内联浮动操作面板非常有用。例如，您可以使用 `trigger` 属性指定一个按钮，当点击该按钮时应呈现浮动操作面板。您还可以使用 `trigger-action` 属性自定义浮动操作面板是在触发器左键点击、右键点击还是悬停时呈现。

如果您需要对浮动操作面板的呈现和关闭进行精细控制，我们建议您使用 `popoverController`。

### Angular

由于您传入的组件需要在浮动操作面板呈现时创建并在关闭时销毁，我们无法在内部使用 `<ng-content>` 来投影内容。相反，我们使用 `<ng-container>`，它期望传入一个 `<ng-template>`。因此，在传入您的组件时，您需要将其包装在 `<ng-template>` 中：

```html
<ion-popover [isOpen]="isPopoverOpen">
  <ng-template>
    <app-popover-content></app-popover-content>
  </ng-template>
</ion-popover>
```

### 触发器

内联 `ion-popover` 的触发器是当与之交互时将打开浮动操作面板的元素。交互行为可以通过设置 `trigger-action` 属性来自定义。请注意，`trigger-action="context-menu"` 将阻止打开系统的默认上下文菜单。

:::note
 触发器在使用 `popoverController` 时不适用，因为 `ion-popover` 不会提前创建。
:::

import InlineTrigger from '@site/static/usage/v8/popover/presenting/inline-trigger/index.md';

<InlineTrigger />

### isOpen 属性

内联浮动操作面板也可以通过将 `isOpen` 属性设置为 `true` 来打开。如果您需要对浮动操作面板进行比触发器更精细的控制，可以使用此方法。

`isOpen` 使用单向数据绑定，这意味着当浮动操作面板关闭时，它不会自动设置为 `false`。开发者应监听 `ionPopoverDidDismiss` 或 `didDismiss` 事件并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-popover` 的内部实现与应用程序状态紧密耦合。通过单向数据绑定，浮动操作面板只需要关注响应式变量提供的布尔值。而通过双向数据绑定，浮动操作面板需要同时关注布尔值以及响应式变量本身的存在。这可能导致非确定性行为，并使应用程序更难调试。

import IsOpenTrigger from '@site/static/usage/v8/popover/presenting/inline-isopen/index.md';

<IsOpenTrigger />

## 控制器浮动操作面板

`ion-popover` 也可以通过使用从 Ionic Framework 导入的 `popoverController` 以编程方式呈现。这使您能够完全控制浮动操作面板的呈现时机，其定制程度超出了内联浮动操作面板所提供的范围。

### 何时使用

我们通常建议您以内联方式编写浮动操作面板，因为这可以简化应用程序中的代码量。您应该仅在复杂用例中使用 `popoverController`，在这些用例中，以内联方式编写浮动操作面板是不切实际的。使用控制器时，您的浮动操作面板不会提前创建，因此诸如 `trigger` 和 `trigger-action` 之类的属性在此不适用。此外，嵌套浮动操作面板与控制方法不兼容，因为在调用 `create` 方法时，浮动操作面板会自动添加到应用程序的根目录。

### React

React 没有控制器，而是有一个名为 `useIonPopover` 的钩子，其行为方式类似。请注意，`useIonPopover` 要求是 `<IonApp>` 的后代。如果您需要在 `<IonApp>` 之外使用浮动操作面板，请考虑改用内联浮动操作面板。

### 用法

import ControllerExample from '@site/static/usage/v8/popover/presenting/controller/index.md';

<ControllerExample />


## 样式设置

浮动操作面板在应用程序的根目录呈现，因此它们会覆盖整个应用程序。此行为适用于内联浮动操作面板和通过控制器呈现的浮动操作面板。因此，自定义浮动操作面板样式不能限定在特定组件的作用域内，因为它们不会应用于浮动操作面板。相反，样式必须全局应用。对于大多数开发者来说，将自定义样式放在 `global.css` 中就足够了。

:::note
 如果您正在构建 Ionic Angular 应用程序，则需要将样式添加到全局样式表文件中。
:::

import Styling from '@site/static/usage/v8/popover/customization/styling/index.md';

<Styling />


## 定位

### 参考点

呈现浮动操作面板时，Ionic Framework 需要一个参考点来相对于该点呈现浮动操作面板。使用 `reference="event"` 时，浮动操作面板将相对于在触发器元素上分发的指针事件的 x-y 坐标呈现。使用 `reference="trigger"` 时，浮动操作面板将相对于触发器元素的边界框呈现。

### 方位

无论您选择什么参考点，都可以使用 `side` 属性将浮动操作面板定位在参考点的 `top`、`right`、`left` 或 `bottom`。如果您希望根据 LTR 或 RTL 模式切换方位，也可以使用 `start` 或 `end` 值。

### 对齐方式

`alignment` 属性允许您将浮动操作面板的一条边与触发器元素上的对应边对齐。使用的确切边取决于 `side` 属性的值。

### 方位和对齐方式演示

import Positioning from '@site/static/usage/v8/popover/customization/positioning/index.md';

<Positioning />

### 偏移量

如果您需要对浮动操作面板的定位进行更精细的控制，可以使用 `--offset-x` 和 `--offset-y` CSS 变量。例如，`--offset-x: 10px` 会将您的浮动操作面板内容向右移动 `10px`。

## 尺寸调整

制作下拉菜单时，您可能希望浮动操作面板的宽度与触发器元素的宽度匹配。在不提前知道触发器宽度的情况下做到这一点很棘手。您可以将 `size` 属性设置为 `'cover'`，Ionic Framework 将确保浮动操作面板的宽度与触发器元素的宽度匹配。

如果您使用 `popoverController`，则必须通过 `event` 选项提供一个事件，Ionic Framework 将使用 `event.target` 作为参考元素。有关此模式的示例，请参阅[控制器演示](#控制器浮动操作面板)。

import Sizing from '@site/static/usage/v8/popover/customization/sizing/index.md';

<Sizing />

## 嵌套浮动操作面板

当内联使用 `ion-popover` 时，您可以嵌套浮动操作面板以创建嵌套下拉菜单。这样做时，只有第一个浮动操作面板上的背景会出现，这样当您打开更多浮动操作面板时，屏幕不会逐渐变暗。

您可以使用 `dismissOnSelect` 属性在点击浮动操作面板内容时自动关闭浮动操作面板。此行为不适用于点击另一个浮动操作面板的触发器元素时。

:::note
 嵌套浮动操作面板在使用 `popoverController` 时无法创建，因为在调用 `create` 方法时，浮动操作面板会自动添加到应用程序的根目录。
:::

import NestedPopover from '@site/static/usage/v8/popover/nested/index.md';

<NestedPopover />


## 接口

下面列出了使用 `popoverController` 时可用的所有选项。这些选项应在调用 `popoverController.create()` 时提供。

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

下面是 `ion-popover` 的所有自定义类型：

```typescript
type PopoverSize = 'cover' | 'auto';
type TriggerAction = 'click' | 'hover' | 'context-menu';
type PositionReference = 'trigger' | 'event';
type PositionSide = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
type PositionAlign = 'start' | 'center' | 'end';
```

## 无障碍访问

### 键盘交互

`ion-popover` 具有基本的键盘支持，用于在浮动操作面板内的可聚焦元素之间导航。下表详细说明了每个按键的作用：

| 按键                                  | 描述                                     |
| ------------------------------------ | ---------------------------------------------- |
| <kbd>Tab</kbd>                       | 将焦点移动到下一个可聚焦元素。     |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>    | 将焦点移动到上一个可聚焦元素。 |
| <kbd>Esc</kbd>                       | 关闭浮动操作面板。                            |
| <kbd>Space</kbd> 或 <kbd>Enter</kbd> | 点击可聚焦元素。                  |

`ion-popover` 具有完整的箭头键支持，用于在具有 `button` 属性的 `ion-item` 元素之间导航。这最常见的用例是作为桌面应用中的下拉菜单。除了基本的键盘支持外，下表详细说明了下拉菜单的箭头键支持：

| 按键                                                           | 描述                                                                               |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| <kbd>ArrowUp</kbd>                                            | 将焦点移动到上一个可聚焦元素。                                            |
| <kbd>ArrowDown</kbd>                                          | 将焦点移动到下一个可聚焦元素。                                                |
| <kbd>Home</kbd>                                               | 将焦点移动到第一个可聚焦元素。                                               |
| <kbd>End</kbd>                                                | 将焦点移动到最后一个可聚焦元素。                                                |
| <kbd>ArrowLeft</kbd>                                          | 在子浮动操作面板中使用时，关闭浮动操作面板并将焦点返回到父浮动操作面板。 |
| <kbd>Space</kbd>、<kbd>Enter</kbd> 和 <kbd>ArrowRight</kbd> | 当聚焦于触发器元素时，打开关联的浮动操作面板。                            |

## 性能

### 挂载内部内容

内联 `ion-popover` 的内容在关闭时会被卸载。如果此内容渲染成本高昂，开发者可以使用 `keepContentsMounted` 属性在浮动操作面板挂载时立即挂载内容。这有助于优化应用程序的响应性，因为当浮动操作面板打开时，内部内容已经挂载。

import Mount from '@site/static/usage/v8/popover/performance/mount/index.md';

<Mount />

开发者在使用 `keepContentsMounted` 时应牢记以下几点：

- 此功能应作为最后手段来处理现有的性能问题。在使用此功能之前，请尝试识别并解决性能瓶颈。此外，不要使用此功能来预测性能问题。

- 此功能仅在 JavaScript 框架中需要。不使用框架的开发者可以将要渲染的内容传递给浮动操作面板，内容将自动渲染。

- 此功能仅适用于内联浮动操作面板。使用 `popoverController` 创建的浮动操作面板不会提前创建，因此内部内容也不会创建。

- 内部组件上的任何 JavaScript 框架生命周期钩子将在浮动操作面板挂载时立即运行，而不是在浮动操作面板呈现时运行。

## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

## CSS Shadow 部件
<Parts />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />