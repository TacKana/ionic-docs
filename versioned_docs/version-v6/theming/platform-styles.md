---
title: 平台样式
---

<head>
  <title>Ionic 平台样式 | Ionic 应用的平台特定样式</title>
  <meta
    name="description"
    content="Ionic 根据应用的设备提供特定于平台的样式。为组件样式化以匹配设备指南，使应用在用户看来具有原生感。"
  />
</head>

Ionic 根据应用运行的设备提供特定于平台的样式。为组件样式化以匹配设备指南，使应用可以一次编写，但根据访问位置的不同，给用户以原生应用的感觉。

## Ionic 模式

Ionic 使用**模式**来自定义组件的外观。每个**平台**都有一个默认**模式**，但可以通过全局[配置](../developing/config.md)进行覆盖。下表显示了添加到每个**平台**的默认**模式**：

| 平台      | 模式  | 描述                                                                                     |
| --------- | ----- | ---------------------------------------------------------------------------------------- |
| `ios`     | `ios` | 在 iPhone、iPad 或 iPod 上查看将使用 [iOS 样式](https://www.apple.com/ios)。             |
| `android` | `md`  | 在任何 Android 设备上查看将使用 [Material Design 样式](https://material.io/guidelines/)。 |
| `core`    | `md`  | 任何不符合上述平台的平台将使用 [Material Design 样式](https://material.io/guidelines/)。  |

例如，在 Android 平台上查看的应用将默认使用 `md`（Material Design）模式。`<html>` 元素上会添加 `class="md"`，所有组件将使用 Material Design 样式：

```html
<html class="md"></html>
```

_注意：**平台**和**模式**不是一回事。可以在应用的[配置](../developing/config.md)中将平台设置为使用任何模式。_

## 覆盖模式样式

每个 Ionic 组件都可以根据模式进行样式化。`html` 元素既有 `class` 属性也有 `mode` 属性，其值等于当前模式。这些可用于覆盖任何组件的样式。例如，要样式化 `ion-badge` 使其仅在 `ios` 模式下使用 `uppercase` 文本：

```css
.ios ion-badge {
  text-transform: uppercase;
}
```

还有许多全局 CSS 变量可用于覆盖样式。要样式化 `ios` 应用的背景颜色，可以编写以下代码：

```css
.ios {
  --ion-background-color: #222;
}
```

有许多全局变量可以按模式覆盖，包括 [Ionic 的颜色变量](colors.md)、[主题变量](themes.md)和[全局组件变量](advanced.md)。
