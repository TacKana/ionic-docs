---
title: 'Ionic 应用主题 | 更改默认应用背景主题与色彩'
description: '多个全局变量可改变整个应用程序的默认主题。通过 Ionic 主题为您的应用创建自定义背景和文本色彩方案。'
sidebar_label: 主题
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

# 主题

Ionic 提供了多个全局变量，这些变量在组件间广泛使用，以改变整个应用程序的默认主题。[应用色彩](#application-colors) 可用于更改大多数 Ionic 组件的外观，而 [阶梯色彩](#stepped-colors) 在某些 Ionic 组件中用作色彩变体。

## 应用色彩

应用色彩在 Ionic 的多个位置被使用。它们便于轻松创建暗色主题或与品牌匹配的主题。

需要注意的是，背景色和文本色彩变量还需要设置一个 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a> 的 rgb 变量。关于为何需要 `rgb` 属性的解释，请参见 [透明度问题](advanced.md#the-alpha-problem)。

| 名称                                       | 描述                                          |
| ------------------------------------------ | ---------------------------------------------------- |
| `--ion-background-color`                   | 整个应用的背景色                   |
| `--ion-background-color-rgb`               | 整个应用的背景色（rgb 格式）       |
| `--ion-text-color`                         | 整个应用的文本色彩                         |
| `--ion-text-color-rgb`                     | 整个应用的文本色彩（rgb 格式）             |
| `--ion-backdrop-color`                     | 背景幕组件色彩                      |
| `--ion-backdrop-opacity`                   | 背景幕组件不透明度                    |
| `--ion-overlay-background-color`           | 叠加层的背景色                     |
| `--ion-border-color`                       | 边框色彩                                         |
| `--ion-box-shadow-color`                   | 盒阴影色彩                                     |
| `--ion-tab-bar-background`                 | 标签栏背景                            |
| `--ion-tab-bar-background-focused`         | 聚焦标签栏背景                    |
| `--ion-tab-bar-border-color`               | 标签栏边框色彩                          |
| `--ion-tab-bar-color`                      | 标签栏色彩                                 |
| `--ion-tab-bar-color-selected`             | 选中标签按钮色彩                     |
| `--ion-toolbar-background`                 | 工具栏背景                            |
| `--ion-toolbar-border-color`               | 工具栏边框色彩                          |
| `--ion-toolbar-color`                      | 工具栏内组件色彩               |
| `--ion-toolbar-segment-color`              | 工具栏内分段按钮色彩          |
| `--ion-toolbar-segment-color-checked`      | 工具栏内选中分段按钮色彩  |
| `--ion-toolbar-segment-background`         | 工具栏内分段按钮背景     |
| `--ion-toolbar-segment-background-checked` | 工具栏内分段按钮背景     |
| `--ion-toolbar-segment-indicator-color`    | 工具栏内分段按钮指示器色彩 |
| `--ion-item-background`                    | 条目背景                               |
| `--ion-item-border-color`                  | 条目边框色彩                             |
| `--ion-item-color`                         | 条目内组件色彩                  |
| `--ion-placeholder-color`                  | 输入框占位符色彩                   |

## 阶梯色彩

在探索了自定义 Ionic 主题的不同方法后，我们发现不能只使用单一背景色或文本色彩。为了在设计中体现重要性和层次感，我们需要使用不同深浅的背景色和文本色彩。为适应这种模式，我们创建了阶梯色彩。

虽然更新背景 (`--ion-background-color`) 和文本 (`--ion-text-color`) 变量会改变大多数组件的外观，但在某些 Ionic 组件中，它可能看起来不协调或损坏。这在应用深色主题时将更加明显。

在一些组件中，我们使用了比背景色稍暗或比文本色彩稍浅的色彩。例如，条目标题文本可能需要使用 <CodeColor color="#404040">#404040</CodeColor>，这比我们的默认文本色彩稍浅。而加载组件的背景色则比白色稍暗，使用 <CodeColor color="#f2f2f2">#f2f2f2</CodeColor>。我们使用阶梯色彩来定义这些细微的变体。在更新应用的背景色或文本色彩时，更新阶梯色彩非常重要。

默认情况下，Ionic 的阶梯色彩从默认背景色值 <CodeColor color="#ffffff">#ffffff</CodeColor> 开始，并按递增百分比与文本色彩值 <CodeColor color="#000000">#000000</CodeColor> 混合。完整的阶梯色彩列表显示在下面的生成器中。

## 阶梯色彩生成器

为您的应用创建自定义背景和文本色彩主题。在下方更新背景色或文本色彩的十六进制值，然后将生成的代码直接复制并粘贴到您的 Ionic 项目中。

<SteppedColorGenerator />