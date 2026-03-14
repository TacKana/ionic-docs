---
title: 全局样式表
---

# 全局样式表

尽管 Ionic Framework 组件样式是独立自包含的，但仍有一些全局样式表需要引入以使用 Ionic 的所有功能。其中一些样式表是 Ionic Framework 应用正常显示和运行所必需的，而另一些则包含可选的实用工具类，用于快速美化应用样式。

## 可用样式表

### 必需样式表

以下 CSS 文件必须引入，否则 Ionic Framework 将无法正常工作。

#### core.css

该文件是 Ionic 组件正常工作的唯一必需样式表。它包含应用特定的样式，并使 `color` 属性能够在各组件间生效。如果不引入此文件，颜色将无法正确显示，某些元素也可能无法正常呈现。

### 推荐样式表

以下 CSS 文件在 Ionic Framework 应用中推荐引入。如果未引入，某些元素可能会出现不期望的样式。如果 Ionic Framework 组件在应用外部使用，这些文件可能不是必需的。

#### structure.css

该样式表为 `<html>` 元素应用样式，并将 `box-sizing` 默认设为 `border-box`。它能确保移动设备上的滚动行为与原生应用一致。

#### typography.css

该样式表修改整个文档的字体族，并调整标题元素的字体样式。同时，它还为一些原生文本元素应用定位样式。

#### normalize.css

使浏览器更一致地渲染所有元素，并符合现代标准。它基于 [Normalize.css](https://necolas.github.io/normalize.css/) 构建。

### 可选样式表

以下 CSS 文件是可选的，如果应用未使用相关功能，可以安全地注释掉或移除。

#### padding.css

添加实用工具类来修改任何元素的边距（padding）或外边距（margin），用法请参考 [CSS 实用工具](css-utilities.md#内容间距)。

#### float-elements.css

添加实用工具类，根据断点和方向浮动元素，用法请参考 [CSS 实用工具](css-utilities.md#元素定位)。

#### text-alignment.css

添加实用工具类，根据断点对齐元素文本或调整空白字符，用法请参考 [CSS 实用工具](css-utilities.md#文本对齐)。

#### text-transformation.css

添加实用工具类，根据断点将元素文本转换为 `uppercase`、`lowercase` 或 `capitalize`，用法请参考 [CSS 实用工具](css-utilities.md#文本转换)。

#### flex-utils.css

添加实用工具类来对齐弹性容器和项目，用法请参考 [CSS 实用工具](css-utilities.md#弹性属性)。

#### display.css

添加实用工具类，根据断点隐藏任何元素，用法请参考 [CSS 实用工具](css-utilities.md#元素显示)。

## 使用方法

关于如何根据框架引入全局样式表，请参考 [Ionic 包](../intro/cdn.md)。关于如何使用可选实用工具类，请参考 [CSS 实用工具](css-utilities.md)。