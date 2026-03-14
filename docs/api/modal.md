---
title: 模态框组件
---
import Props from '@ionic-internal/component-api/v8/modal/props.md'
import Events from '@ionic-internal/component-api/v8/modal/events.md'
import Methods from '@ionic-internal/component-api/v8/modal/methods.md'
import Parts from '@ionic-internal/component-api/v8/modal/parts.md'
import CustomProps from '@ionic-internal/component-api/v8/modal/custom-props.mdx'
import Slots from '@ionic-internal/component-api/v8/modal/slots.md'

<head>
  <title>ion-modal：Ionic 移动应用自定义模态框 API 组件</title>
  <meta name="description" content="ion-modal 是显示在移动应用内容之上的对话框，必须在恢复交互前由应用将其关闭。详细了解自定义模态框组件。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill'

<EncapsulationPill type="shadow" />

模态框（Modal）是一种显示在应用内容之上的对话框，必须在应用将其关闭后才能恢复与页面的交互。当有大量选项需要选择时，它非常适合用作选择组件，也适用于列表过滤等许多其他场景。

## 内联模态框（推荐）

可以直接在模板中编写 `<ion-modal>` 组件来使用它。这种方式减少了呈现模态框所需的事件处理程序。

在 Angular、React 或 Vue 中使用 `ion-modal` 时，传入的组件会在模态框关闭时被销毁。由于此功能由 JavaScript 框架提供，因此在不使用框架的情况下使用 `ion-modal` 不会销毁传入的组件。如果需要此功能，建议使用 `modalController`。

import InlineModalTriggerExample from '@site/static/usage/v8/modal/inline/basic/index.md'

<InlineModalTriggerExample />

### 使用 `isOpen`

`ion-modal` 的 `isOpen` 属性允许开发者通过应用状态来控制模态框的显示。这意味着当 `isOpen` 设置为 `true` 时，模态框将呈现；当 `isOpen` 设置为 `false` 时，模态框将关闭。

`isOpen` 使用单向数据绑定，这意味着当模态框关闭时，它不会自动被设置为 `false`。开发者应监听 `ionModalDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的目的是防止 `ion-modal` 的内部逻辑与应用状态过度耦合。通过单向数据绑定，模态框只需关心响应式变量提供的布尔值。而双向数据绑定则要求模态框同时关心布尔值和响应式变量本身的存在性，这可能导致非确定性的行为，并使应用更难以调试。

import InlineModalIsOpenExample from '@site/static/usage/v8/modal/inline/is-open/index.md'

<InlineModalIsOpenExample />

## 控制器模态框

通过 `modalController`，开发者可以以编程方式呈现 `ion-modal`。开发者可以完全控制模态框的显示和关闭时机。

import ControllerExample from '@site/static/usage/v8/modal/controller/index.md'

<ControllerExample />

## 阻止模态框关闭

在模态框中输入数据时，通常需要防止意外丢失数据。`ion-modal` 的 `canDismiss` 属性让开发者可以控制模态框何时允许被关闭。

使用 `canDismiss` 属性有两种方式：设置一个布尔值或设置一个回调函数。

:::note
  注意：对于 sheet 样式的模态框，如果没有设置 `0` 断点，则滑动时不会检查 `canDismiss`。但是，按下 `Esc` 键或硬件返回按钮时仍会进行检查。
:::

### 设置布尔值

开发者可以将 `canDismiss` 设置为一个布尔值。如果 `canDismiss` 为 `true`，则当用户尝试关闭模态框时，模态框会关闭。如果 `canDismiss` 为 `false`，则当用户尝试关闭模态框时，模态框不会关闭。

当需要在模态框关闭前要求用户执行特定操作时，应使用布尔值。例如，如果开发者要求在关闭模态框前勾选"使用条款"复选框，则可以先将 `canDismiss` 设置为 `false`，并在复选框被勾选时将其更新为 `true`。

import CanDismissBooleanExample from '@site/static/usage/v8/modal/can-dismiss/boolean/index.md'

<CanDismissBooleanExample />

### 设置回调函数

开发者可以将 `canDismiss` 设置为一个函数。此函数必须返回一个解析为 `true` 或 `false` 的 `Promise`。如果 Promise 解析为 `true`，则模态框将关闭；如果解析为 `false`，则模态框不会关闭。

当有关闭条件较为复杂时，例如在关闭前显示确认对话框，应使用回调函数。用户在此对话框中的选择将用于决定模态框是否继续关闭。

请注意，设置回调函数会导致在使用卡片或 sheet 模态框时，滑动手势被中断。这是因为 Ionic 无法预先知道你的回调函数将解析为何值。

import CanDismissFunctionExample from '@site/static/usage/v8/modal/can-dismiss/function/index.md'

<CanDismissFunctionExample />

### 禁止滑动关闭

开发者可能希望禁止用户通过滑动来关闭卡片或 sheet 模态框。这可以通过为 `canDismiss` 设置一个回调函数，并检查 `role` 是否为 `gesture` 来实现。

import CanDismissPreventSwipeToCloseExample from '@site/static/usage/v8/modal/can-dismiss/prevent-swipe-to-close/index.md'

<CanDismissPreventSwipeToCloseExample />

### 在子组件中修改关闭行为

在某些情况下，开发者可能需要根据已呈现模态框的状态来自定义 `canDismiss` 回调的行为。例如，当开发者希望在模态框内的表单无效时阻止其关闭，这种自定义就特别有用。

为了实现这种自定义，子组件可以采用多种技术与父组件通信，并更新控制 `canDismiss` 回调的条件，例如函数回调、事件发射或其他响应式机制。

以下是一个简化的示例，说明了子组件如何与父组件交互以修改 `canDismiss` 回调：

import CanDismissChildStateExample from '@site/static/usage/v8/modal/can-dismiss/child-state/index.md'

<CanDismissChildStateExample />

## 卡片模态框

开发者可以创建卡片样式的模态框效果，使其像一张卡片一样堆叠在应用主内容之上。要创建卡片模态框，需要为 `ion-modal` 设置 `presentingElement` 属性。

`presentingElement` 属性接收一个指向应显示在模态框下方元素的引用。通常是对 `ion-router-outlet` 的引用。

`canDismiss` 属性可用于控制卡片模态框是否可以通过滑动关闭。

:::note
卡片显示样式仅在 iOS 上可用。
:::

import CardExample from '@site/static/usage/v8/modal/card/basic/index.md'

<CardExample />

## 底部抽屉模态框

:::info
如果希望模态框内容可滚动，应在抽屉模态框内部使用 [Content](./content)。
:::

开发者可以创建类似于地图应用中底部抽屉组件的抽屉模态框效果。要创建抽屉模态框，需要为 `ion-modal` 设置 `breakpoints` 和 `initialBreakpoint` 属性。

`breakpoints` 属性接受一个数组，用于声明抽屉在滑动时可以吸附到的每个断点。例如，`breakpoints` 属性为 `[0, 0.5, 1]` 表示抽屉可以滑动到显示模态框的 0%、50% 和 100% 高度。当模态框滑动到 0% 时，它将自动关闭。请注意，如果未包含 `0` 断点，则无法通过滑动关闭模态框，但仍可通过按下 `Esc` 键或硬件返回按钮来关闭。

`initialBreakpoint` 属性是必需的，它告诉抽屉模态框在呈现时从哪个断点开始。`initialBreakpoint` 的值也必须在 `breakpoints` 数组中存在。给定 `breakpoints` 值为 `[0, 0.5, 1]`，`initialBreakpoint` 值为 `0.5` 是有效的，因为 `0.5` 在 `breakpoints` 数组中。`initialBreakpoint` 值为 `0.25` 则无效，因为 `0.25` 不存在于 `breakpoints` 数组中。

`backdropBreakpoint` 属性可用于自定义 `ion-backdrop` 开始淡入的点。当创建下方内容应保持可交互的界面时，这非常有用。一个常见的用例是抽屉模态框覆盖在地图上，在地图完全展开之前，地图仍然是可以交互的。

import SheetExample from '@site/static/usage/v8/modal/sheet/basic/index.md'

<SheetExample />

### 与背景内容交互

import SheetBackgroundContentExample from '@site/static/usage/v8/modal/sheet/background-content/index.md'

<SheetBackgroundContentExample />

### 自定义抽屉高度

开发者应使用 `--height` CSS 变量来更改抽屉模态框的高度，而不是更改 `breakpoints` 数组中的最后一个断点。原因是将 `breakpoints` 数组中的最后一个断点更改为小于 `1` 的值会导致部分模态框内容位于视口之外而无法访问。

以下示例展示了如何创建一个根据其内容自动调整大小的抽屉模态框。请注意，通过将最大断点保持在 `1`，我们确保了整个模态框在视口中都是可访问的。

import SheetAutoHeightExample from '@site/static/usage/v8/modal/sheet/auto-height/index.md'

<SheetAutoHeightExample />

### 手柄行为

抽屉模态框可以选择渲染一个用于在断点间拖拽的手柄指示器。`handleBehavior` 属性可用于配置用户激活手柄时的行为。

import SheetHandleBehaviorExample from '@site/static/usage/v8/modal/sheet/handle-behavior/index.md'

<SheetHandleBehaviorExample />

### 在所有断点滚动内容

抽屉模态框可以配置为在所有断点都允许内容滚动，这使得它们非常适合显示比视口更大的内容。通过将 `expandToScroll` 属性设置为 `false`，内容在每个断点都保持可滚动。否则，默认情况下，仅在抽屉模态框完全展开时才启用滚动。

import SheetScrollingContentExample from '@site/static/usage/v8/modal/sheet/expand-to-scroll/index.md'

<SheetScrollingContentExample />

## 样式定制

模态框呈现在应用的根节点，因此会覆盖整个应用。此行为同时适用于内联模态框和通过控制器呈现的模态框。因此，自定义模态框样式不能局限于特定组件，因为它们将不适用于模态框。相反，样式必须在全局范围内应用。对于大多数开发者来说，将自定义样式放在 `global.css` 中就足够了。

:::note
 如果你正在构建 Ionic Angular 应用，则需要将样式添加到全局样式表文件中。有关更多信息，请参阅下面 Angular 部分中的[样式放置](#style-placement)。
:::


:::note
 `ion-modal` 的工作前提是堆叠的模态框大小相同。因此，后续的每个模态框都没有阴影，并且背景透明度为 `0`。这是为了避免随着添加更多模态框，阴影和背景层逐渐变暗的效果。这可以通过设置 `--box-shadow` 和 `--backdrop-opacity` CSS 变量来改变：
:::

```
ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}
```

import ThemeExample from '@site/static/usage/v8/modal/styling/theming/index.md'

<ThemeExample />

### 动画

可以使用 Ionic 的动画构建器来自定义进入和离开动画，并将这些动画赋值给 `enterAnimation` 和 `leaveAnimation`。

import AnimationsExample from '@site/static/usage/v8/modal/styling/animations/index.md'

<AnimationsExample />

## 自定义对话框

虽然 `ion-modal` 最常用于全屏视图、卡片或抽屉，但也可以将其用于自定义对话框。当开发者需要一个比 [ion-alert](./alert) 或 [ion-loading](./loading) 等组件更复杂的界面时，这非常有用。

import CustomDialogs from '@site/static/usage/v8/modal/custom-dialogs/index.md'

<CustomDialogs />

创建自定义对话框时需注意以下几点：

* `ion-content` 旨在用于全屏模态框、卡片和抽屉。如果你的自定义对话框具有动态或未知大小，则不应使用 `ion-content`。
* 创建自定义对话框提供了一种退出默认模态框体验的方法。因此，自定义对话框不应与卡片或抽屉模态框一起使用。

## 事件处理

### 使用 `ionDragStart` 和 `ionDragEnd`

`ionDragStart` 事件在用户在模态框上开始拖拽手势时立即触发。该事件在用户接触手柄或模态框表面的瞬间触发，在实际位移发生之前。这对于准备界面以进行过渡特别有用，例如隐藏某些交互元素（如标题或按钮），以确保拖拽体验的流畅性。

当用户通过释放模态框完成拖拽手势时，会触发 `ionDragEnd` 事件。与移动事件一样，它包含了最终的 [`ModalDragEventDetail`](#modaldrageventdetail) 对象。此事件通常用于在模态框停止移动后最终确定状态更改。

import DragStartEndEvents from '@site/static/usage/v8/modal/drag-start-end-events/index.md'

<DragStartEndEvents />

### 使用 `ionDragMove`

`ionDragMove` 事件在用户主动拖拽模态框期间持续触发。此事件提供了一个包含实时数据的 [`ModalDragEventDetail`](#modaldrageventdetail) 对象，对于创建能即时响应用户触摸的高度响应式 UI 更新至关重要。例如，可以使用 `progress` 值来动态降低标题的不透明度，具体取决于模态框向上拖拽的距离。

import DragMoveEvent from '@site/static/usage/v8/modal/drag-move-event/index.md'

<DragMoveEvent />

## 接口

### ModalOptions

以下是在使用 `modalController` 时可用的所有选项。调用 `modalController.create()` 时应提供这些选项。

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

虽然不是必需的，但可以使用此接口代替 `CustomEvent` 接口，为此组件发出的 Ionic 事件提供更强的类型。

```typescript
interface ModalCustomEvent extends CustomEvent {
  target: HTMLIonModalElement;
}
```

### ModalDragEventDetail

当使用 `ionDragMove` 和 `ionDragEnd` 事件时，事件详情包含以下属性：

```typescript
interface ModalDragEventDetail {
  /**
   * 模态框当前的 Y 轴位置。
   *
   * 可用于确定模态框已被拖拽了多远。
   */
  currentY: number;
  /**
   * 自手势开始以来的 Y 轴变化量。
   *
   * 可用于确定拖拽的方向。
   */
  deltaY: number;
  /**
   * Y 轴方向的拖拽速度。
   *
   * 可用于确定模态框被拖拽的速度。
   */
  velocityY: number;
  /**
   * 一个介于 0 和 1 之间的数字。
   *
   * 在抽屉模态框中，progress 表示最低和最高定义断点之间的相对位置。
   *
   * 在卡片模态框中，它测量屏幕底部和模态框完全打开时顶部之间的相对位置。
   *
   * 可用于根据模态框被拖拽的距离来设置内容的样式。
   */
  progress: number;
  /**
   * 如果是抽屉模态框，这将表示如果用户在当前位置释放模态框，它将吸附到的断点。
   *
   * 如果是卡片模态框，此属性将不会包含在事件负载中。
   *
   * 可用于根据释放时模态框将吸附到的位置来设置内容的样式。
   */
  snapBreakpoint?: number;
}
```

## 无障碍

### 键盘交互

| 按键            | 描述             |
| --------------- | ---------------- |
| <kbd>Esc</kbd>  | 关闭模态框       |


### 标签

模态框具有 [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) 角色。因此，开发者**必须**正确地为其模态框添加标签。如果模态框使用了 `ion-title`，可以通过在 `ion-modal` 上设置 [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 来使用其中的文本作为模态框本身的标签。如果模态框包含额外的描述性文本，可以通过 [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 将此文本与模态框关联。

### 屏幕阅读器

模态框应用了 `aria-modal` 属性。此属性可能导致辅助技术将导航限制在模态框元素的内容中。因此，使用移动到下一个或上一个项目的手势可能无法聚焦模态框外部的元素。即使在抽屉模态框中使用 `backdropBreakpoint` 属性禁用了背景层，此限制仍然适用。

如果开发者手动移动焦点，辅助技术将不会限制对模态框元素内容的导航。但是，对于启用了焦点捕获的模态框，Ionic 不支持手动将焦点移出模态框。

有关更多信息，请参见 https://w3c.github.io/aria/#aria-modal。

### 焦点捕获

当模态框呈现时，焦点将被捕获在呈现的模态框内部。用户可以在模态框内聚焦其他可交互元素，但在模态框呈现期间，永远无法聚焦到模态框外部的可交互元素。对于呈现多个堆叠模态框的应用，焦点将被捕获在最后呈现的那个模态框上。

通过 `backdropBreakpoint` 属性禁用了背景层的抽屉模态框不受焦点捕获的限制。

### 抽屉模态框

抽屉模态框在使用 `backdropBreakpoint` 属性时，允许用户与模态框后面的内容进行交互。背景层在达到并包括指定的 `backdropBreakpoint` 之前将被禁用，并在之后启用。

当背景层被禁用时，用户可以使用指针或键盘与抽屉模态框外部的元素进行交互。由于使用了 `aria-modal`，默认情况下辅助技术可能无法将焦点移出抽屉模态框。我们建议在此处避免使用诸如自动聚焦之类的功能，因为这可能导致辅助技术在没有警告用户的情况下在两个交互上下文之间跳转。

## 性能

### 挂载内部内容

内联 `ion-modal` 的内容在关闭时会卸载。如果这些内容渲染成本很高，开发者可以使用 `keepContentsMounted` 属性，在模态框挂载时立即挂载其内容。这有助于优化应用的响应速度，因为当模态框打开时，内部内容已经挂载完成。

import Mount from '@site/static/usage/v8/modal/performance/mount/index.md'

<Mount />

使用 `keepContentsMounted` 时，开发者应注意以下几点：

- 此功能应作为处理现有性能问题的最后手段。在使用此功能之前，请尝试识别并解决性能瓶颈。此外，不要使用此功能来预测性能问题。

- 仅在配合 JavaScript 框架时需要此功能。未使用框架的开发者可以将要渲染的内容直接传入模态框，内容将自动渲染。

- 此功能仅适用于内联模态框。通过 `modalController` 创建的模态框并非预先创建，因此其内部内容也不会被创建。

- 内部组件上的任何 JavaScript 框架生命周期钩子将在模态框挂载时立即运行，而不是在模态框呈现时。

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