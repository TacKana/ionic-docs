---
title: Themes
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>Ionic 应用主题 | 更改默认应用背景主题与颜色</title>
  <meta
    name="description"
    content="多个全局变量可用于改变整个应用程序的默认主题。使用 Ionic 主题为您的应用创建自定义背景和文本颜色主题。"
  />
</head>

Ionic 提供了多个全局变量，这些变量在各组件中被广泛使用，用于改变整个应用程序的默认主题。[应用颜色](#application-colors) 可用于改变大多数 Ionic 组件的外观，而 [阶梯颜色](#stepped-colors) 则在一些 Ionic 组件中用作颜色变体。

<LegacyAnchor id="application-colors" />

## 应用颜色

应用颜色在 Ionic 的多个地方使用。这些变量便于轻松创建暗色主题或与品牌匹配的主题。

需要注意的是，背景和文本颜色变量还需要设置一个 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a> 的 rgb 变量。有关为何需要 `rgb` 属性的解释，请参阅 [透明度问题](advanced.md#the-alpha-problem)。

| 名称                                       | 描述                                          |
| ------------------------------------------ | --------------------------------------------- |
| `--ion-background-color`                   | 整个应用的背景色                              |
| `--ion-background-color-rgb`               | 整个应用的背景色，rgb 格式                    |
| `--ion-text-color`                         | 整个应用的文本颜色                            |
| `--ion-text-color-rgb`                     | 整个应用的文本颜色，rgb 格式                  |
| `--ion-backdrop-color`                     | Backdrop 组件的颜色                           |
| `--ion-backdrop-opacity`                   | Backdrop 组件的不透明度                       |
| `--ion-overlay-background-color`           | 叠加层的背景色                                |
| `--ion-border-color`                       | 边框颜色                                      |
| `--ion-box-shadow-color`                   | 盒子阴影颜色                                  |
| `--ion-tab-bar-background`                 | Tab Bar 的背景                                |
| `--ion-tab-bar-background-focused`         | 聚焦状态下的 Tab Bar 背景                     |
| `--ion-tab-bar-border-color`               | Tab Bar 的边框颜色                            |
| `--ion-tab-bar-color`                      | Tab Bar 的颜色                                |
| `--ion-tab-bar-color-selected`             | 选中 Tab 按钮的颜色                           |
| `--ion-toolbar-background`                 | Toolbar 的背景                                |
| `--ion-toolbar-border-color`               | Toolbar 的边框颜色                            |
| `--ion-toolbar-color`                      | Toolbar 中组件的颜色                          |
| `--ion-toolbar-segment-color`              | Toolbar 中 Segment 按钮的颜色                 |
| `--ion-toolbar-segment-color-checked`      | Toolbar 中选中 Segment 按钮的颜色             |
| `--ion-toolbar-segment-background`         | Toolbar 中 Segment 按钮的背景                 |
| `--ion-toolbar-segment-background-checked` | Toolbar 中选中 Segment 按钮的背景             |
| `--ion-toolbar-segment-indicator-color`    | Toolbar 中 Segment 按钮指示器的颜色           |
| `--ion-item-background`                    | Item 的背景                                   |
| `--ion-item-border-color`                  | Item 的边框颜色                               |
| `--ion-item-color`                         | Item 中组件的颜色                             |
| `--ion-placeholder-color`                  | Input 中占位符的颜色                          |

## 阶梯颜色

在探索了定制 Ionic 主题的不同方法后，我们发现不能只使用单一背景色或文本颜色。为了在设计的不同部分体现重要性和层次感，我们需要使用背景色和文本颜色的不同深浅度。为适应这种模式，我们创建了阶梯颜色。

虽然更新背景 (`--ion-background-color`) 和文本 (`--ion-text-color`) 变量将改变大多数组件的外观，但在某些 Ionic 组件中，它可能看起来不协调或有缺陷。这在应用深色主题时会更加明显。

在某些组件中，我们使用了比背景色更深或比文本颜色更浅的色调。例如，项目标题文本可能需要使用 <CodeColor color="#404040">#404040</CodeColor>，这比我们的默认文本颜色浅几个色调。同时，加载组件的背景色比白色更深，使用 <CodeColor color="#f2f2f2">#f2f2f2</CodeColor>。我们使用阶梯颜色来定义这些细微的变体。在更新应用程序的背景或文本颜色时，更新阶梯颜色非常重要。

默认情况下，Ionic 的阶梯颜色从默认背景色值 <CodeColor color="#ffffff">#ffffff</CodeColor> 开始，并按照递增的百分比与文本颜色值 <CodeColor color="#000000">#000000</CodeColor> 混合。完整的阶梯颜色列表如下方的生成器所示。

<LegacyAnchor id="stepped-color-generator" />
<LegacyAnchor id="stepped-colors" />

## 阶梯颜色生成器

为您的应用创建自定义背景和文本颜色主题。在下方更新背景或文本颜色的十六进制值，然后复制生成的代码直接粘贴到您的 Ionic 项目中。

<SteppedColorGenerator />