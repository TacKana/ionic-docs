---
title: Platform Styles
---

<head>
  <title>Ionic 平台样式 | 为 Ionic 应用提供平台特定样式</title>
  <meta
    name="description"
    content="Ionic 根据应用运行的设备提供平台特定样式。通过将组件样式与设备设计指南相匹配，能让应用给用户带来原生般的体验。"
  />
</head>

Ionic 根据应用运行的设备提供平台特定样式。通过将组件样式与设备设计指南相匹配，应用只需编写一次代码，就能根据访问平台的不同，为用户带来原生般的观感和体验。

## Ionic 模式

Ionic 使用**模式**来自定义组件外观。每个**平台**都有一个默认**模式**，但这可以通过全局[配置](../developing/config.md)进行覆盖。下表展示了各**平台**默认添加的**模式**：

| 平台       | 模式  | 说明                                                                                                                             |
| ---------- | ----- | -------------------------------------------------------------------------------------------------------------------------------- |
| `ios`      | `ios` | 在 iPhone、iPad 或 iPod 上查看时将使用 [iOS 样式](https://www.apple.com/ios)。                                                   |
| `android`  | `md`  | 在任何 Android 设备上查看时将使用 [Material Design 样式](https://material.io/guidelines/)。                                       |
| `core`     | `md`  | 不属于上述任何平台的设备将使用 [Material Design 样式](https://material.io/guidelines/)。                                           |

例如，在 Android 平台上查看的应用将默认使用 `md`（Material Design）模式。`<html>` 元素会添加 `class="md"`，所有组件都将使用 Material Design 样式：

```html
<html class="md"></html>
```

_注意：**平台**和**模式**并不相同。平台可以通过应用的[配置](../developing/config.md)设置为使用任何模式。_

## 覆盖模式样式

每个 Ionic 组件都可以基于模式进行样式设置。`html` 元素同时拥有 `class` 和 `mode` 属性，其值等于当前模式。这些可用于覆盖任何组件的样式。例如，要为 `ion-badge` 仅在 `ios` 模式下设置 `uppercase` 文本：

```css
.ios ion-badge {
  text-transform: uppercase;
}
```

还有许多全局 CSS 变量可用于覆盖样式。要为 `ios` 应用设置背景颜色，可以这样编写：

```css
.ios {
  --ion-background-color: #222;
}
```

有许多全局变量可以按模式覆盖，包括 [Ionic 颜色变量](colors.md)、[主题变量](themes.md)和[全局组件变量](advanced.md)。