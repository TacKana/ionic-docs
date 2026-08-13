---
title: "ion-searchbar"
---
import Props from '@ionic-internal/component-api/v8/searchbar/props.md';
import Events from '@ionic-internal/component-api/v8/searchbar/events.md';
import Methods from '@ionic-internal/component-api/v8/searchbar/methods.md';
import Parts from '@ionic-internal/component-api/v8/searchbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/searchbar/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/searchbar/slots.md';

<head>
  <title>ion-searchbar：用于搜索集合的搜索栏</title>
  <meta name="description" content="搜索栏代表一个文本字段，可用于搜索集合。了解如何在 Android 和 iOS 键盘上输入 Ion-SearchBar 作为图标。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

搜索栏代表一个文本字段，可用于搜索集合。它们可以显示在工具栏内部或主要内容中。搜索列表时应使用搜索栏而不是输入框。


## 基本用法

import Basic from '@site/static/usage/v8/searchbar/basic/index.md';

<Basic />


## 搜索图标

搜索图标显示在搜索栏中输入字段的左侧。它可以自定义为任何 [Ionicon](https://ionic.io/ionicons/)。

import SearchIcon from '@site/static/usage/v8/searchbar/search-icon/index.md';

<SearchIcon />


## 清除按钮

当搜索栏有值或在搜索栏的文本字段中输入内容时，会显示一个清除按钮。点击清除按钮将擦除文本字段，并且输入框将保持焦点。默认情况下，清除按钮设置为在搜索栏获得焦点时显示，但可以设置为始终显示或从不显示。清除按钮内的图标也可以自定义为任何 [Ionicon](https://ionic.io/ionicons/)。

import ClearButton from '@site/static/usage/v8/searchbar/clear-button/index.md';

<ClearButton />


## 取消按钮

可以启用取消按钮，点击后会清除输入并失去焦点。默认情况下，取消按钮设置为从不显示，但可以设置为始终显示或仅在搜索栏获得焦点时显示。取消按钮在 `ios` 模式下显示为文本，在 `md` 模式下显示为图标。文本和图标都可以使用不同的属性进行自定义，图标可以接受任何 [Ionicon](https://ionic.io/ionicons/)。

import CancelButton from '@site/static/usage/v8/searchbar/cancel-button/index.md';

<CancelButton />


## 工具栏中的搜索栏

搜索栏放置在工具栏内时，样式会呈现原生风格。在 iOS 中，搜索栏应放置在自己的工具栏中，位于包含页面标题的工具栏下方。在 Material Design 中，搜索栏要么持续显示在自己的工具栏中，要么展开覆盖包含页面标题的工具栏。

{/* 复用 Toolbar 目录下的 playground */}
import Toolbar from '@site/static/usage/v8/toolbar/searchbars/index.md';

<Toolbar />


## 防抖

可以在搜索栏上设置防抖，以延迟触发 `ionInput` 事件。这在查询数据时非常有用，因为它可以用于等待发起请求，而不是每次在输入框中输入一个字符就请求数据。

import Debounce from '@site/static/usage/v8/searchbar/debounce/index.md';

<Debounce />


## 主题

### 颜色

import Colors from '@site/static/usage/v8/searchbar/theming/colors/index.md';

<Colors />

### CSS 自定义属性

搜索栏使用作用域封装，这意味着它会在运行时通过为每个样式附加一个额外的类来自动限定其 CSS 的作用域。在 CSS 中覆盖作用域选择器需要具有[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。针对 `ion-searchbar` 进行自定义将不起作用，因此我们建议添加一个类并以这种方式进行自定义。

import CSSProps from '@site/static/usage/v8/searchbar/theming/css-properties/index.md';

<CSSProps />


## 键盘显示

### Android

默认情况下，点击输入框会导致键盘出现，提交按钮上显示放大镜图标。你可以选择将 `inputmode` 属性设置为 `"search"`，这会将图标从放大镜更改为回车键。

### iOS

默认情况下，点击输入框会导致键盘出现，灰色提交按钮上显示文本"return"。你可以选择将 `inputmode` 属性设置为 `"search"`，这会将文本从"return"更改为"go"，并将按钮颜色从灰色更改为蓝色。或者，你可以将 `ion-searchbar` 包装在带有 `action` 属性的 `form` 元素中。这将导致键盘出现一个蓝色提交按钮，上面显示"search"。

## 接口

### SearchbarChangeEventDetail

```typescript
interface SearchbarChangeEventDetail {
  value?: string;
}
```

### SearchbarCustomEvent

虽然不是必需的，但此接口可以替代 `CustomEvent` 接口，用于与此组件发出的 Ionic 事件提供更强的类型支持。

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
