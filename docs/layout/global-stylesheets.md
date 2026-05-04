---
title: 全局样式表
---

<head>
  <title>全局样式表：Ionic 应用中的 CSS 组件样式选项</title>
  <meta
    name="description"
    content="虽然 Ionic 组件样式是自包含的，但需要包含几个全局样式表和 CSS 选项才能使用全部功能。阅读了解更多信息。"
  />
</head>

尽管 Ionic Framework 组件样式是自包含的，但需要包含几个全局样式表才能使用 Ionic 的所有功能。其中一些样式表是 Ionic Framework 应用正常显示和运行所必需的，另一些则包含可快速为应用设置样式的实用工具。

## 可用样式表

### 必需样式表

必须包含以下 CSS 文件，Ionic Framework 才能正常工作。

#### core.css

此文件是 Ionic 组件正常工作所需的唯一样式表。它包含应用特定的样式，并允许 `color` 属性在各组件间生效。如果不包含此文件，颜色将无法显示，某些元素的呈现也可能出现问题。

### 推荐样式表

建议在 Ionic Framework 应用中包含以下 CSS 文件。如果不包含，某些元素可能会出现不理想的样式。如果在应用外部使用 Ionic Framework 组件，这些文件可能不是必需的。

#### structure.css

将样式应用到 `<html>` 元素，并将 `box-sizing` 默认设置为 `border-box`。它确保滚动行为在移动设备上表现得像原生应用一样。

#### typography.css

排版样式会修改整个文档的字体家族，并调整标题元素的字体样式。它还会为一些原生文本元素应用定位样式。此文件是 [动态字体缩放](./dynamic-font-scaling) 功能正常工作所必需的。

#### normalize.css

使浏览器更一致地渲染所有元素，并符合现代标准。它基于 [Normalize.css](https://necolas.github.io.io/normalize.css/) 构建。

<LegacyAnchor id="optional" />

### 可选样式表

以下 CSS 文件是可选的，如果应用未使用任何相关功能，可以安全地注释掉或移除。

#### padding.css

添加实用类来修改任何元素的内边距或外边距，具体用法请参阅 [CSS 实用工具](css-utilities.md#content-space)。

#### float-elements.css

添加实用类来根据断点和方向浮动元素，具体用法请参阅 [CSS 实用工具](css-utilities.md#element-placement)。

#### text-alignment.css

添加实用类来根据断点对齐元素文本或调整空白字符处理，具体用法请参阅 [CSS 实用工具](css-utilities.md#text-alignment)。

#### text-transformation.css

添加实用类来根据断点将元素文本转换为 `uppercase`、`lowercase` 或 `capitalize`，具体用法请参阅 [CSS 实用工具](css-utilities.md#text-transformation)。

#### flex-utils.css

添加实用类来对齐弹性容器和项目，具体用法请参阅 [CSS 实用工具](css-utilities.md#flex-properties)。

#### display.css

添加实用类来根据断点隐藏任何元素，具体用法请参阅 [CSS 实用工具](css-utilities.md#element-display)。

## 使用方法

关于如何根据框架包含全局样式表，请参阅 [Ionic 包](../intro/cdn.md)；关于如何使用可选实用工具，请参阅 [CSS 实用工具](css-utilities.md)。