---
title: 'ion-modal'
---

import Props from '@ionic-internal/component-api/v7/modal/props.md';
import Events from '@ionic-internal/component-api/v7/modal/events.md';
import Methods from '@ionic-internal/component-api/v7/modal/methods.md';
import Parts from '@ionic-internal/component-api/v7/modal/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/modal/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/modal/slots.md';

<head>
  <title>ion-modal：Ionic 移动应用自定义模态框 API 组件</title>
  <meta
    name="description"
    content="ion-modal 是出现在移动应用内容上方的对话框，在恢复交互之前必须关闭。了解更多关于自定义模态框组件的信息。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

模态框（Modal）是出现在应用内容上方的对话框，应用必须将其关闭后才能恢复交互。当有大量选项可供选择时，或在过滤列表中的项目时，以及许多其他用例中，它作为选择组件非常有用。

## 内联模态框（推荐）

`ion-modal` 可以直接在模板中编写组件来使用。这减少了你需要连接以呈现模态框的处理程序数量。

在 Angular、React 或 Vue 中使用 `ion-modal` 时，你传入的组件将在模态框关闭时被销毁。由于此功能由 JavaScript 框架提供，在没有 JavaScript 框架的情况下使用 `ion-modal` 不会销毁你传入的组件。如果需要此功能，我们建议使用 `modalController`。

import InlineModalTriggerExample from '@site/static/usage/v7/modal/inline/basic/index.md';

<InlineModalTriggerExample />

### 使用 `isOpen`

`ion-modal` 上的 `isOpen` 属性允许开发者从应用状态控制模态框的呈现状态。这意味着当 `isOpen` 设置为 `true` 时，模态框将显示；当 `isOpen` 设置为 `false` 时，模态框将关闭。

`isOpen` 使用单向数据绑定，这意味着当模态框关闭时，它不会自动设置为 `false`。开发者应监听 `ionModalDidDismiss` 或 `didDismiss` 事件，并将 `isOpen` 设置为 `false`。这样做的原因是防止 `ion-modal` 的内部实现与应用状态紧密耦合。使用单向数据绑定时，模态框只需要关心响应式变量提供的布尔值。而使用双向数据绑定时，模态框需要同时关心布尔值和响应式变量本身的存在性，这可能导致不确定的行为并使应用更难调试。

import InlineModalIsOpenExample from '@site/static/usage/v7/modal/inline/is-open/index.md';

<InlineModalIsOpenExample />

## 控制器模态框

使用 `modalController`，开发者可以以编程方式呈现 `ion-modal`。开发者将完全控制模态框呈现和关闭的时机。

import ControllerExample from '@site/static/usage/v7/modal/controller/index.md';

<ControllerExample />

## 阻止模态框关闭

在模态框中输入数据时，通常需要防止意外数据丢失。`ion-modal` 上的 `canDismiss` 属性使开发者能够控制何时允许关闭模态框。

有两种不同的方式使用 `canDismiss` 属性：设置布尔值或设置回调函数。

:::note
注意：使用 sheet 模态框时，如果没有设置 `0` 断点，则在滑动时不会检查 `canDismiss`。但是，在按下 `Esc` 或硬件返回按钮时仍会检查。
:::

### 设置布尔值

开发者可以将 `canDismiss` 设置为布尔值。如果 `canDismiss` 为 `true`，则当用户尝试关闭模态框时，模态框将关闭。如果 `canDismiss` 为 `false`，则当用户尝试关闭模态框时，模态框不会关闭。

当需要在关闭模态框之前要求执行特定操作时，应使用设置布尔值。例如，如果开发者要求先勾选"使用条款"复选框才能关闭模态框，他们可以先将 `canDismiss` 设置为 `false`，然后在复选框勾选时更新为 `true`。

import CanDismissBooleanExample from '@site/static/usage/v7/modal/can-dismiss/boolean/index.md';

<CanDismissBooleanExample />

### 设置回调函数

开发者可以将 `canDismiss` 设置为一个函数。此函数必须返回一个解析为 `true` 或 `false` 的 `Promise`。如果 Promise 解析为 `true`，则模态框将关闭。如果 Promise 解析为 `false`，则模态框将不会关闭。

当你有关闭条件复杂的情况时（例如在关闭模态框之前显示确认对话框），应使用设置回调函数。用户在此对话框中选择的选项可用于确定模态框是否应继续关闭。

请注意，设置回调函数会导致在使用卡片或 sheet 模态框时手势滑动中断。这是因为 Ionic 无法预先知道你的回调函数将解析为什么。

import CanDismissFunctionExample from '@site/static/usage/v7/modal/can-dismiss/function/index.md';

<CanDismissFunctionExample />

### 阻止滑动关闭

开发者可能希望阻止用户滑动关闭卡片或 sheet 模态框。这可以通过为 `canDismiss` 设置回调函数并检查 `role` 是否为 `gesture` 来实现。

import CanDismissPreventSwipeToCloseExample from '@site/static/usage/v7/modal/can-dismiss/prevent-swipe-to-close/index.md';

<CanDismissPreventSwipeToCloseExample />

### 在子组件中修改关闭行为

在某些情况下，开发者可能需要根据呈现的模态框状态来自定义 `canDismiss` 回调的行为。例如，当开发者希望阻止模态框在其内部表单无效时关闭时，这种自定义特别有用。

为了实现这种自定义，子组件可以采用各种技术，如函数回调、事件触发或其他响应式机制与父组件通信，并更新控制 `canDismiss` 回调的条件。

以下是一个简化的示例，说明子组件如何与父组件交互以修改 `canDismiss` 回调：

import CanDismissChildStateExample from '@site/static/usage/v7/modal/can-dismiss/child-state/index.md';

<CanDismissChildStateExample />

## 卡片模态框

开发者可以创建卡片模态框效果，其中模态框显示为堆叠在应用主要内容上的卡片。要创建卡片模态框，开发者需要在 `ion-modal` 上设置 `presentingElement` 属性。

`presentingElement` 属性接受一个对应在模态框下方显示的元素引用。这通常是对 `ion-router-outlet` 的引用。

`canDismiss` 属性可用于控制是否可以滑动关闭卡片模态框。

:::note
卡片显示样式仅适用于 iOS。
:::

import CardExample from '@site/static/usage/v7/modal/card/basic/index.md';

<CardExample />

## Sheet 模态框

:::info
[内容（Content）](./content)必须在 sheet 模态框内部使用，否则你的模态框内容将无法滚动。
:::

开发者可以创建类似于地图应用中抽屉组件的 sheet 模态框效果。要创建 sheet 模态框，开发者需要在 `ion-modal` 上设置 `breakpoints` 和 `initialBreakpoint` 属性。

`breakpoints` 属性接受一个数组，表示 sheet 在滑动时可以吸附到的每个断点。`[0, 0.5, 1]` 的 `breakpoints` 属性将指示 sheet 可以滑动以显示 0% 的模态框、50% 的模态框和 100% 的模态框。当模态框滑动到 0% 时，将自动关闭。请注意，如果不包含 `0` 断点，则无法通过滑动关闭模态框，但仍可以通过按下 `Esc` 或硬件返回按钮关闭。

`initialBreakpoint` 属性是必需的，以便 sheet 模态框知道在呈现时从哪个断点开始。`initialBreakpoint` 值也必须在 `breakpoints` 数组中存在。给定 `[0, 0.5, 1]` 的 `breakpoints` 值，`0.5` 的 `initialBreakpoint` 值是有效的，因为 `0.5` 在 `breakpoints` 数组中。`0.25` 的 `initialBreakpoint` 值无效，因为 `0.25` 不存在于 `breakpoints` 数组中。

`backdropBreakpoint` 属性可用于自定义 `ion-backdrop` 开始淡入的点。当创建 sheet 下方内容应保持交互的界面时，这很有用。一个常见的用例是覆盖在地图上的 sheet 模态框，其中地图在 sheet 完全展开之前保持可交互。

import SheetExample from '@site/static/usage/v7/modal/sheet/basic/index.md';

<SheetExample />

### 与背景内容交互

import SheetBackgroundContentExample from '@site/static/usage/v7/modal/sheet/background-content/index.md';

<SheetBackgroundContentExample />

### 自定义 Sheet 高度

开发者应使用 `--height` CSS 变量来更改 sheet 模态框的高度，而不是更改 `breakpoints` 数组中的最后一个断点。原因是将 `breakpoints` 数组中的最后一个断点更改为小于 `1` 的值会导致部分模态框无法在视口中访问。

以下示例展示了如何使 sheet 模态框根据其内容自动调整大小。请注意，通过将最大断点保持在 `1`，我们确保整个模态框在视口中可访问。

import SheetAutoHeightExample from '@site/static/usage/v7/modal/sheet/auto-height/index.md';

<SheetAutoHeightExample />

### 手柄行为

Sheet 模态框可以选择渲染一个用于在断点之间拖动 sheet 的手柄指示器。`handleBehavior` 属性可用于配置用户激活手柄时的行为。

import SheetHandleBehaviorExample from '@site/static/usage/v7/modal/sheet/handle-behavior/index.md';

<SheetHandleBehaviorExample />

## 样式

模态框在应用的根部呈现，因此它们覆盖整个应用。此行为适用于内联模态框和从控制器呈现的模态框。因此，自定义模态框样式不能限定到特定组件，因为它们不会应用于模态框。相反，样式必须全局应用。对于大多数开发者来说，将自定义样式放在 `global.css` 中就足够了。

:::note
如果你正在构建 Ionic Angular 应用，样式需要添加到全局样式表文件中。有关更多信息，请阅读下面 Angular 部分的[样式放置](#样式)。
:::

:::note
`ion-modal` 的工作前提是堆叠的模态框尺寸相同。因此，每个后续模态框将没有框阴影且背景遮罩透明度为 `0`。这是为了避免阴影和背景遮罩随着每个添加的模态框而变暗的效果。可以通过设置 `--box-shadow` 和 `--backdrop-opacity` CSS 变量来更改此行为：
:::

```
ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}
```

import ThemeExample from '@site/static/usage/v7/modal/styling/theming/index.md';

<ThemeExample />

### 动画

可以通过使用我们的动画构建器并将动画分配给 `enterAnimation` 和 `leaveAnimation` 来自定义进入和离开动画。

import AnimationsExample from '@site/static/usage/v7/modal/styling/animations/index.md';

<AnimationsExample />

## 自定义对话框

虽然 `ion-modal` 最常用于全页视图、卡片或 sheet，但也可以将其用于自定义对话框。如果开发者需要的界面比 [ion-alert](./alert) 或 [ion-loading](./loading) 等组件提供的更复杂，这很有用。

import CustomDialogs from '@site/static/usage/v7/modal/custom-dialogs/index.md';

<CustomDialogs />

创建自定义对话框时需要记住的几点：

- `ion-content` 旨在用于全页模态框、卡片和 sheet。如果你的自定义对话框具有动态或未知大小，则不应使用 `ion-content`。
- 创建自定义对话框提供了一种从默认模态框体验中退出的方式。因此，自定义对话框不应与卡片或 sheet 模态框一起使用。

## 接口

### ModalOptions

以下是使用 `modalController` 时可用的所有选项。这些选项应在调用 `modalController.create()` 时提供。

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

## 无障碍访问

### 键盘交互

| 键             | 描述           |
| -------------- | -------------- |
| <kbd>Esc</kbd> | 关闭模态框     |

### 标签

模态框具有 [`dialog`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role) 角色。因此，开发者**必须**正确为模态框添加标签。如果模态框使用 `ion-title`，可以通过在 `ion-modal` 上设置 [`aria-labelledby`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 来使用其中的文本标记模态框本身。如果模态框包含额外的描述性文本，可以通过使用 [`aria-describedby`](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) 将此文本与模态框关联。

### 屏幕阅读器

模态框应用了 `aria-modal` 属性。此属性可能导致辅助技术将导航限制到模态框元素的内容。因此，使用移动到上一个或下一个项目的手势可能不会聚焦于模态框外部的元素。即使在使用 `backdropBreakpoint` 属性禁用了 sheet 模态框的背景遮罩时也是如此。

如果开发者手动移动焦点，辅助技术不会将导航限制到模态框元素的内容。然而，对于启用了焦点捕获的模态框，Ionic 不支持手动将焦点移出模态框。

更多信息请参阅 https://w3c.github.io/aria/#aria-modal。

### 焦点捕获

当模态框呈现时，焦点将被捕获在呈现的模态框内部。用户可以聚焦模态框内的其他交互元素，但在模态框呈现期间永远无法聚焦模态框外部的交互元素。对于呈现多个堆叠模态框的应用，焦点将被捕获在最后呈现的模态框上。

通过 `backdropBreakpoint` 属性禁用了背景遮罩的 sheet 模态框不受焦点捕获的影响。

### Sheet 模态框

使用 `backdropBreakpoint` 属性时，Sheet 模态框允许用户与模态框后面的内容交互。背景遮罩将在此断点及以下被禁用，并在超过断点后启用。

当背景遮罩被禁用时，用户可以使用指针或键盘与 sheet 模态框外部的元素交互。由于使用了 `aria-modal`，辅助技术可能默认不会聚焦到 sheet 模态框外部。我们建议避免在此处使用自动聚焦等功能，因为它可能导致辅助技术在不警告用户的情况下在两个交互上下文之间跳转。

## 性能

### 挂载内部内容

内联 `ion-modal` 的内容在关闭时会被卸载。如果此内容渲染成本高，开发者可以使用 `keepContentsMounted` 属性，在模态框挂载时立即挂载内容。这有助于优化应用的响应速度，因为在模态框打开时内部内容已经挂载。

import Mount from '@site/static/usage/v7/modal/performance/mount/index.md';

<Mount />

开发者在使用 `keepContentsMounted` 时应记住以下几点：

- 此功能应作为处理现有性能问题的最后手段。在使用此功能之前，请尝试识别并解决性能瓶颈。此外，不要使用此功能来预判性能问题。

- 此功能仅在使用 JavaScript 框架时需要。未使用框架的开发者可以将要渲染的内容传递给模态框，内容将自动渲染。

- 此功能仅适用于内联模态框。使用 `modalController` 创建的模态框不是提前创建的，因此内部内容也不会创建。

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
