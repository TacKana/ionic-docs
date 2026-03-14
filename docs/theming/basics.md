---
title: 主题化基础
sidebar_label: 基础
---

import ColorAccordion from '@components/page/theming/ColorAccordion';

<head>
  <title>主题化 | Ionic 应用：颜色和主题化基础定义</title>
  <meta
    name="description"
    content="应用主题化的定义变得前所未有的简单。Ionic Framework 内置了预制的样式和颜色，它们非常易于更改和修改。"
  />
</head>

Ionic Framework 的设计初衷就是一张白纸，可以轻松定制和修改以适应品牌需求，同时仍遵循不同平台的标准。为 Ionic 应用设置主题比以往任何时候都更加简单。因为该框架是基于 CSS 构建的，所以它提供了预制的默认样式，这些样式极其易于更改和修改。

## 颜色

Ionic 提供了九种默认颜色，可用于更改许多组件的颜色。每种颜色实际上是一组属性的集合，包括在整个 Ionic 中使用的 `shade` 和 `tint`。

更改颜色时，设置所有相关属性非常重要。这可以通过 [颜色生成器](color-generator.md) 工具轻松完成，但也可以根据需要手动编写。有关 Ionic 颜色的更多信息，请参阅 [颜色](colors.md)。

<ColorAccordion />

## 平台标准

Ionic 组件会根据应用运行的平台来调整其外观和行为。我们称之为 <strong>自适应样式</strong>。这使得开发人员能够构建使用相同代码库的多平台应用，同时在这些特定平台上仍保持“原生”外观。

Ionic 有两种用于根据**平台**自定义组件外观的**模式**：`ios` 和 `md`。每个平台都有一个默认模式，但这可以轻松配置。有关根据平台自定义应用的更多信息，请参阅 [平台样式](platform-styles.md)。

## CSS 变量

Ionic Framework 组件使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS 自定义属性（变量）</a> 进行主题化。CSS 变量为原本静态的语言添加了动态值。这在传统上需要像 Sass 这样的 CSS 预处理器。只需更改 Ionic Framework 提供的任何 [CSS 变量](css-variables.md) 的值，即可轻松更改应用的外观。

## CSS Shadow Parts

CSS Shadow Parts 的引入是为了更轻松地完全自定义 Ionic Framework 的 Shadow 组件。过去，使用 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 的组件无法直接对其影子树内的元素进行样式设置。随着 Shadow parts 的加入，不再需要为 Shadow 组件内部元素的每个属性设置 CSS 变量。有关使用 parts 自定义 Ionic Framework 组件的更多信息，请参阅 [CSS Shadow Parts](css-shadow-parts.md) 指南。

## 品牌化

Ionic 提供了应用颜色，可用于为主题化应用以匹配品牌或配色方案。默认主题使用浅色背景，但从背景颜色到文本颜色的所有内容都是完全可定制的。有关品牌化的更多信息，请参阅 [主题](themes.md)。