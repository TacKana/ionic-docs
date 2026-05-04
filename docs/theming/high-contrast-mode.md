---
title: 高对比度模式
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>高对比度模式：增强颜色对比度</title>
  <meta
    name="description"
    content="开发者正在原生应用上添加高对比度模式的 CSS 来支持用户偏好。阅读本文了解 Ionic 应用的高对比度配色方案。"
  />
</head>

Ionic 为低视力用户提供了增强对比度的调色板。这些调色板通过放大前景内容（如文本）与背景内容（如 UI 组件）之间的对比度来工作。Ionic 提供了浅色和深色两种变体来实现高对比度。

## 概述

Ionic 的默认调色板提供了 [Ionic 颜色](./colors.md)，当与适当的对比色搭配使用时，能满足 Web 内容无障碍指南 (WCAG) 定义的 [AA 级颜色对比度](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)。高对比度调色板中的 [Ionic 颜色](./colors.md) 经过更新，当与适当的对比色搭配使用时，能达到 [AAA 级颜色对比度](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)。值得注意的是，UI 组件的对比度得到了改进，包括边框、文本和背景色。然而，需要注意的是，在高对比度调色板中，文本可读性被赋予优先权。这意味着，如果调整 UI 组件与页面背景的对比度会显著损害组件文本与其背景之间的对比度，那么 UI 组件背景的对比度将保持不变。

## 启用高对比度主题

在应用中启用高对比度调色板有三种方式：**始终**启用、基于**系统**设置启用，或使用 CSS **类**启用。

<LegacyAnchor id="always" />

### 始终启用

可以通过在适当的文件中导入以下样式表来启用高对比度调色板。这种方法将无视系统的对比度偏好设置，始终启用高对比度调色板。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```scss
@import '@ionic/angular/css/palettes/high-contrast.always.css'; // 浅色调色板
// @import '@ionic/angular/css/palettes/high-contrast-dark.always.css'; // 深色调色板
```

</TabItem>
<TabItem value="javascript">

```typescript
import '@ionic/core/css/palettes/high-contrast.always.css'; // 浅色调色板
// import '@ionic/core/css/palettes/high-contrast-dark.always.css'; // 深色调色板
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/high-contrast.always.css'; // 浅色调色板
// import '@ionic/react/css/palettes/high-contrast-dark.always.css'; // 深色调色板
```

</TabItem>
<TabItem value="vue">

```typescript
import '@ionic/vue/css/palettes/high-contrast.always.css'; // 浅色调色板
// import '@ionic/vue/css/palettes/high-contrast-dark.always.css'; // 深色调色板
```

</TabItem>

</Tabs>

可以通过导入 `high-contrast-dark.always.css` 而不是 `high-contrast.always.css` 来应用高对比度深色调色板。

以下示例将始终显示高对比度浅色调色板，无视用户对高对比度或深色模式的偏好。

import AlwaysHighContrastMode from '@site/static/usage/v8/theming/always-high-contrast-mode/index.md';

<AlwaysHighContrastMode />

<LegacyAnchor id="system" />

### 系统设置

启用高对比度模式的系统方法涉及检查系统设置中用户的对比度偏好。这是启动新的 Ionic Framework 应用时的默认方式。在适当的文件中导入以下样式表将自动从系统设置中获取用户的偏好，并在用户偏好高对比度时应用高对比度调色板。

以下示例展示了如何同时包含高对比度浅色调色板和高对比度深色调色板。系统将检查深色模式偏好，以显示高对比度调色板的浅色或深色变体。

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/high-contrast.system.css';
@import '@ionic/angular/css/palettes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/high-contrast.system.css';
import '@ionic/core/css/palettes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/high-contrast.system.css';
import '@ionic/react/css/palettes/high-contrast-dark.system.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/high-contrast.system.css';
import '@ionic/vue/css/palettes/high-contrast-dark.system.css';
```

</TabItem>

</Tabs>

当 [`prefers-contrast` 的 CSS 媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) 值为 `more` 时，此方法会激活高对比度调色板。`prefers-contrast` 媒体查询得到 [所有现代浏览器的支持](https://caniuse.com/?search=prefers-contrast)。如果需要支持旧版浏览器，我们建议使用 [CSS 类](#css-class) 方法。

以下示例使用系统设置来决定何时显示高对比度模式。

:::info
不确定如何更改系统设置？这里介绍了如何在 [Windows 11](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) 和 [macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac) 上启用高对比度模式。
:::

import SystemHighContrastMode from '@site/static/usage/v8/theming/system-high-contrast-mode/index.md';

<SystemHighContrastMode />

:::caution
高对比度浅色调色板必须在 [core.css](../layout/global-stylesheets.md#corecss) 之后导入，而高对比度深色调色板必须在 `dark.system.css` 之后导入。否则，标准对比度调色板将具有优先权。
:::

<LegacyAnchor id="css-class" />

### CSS 类

虽然之前的方法非常适合仅通过文件导入来启用高对比度调色板，但在某些情况下，您可能需要更多地控制其应用位置。如果您需要有条件地应用高对比度调色板，例如通过切换开关，或者希望基于系统设置扩展功能，我们提供了一个高对比度调色板类文件。当在应用中添加特定类时，此文件会应用高对比度调色板。将以下样式表导入到适当的文件中，将提供使用高对比度调色板类所需的必要样式：

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/high-contrast.class.css';
@import '@ionic/angular/css/palettes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/high-contrast.class.css';
import '@ionic/core/css/palettes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/high-contrast.class.css';
import '@ionic/react/css/palettes/high-contrast-dark.class.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/high-contrast.class.css';
import '@ionic/vue/css/palettes/high-contrast-dark.class.css';
```

</TabItem>

</Tabs>

当在 `html` 元素上设置 `.ion-palette-high-contrast` 类时，此方法会激活高对比度调色板。此类必须由开发人员应用。这可以与 [`.ion-palette-dark` 类](./dark-mode.md#css-class) 结合使用，以有条件地应用高对比度深色调色板。

以下示例结合了站点设置、系统设置和切换开关来决定何时显示高对比度模式。站点的调色板优先于系统设置。如果加载演示时您的系统设置与站点的调色板不同，它将使用站点的调色板。

:::info
不确定如何更改系统设置？这里介绍了如何在 [Windows 11](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) 和 [macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac) 上启用高对比度模式。
:::

import ClassHighContrastMode from '@site/static/usage/v8/theming/class-high-contrast-mode/index.md';

<ClassHighContrastMode />

:::caution
高对比度浅色调色板必须在 [core.css](../layout/global-stylesheets.md#corecss) 之后导入，而高对比度深色调色板必须在 `dark.class.css` 之后导入。否则，标准对比度调色板将具有优先权。
:::

:::caution
`.ion-palette-high-contrast` 类**必须**添加到 `html` 元素，才能与导入的高对比度调色板一起使用。
:::

## 自定义 Ionic 高对比度主题

Ionic 提供了一个推荐的高对比度调色板，可以通过三种不同的方式启用：[始终启用](#always)、基于[系统](#system)设置启用，或使用 [CSS 类](#css-class) 启用。每种方法都涉及导入具有相应名称的高对比度调色板文件。

主题变量通过导入相关的高对比度调色板文件来设置，无需复制到应用中。有关正在更改的变量的更多信息，包括用于进一步自定义的额外变量，请参阅 [主题](themes.md) 部分。

以下详细说明了如何根据高对比度调色板在应用程序中的应用方式进行自定义。

<Tabs groupId="highContrastFile" defaultValue="always" values={[{ value: 'always', label: '始终启用' }, { value: 'system', label: '系统设置' }, { value: 'class', label: 'CSS 类' }]}>

<TabItem value="always">

可以通过导入 `high-contrast.always.css` 来访问**始终启用**的高对比度浅色调色板，导入 `high-contrast-dark.always.css` 来访问深色调色板。

**始终启用**的高对比度调色板的行为方式如下：

1. 在 `:root` 选择器中为所有[模式](platform-styles.md#ionic-modes)设置 [Ionic 颜色](colors.md)，以配合高对比度调色板。 [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) 选择器与 `html` 选择器相同，只是其[特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)更高。
2. 使用 `:root.ios` 选择器为 `ios` 设备设置高对比度调色板的变量。
3. 使用 `:root.md` 选择器为 `md` 设备设置高对比度调色板的变量。

</TabItem>

<TabItem value="system">

可以通过导入 `high-contrast.system.css` 来访问**系统设置**的高对比度浅色调色板，导入 `high-contrast-dark.system.css` 来访问深色调色板。

**系统设置**的高对比度调色板的行为方式如下：

1. 在 `:root` 选择器中为所有[模式](platform-styles.md#ionic-modes)设置 [Ionic 颜色](colors.md)，以配合高对比度调色板。 [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) 选择器与 `html` 选择器相同，只是其[特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)更高。
2. 使用 `:root.ios` 选择器为 `ios` 设备设置高对比度调色板的变量。
3. 使用 `:root.md` 选择器为 `md` 设备设置高对比度调色板的变量。
4. 仅当 [`prefers-contrast` 的 CSS 媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) 值为 `more` 时才应用这些变量。

</TabItem>

<TabItem value="class">

可以通过导入 `high-contrast.class.css` 来访问 **CSS 类** 的高对比度浅色调色板，导入 `high-contrast-dark.class.css` 来访问深色调色板。

**CSS 类**的高对比度调色板的行为方式如下：

1. 在 `.ion-palette-high-contrast` 选择器中为所有[模式](platform-styles.md#ionic-modes)设置 [Ionic 颜色](colors.md)，以配合高对比度调色板。 `.ion-palette-high-contrast` 类必须添加到应用中的 `html` 元素上。
2. 使用 `.ion-palette-high-contrast.ios` 选择器为 `ios` 设备设置高对比度调色板的变量。
3. 使用 `.ion-palette-high-contrast.md` 选择器为 `md` 设备设置高对比度调色板的变量。

</TabItem>

</Tabs>