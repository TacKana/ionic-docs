---
title: 平台样式
---

<head>
  <title>Ionic 平台样式 | Ionic 应用的平台特定样式</title>
  <meta
    name="description"
    content="Ionic 根据应用的设备提供特定平台的样式。为组件设置样式以匹配设备指南，可使应用给用户带来原生体验。"
  />
</head>

Ionic 根据应用运行的设备提供特定平台的样式。为组件设置样式以匹配设备指南，使应用可以一次编写，但根据用户访问的平台给用户带来原生外观和感觉。

## Ionic 模式

Ionic 使用 **模式** 来自定义组件的外观。每个 **平台** 都有一个默认 **模式**，但这可以通过全局 [config](../developing/config.md) 覆盖。下表显示了添加到每个 **平台** 的默认 **模式**：

| 平台       | 模式  | 描述                                                                                       |
| ---------- | ----- | ------------------------------------------------------------------------------------------ |
| `ios`      | `ios` | 在 iPhone、iPad 或 iPod 上查看将使用 [iOS 样式](https://www.apple.com/ios)。               |
| `android`  | `md`  | 在任何 Android 设备上查看将使用 [Material Design 样式](https://material.io/guidelines/)。  |
| `core`     | `md`  | 不符合以上任何平台的平台将使用 [Material Design 样式](https://material.io/guidelines/)。   |

例如，在 Android 平台上查看的应用将默认使用 `md`（Material Design）模式。`<html>` 元素将添加 `class="md"`，所有组件将使用 Material Design 样式：

```html
<html class="md"></html>
```

_注意：**平台** 和 **模式** 是不同的。平台可以在应用的 [config](../developing/config.md) 中设置为使用任何模式。_

## 覆盖模式样式

每个 Ionic 组件都可以根据模式设置样式。`html` 元素同时具有 `class` 和 `mode` 属性，其值等于当前模式。这些可用于覆盖任何组件的样式。例如，要在 `ios` 模式下设置 `ion-badge` 的文本为 `uppercase`（大写）：

```css
.ios ion-badge {
  text-transform: uppercase;
}
```

还有一些全局 CSS 变量可用于覆盖样式。要为 `ios` 应用设置背景颜色，可以编写以下代码：

```css
.ios {
  --ion-background-color: #222;
}
```

有许多全局变量可以按模式覆盖，包括 [Ionic 的颜色变量](colors.md)、[主题变量](themes.md) 和 [全局组件变量](advanced.md)。
