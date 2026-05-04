---
title: Platform Styles
---

<head>
  <title>Ionic 平台样式 | Ionic 应用的平台特定样式</title>
  <meta
    name="description"
    content="Ionic 根据应用运行的设备提供平台特定的样式。通过让组件样式匹配设备设计规范，可以使应用给用户带来原生般的体验。"
  />
</head>

Ionic 根据应用程序运行的设备提供平台特定的样式。通过让组件样式匹配设备设计规范，应用程序只需编写一次，即可根据访问平台的不同，为用户提供原生般的观感和体验。

<LegacyAnchor id="ionic-modes" />

## Ionic 模式

Ionic 使用**模式**来定制组件的外观。每个**平台**都有一个默认的**模式**，但可以通过全局[配置](../developing/config.md)进行覆盖。下表展示了为每个**平台**添加的默认**模式**：

| 平台      | 模式   | 描述                                                                                                                              |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `ios`     | `ios`  | 在 iPhone、iPad 或 iPod 上查看时，将使用 [iOS 样式](https://www.apple.com/ios)                                                  |
| `android` | `md`   | 在任何 Android 设备上查看时，将使用 [Material Design 样式](https://material.io/guidelines/)                                      |
| `core`    | `md`   | 任何不符合上述平台的设备将使用 [Material Design 样式](https://material.io/guidelines/)                                          |

例如，在 Android 平台上查看的应用将默认使用 `md`（Material Design）模式。`<html>` 元素将添加 `class="md"`，并且所有组件都将使用 Material Design 样式：

```html
<html class="md"></html>
```

_注意：**平台**和**模式**并不相同。可以通过应用的[配置](../developing/config.md)将平台设置为使用任何模式。_

## 覆盖模式样式

每个 Ionic 组件都可以根据模式进行样式设置。`html` 元素同时具有 `class` 和 `mode` 属性，其值等于当前模式。这些属性可用于覆盖任何组件的样式。例如，仅在 `ios` 模式下将 `ion-badge` 的文本样式设置为 `uppercase`：

```css
.ios ion-badge {
  text-transform: uppercase;
}
```

还有许多全局 CSS 变量可用于覆盖样式。要为 `ios` 应用设置背景颜色，可以编写如下代码：

```css
.ios {
  --ion-background-color: #222;
}
```

有许多全局变量可以按模式进行覆盖，包括 [Ionic 颜色变量](colors.md)、[主题变量](themes.md) 和 [全局组件变量](advanced.md)。