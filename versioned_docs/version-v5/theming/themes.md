---
title: 'Ionic 应用主题 | 更改默认应用背景主题与颜色'
description: '多个全局变量可以更改整个应用的默认主题。使用 Ionic 主题为你的应用创建自定义背景和文本颜色主题。'
sidebar_label: 主题
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

# 主题

Ionic 提供了几个全局变量，这些变量在组件中广泛使用，用于更改整个应用的默认主题。[应用颜色](#应用颜色)对于更改大多数 Ionic 组件的外观非常有用，而[阶梯颜色](#阶梯颜色)则用作某些 Ionic 组件中的变体。

## 应用颜色

应用颜色在 Ionic 的多个地方使用。它们对于轻松创建深色主题或匹配品牌的主题非常有用。

需要注意的是，背景和文本颜色变量还需要以 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a>设置 rgb 变量。请参阅 [Alpha 问题](advanced.md#alpha-问题)了解为什么还需要 `rgb` 属性。

| 名称                                       | 描述                                   |
| ------------------------------------------ | -------------------------------------- |
| `--ion-background-color`                   | 整个应用的背景颜色                     |
| `--ion-background-color-rgb`               | 整个应用的背景颜色，rgb 格式           |
| `--ion-text-color`                         | 整个应用的文本颜色                     |
| `--ion-text-color-rgb`                     | 整个应用的文本颜色，rgb 格式           |
| `--ion-backdrop-color`                     | 遮罩组件的颜色                         |
| `--ion-backdrop-opacity`                   | 遮罩组件的不透明度                     |
| `--ion-overlay-background-color`           | 覆盖层的背景颜色                       |
| `--ion-border-color`                       | 边框颜色                               |
| `--ion-box-shadow-color`                   | 盒子阴影颜色                           |
| `--ion-tab-bar-background`                 | Tab Bar（标签栏）的背景                |
| `--ion-tab-bar-background-focused`         | 聚焦状态 Tab Bar 的背景                |
| `--ion-tab-bar-border-color`               | Tab Bar 的边框颜色                     |
| `--ion-tab-bar-color`                      | Tab Bar 的颜色                         |
| `--ion-tab-bar-color-selected`             | 选中的 Tab Button 的颜色               |
| `--ion-toolbar-background`                 | Toolbar（工具栏）的背景                |
| `--ion-toolbar-border-color`               | Toolbar 的边框颜色                     |
| `--ion-toolbar-color`                      | Toolbar 中组件的颜色                   |
| `--ion-toolbar-segment-color`              | Toolbar 中 Segment 按钮的颜色          |
| `--ion-toolbar-segment-color-checked`      | Toolbar 中选中的 Segment 按钮的颜色    |
| `--ion-toolbar-segment-background`         | Toolbar 中 Segment 按钮的背景          |
| `--ion-toolbar-segment-background-checked` | Toolbar 中选中的 Segment 按钮的背景    |
| `--ion-toolbar-segment-indicator-color`    | Toolbar 中 Segment 按钮指示器的颜色    |
| `--ion-item-background`                    | Item（列表项）的背景                   |
| `--ion-item-border-color`                  | Item 的边框颜色                        |
| `--ion-item-color`                         | Item 中组件的颜色                      |
| `--ion-placeholder-color`                  | 输入框中占位符的颜色                   |

## 阶梯颜色

在探索自定义 Ionic 主题的不同方法后，我们发现不能只使用一种背景或文本颜色。为了在整个设计中体现重要性和层次感，我们需要使用背景和文本颜色的不同明暗度。为了适应这种模式，我们创建了阶梯颜色。

虽然更新背景（`--ion-background-color`）和文本（`--ion-text-color`）变量会改变大多数组件的应用外观，但某些 Ionic 组件可能会出现看起来不协调或破损的情况。这在应用深色主题时会更加明显。

在某些组件中，我们使用比背景更暗或比文本更浅的色调。例如，列表项标题文本可能需要为 <CodeColor color="#404040">#404040</CodeColor>，这比我们的默认文本颜色浅几个色阶。同时，loading 组件的背景比白色暗一些，使用 <CodeColor color="#f2f2f2">#f2f2f2</CodeColor>。我们使用阶梯颜色来定义这些细微的变化。在更新应用的背景或文本颜色时，更新阶梯颜色非常重要。

默认情况下，Ionic 阶梯颜色从默认背景颜色值 <CodeColor color="#ffffff">#ffffff</CodeColor> 开始，并以递增的百分比与文本颜色值 <CodeColor color="#000000">#000000</CodeColor> 混合。完整的阶梯颜色列表如下面的生成器所示。

## 阶梯颜色生成器

为你的应用创建自定义的背景和文本颜色主题。在下面更新背景或文本颜色的十六进制值，然后将生成的代码直接复制粘贴到你的 Ionic 项目中。

<SteppedColorGenerator />
