---
title: 主题基础
sidebar_label: 基础
---

import ColorAccordion from '@components/page/theming/ColorAccordion';

<head>
  <title>主题 | Ionic 应用：颜色和主题基础定义</title>
  <meta
    name="description"
    content="定义应用主题从未如此简单。Ionic Framework 内置了预制的样式和颜色，非常易于更改和修改。"
  />
</head>

Ionic Framework 被设计为一张白板，可以轻松定制和修改以适应品牌需求，同时遵循不同平台的标准。现在为 Ionic 应用构建主题比以往任何时候都更容易。由于该框架使用 CSS 构建，它附带了一系列预制默认样式，非常易于更改和修改。

## 颜色

Ionic 有九种默认颜色，可用于更改许多组件的颜色。每种颜色实际上是多个属性的集合，包括在整个 Ionic 中使用的 `shade`（暗色调）和 `tint`（亮色调）。

更改颜色时，设置所有相关属性非常重要。这可以通过 [Color Generator](color-generator.md) 工具轻松完成，但如果需要，也可以手动编写。有关 Ionic 颜色的更多信息，请参阅 [Colors](colors.md)。

<ColorAccordion />

## 平台标准

Ionic 组件会根据运行应用的平台调整其外观和行为。我们称之为 <strong>自适应样式</strong>。这使得开发者能够使用同一代码库为多个平台构建应用，同时在特定平台上保持"原生"外观。

Ionic 有两种 **模式**，用于根据 **平台** 自定义组件的外观：`ios` 和 `md`。每个平台都有默认模式，但这可以轻松配置。有关基于平台自定义应用的更多信息，请参阅 [Platform Styles](platform-styles.md)。

## CSS 变量

Ionic Framework 组件使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS 属性（变量）</a>进行主题化。CSS 变量为原本静态的语言添加了动态值。这传统上需要使用 CSS 预处理器（如 Sass）。只需更改 Ionic Framework 提供的任何 [CSS 变量](css-variables.md) 的值，即可轻松更改应用的外观。

## CSS 阴影部分

CSS 阴影部分 的加入是为了更容易地完全自定义 Ionic Framework 的 Shadow 组件。过去，使用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 的组件无法直接设置其 shadow 树内元素的样式。随着 Shadow parts 的加入，不再需要为 Shadow 组件内部元素的每个属性都使用 CSS 变量。有关使用 parts 自定义 Ionic Framework 组件的更多信息，请参阅 [CSS 阴影部分](css-shadow-parts.md) 指南。

## 品牌化

Ionic 提供了应用颜色，可用于为主题化应用以匹配品牌或配色方案。默认主题使用浅色背景，但从背景颜色到文本颜色的一切都是完全可自定义的。有关品牌化的更多信息，请参阅 [Themes](themes.md)。
