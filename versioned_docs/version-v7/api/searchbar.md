---
title: 'ion-searchbar'
---

import Props from '@ionic-internal/component-api/v7/searchbar/props.md';
import Events from '@ionic-internal/component-api/v7/searchbar/events.md';
import Methods from '@ionic-internal/component-api/v7/searchbar/methods.md';
import Parts from '@ionic-internal/component-api/v7/searchbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/searchbar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/searchbar/slots.md';

<head>
  <title>ion-searchbar: 用于搜索集合的搜索栏</title>
  <meta
    name="description"
    content="搜索栏代表一个可用于搜索集合的文本字段。了解如何在 Android 和 iOS 键盘显示中将 Ion-Search Bar 输入为图标。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

搜索栏代表一个可用于搜索集合的文本字段。它们可以显示在工具栏或主要内容区域内。搜索列表时应使用搜索栏而非普通输入框。

## 基本用法

import Basic from '@site/static/usage/v7/searchbar/basic/index.md';

<Basic />

## 搜索图标

搜索栏的输入字段左侧会显示一个搜索图标。可以将其自定义为任意 [Ionicon](https://ionic.io/ionicons/)。

import SearchIcon from '@site/static/usage/v7/searchbar/search-icon/index.md';

<SearchIcon />

## 清除按钮

当搜索栏有值或在搜索栏文本字段中输入内容时，会显示清除按钮。点击清除按钮将清空文本字段，输入焦点仍会保留。默认情况下，清除按钮设置为在聚焦搜索栏时显示，但也可以设置为始终显示或从不显示。清除按钮内的图标同样可以自定义为任意 [Ionicon](https://ionic.io/ionicons/)。

import ClearButton from '@site/static/usage/v7/searchbar/clear-button/index.md';

<ClearButton />

## 取消按钮

可以启用取消按钮，点击后将清空输入并失去焦点。默认情况下，取消按钮设置为从不显示，但可以设置为始终显示或仅在聚焦搜索栏时显示。在 `ios` 模式下，取消按钮显示为文本；在 `md` 模式下，则显示为图标。文本和图标都可以使用不同的属性进行自定义，其中图标可以接受任意 [Ionicon](https://ionic.io/ionicons/)。

import CancelButton from '@site/static/usage/v7/searchbar/cancel-button/index.md';

<CancelButton />

## 工具栏中的搜索栏

当搜索栏放置在工具栏内部时，其样式会呈现原生外观。在 iOS 中，搜索栏应放置在独立的工具栏中，位于包含页面标题的工具栏下方。在 Material Design 中，搜索栏要么持久显示在独立的工具栏中，要么展开覆盖包含页面标题的工具栏。

<!-- 复用 Toolbar 目录中的示例 -->

import Toolbar from '@site/static/usage/v7/toolbar/searchbars/index.md';

<Toolbar />

## 防抖处理

可以为搜索栏设置防抖延迟，以推迟触发 `ionInput` 事件。这在查询数据时非常有用，可以用来等待发起请求，而不是每次在输入框中输入字符时都请求数据。

import Debounce from '@site/static/usage/v7/searchbar/debounce/index.md';

<Debounce />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/searchbar/theming/colors/index.md';

<Colors />

### CSS 自定义属性

搜索栏使用作用域封装，这意味着它会在运行时通过为每个样式附加一个额外的类来自动限定其 CSS 范围。要覆盖 CSS 中的作用域选择器，需要更高优先级的选择器。直接针对 `ion-searchbar` 进行自定义是无效的，因此我们建议添加一个类并通过该类进行自定义。

import CSSProps from '@site/static/usage/v7/searchbar/theming/css-properties/index.md';

<CSSProps />

## 键盘显示

### Android

默认情况下，点击输入框会使键盘出现，提交按钮上会显示放大镜图标。你可以选择性地将 `inputmode` 属性设置为 `"search"`，这样会将图标从放大镜更改为回车符号。

### iOS

默认情况下，点击输入框会使键盘出现，灰色提交按钮上会显示“return”文本。你可以选择性地将 `inputmode` 属性设置为 `"search"`，这样会将文本从“return”更改为“go”，并将按钮颜色从灰色更改为蓝色。或者，你也可以将 `ion-searchbar` 包裹在带有 `action` 属性的 `form` 元素中。这会使键盘出现一个蓝色的提交按钮，上面显示“search”。

## 接口

### SearchbarChangeEventDetail

```typescript
interface SearchbarChangeEventDetail {
  value?: string;
}
```

### SearchbarCustomEvent

虽然不是必需的，但可以使用此接口代替 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

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