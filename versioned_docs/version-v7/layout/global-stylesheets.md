---
title: Global Stylesheets
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>全局样式表：Ionic 应用的 CSS 组件样式选项</title>
  <meta
    name="description"
    content="虽然 Ionic 组件样式是自包含的，但需要包含多个全局样式表和 CSS 选项才能使用所有功能。阅读本文了解更多信息。"
  />
</head>

虽然 Ionic Framework 的组件样式是自包含的，但为了使用 Ionic 的所有功能，需要包含一些全局样式表。其中一些样式表是 Ionic Framework 应用正常显示和行为所必需的，另一些则包含可快速为应用添加样式的可选工具类。

## 可用样式表

### 必需样式表

以下 CSS 文件必须包含，Ionic Framework 才能正常工作。

#### core.css

这是唯一一个 Ionic 组件正常工作所必需的样式表。它包含应用特定的样式，并允许 `color` 属性在所有组件中生效。如果不包含此文件，颜色将不会显示，并且某些元素可能无法正确呈现。

### 推荐样式表

建议在 Ionic Framework 应用中包含以下 CSS 文件。如果不包含这些文件，某些元素可能会出现不希望的样式。如果 Ionic Framework 组件在应用外部使用，这些文件可能不是必需的。

#### structure.css

将样式应用于 `<html>` 元素，并将 `box-sizing` 默认设置为 `border-box`。它确保在移动设备上滚动行为与原生应用一致。

#### typography.css

此样式表更改整个文档的字体族，并修改标题元素的字体样式。它还会为某些原生文本元素应用定位样式。此文件是 [动态字体缩放](./dynamic-font-scaling) 正常工作的必要条件。

#### normalize.css

使浏览器更一致地按照现代标准渲染所有元素。它基于 [Normalize.css](https://necolas.github.io.io/normalize.css/) 构建。

<LegacyAnchor id="optional" />

### 可选样式表

以下 CSS 文件是可选的，如果应用程序未使用任何相关功能，可以安全地注释掉或删除。

#### padding.css

添加实用工具类来修改任何元素的内边距或外边距，用法信息请参阅 [CSS 工具类](css-utilities.md#content-space)。

#### float-elements.css

添加实用工具类来根据断点和方向浮动元素，用法信息请参阅 [CSS 工具类](css-utilities.md#element-placement)。

#### text-alignment.css

添加实用工具类来根据断点对齐元素的文本或调整空白字符，用法信息请参阅 [CSS 工具类](css-utilities.md#text-alignment)。

#### text-transformation.css

添加实用工具类来根据断点将元素的文本转换为 `uppercase`、`lowercase` 或 `capitalize`，用法信息请参阅 [CSS 工具类](css-utilities.md#text-transformation)。

#### flex-utils.css

添加实用工具类来对齐弹性容器和项目，用法信息请参阅 [CSS 工具类](css-utilities.md#flex-properties)。

#### display.css

添加实用工具类来根据断点隐藏任何元素，用法信息请参阅 [CSS 工具类](css-utilities.md#element-display)。

## 使用方式

请参阅 [Ionic 包](../intro/cdn.md) 了解如何根据框架包含全局样式表，以及 [CSS 工具类](css-utilities.md) 了解如何使用可选工具类。