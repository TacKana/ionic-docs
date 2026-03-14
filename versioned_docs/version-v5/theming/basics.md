---
title: '主题化 | Ionic 应用：色彩与主题基础定义'
description: '应用主题定义变得前所未有的简单。Ionic Framework 内置了预设样式和色彩，修改和调整都极其便捷。'
sidebar_label: 基础概念
---

import ColorAccordion from '@components/page/theming/ColorAccordion';

# 主题化基础

Ionic Framework 被设计成一块白板，既能轻松定制和修改以契合品牌形象，又能遵循不同平台的设计标准。如今，为 Ionic 应用设置主题比以往任何时候都更简单。由于框架基于 CSS 构建，它自带预设的默认样式，修改和调整都极其方便。

## 色彩

Ionic 有九种默认色彩，可用于改变众多组件的颜色。每种色彩实际上是一组属性的集合，包括在 Ionic 中广泛使用的 `shade`（暗色调）和 `tint`（亮色调）。

修改色彩时，必须设置所有相关属性。这可以通过 [色彩生成器](color-generator.md) 工具轻松完成，当然也可以根据需要手动编写。有关 Ionic 色彩的更多信息，请参阅 [色彩](colors.md)。

<ColorAccordion />

## 平台标准

Ionic 组件会根据应用运行的平台自适应其外观和行为。我们称之为<strong>自适应样式</strong>。这让开发者能够使用同一套代码库为多个平台构建应用，同时仍能保持与特定平台一致的“原生”观感。

Ionic 有两种根据**平台**定制组件外观的**模式**：`ios` 和 `md`。每个平台都有默认模式，但这可以轻松配置。有关根据平台定制应用的更多信息，请参阅 [平台样式](platform-styles.md)。

## CSS 变量

Ionic Framework 组件通过 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS 属性（变量）</a>进行主题化。CSS 变量为这门原本静态的语言注入了动态值。这在传统上需要像 Sass 这样的 CSS 预处理器才能实现。通过改变 Ionic Framework 提供的任何 [CSS 变量](css-variables.md) 的值，可以轻松改变应用的外观。

## CSS Shadow Parts

CSS Shadow Parts 的引入是为了更便捷地完全自定义 Ionic Framework 的 Shadow 组件。过去，使用 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> 的组件无法直接对其 Shadow 树内部的元素进行样式设置。有了 Shadow parts，就不再需要为 Shadow 组件内部元素的每个属性都设置 CSS 变量。有关使用 parts 自定义 Ionic Framework 组件的更多信息，请参阅 [CSS Shadow Parts](css-shadow-parts.md) 指南。

## 品牌化

Ionic 提供了一组应用色彩，可用于根据品牌或配色方案对应用进行主题化。默认主题使用浅色背景，但从背景色到文本颜色的一切都可以完全自定义。有关品牌化的更多信息，请参阅 [主题](themes.md)。