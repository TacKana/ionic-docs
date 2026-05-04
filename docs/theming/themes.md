---
title: 主题
---

import CodeColor from '@components/page/theming/CodeColor';
import SteppedColorGenerator from '@components/page/theming/SteppedColorGenerator';

<head>
  <title>Ionic 应用主题 | 更改默认应用背景主题与颜色</title>
  <meta
    name="description"
    content="多个全局变量可改变整个应用程序的默认主题。使用 Ionic 主题为您的应用创建自定义背景和文本颜色主题。"
  />
</head>

Ionic 提供了多个全局变量，这些变量在组件中广泛使用，用于改变整个应用程序的默认主题。[应用颜色](#application-colors) 可用于改变大多数 Ionic 组件的外观，而 [阶梯颜色](#stepped-colors) 则在部分 Ionic 组件中作为颜色变体使用。

<LegacyAnchor id="application-colors" />

## 应用颜色

应用颜色在 Ionic 的多个位置被使用。它们便于轻松创建深色调色板或与品牌相匹配的主题。

需要注意的是，背景和文本颜色变量还需要一个以 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb 格式</a> 设置的 rgb 变量。请参阅 [透明度问题](advanced.md#the-alpha-problem) 了解为何还需要 `rgb` 属性的解释。

| 名称                                       | 描述                                          |
| ------------------------------------------ | ---------------------------------------------------- |
| `--ion-background-color`                   | 整个应用的背景色                   |
| `--ion-background-color-rgb`               | 整个应用的背景色，rgb 格式       |
| `--ion-text-color`                         | 整个应用的文本颜色                         |
| `--ion-text-color-rgb`                     | 整个应用的文本颜色，rgb 格式             |
| `--ion-backdrop-color`                     | Backdrop 组件的颜色                      |
| `--ion-backdrop-opacity`                   | Backdrop 组件的不透明度                    |
| `--ion-overlay-background-color`           | 覆盖层的背景颜色                     |
| `--ion-border-color`                       | 边框颜色                                         |
| `--ion-box-shadow-color`                   | 盒阴影颜色                                     |
| `--ion-tab-bar-background`                 | Tab 栏的背景                            |
| `--ion-tab-bar-background-focused`         | 获得焦点时 Tab 栏的背景                    |
| `--ion-tab-bar-border-color`               | Tab 栏的边框颜色                          |
| `--ion-tab-bar-color`                      | Tab 栏的颜色                                 |
| `--ion-tab-bar-color-selected`             | 被选中的 Tab 按钮的颜色                     |
| `--ion-toolbar-background`                 | Toolbar 的背景                            |
| `--ion-toolbar-border-color`               | Toolbar 的边框颜色                          |
| `--ion-toolbar-color`                      | Toolbar 中组件的颜色               |
| `--ion-toolbar-segment-color`              | Toolbar 中 Segment 按钮的颜色          |
| `--ion-toolbar-segment-color-checked`      | Toolbar 中被选中的 Segment 按钮的颜色  |
| `--ion-toolbar-segment-background`         | Toolbar 中 Segment 按钮的背景     |
| `--ion-toolbar-segment-background-checked` | Toolbar 中被选中的 Segment 按钮的背景     |
| `--ion-toolbar-segment-indicator-color`    | Toolbar 中 Segment 按钮指示器的颜色 |
| `--ion-item-background`                    | Item 的背景                               |
| `--ion-item-border-color`                  | Item 的边框颜色                             |
| `--ion-item-color`                         | Item 中组件的颜色                  |
| `--ion-placeholder-color`                  | Input 中占位符的颜色                   |

## 阶梯颜色

在探索了多种自定义 Ionic 主题的方法后，我们发现不能只使用单一背景色或文本色。为了在设计中体现重要性和层次感，我们需要使用不同深浅的背景色和文本色。为了适应这种模式，我们创建了阶梯颜色。

虽然更新背景 (`--ion-background-color`) 和文本 (`--ion-text-color`) 变量会改变大多数组件的外观，但对于某些 Ionic 组件来说，这可能会显得不协调或异常。这在应用深色调色板时会更明显。

在某些组件中，我们使用比背景色略深或比文本色略浅的颜色。例如，项目标题文本可能需要使用 <CodeColor color="#404040">#404040</CodeColor>，这比我们的默认文本色浅几个色阶。同时，加载组件的背景色比白色略深，使用 <CodeColor color="#f2f2f2">#f2f2f2</CodeColor>。我们使用阶梯颜色来定义这些细微的差异。在更新应用程序的背景色或文本颜色时，更新阶梯颜色非常重要。

Ionic 为文本和背景颜色提供了独立的阶梯颜色，以便它们可以单独更新。这对于同时使用文本和背景阶梯颜色的组件非常有用，并使我们能够有效实现 [高对比度调色板](./high-contrast-mode)。

默认情况下，Ionic 的文本阶梯颜色以默认文本颜色值 <CodeColor color="#000000">#000000</CodeColor> 开始，并按照递增的百分比与背景颜色值 <CodeColor color="#ffffff">#ffffff</CodeColor> 混合。Ionic 的背景阶梯颜色以默认背景颜色值 <CodeColor color="#ffffff">#ffffff</CodeColor> 开始，并按照递增的百分比与文本颜色值 <CodeColor color="#000000">#000000</CodeColor> 混合。完整的阶梯颜色列表如下方生成器所示。

<LegacyAnchor id="stepped-color-generator" />
<LegacyAnchor id="stepped-colors" />

## 阶梯颜色生成器

为您的应用创建自定义背景和文本颜色主题。更新下方的背景或文本颜色的十六进制值，然后将生成的代码直接复制并粘贴到您的 Ionic 项目中。

<SteppedColorGenerator useTextAndBackgroundStepColors={true} />