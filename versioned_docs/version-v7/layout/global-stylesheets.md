---
title: 全局样式表
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>全局样式表：Ionic 应用的样式化 CSS 组件选项</title>
  <meta
    name="description"
    content="虽然 Ionic 组件样式是自包含的，但有几种全局样式表和 CSS 选项需要包含才能使用所有功能。阅读了解更多。"
  />
</head>

虽然 Ionic Framework 组件样式是自包含的，但有几种全局样式表需要包含才能使用 Ionic 的所有功能。某些样式表是让 Ionic Framework 应用正常显示和运行所必需的，而其他样式表则包含可选的实用工具，用于快速样式化您的应用。

## 可用样式表

### 必需的

以下 CSS 文件必须包含在内，Ionic Framework 才能正常工作。

#### core.css

该文件是 Ionic 组件正常工作唯一必需的样式表。它包含应用特定的样式，并允许 `color` 属性在组件之间工作。如果未包含此文件，颜色将不会显示，某些元素也可能无法正常显示。

### 推荐的

以下 CSS 文件建议在 Ionic Framework 应用中包含。如果未包含，某些元素可能会出现不理想的样式。如果在应用之外使用 Ionic Framework 组件，这些文件可能不是必需的。

#### structure.css

为 `<html>` 应用样式，并将 `box-sizing` 默认为 `border-box`。它确保滚动行为在移动设备上类似原生体验。

#### typography.css

排版样式会更改整个文档的 font-family，并修改标题元素的字体样式。它还会为某些原生文本元素应用定位样式。该文件是[动态字体缩放](./dynamic-font-scaling)功能正常工作所必需的。

#### normalize.css

使浏览器更一致地渲染所有元素，并符合现代标准。它基于 [Normalize.css](https://necolas.github.io/normalize.css/)。

### 可选的

以下一组 CSS 文件是可选的，如果应用未使用任何相关功能，可以安全地注释掉或删除。

#### padding.css

添加实用类来修改任何元素的内边距或外边距，使用信息请参阅 [CSS 工具](css-utilities.md#内容间距)。

#### float-elements.css

添加实用类来基于断点和侧边浮动元素，使用信息请参阅 [CSS 工具](css-utilities.md#元素放置)。

#### text-alignment.css

添加实用类来基于断点对齐元素文本或调整空白，使用信息请参阅 [CSS 工具](css-utilities.md#文本对齐)。

#### text-transformation.css

添加实用类来基于断点将元素文本转换为 `uppercase`、`lowercase` 或 `capitalize`，使用信息请参阅 [CSS 工具](css-utilities.md#文本转换)。

#### flex-utils.css

添加实用类来对齐 flex 容器和项目，使用信息请参阅 [CSS 工具](css-utilities.md#flex-属性)。

#### display.css

添加实用类来基于断点隐藏任何元素，使用信息请参阅 [CSS 工具](css-utilities.md#元素显示)。

## 使用方法

请参阅 [Ionic 包](../intro/cdn.md)了解如何根据框架包含全局样式表，以及 [CSS 工具](css-utilities.md)了解如何使用可选的实用工具。
