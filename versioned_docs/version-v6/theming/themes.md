---
title: Themes
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>Ionic 应用主题 | 更改默认应用背景主题与颜色</title>
  <meta
    name="description"
    content="多个全局变量可更改整个应用程序的默认主题。使用 Ionic 主题为您的应用创建自定义背景和文本颜色主题。"
  />
</head>

Ionic 提供了多个全局变量，这些变量在组件中被广泛使用，以更改整个应用程序的默认主题。[应用颜色](#application-colors) 可用于改变大多数 Ionic 组件的外观，而 [阶梯颜色](#stepped-colors) 则用作某些 Ionic 组件中的变化。

## 应用颜色

应用颜色在 Ionic 的多个地方使用。这些颜色便于轻松创建深色主题或与品牌匹配的主题。

需要注意的是，背景颜色和文本颜色变量还需要在 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">RGB 格式</a> 中设置一个 rgb 变量。有关为何还需要 `rgb` 属性的解释，请参阅 [Alpha 问题](advanced.md#the-alpha-problem)。

| 名称                                       | 描述                                          |
| ------------------------------------------ | ---------------------------------------------------- |
| `--ion-background-color`                   | 整个应用的背景颜色                   |
| `--ion-background-color-rgb`               | 整个应用的背景颜色，rgb 格式       |
| `--ion-text-color`                         | 整个应用的文本颜色                         |
| `--ion-text-color-rgb`                     | 整个应用的文本颜色，rgb 格式             |
| `--ion-backdrop-color`                     | Backdrop 组件的颜色                      |
| `--ion-backdrop-opacity`                   | Backdrop 组件的不透明度                    |
| `--ion-overlay-background-color`           | 叠加层的背景颜色                     |
| `--ion-border-color`                       | 边框颜色                                         |
| `--ion-box-shadow-color`                   | 盒子阴影颜色                                     |
| `--ion-tab-bar-background`                 | 标签栏的背景                            |
| `--ion-tab-bar-background-focused`         | 获得焦点标签栏的背景                    |
| `--ion-tab-bar-border-color`               | 标签栏的边框颜色                          |
| `--ion-tab-bar-color`                      | 标签栏的颜色                                 |
| `--ion-tab-bar-color-selected`             | 选中标签按钮的颜色                     |
| `--ion-toolbar-background`                 | 工具栏的背景                            |
| `--ion-toolbar-border-color`               | 工具栏的边框颜色                          |
| `--ion-toolbar-color`                      | 工具栏中组件的颜色               |
| `--ion-toolbar-segment-color`              | 工具栏中分段按钮的颜色          |
| `--ion-toolbar-segment-color-checked`      | 工具栏中选中分段按钮的颜色  |
| `--ion-toolbar-segment-background`         | 工具栏中分段按钮的背景     |
| `--ion-toolbar-segment-background-checked` | 工具栏中选中分段按钮的背景     |
| `--ion-toolbar-segment-indicator-color`    | 工具栏中分段按钮指示器的颜色 |
| `--ion-item-background`                    | 项目的背景                               |
| `--ion-item-border-color`                  | 项目的边框颜色                             |
| `--ion-item-color`                         | 项目中组件的颜色                  |
| `--ion-placeholder-color`                  | 输入框中占位符的颜色                   |

## 阶梯颜色

在探索了自定义 Ionic 主题的不同方式后，我们发现不能仅使用一种背景或文本颜色。为了在设计中体现重要性和层次感，我们需要使用不同深浅的背景和文本颜色。为了适应这种模式，我们创建了阶梯颜色。

虽然更新背景 (`--ion-background-color`) 和文本 (`--ion-text-color`) 变量会改变大多数组件的外观，但某些 Ionic 组件可能会显得不协调或破损。这在应用深色主题时会更明显。

在某些组件中，我们使用的颜色比背景深一些，或者比文本浅一些。例如，项目标题文本可能需要是 <CodeColor color="#404040">#404040</CodeColor>，这比我们的默认文本颜色浅几个色调。同时，加载组件的背景比白色深一个色调，使用 <CodeColor color="#f2f2f2">#f2f2f2</CodeColor>。我们使用阶梯颜色来定义这些细微的变化。在更新应用程序的背景或文本颜色时，更新阶梯颜色非常重要。

默认情况下，Ionic 阶梯颜色从默认背景颜色值 <CodeColor color="#ffffff">#ffffff</CodeColor> 开始，并与文本颜色值 <CodeColor color="#000000">#000000</CodeColor> 以递增的百分比混合。完整的阶梯颜色列表如下方的生成器中所示。

## 阶梯颜色生成器

为您的应用创建自定义背景和文本颜色主题。更新下方背景或文本颜色的十六进制值，然后将生成的代码直接复制并粘贴到您的 Ionic 项目中。

<SteppedColorGenerator />