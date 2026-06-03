---
title: "ion-modal"
---
import Props from '@ionic-internal/component-api/v8/modal/props.md';
import Events from '@ionic-internal/component-api/v8/modal/events.md';
import Methods from '@ionic-internal/component-api/v8/modal/methods.md';
import Parts from '@ionic-internal/component-api/v8/modal/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/modal/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/modal/slots.md';

<head>
  <title>ion-modal：Ionic 移动应用自定义模态框 API 组件</title>
  <meta name="description" content="ion-modal 是一个显示在移动应用内容上方的对话框，必须关闭后才能恢复交互。了解更多关于自定义模态组件的信息。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Modal 是一个显示在应用内容上方的对话框，必须由应用关闭后才能恢复交互。当有大量选项需要选择时，或在列表中筛选项目时，以及许多其他用例中，它作为一个选择组件非常有用。

## 内联 Modal（推荐）

`ion-modal` 可以通过直接在模板中编写组件来使用。这减少了呈现模态框时需要连接的处理程序数量。

在使用 Angular、React 或 Vue 的 `ion-modal` 时，传入的组件将在模态框关闭时被销毁。由于此功能由 JavaScript 框架提供，未使用 JavaScript 框架时使用 `ion-modal` 不会销毁传入的组件。如果需要此功能，我们建议使用 `modalController`。

import InlineModalTriggerExample from '@site/static/usage/v8/modal/inline/basic/index.md';

<InlineModalTriggerExample />

### 使用 `isOpen`

`ion-modal` 上的 `isOpen` 属性允许开发者从应用状态控制模态框的呈现状态。这意味着当 `isOpen` 设置为 `true` 时，模态框将呈现；当 `isOpen` 设置为 `false` 时，模态框将关闭。

`isOpen` 使用单向数据绑定，这意味着模态框关闭时它不会自动设置为 `false`。开发者应监听 `ionModalDidDismiss` 或 `didDismiss` 事件并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-modal` 的内部逻辑与应用状态紧密耦合。使用单向数据绑定时，模态框只需关注响应式变量提供的布尔值。而使用双向数据绑定时，模态框需要同时关注布尔值和响应式变量本身的存在性。这可能导致不确定的行为，并使应用更难调试。

import InlineModalIsOpenExample from '@site/static/usage/v8/modal/inline/is-open/index.md';

<InlineModalIsOpenExample />

## 控制器 Modal

使用 `modalController`，开发者可以以编程方式呈现 `ion-modal`。开发者将完全控制模态框何时呈现和关闭。

import ControllerExample from '@site/static/usage/v8/modal/controller/index.md';

<ControllerExample />

## 阻止模态框关闭

在模态框中输入数据时，通常需要有一种防止意外数据丢失的方法。`ion-modal` 上的 `canDismiss` 属性赋予开发者控制模态框何时允许关闭的能力。

有两种使用 `canDismiss` 属性的不同方式：设置布尔值或设置回调函数。

:::note
 注意：使用 sheet 模态框时，如果没有设置 `0` 断点，`canDismiss` 在滑动时不会被检查。但按下 `Esc` 或硬件返回按钮时仍然会被检查。
:::

### 设置布尔值

开发者可以将 `canDismiss` 设置为一个布尔值。如果 `canDismiss` 为 `true`，则当用户尝试关闭模态框时，模态框将关闭。如果 `canDismiss` 为 `false`，则当用户尝试关闭模态框时，模态框不会关闭。

设置布尔值适用于需要在模态框关闭之前执行特定操作的情况。例如，如果开发者要求在关闭模态框之前勾选"使用条款"复选框，他们可以先将 `canDismiss` 设置为 `false`，然后在复选框被勾选时更新为 `true`。

import CanDismissBooleanExample from '@site/static/usage/v8/modal/can-dismiss/boolean/index.md';

<CanDismissBooleanExample />

### 设置回调函数

开发者可以将 `canDismiss` 设置为一个函数。该函数必须返回一个解析为 `true` 或 `false` 的 `Promise`。如果 promise 解析为 `true`，则模态框将关闭。如果 promise 解析为 `false`，则模态框将不关闭。

当有复杂的关闭条件（如在关闭模态框之前显示确认对话框）时，应使用设置回调函数的方式。用户在此对话框中选择的选项可以用于确定模态框是否应继续关闭。

注意，设置回调函数会导致在使用卡片或 sheet 模态框时中断滑动手势。这是因为 Ionic 无法预先知道回调函数的解析结果。

import CanDismissFunctionExample from '@site/static/usage/v8/modal/can-dismiss/function/index.md';

<CanDismissFunctionExample />

### 阻止滑动关闭

开发者可能希望阻止用户通过滑动来关闭卡片或 sheet 模态框。这可以通过为 `canDismiss` 设置回调函数并检查 `role` 是否为 `gesture` 来实现。

import CanDismissPreventSwipeToCloseExample from '@site/static/usage/v8/modal/can-dismiss/prevent-swipe-to-close/index.md';

<CanDismissPreventSwipeToCloseExample />

### 在子组件中修改关闭行为

在某些场景中，开发者可能需要根据呈现的模态框的状态来自定义 `canDismiss` 回调的行为。例如，当开发者希望在模态框内的表单无效时阻止模态框关闭，这种自定义特别有用。

为实现此自定义，子组件可以采用多种技术，如函数回调、事件触发或其他响应式机制，与父组件通信并更新控制 `canDismiss` 回调的条件。

以下是一个简化的示例，说明子组件如何与父组件交互以修改 `canDismiss` 回调：

import CanDismissChildStateExample from '@site/static/usage/v8/modal/can-dismiss/child-state/index.md';

<CanDismissChildStateExample />

## 卡片 Modal

开发者可以创建卡片模态框效果，使模态框像一张卡片堆叠在应用主要内容之上。要创建卡片模态框，开发者需要在 `ion-modal` 上设置 `presentingElement` 属性。

`presentingElement` 属性接受一个指向应在模态框下方显示元素的引用。这通常是对 `ion-router-outlet` 的引用。

`canDismiss` 属性可用于控制卡片模态框是否可以通过滑动关闭。

:::note
卡片显示样式仅在 iOS 上可用。
:::

import CardExample from '@site/static/usage/v8/modal/card/basic/index.md';

<CardExample />

## Sheet 模态框

:::info
如果希望模态框内容可滚动，应在 sheet 模态框内使用 [Content](./content)。
:::

开发者可以创建类似地图应用中抽屉组件的 sheet 模态框效果。要创建 sheet 模态框，开发者需要在 `ion-modal` 上设置 `breakpoints` 和 `initialBreakpoint` 属性。

`breakpoints` 属性接受一个数组，表示 sheet 在滑动时可以吸附到的每个断点。`[0, 0.5, 1]` 的 `breakpoints` 属性表示 sheet 可以滑动到显示模态框的 0%、50% 和 100%。当模态框滑动到 0% 时，模态框将自动关闭。注意，如果没有包含 `0` 断点，模态框不能通过滑动关闭，但仍可以通过按下 `Esc` 或硬件返回按钮来关闭。

`initialBreakpoint` 属性是必需的，以便 sheet 模态框知道在呈现时从哪个断点开始。`initialBreakpoint` 值也必须存在于 `breakpoints` 数组中。给定 `breakpoints` 值为 `[0, 0.5, 1]`，`initialBreakpoint` 值为 `0.5` 是有效的，因为 `0.5` 存在于 `breakpoints` 数组中。`initialBreakpoint` 值为 `0.25` 无效，因为 `0.25` 不存在于 `breakpoints` 数组中。

`backdropBreakpoint` 属性可用于自定义 `ion-backdrop` 开始淡入的点。当创建底层内容应保持可交互的界面时，这非常有用。一个常见用例是 sheet 模态框覆盖在地图上，其中地图在 sheet 完全展开之前保持可交互。

import SheetExample from '@site/static/usage/v8/modal/sheet/basic/index.md';

<SheetExample />

### 与背景内容交互

import SheetBackgroundContentExample from '@site/static/usage/v8/modal/sheet/background-content/index.md';

<SheetBackgroundContentExample />

### 自定义 Sheet 高度

开发者应使用 `--height` CSS 变量来改变 sheet 模态框的高度，而不是更改 `breakpoints` 数组中的最后一个断点。原因是将 `breakpoints` 数组中的最后一个断点改为小于 `1` 的值会导致部分模态框在视口之外无法访问。

以下示例展示了如何创建一个根据内容自动调整大小的 sheet 模态框。注意，通过将最大断点保持在 `1`，我们确保整个模态框在视口中可访问。

import SheetAutoHeightExample from '@site/static/usage/v8/modal/sheet/auto-height/index.md';

<SheetAutoHeightExample />

### 手柄行为

Sheet 模态框可以选择渲染一个手柄指示器，用于拖动 sheet 在各个断点之间切换。`handleBehavior` 属性可用于配置手柄被用户激活时的行为。

import SheetHandleBehaviorExample from '@site/static/usage/v8/modal/sheet/handle-behavior/index.md';

<SheetHandleBehaviorExample />

### 在所有断点滚动内容

Sheet 模态框可以配置为允许在所有断点滚动内容，使其成为显示大于视口内容的理想选择。通过将 `expandToScroll` 属性设置为 `false`，内容在每个断点处都保持可滚动。否则，默认情况下，仅在 sheet 模态框完全展开时启用滚动。

import SheetScrollingContentExample from '@site/static/usage/v8/modal/sheet/expand-to-scroll/index.md';

<SheetScrollingContentExample />

## 样式设计

模态框在应用的根层级呈现，因此它们覆盖在整个应用之上。此行为适用于内联模态框和通过控制器呈现的模态框。因此，自定义模态样式不能限定在特定组件内，因为它们不会应用于模态框。相反，样式必须在全局范围内应用。对于大多数开发者来说，将自定义样式放在 `global.css` 中就足够了。

:::note
 如果您正在构建 Ionic Angular 应用，需要将样式添加到全局样式表文件中。有关更多信息，请阅读下方 Angular 章节中的[样式设计](#样式设计)。
:::


:::note
 `ion-modal` 的工作前提是堆叠的模态框大小相同。因此，每个后续模态框将没有盒子阴影，背景层不透明度为 `0`。这是为了避免每个添加的模态框使阴影和背景层越来越暗。可以通过设置 `--box-shadow` 和 `--backdrop-opacity` CSS 变量来改变此行为：
:::

```
ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}
```

import ThemeExample from '@site/static/usage/v8/modal/styling/theming/index.md';

<ThemeExample />

### 动画

可以使用我们的动画构建器自定义进入和离开动画，并将动画分配给 `enterAnimation` 和 `leaveAnimation`。

import AnimationsExample from '@site/static/usage/v8/modal/styling/animations/index.md';

<AnimationsExample />

## 自定义对话框

虽然 `ion-modal` 最常用于全页面视图、卡片或 sheet，但它也可以用于自定义对话框。当开发者需要比 [ion-alert](./alert) 或 [ion-loading](./loading) 等组件提供的界面更复杂的界面时，这非常有用。

import CustomDialogs from '@site/static/usage/v8/modal/custom-dialogs/index.md';

<CustomDialogs />

创建自定义对话框时需要记住以下几点：

* `ion-content` 旨在用于全页面模态框、卡片和 sheet。如果自定义对话框具有动态或未知大小，则不应使用 `ion-content`。
* 创建自定义对话框提供了一种退出默认模态体验的方式。因此，自定义对话框不应与卡片或 sheet 模态框一起使用。

## 事件处理

### 使用 `ionDragStart` 和 `ionDragEnd`

`ionDragStart` 事件在用户开始在模态框上进行拖拽手势时立即触发。该事件在用户初次接触手柄或模态框表面时触发，在任何实际位移发生之前。这对于准备界面进行过渡特别有用，例如隐藏某些交互元素（如标头或按钮）以确保流畅的拖拽体验。

`ionDragEnd` 事件在用户释放模态框完成拖拽手势时触发。与移动事件一样，它包含最终的 [`ModalDragEventDetail`](#modaldrageventdetail) 对象。该事件通常用于在模态框停止移动后最终确定状态变化。

import DragStartEndEvents from '@site/static/usage/v8/modal/drag-start-end-events/index.md';

<DragStartEndEvents />

### 使用 `ionDragMove`

`ionDragMove` 事件在用户主动拖拽模态框时持续触发。该事件提供一个包含实时数据的 [`ModalDragEventDetail`](#modaldrageventdetail) 对象，对于创建即时响应用户触摸的高度响应式 UI 更新至关重要。例如，`progress` 值可用于在模态框向上拖动时动态降低标头的不透明度。

import DragMoveEvent from '@site/static/usage/v8/modal/drag-move-event/index.md';

<DragMoveEvent />

## 接口

### ModalOptions

以下是在使用 `modalController` 时所有可用的选项。调用 `modalController.create()` 时应提供这些选项。

```typescript
interface ModalOptions {
  component: any;
  componentProps?: { [key: string]: any };
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  animated?: boolean;
  canDismiss?: boolean | ((data?: any, role?: string) => Promise<boolean>);

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  breakpoints?: number[];
  initialBreakpoint?: number;
  backdropBreakpoint?: number;
  handle?: boolean;
}
```
### ModalCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型支持。

```typescript
interface ModalCustomEvent extends CustomEvent {
  target: HTMLIonModalElement;
}
```

### ModalDragEventDetail

使用 `ionDragMove` 和 `ionDragEnd` 事件时，事件详情包含以下属性：

```typescript
interface ModalDragEventDetail {
  /**
   * 模态框当前的 Y 位置。
   *
   * 可用于确定模态框已被拖拽的距离。
   */
  currentY: number;
  /**
   * 自手势开始以来 Y 位置的变化量。
   *
   * 可用于确定拖拽的方向。
   */
  deltaY: number;
  /**
   * Y 方向拖拽的速度。
   *
   * 可用于确定模态框被拖拽的快慢。
   */
  velocityY: number;
  /**
   * 介于 0 和 1 之间的数值。
   *
   * 在 sheet 模态框中，progress 表示最低和最高定义断点之间的相对位置。
   *
   * 在卡片模态框中，它测量屏幕底部与模态框完全打开时顶部之间的相对位置。
   *
   * 可用于根据模态框被拖拽的距离来设置内容样式。
   */
  progress: number;
  /**
   * 如果模态框是 sheet 模态框，这将是在当前时刻用户释放时模态框将吸附到的断点。
   *
   * 如果是卡片模态框，此属性将不包含在事件负载中。
   *
   * 可用于根据模态框释放后将吸附到的位置来设置内容样式。
   */
  snapBreakpoint?: number;
}
```

## 无障碍

### 键盘交互

| 键               | 描述             |
| ---------------  | ----------------  |
| <kbd>Esc</kbd>   | 关闭模态框        |


### 标签

模态框具有 [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) 角色。因此，开发者**必须**正确标记其模态框。如果模态框使用了 `ion-title`，可以通过在 `ion-modal` 上设置 [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 来将内部文本用作模态框本身的标签。如果模态框包含额外的描述性文本，可以通过使用 [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 将此文本关联到模态框。

### 屏幕阅读器

模态框应用了 `aria-modal` 属性。此属性可能导致辅助技术将导航限制在模态框元素的内容范围内。因此，使用移动到下一个或上一个项目的手势可能无法聚焦模态框之外的元素。即使在使用 `backdropBreakpoint` 属性在 sheet 模态框中禁用了背景层时也是如此。

如果开发者手动移动焦点，辅助技术不会将导航限制在模态框元素的内容范围内。但是，在启用了焦点捕获的模态框中，Ionic 不支持手动将焦点移出模态框。

更多信息请参见 https://w3c.github.io/aria/#aria-modal。

### 焦点捕获

当模态框呈现时，焦点将被捕获在呈现的模态框内部。用户可以聚焦模态框内的其他交互元素，但在模态框呈现期间将无法聚焦模态框外部的交互元素。对于呈现多个堆叠模态框的应用，焦点将被捕获在最后呈现的模态框中。

通过 `backdropBreakpoint` 属性禁用了背景层的 sheet 模态框不受焦点捕获的限制。

### Sheet 模态框

当使用 `backdropBreakpoint` 属性时，Sheet 模态框允许用户与模态框后面的内容进行交互。背景层将在此断点及以下被禁用，并在之后启用。

当背景层被禁用时，用户可以使用指针或键盘与 sheet 模态框外部的元素进行交互。由于使用了 `aria-modal`，辅助技术默认可能不会聚焦到 sheet 模态框外部。我们建议避免在此处使用自动聚焦等功能，因为它可能导致辅助技术在不警告用户的情况下在两个交互上下文之间跳转。

## 性能

### 挂载内部内容

内联 `ion-modal` 的内容在关闭时会卸载。如果此内容渲染成本较高，开发者可以使用 `keepContentsMounted` 属性在模态框挂载时立即挂载内容。这有助于优化应用的响应速度，因为内部内容在模态框打开时已经挂载完成。

import Mount from '@site/static/usage/v8/modal/performance/mount/index.md';

<Mount />

开发者在使用 `keepContentsMounted` 时应记住以下几点：

- 此功能应作为解决现有性能问题的最后手段。在使用此功能前，请尝试识别并解决性能瓶颈。此外，不要使用此功能来预判性能问题。

- 仅当使用 JavaScript 框架时才需要此功能。未使用框架的开发者可以直接将要渲染的内容传入模态框，内容将自动渲染。

- 此功能仅适用于内联模态框。使用 `modalController` 创建的模态框不会预先创建，因此内部内容也不会被创建。

- 内部组件上的任何 JavaScript 框架生命周期钩子将在模态框挂载时立即运行，而不是在模态框呈现时运行。

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
