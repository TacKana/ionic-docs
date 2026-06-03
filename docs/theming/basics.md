---
title: 主题基础
sidebar_label: 基础
---

import ColorAccordion from '@components/page/theming/ColorAccordion';

<head>
  <title>主题 | Ionic 应用：颜色与主题基础定义</title>
  <meta
    name="description"
    content="应用主题的定义从未如此简单。Ionic Framework 内置了预置的样式和颜色，可以极其轻松地进行更改和修改。"
  />
</head>

Ionic Framework 被设计为一块白板，可以轻松定制和修改以匹配品牌风格，同时仍然遵循不同平台的标准。现在为 Ionic 应用设置主题比以往任何时候都更容易。因为框架是用 CSS 构建的，它附带了预置的默认样式，可以极其轻松地更改和修改。

## 颜色

Ionic 有九种默认颜色，可用于更改许多组件的颜色。每种颜色实际上是一个包含多个属性的集合，包括在 Ionic 中使用的 `shade` 和 `tint`。

更改颜色时，设置所有相关属性非常重要。这可以通过[颜色生成器](color-generator.md)工具轻松完成，但也可以根据需要手动编写。有关 Ionic 颜色的更多信息，请参阅[颜色](colors.md)。

<ColorAccordion />

## 平台标准

Ionic 组件会根据应用运行所在的平台调整其外观和行为。我们称之为<strong>自适应样式</strong>。这使得开发者能够构建在多个平台上使用相同代码库的应用，同时在这些特定平台上仍呈现"原生"的外观。

Ionic 有两种**模式**用于根据**平台**自定义组件的外观：`ios` 和 `md`。每个平台都有一个默认模式，但这可以轻松配置。有关基于平台定制应用的更多信息，请参阅[平台样式](platform-styles.md)。

## CSS 变量

Ionic Framework 组件使用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS 自定义属性（变量）</a>进行主题化。CSS 变量为原本静态的语言增加了动态值。这传统上需要像 Sass 这样的 CSS 预处理器才能实现。通过更改 Ionic Framework 提供的任何[CSS 变量](css-variables.md)的值，可以轻松改变应用的外观。

## CSS Shadow Parts

CSS 阴影部分 的加入使得完全自定义 Ionic Framework Shadow 组件变得更加容易。过去，使用 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 的组件无法直接为其 shadow 树内部的元素设置样式。随着 Shadow parts 的加入，不再需要为 Shadow 组件内部元素的每个属性都设置 CSS 变量。有关使用 parts 自定义 Ionic Framework 组件的更多信息，请参阅 [CSS 阴影部分](css-shadow-parts.md) 指南。

## 品牌化

Ionic 提供了应用颜色，可用于为应用设置主题以匹配品牌或配色方案。默认主题使用浅色背景，但从背景颜色到文本颜色的所有内容都可以完全自定义。有关品牌化的更多信息，请参阅[主题](themes.md)。
