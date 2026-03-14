---
title: 搜索栏组件
---
import Props from '@ionic-internal/component-api/v8/searchbar/props.md';
import Events from '@ionic-internal/component-api/v8/searchbar/events.md';
import Methods from '@ionic-internal/component-api/v8/searchbar/methods.md';
import Parts from '@ionic-internal/component-api/v8/searchbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/searchbar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/searchbar/slots.md';

<head>
  <title>ion-searchbar：用于搜索集合的搜索栏</title>
  <meta name="description" content="搜索栏代表可用于搜索集合的文本字段。了解如何在 Android 和 iOS 键盘显示中将 Ion-Search Bar 作为图标输入。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

搜索栏是一种文本字段，可用于搜索集合。它们可以显示在工具栏或主要内容区域中。在搜索列表时，应使用搜索栏而非普通输入框。

## 基本用法

import Basic from '@site/static/usage/v8/searchbar/basic/index.md';

<Basic />

## 搜索图标

搜索栏的输入字段左侧会显示一个搜索图标。该图标可以自定义为任意 [Ionicon](https://ionic.io/ionicons/)。

import SearchIcon from '@site/static/usage/v8/searchbar/search-icon/index.md';

<SearchIcon />

## 清除按钮

当搜索栏有值或在文本字段中输入内容时，会显示清除按钮。点击清除按钮将清空文本字段，且输入焦点保持不变。默认情况下，清除按钮在聚焦搜索栏时显示，但也可以设置为始终显示或从不显示。清除按钮内的图标同样可以自定义为任意 [Ionicon](https://ionic.io/ionicons/)。

import ClearButton from '@site/static/usage/v8/searchbar/clear-button/index.md';

<ClearButton />

## 取消按钮

可以启用取消按钮，点击该按钮将清除输入内容并失去焦点。默认情况下，取消按钮设置为从不显示，但也可以设置为始终显示或仅在聚焦搜索栏时显示。在 `ios` 模式下，取消按钮显示为文本；在 `md` 模式下，则显示为图标。文本和图标均可使用不同属性进行自定义，其中图标可接受任意 [Ionicon](https://ionic.io/ionicons/)。

import CancelButton from '@site/static/usage/v8/searchbar/cancel-button/index.md';

<CancelButton />

## 工具栏中的搜索栏

当放置在工具栏内时，搜索栏会呈现原生样式。在 iOS 中，搜索栏应放置在其独立的工具栏中，位于包含页面标题的工具栏下方。在 Material Design 中，搜索栏要么持久显示在其独立的工具栏中，要么展开覆盖包含页面标题的工具栏。

<!-- 复用 Toolbar 目录中的演示示例 -->
import Toolbar from '@site/static/usage/v8/toolbar/searchbars/index.md';

<Toolbar />

## 防抖

可以为搜索栏设置防抖延迟，以推迟触发 `ionInput` 事件。这在查询数据时非常有用，因为它可以用于等待发起请求，而不是每次在输入框中输入字符时都请求数据。

import Debounce from '@site/static/usage/v8/searchbar/debounce/index.md';

<Debounce />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v8/searchbar/theming/colors/index.md';

<Colors />

### CSS 自定义属性

搜索栏使用作用域封装，这意味着它会在运行时通过为每个样式附加一个额外的类来自动限定其 CSS 范围。要覆盖 CSS 中的作用域选择器，需要[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。直接针对 `ion-searchbar` 进行自定义将不起作用，因此我们建议添加一个类并通过该类进行自定义。

import CSSProps from '@site/static/usage/v8/searchbar/theming/css-properties/index.md';

<CSSProps />

## 键盘显示

### Android

默认情况下，点击输入框会触发键盘显示，提交按钮上会有一个放大镜图标。您可以选择将 `inputmode` 属性设置为 `"search"`，这会将图标从放大镜更改为回车键。

### iOS

默认情况下，点击输入框会触发键盘显示，灰色提交按钮上会显示“return”文本。您可以选择将 `inputmode` 属性设置为 `"search"`，这会将文本从“return”更改为“go”，并将按钮颜色从灰色更改为蓝色。或者，您可以将 `ion-searchbar` 包裹在具有 `action` 属性的 `form` 元素中。这将使键盘显示一个蓝色的提交按钮，上面写着“search”。

## 接口

### SearchbarChangeEventDetail

```typescript
interface SearchbarChangeEventDetail {
  value?: string;
}
```

### SearchbarCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

```typescript
interface SearchbarCustomEvent extends CustomEvent {
  detail: SearchbarChangeEventDetail;
  target: HTMLIonSearchbarElement;
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