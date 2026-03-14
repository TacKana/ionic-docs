---
title: 'ion-modal'
---

import Props from '@ionic-internal/component-api/v6/modal/props.md';
import Events from '@ionic-internal/component-api/v6/modal/events.md';
import Methods from '@ionic-internal/component-api/v6/modal/methods.md';
import Parts from '@ionic-internal/component-api/v6/modal/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/modal/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/modal/slots.md';

<head>
  <title>ion-modal：Ionic 移动应用自定义模态框 API 组件</title>
  <meta
    name="description"
    content="ion-modal 是在移动应用内容上方显示的对话框，必须在恢复交互前关闭。了解更多关于自定义模态框组件的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

模态框（Modal）是显示在应用内容上方的对话框，必须由应用关闭后才能继续交互。当需要从大量选项中进行选择、筛选列表项或处理许多其他用例时，模态框非常有用。

## 内联模态框（推荐）

可以直接在模板中编写组件来使用 `ion-modal`。这减少了展示模态框时需要设置的处理程序数量。

当在 Angular、React 或 Vue 中使用 `ion-modal` 时，传入的组件会在模态框关闭时被销毁。由于此功能由 JavaScript 框架提供，因此在不使用 JavaScript 框架时使用 `ion-modal` 不会销毁传入的组件。如果需要此功能，我们建议改用 `modalController`。

import InlineModalTriggerExample from '@site/static/usage/v6/modal/inline/basic/index.md';

<InlineModalTriggerExample />

### 使用 `isOpen`

`ion-modal` 上的 `isOpen` 属性允许开发者通过应用状态来控制模态框的展示状态。这意味着当 `isOpen` 设置为 `true` 时，模态框将显示；当 `isOpen` 设置为 `false` 时，模态框将关闭。

`isOpen` 使用单向数据绑定，这意味着当模态框关闭时，它不会自动设置为 `false`。开发者应监听 `ionModalDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-modal` 的内部逻辑与应用程序状态紧密耦合。通过单向数据绑定，模态框只需关注响应式变量提供的布尔值。而通过双向数据绑定，模态框需要同时关注布尔值以及响应式变量本身的存在。这可能导致非确定性行为，并使应用程序更难调试。

import InlineModalIsOpenExample from '@site/static/usage/v6/modal/inline/is-open/index.md';

<InlineModalIsOpenExample />

## 控制器模态框

使用 `modalController`，开发者可以以编程方式展示 `ion-modal`。开发者可以完全控制模态框何时显示和关闭。

import ControllerExample from '@site/static/usage/v6/modal/controller/index.md';

<ControllerExample />

## 防止模态框关闭

在模态框中输入数据时，通常需要一种防止意外数据丢失的方法。`ion-modal` 上的 `canDismiss` 属性让开发者可以控制模态框何时允许关闭。

有两种不同的方式使用 `canDismiss` 属性：设置布尔值或设置回调函数。

:::note
注意：当使用表单模态框时，如果没有设置 `0` 断点，则在滑动时不会检查 `canDismiss`。但按下 `Esc` 或硬件返回键时仍会检查。
:::

### 设置布尔值

开发者可以将 `canDismiss` 设置为布尔值。如果 `canDismiss` 为 `true`，则当用户尝试关闭模态框时，模态框将关闭。如果 `canDismiss` 为 `false`，则当用户尝试关闭模态框时，模态框不会关闭。

当需要在模态框关闭前执行特定操作时，应使用布尔值设置。例如，如果开发者要求在关闭模态框前必须勾选“使用条款”复选框，他们可以先将 `canDismiss` 设置为 `false`，然后在复选框被勾选时更新为 `true`。

import CanDismissBooleanExample from '@site/static/usage/v6/modal/can-dismiss/boolean/index.md';

<CanDismissBooleanExample />

### 设置回调函数

开发者可以将 `canDismiss` 设置为一个函数。此函数必须返回一个解析为 `true` 或 `false` 的 `Promise`。如果 Promise 解析为 `true`，则模态框将关闭。如果 Promise 解析为 `false`，则模态框不会关闭。

当关闭条件复杂时（例如在关闭模态框前显示确认对话框），应使用回调函数设置。然后，用户在此对话框中选择的选项可用于确定模态框是否继续关闭。

请注意，设置回调函数会导致在使用卡片或表单模态框时中断滑动手势。这是因为 Ionic 无法提前知道回调函数将解析为什么值。

import CanDismissFunctionExample from '@site/static/usage/v6/modal/can-dismiss/function/index.md';

<CanDismissFunctionExample />

### 防止滑动关闭

开发者可能希望防止用户通过滑动来关闭模态框。这可以通过为 `canDismiss` 设置回调函数并检查 `role` 是否为 `gesture` 来实现。

import CanDismissPreventSwipeToCloseExample from '@site/static/usage/v6/modal/can-dismiss/prevent-swipe-to-close/index.md';

<CanDismissPreventSwipeToCloseExample />

## 模态框类型

### 卡片模态框

开发者可以创建卡片模态框效果，使模态框显示为堆叠在应用主内容上方的卡片。要创建卡片模态框，开发者需要设置 `ion-modal` 上的 `presentingElement` 属性。

`presentingElement` 属性接受应显示在模态框下方的元素的引用。这通常是 `ion-router-outlet` 的引用。

`canDismiss` 属性可用于控制卡片模态框是否可以通过滑动关闭。

:::note
卡片显示样式仅在 iOS 上可用。
:::

import CardExample from '@site/static/usage/v6/modal/card/basic/index.md';

<CardExample />

### 表单模态框

开发者可以创建类似于地图应用中可用的抽屉组件的表单模态框效果。要创建表单模态框，开发者需要设置 `ion-modal` 上的 `breakpoints` 和 `initialBreakpoint` 属性。

`breakpoints` 属性接受一个数组，指定表单在滑动时可以吸附到的每个断点。`[0, 0.5, 1]` 的 `breakpoints` 属性表示表单可以滑动以显示模态框的 0%、50% 和 100%。当模态框滑动到 0% 时，模态框将自动关闭。请注意，如果未包含 `0` 断点，则无法通过滑动关闭模态框，但仍可以通过按 `Esc` 或硬件返回键来关闭。

`initialBreakpoint` 属性是必需的，以便表单模态框知道在展示时从哪个断点开始。`initialBreakpoint` 值也必须存在于 `breakpoints` 数组中。给定 `breakpoints` 值为 `[0, 0.5, 1]`，`initialBreakpoint` 值为 `0.5` 将是有效的，因为 `0.5` 在 `breakpoints` 数组中。`initialBreakpoint` 值为 `0.25` 将无效，因为 `0.25` 不在 `breakpoints` 数组中。

`backdropBreakpoint` 属性可用于自定义 `ion-backdrop` 开始淡入的点。这在创建表单下方有应保持交互的内容的界面时非常有用。一个常见的用例是覆盖地图的表单模态框，其中地图在表单完全展开之前保持交互。

import SheetExample from '@site/static/usage/v6/modal/sheet/basic/index.md';

<SheetExample />

#### 与背景内容交互

import SheetBackgroundContentExample from '@site/static/usage/v6/modal/sheet/background-content/index.md';

<SheetBackgroundContentExample />

#### 手柄行为

表单模态框可以选择渲染一个手柄指示器，用于在断点之间拖拽表单。`handleBehavior` 属性可用于配置用户激活手柄时的行为。

import SheetHandleBehaviorExample from '@site/static/usage/v6/modal/sheet/handle-behavior/index.md';

<SheetHandleBehaviorExample />

## 样式设置

模态框在应用程序的根级别展示，因此它们会覆盖整个应用。此行为适用于内联模态框和通过控制器展示的模态框。因此，自定义模态框样式不能限定在特定组件范围内，因为它们不会应用于模态框。相反，样式必须全局应用。对于大多数开发者来说，将自定义样式放在 `global.css` 中就足够了。

:::note
如果您正在构建 Ionic Angular 应用，样式需要添加到全局样式表文件中。请阅读下面 Angular 部分中的[样式放置](#style-placement)以获取更多信息。
:::

:::note
`ion-modal` 假设堆叠的模态框大小相同。因此，每个后续模态框将没有阴影，并且背景不透明度为 `0`。这是为了避免每个添加的模态框使阴影和背景变暗的效果。可以通过设置 `--box-shadow` 和 `--backdrop-opacity` CSS 变量来更改：
:::

```
ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}
```

import ThemeExample from '@site/static/usage/v6/modal/styling/theming/index.md';

<ThemeExample />

### 动画

可以通过使用动画构建器并将动画分配给 `enterAnimation` 和 `leaveAnimation` 来自定义进入和离开动画。

import AnimationsExample from '@site/static/usage/v6/modal/styling/animations/index.md';

<AnimationsExample />

## 自定义对话框

虽然 `ion-modal` 最常用于全屏视图、卡片或表单，但也可以将其用于自定义对话框。如果开发者需要比 [ion-alert](./alert) 或 [ion-loading](./loading) 等组件提供的更复杂的界面，这将非常有用。

import CustomDialogs from '@site/static/usage/v6/modal/custom-dialogs/index.md';

<CustomDialogs />

创建自定义对话框时需要注意以下几点：

- `ion-content` 旨在用于全屏模态框、卡片和表单。如果自定义对话框具有动态或未知大小，则不应使用 `ion-content`。

- 创建自定义对话框提供了一种脱离默认模态框体验的方法。因此，自定义对话框不应与卡片或表单模态框一起使用。

## 接口

### ModalOptions

下面列出了使用 `modalController` 时可用的所有选项。这些选项应在调用 `modalController.create()` 时提供。

```typescript
interface ModalOptions {
  component: any;
  componentProps?: { [key: string]: any };
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  animated?: boolean;
  canDismiss?: boolean | (() => Promise<boolean>);

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

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更强的类型检查。

```typescript
interface ModalCustomEvent extends CustomEvent {
  target: HTMLIonModalElement;
}
```

## 可访问性

### 键盘导航

| 按键   | 功能               |
| ------ | ------------------ |
| `Esc`  | 关闭模态框         |

### 标签

模态框具有 [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) 角色。因此，开发者**必须**正确标记其模态框。如果模态框使用 `ion-title`，则可以通过在 `ion-modal` 上设置 [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 来使用其中的文本标记模态框本身。如果模态框包含其他描述性文本，可以使用 [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 将此文本与模态框关联。

### 屏幕阅读器

模态框应用了 `aria-modal` 属性。此属性可能导致辅助技术将导航限制在模态框元素的内容内。因此，使用移动到下一个或上一个项目的手势可能无法聚焦模态框之外的元素。即使在使用 `backdropBreakpoint` 属性禁用表单模态框的背景时，这也适用。

如果开发者手动移动焦点，辅助技术不会将导航限制在模态框元素的内容内。但是，在 Ionic 中，不支持在启用焦点捕获的模态框中手动将焦点移出模态框。

有关更多信息，请参阅 https://w3c.github.io/aria/#aria-modal。

### 焦点捕获

当模态框展示时，焦点将被捕获在展示的模态框内。用户可以聚焦模态框内的其他交互元素，但在模态框展示期间永远无法聚焦模态框外的交互元素。对于展示多个堆叠模态框的应用程序，焦点将被捕获在最后展示的模态框上。

通过 `backdropBreakpoint` 属性禁用背景的表单模态框不受焦点捕获的限制。

### 表单模态框

当使用 `backdropBreakpoint` 属性时，表单模态框允许用户与模态框后面的内容进行交互。背景将在达到并包括指定的 `backdropBreakpoint` 之前被禁用，并在之后启用。

当背景被禁用时，用户将能够使用指针或键盘与表单模态框外部的元素进行交互。由于使用了 `aria-modal`，辅助技术可能默认不会聚焦表单模态框外部。我们建议在此处避免使用自动聚焦等功能，因为它可能导致辅助技术在两个交互上下文之间跳转，而不警告用户。

## 性能

### 挂载内部内容

内联 `ion-modal` 的内容在关闭时会被卸载。如果此内容渲染成本较高，开发者可以使用 `keepContentsMounted` 属性在模态框挂载时立即挂载内容。这有助于优化应用程序的响应性，因为内部内容在模态框打开时已经挂载。

import Mount from '@site/static/usage/v6/modal/performance/mount/index.md';

<Mount />

使用 `keepContentsMounted` 时，开发者应注意以下几点：

- 此功能应作为处理现有性能问题的最后手段。在使用此功能之前，尝试识别并解决性能瓶颈。此外，不要使用此功能来预期性能问题。

- 此功能仅在需要使用 JavaScript 框架时才需要。不使用框架的开发者可以将要渲染的内容传递到模态框中，内容将自动渲染。

- 此功能仅适用于内联模态框。使用 `modalController` 创建的模态框不会提前创建，因此内部内容也不会创建。

- 内部组件上的任何 JavaScript 框架生命周期钩子将在模态框挂载时立即运行，而不是在模态框展示时。

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

## Slots

<Slots />