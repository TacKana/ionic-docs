---
title: 主题
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>Ionic 应用主题 | 更改默认应用背景主题和颜色</title>
  <meta
    name="description"
    content="几个全局变量可以更改整个应用程序的默认主题。使用 Ionic 主题为您的应用创建自定义背景和文本颜色主题。"
  />
</head>

Ionic 提供了几个全局变量，这些变量在组件中使用，以更改整个应用程序的默认主题。[应用颜色](#application-colors)可用于更改大多数 Ionic 组件的外观，而[阶梯颜色](#stepped-colors)用作某些 Ionic 组件中的变体。

## 应用颜色

应用颜色在 Ionic 中有多种用途。它们对于轻松创建深色主题或匹配品牌的主题非常有用。

需要注意的是，背景和文本颜色变量还需要以 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a>设置 rgb 变量。请参阅[Alpha 问题](advanced.md#the-alpha-problem)了解为什么还需要 `rgb` 属性。

| 名称                                       | 描述                             |
| ------------------------------------------ | -------------------------------- |
| `--ion-background-color`                   | 整个应用的背景颜色               |
| `--ion-background-color-rgb`               | 整个应用的背景颜色，rgb 格式     |
| `--ion-text-color`                         | 整个应用的文本颜色               |
| `--ion-text-color-rgb`                     | 整个应用的文本颜色，rgb 格式     |
| `--ion-backdrop-color`                     | Backdrop 组件的颜色              |
| `--ion-backdrop-opacity`                   | Backdrop 组件的不透明度          |
| `--ion-overlay-background-color`           | 叠加层的背景颜色                 |
| `--ion-border-color`                       | 边框颜色                         |
| `--ion-box-shadow-color`                   | 盒阴影颜色                       |
| `--ion-tab-bar-background`                 | Tab Bar 的背景                   |
| `--ion-tab-bar-background-focused`         | 聚焦状态 Tab Bar 的背景          |
| `--ion-tab-bar-border-color`               | Tab Bar 的边框颜色               |
| `--ion-tab-bar-color`                      | Tab Bar 的颜色                   |
| `--ion-tab-bar-color-selected`             | 选中 Tab Button 的颜色           |
| `--ion-toolbar-background`                 | Toolbar 的背景                   |
| `--ion-toolbar-border-color`               | Toolbar 的边框颜色               |
| `--ion-toolbar-color`                      | Toolbar 中组件的颜色             |
| `--ion-toolbar-segment-color`              | Toolbar 中 Segment Buttons 的颜色      |
| `--ion-toolbar-segment-color-checked`      | Toolbar 中选中状态 Segment Buttons 的颜色 |
| `--ion-toolbar-segment-background`         | Toolbar 中 Segment Buttons 的背景      |
| `--ion-toolbar-segment-background-checked` | Toolbar 中选中状态 Segment Buttons 的背景 |
| `--ion-toolbar-segment-indicator-color`    | Toolbar 中 Segment Button 指示器的颜色 |
| `--ion-item-background`                    | Item 的背景                      |
| `--ion-item-border-color`                  | Item 的边框颜色                  |
| `--ion-item-color`                         | Item 中组件的颜色                |
| `--ion-placeholder-color`                  | 输入框中占位符文本的颜色         |

## 阶梯颜色

在探索自定义 Ionic 主题的不同方法后，我们发现不能仅使用一种背景或文本颜色。为了在设计中体现重要性和深度，我们需要使用背景和文本颜色的不同色调。为了适应这种模式，我们创建了阶梯颜色。

虽然更新背景（`--ion-background-color`）和文本（`--ion-text-color`）变量会改变大多数组件的外观，但某些 Ionic 组件可能会看起来不协调或出现异常。这在应用较深色主题时会更明显。

在某些组件中，我们使用比背景更暗或比文本更浅的色调。例如，项目标题文本可能需要为 <CodeColor color="#404040">#404040</CodeColor>，这比我们的默认文本颜色浅几个色调。同时，loading 组件的背景比白色暗一个色调，使用 <CodeColor color="#f2f2f2">#f2f2f2</CodeColor>。我们使用阶梯颜色来定义这些细微的变化。在更新应用的背景或文本颜色时，更新阶梯颜色也很重要。

默认情况下，Ionic 阶梯颜色从默认背景颜色值 <CodeColor color="#ffffff">#ffffff</CodeColor> 开始，并与文本颜色值 <CodeColor color="#000000">#000000</CodeColor> 按递增百分比混合。完整的阶梯颜色列表如下面的生成器所示。

## 阶梯颜色生成器

为您的应用创建自定义背景和文本颜色主题。更新下面的背景或文本颜色的十六进制值，然后将生成的代码直接复制粘贴到您的 Ionic 项目中。

<SteppedColorGenerator />
