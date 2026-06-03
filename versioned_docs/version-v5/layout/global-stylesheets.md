---
title: 全局样式表
---

# 全局样式表

虽然 Ionic Framework 组件的样式是自包含的，但有几个全局样式表需要包含才能使用 Ionic 的所有功能。其中一些样式表是 Ionic Framework 应用正常显示和运行所必需的，另一些则包含用于快速样式化应用的可选工具。

## 可用样式

### 必需的

必须包含以下 CSS 文件才能使 Ionic Framework 正常工作。

#### core.css

这个文件是使 Ionic 组件正常工作的唯一必需的样式表。它包含应用特定的样式，并允许 `color` 属性在组件间起作用。如果未包含此文件，颜色将不会显示，某些元素可能无法正常显示。

### 推荐的

建议在 Ionic Framework 应用中包含以下 CSS 文件。如果未包含它们，某些元素可能会出现不希望的样式。如果在应用之外使用 Ionic Framework 组件，则可能不需要这些文件。

#### structure.css

对 `<html>` 应用样式，并将 `box-sizing` 默认设置为 `border-box`。它确保滚动行为在移动设备上与原生一致。

#### typography.css

排版样式更改整个文档的 font-family，并修改标题元素的字体样式。它还为某些原生文本元素应用定位样式。

#### normalize.css

使浏览器更一致地渲染所有元素，并符合现代标准。它基于 [Normalize.css](https://necolas.github.io/normalize.css/)。

### 可选的

以下一组 CSS 文件是可选的，如果应用未使用任何相关功能，可以安全地注释掉或删除。

#### padding.css

添加用于修改任何元素的内边距或外边距的工具类，参见 [CSS 工具](css-utilities.md#content-space)了解用法信息。

#### float-elements.css

添加用于根据断点和侧边浮动元素的工具类，参见 [CSS 工具](css-utilities.md#element-placement)了解用法信息。

#### text-alignment.css

添加用于对齐元素文本或根据断点调整空白的工具类，参见 [CSS 工具](css-utilities.md#text-alignment)了解用法信息。

#### text-transformation.css

添加用于根据断点将元素文本转换为 `uppercase`、`lowercase` 或 `capitalize` 的工具类，参见 [CSS 工具](css-utilities.md#text-transformation)了解用法信息。

#### flex-utils.css

添加用于对齐 flex 容器和项目的工具类，参见 [CSS 工具](css-utilities.md#flex-properties)了解用法信息。

#### display.css

添加用于根据断点隐藏任何元素的工具类，参见 [CSS 工具](css-utilities.md#element-display)了解用法信息。

## 用法

请参阅 [Ionic 包](../intro/cdn.md)了解如何根据框架包含全局样式表，并参阅 [CSS 工具](css-utilities.md)了解如何使用可选工具。
