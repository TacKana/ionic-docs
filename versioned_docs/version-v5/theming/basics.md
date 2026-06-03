---
title: '主题 | Ionic 应用：颜色与主题基础定义'
description: '主题应用的定义从未如此简单。Ionic Framework 内置了预定义的样式和颜色，可以非常轻松地进行更改和修改。'
sidebar_label: 基础
---

import ColorAccordion from '@components/page/theming/ColorAccordion';

# 主题基础

Ionic Framework 被设计为一块空白画布，可以轻松定制和修改以适应品牌需求，同时遵循不同平台的标准。现在，为 Ionic 应用设置主题比以往任何时候都更容易。由于该框架基于 CSS 构建，它附带了一系列预置的默认样式，可以非常轻松地进行更改和修改。

## 颜色

Ionic 有九种默认颜色，可用于更改许多组件的颜色。每种颜色实际上是一组属性的集合，包括一个 `shade`（暗色调）和 `tint`（亮色调），在 Ionic 中广泛使用。

在更改颜色时，需要设置所有相关属性。这可以通过[颜色生成器](color-generator.md)工具轻松完成，但如果需要，也可以手动编写。有关 Ionic 颜色的更多信息，请参阅[颜色](colors.md)。

<ColorAccordion />

## 平台标准

Ionic 组件会根据应用运行的平台调整其外观和行为。我们称之为<strong>自适应样式</strong>。这使得开发者能够使用同一套代码库为多个平台构建应用，同时在这些平台上看起来具有"原生"感。

Ionic 有两种**模式**用于根据**平台**自定义组件的外观：`ios` 和 `md`。每个平台都有一个默认模式，但这可以轻松配置。有关根据平台自定义应用的更多信息，请参阅[平台样式](platform-styles.md)。

## CSS 变量

Ionic Framework 组件使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS 属性（变量）</a>进行主题化。CSS 变量为原本静态的语言添加了动态值。这传统上需要像 Sass 这样的 CSS 预处理器。通过更改 Ionic Framework 提供的任何 [CSS 变量](css-variables.md)的值，可以轻松改变应用的外观。

## CSS 阴影部分

CSS 阴影部分是为了更容易地完全自定义 Ionic Framework 的 Shadow（阴影）组件而添加的。过去，使用 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 的组件无法直接对其影子树内的元素进行样式设置。随着阴影部分的引入，不再需要为 Shadow 组件的内部元素的每个属性都使用 CSS 变量。有关使用部分来自定义 Ionic Framework 组件的更多信息，请参阅 [CSS 阴影部分](css-shadow-parts.md)指南。

## 品牌化

Ionic 提供了应用颜色，可用于为主题化应用以匹配品牌或配色方案。默认主题使用浅色背景，但从背景颜色到文本颜色，一切都是完全可定制的。有关品牌化的更多信息，请参阅[主题](themes.md)。
