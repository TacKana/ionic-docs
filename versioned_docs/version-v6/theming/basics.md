---
title: 主题基础
sidebar_label: 基础
---

import ColorAccordion from '@components/page/theming/ColorAccordion';

<head>
  <title>主题 | Ionic 应用：颜色和主题基础定义</title>
  <meta
    name="description"
    content="应用主题的定义变得简单了。Ionic Framework 内置了预制的样式和颜色，它们非常易于更改和修改。"
  />
</head>

Ionic Framework 被设计成一张白纸，可以轻松定制和修改以匹配品牌，同时仍然遵循不同平台的标准。Ionic 应用的主题化现在比以往任何时候都更容易。由于该框架是使用 CSS 构建的，它带有预制的默认样式，非常易于更改和修改。

## 颜色

Ionic 有九种默认颜色，可用于更改许多组件的颜色。每种颜色实际上是一组多个属性的集合，包括在 Ionic 中使用的 `shade` 和 `tint`。

更改颜色时，设置所有相关属性很重要。这可以通过[颜色生成器](color-generator.md)工具轻松完成，但如果需要，也可以手动编写。有关 Ionic 颜色的更多信息，请参阅[颜色](colors.md)。

<ColorAccordion />

## 平台标准

Ionic 组件会根据应用运行的平台调整其外观和行为。我们称之为<strong>自适应样式</strong>。这允许开发者构建使用相同代码库用于多个平台的应用，同时在这些特定平台上看起来"原生"。

Ionic 有两种**模式**用于根据**平台**自定义组件的外观：`ios` 和 `md`。每个平台都有一个默认模式，但这可以轻松配置。有关根据平台自定义应用的更多信息，请参阅[平台样式](platform-styles.md)。

## CSS 变量

Ionic Framework 组件使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS 属性（变量）</a>进行主题化。CSS 变量为原本静态的语言添加了动态值。这传统上需要使用像 Sass 这样的 CSS 预处理器。通过更改 Ionic Framework 提供的任何 [CSS 变量](css-variables.md)的值，可以轻松更改应用的外观。

## CSS 阴影部分

CSS 阴影部分是为了更容易地完全自定义 Ionic Framework 的 Shadow 组件而添加的。过去，使用 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 的组件无法直接样式化其影子树内部的元素。随着 Shadow parts 的加入，不再需要为 Shadow 组件内部元素的每个属性设置 CSS 变量。有关使用 parts 自定义 Ionic Framework 组件的更多信息，请参阅 [CSS 阴影部分](css-shadow-parts.md)指南。

## 品牌标识

Ionic 提供了应用程序颜色，可用于为主题化应用以匹配品牌或配色方案。默认主题使用浅色背景，但从背景颜色到文本颜色的一切都是完全可自定义的。有关品牌标识的更多信息，请参阅[主题](themes.md)。
