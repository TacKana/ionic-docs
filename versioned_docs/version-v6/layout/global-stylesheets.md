---
title: 全局样式表
---

<head>
  <title>全局样式表：Ionic 应用的样式化 CSS 组件选项</title>
  <meta
    name="description"
    content="虽然 Ionic 组件样式是自包含的，但有几个全局样式表和 CSS 选项需要包含以利用所有功能。阅读以了解更多信息。"
  />
</head>

虽然 Ionic Framework 组件样式是自包含的，但需要包含几个全局样式表才能使用 Ionic 的所有功能。其中一些样式表是让 Ionic Framework 应用正常显示和行为所必需的，另一些则包含可选的实用工具，用于快速样式化你的应用。

## 可用样式表

### 必需

以下 CSS 文件必须包含，Ionic Framework 才能正常工作。

#### core.css

这个文件是让 Ionic 组件正常工作所需的唯一样式表。它包含应用特定的样式，并允许 `color` 属性在组件之间工作。如果不包含此文件，颜色将不会显示，某些元素可能无法正常显示。

### 推荐

以下 CSS 文件建议在 Ionic Framework 应用中包含。如果不包含它们，某些元素可能具有不理想的样式。如果在应用之外使用 Ionic Framework 组件，可能不需要这些文件。

#### structure.css

为 `<html>` 应用样式，并将 `box-sizing` 默认设置为 `border-box`。确保在移动设备上滚动行为类似原生。

#### typography.css

更改整个文档的字体系列，并修改标题元素的字体样式。它还会为一些原生文本元素应用定位样式。

#### normalize.css

使浏览器更一致地渲染所有元素，并符合现代标准。它基于 [Normalize.css](https://necolas.github.io/normalize.css/)。

### 可选

以下 CSS 文件集是可选的，如果应用未使用任何相关功能，可以安全地注释掉或移除。

#### padding.css

添加实用工具类来修改任何元素的内边距或外边距，使用信息请参见 [CSS 实用工具](css-utilities.md#content-space)。

#### float-elements.css

添加实用工具类，根据断点和方向浮动元素，使用信息请参见 [CSS 实用工具](css-utilities.md#element-placement)。

#### text-alignment.css

添加实用工具类，根据断点对齐元素文本或调整空白，使用信息请参见 [CSS 实用工具](css-utilities.md#text-alignment)。

#### text-transformation.css

添加实用工具类，根据断点将元素文本转换为 `uppercase`、`lowercase` 或 `capitalize`，使用信息请参见 [CSS 实用工具](css-utilities.md#text-transformation)。

#### flex-utils.css

添加实用工具类来对齐 flex 容器和项目，使用信息请参见 [CSS 实用工具](css-utilities.md#flex-properties)。

#### display.css

添加实用工具类，根据断点隐藏任何元素，使用信息请参见 [CSS 实用工具](css-utilities.md#element-display)。

## 使用方式

请参考 [Ionic 包](../intro/cdn.md)了解如何根据框架包含全局样式表，以及 [CSS 实用工具](css-utilities.md)了解如何使用可选的实用工具。
