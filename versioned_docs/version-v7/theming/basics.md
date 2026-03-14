---
title: 主题化基础
sidebar_label: 基础
---

import ColorAccordion from '@components/page/theming/ColorAccordion';

<head>
  <title>主题化 | Ionic 应用：色彩与主题化基础定义</title>
  <meta
    name="description"
    content="应用主题化的定义从未如此简单。Ionic Framework 内置了预制样式和颜色，这些样式和颜色非常易于更改和修改。"
  />
</head>

Ionic Framework 旨在成为一个可以轻松定制和修改以适应品牌形象的空画布，同时仍遵循不同平台的标准。如今，为 Ionic 应用添加主题比以往任何时候都更加简单。由于该框架基于 CSS 构建，它内置了预制的默认样式，这些样式非常易于更改和修改。

## 色彩

Ionic 有九种默认颜色，可用于更改许多组件的颜色。每种颜色实际上是一组多个属性的集合，包括一个 `shade`（暗调）和一个 `tint`（亮调），这些属性在整个 Ionic 中被使用。

更改颜色时，重要的是设置所有相关属性。这可以通过 [Color Generator](color-generator.md) 工具轻松完成，但如果需要，也可以手动编写。有关 Ionic 颜色的更多信息，请参阅 [Colors](colors.md)。

<ColorAccordion />

## 平台标准

Ionic 组件会根据应用运行的平台调整其外观和行为。我们称之为<strong>自适应样式</strong>。这使得开发人员能够为多个平台构建使用相同代码库的应用，同时仍能看起来与这些特定平台“原生”一致。

Ionic 有两种**模式**，用于根据**平台**自定义组件的外观：`ios` 和 `md`。每个平台都有一个默认模式，但这可以轻松配置。有关根据平台自定义应用程序的更多信息，请参阅 [Platform Styles](platform-styles.md)。

## CSS 变量

Ionic Framework 组件使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS 属性（变量）</a>进行主题化。CSS 变量为原本静态的语言添加了动态值。这在传统上需要使用像 Sass 这样的 CSS 预处理器。通过更改 Ionic Framework 提供的任何 [CSS Variables](css-variables.md) 的值，可以轻松改变应用程序的外观。

## CSS Shadow Parts

CSS Shadow Parts 的加入使得完全自定义 Ionic Framework Shadow 组件变得更加容易。过去，使用 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 的组件无法直接样式化其影子树内部的元素。随着 Shadow parts 的加入，不再需要为 Shadow 组件内部元素的每个属性都添加 CSS 变量。有关使用 parts 自定义 Ionic Framework 组件的更多信息，请参阅 [CSS Shadow Parts](css-shadow-parts.md) 指南。

## 品牌化

Ionic 提供应用程序颜色，可用于为主题化应用程序以匹配品牌或配色方案。默认主题使用浅色背景，但从背景颜色到文本颜色的一切都是完全可定制的。有关品牌化的更多信息，请参阅 [Themes](themes.md)。