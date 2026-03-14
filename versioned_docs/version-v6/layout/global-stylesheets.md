---
title: Global Stylesheets
---

<head>
  <title>全局样式表：适用于 Ionic 应用的样式化 CSS 组件选项</title>
  <meta
    name="description"
    content="虽然 Ionic 组件样式是独立的，但需要包含几个全局样式表和 CSS 选项才能使用所有功能。阅读以了解更多信息。"
  />
</head>

虽然 Ionic Framework 的组件样式是独立的，但是为了使用 Ionic 的所有功能，应该包含几个全局样式表。其中一些样式表是 Ionic Framework 应用正常外观和行为所必需的，而其他一些则包含可选的实用工具，用于快速为应用添加样式。

## 可用样式表

### 必需

必须包含以下 CSS 文件，Ionic Framework 才能正常工作。

#### core.css

此文件是确保 Ionic 组件正常工作所需的唯一样式表。它包含应用特定的样式，并允许 `color` 属性在组件间生效。如果不包含此文件，颜色将无法显示，某些元素可能无法正确呈现。

### 推荐

建议在 Ionic Framework 应用中包含以下 CSS 文件。如果不包含，某些元素可能会呈现不理想的样式。如果在应用之外使用 Ionic Framework 组件，这些文件可能不是必需的。

#### structure.css

将样式应用于 `<html>` 元素，并将 `box-sizing` 默认设置为 `border-box`。确保在移动设备上滚动行为与原生体验一致。

#### typography.css

Typography 会更改整个文档的字体族，并修改标题元素的字体样式。它还将定位样式应用于一些原生文本元素。

#### normalize.css

使浏览器更一致地渲染所有元素，并符合现代标准。它基于 [Normalize.css](https://necolas.github.io/normalize.css/) 构建。

### 可选

以下 CSS 文件是可选的，如果应用不使用任何相关功能，可以安全地注释掉或删除。

#### padding.css

添加实用类来修改任何元素的内边距或外边距，请参阅 [CSS 实用工具](css-utilities.md#content-space) 获取使用信息。

#### float-elements.css

添加实用类来根据断点和方向浮动元素，请参阅 [CSS 实用工具](css-utilities.md#element-placement) 获取使用信息。

#### text-alignment.css

添加实用类来根据断点对齐元素的文本或调整空白，请参阅 [CSS 实用工具](css-utilities.md#text-alignment) 获取使用信息。

#### text-transformation.css

添加实用类来根据断点将元素的文本转换为 `uppercase`、`lowercase` 或 `capitalize`，请参阅 [CSS 实用工具](css-utilities.md#text-transformation) 获取使用信息。

#### flex-utils.css

添加实用类来对齐弹性容器和项目，请参阅 [CSS 实用工具](css-utilities.md#flex-properties) 获取使用信息。

#### display.css

添加实用类来根据断点隐藏任何元素，请参阅 [CSS 实用工具](css-utilities.md#element-display) 获取使用信息。

## 使用指南

请参考 [Ionic 包](../intro/cdn.md) 了解如何根据框架包含全局样式表，以及 [CSS 实用工具](css-utilities.md) 了解如何使用可选实用工具。