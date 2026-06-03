---
title: 高对比度模式
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>高对比度模式：提高颜色对比度</title>
  <meta
    name="description"
    content="开发者正在原生应用中添加高对比度模式 CSS 以支持用户的偏好设置。了解更多关于 Ionic 应用的高对比度配色方案。"
  />
</head>

Ionic 为低视力用户提供了增强对比度的调色板。这些调色板通过增强前景内容（如文本）和背景内容（如 UI 组件）之间的对比度来工作。Ionic 提供了浅色和深色两种变体来实现高对比度。

## 概述

Ionic 中的默认调色板提供了 [Ionic 颜色](./colors.md)，当与适当的对比色一起使用时，满足 Web 内容无障碍指南（WCAG）定义的 [AA 级颜色对比度](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)。高对比度调色板中的 [Ionic 颜色](./colors.md) 已经更新，当与适当的对比色一起使用时，可以满足 [AAA 级颜色对比度](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)。值得注意的是，UI 组件（包括边框、文本和背景颜色）的对比度已得到改进。但需要注意的是，在高对比度调色板中，文本可读性优先于其他方面。这意味着，如果调整 UI 组件相对于页面背景的对比度会显著影响组件文本与其背景之间的对比度，则 UI 组件背景的对比度将保持不变。

## 启用高对比度主题

在应用中启用高对比度调色板有三种方式：**始终**启用、基于**系统**设置、或使用 CSS **类**。

### 始终启用

可以通过在相应文件中导入以下样式表来启用高对比度调色板。此方法将始终启用高对比度调色板，无论系统的对比度偏好设置如何。

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

通过导入 `high-contrast-dark.always.css` 而非 `high-contrast.always.css` 可以应用高对比度深色调色板。

以下示例将始终显示高对比度浅色调色板，无论用户对高对比度或深色模式的偏好如何。

import AlwaysHighContrastMode from '@site/static/usage/v8/theming/always-high-contrast-mode/index.md';

<AlwaysHighContrastMode />

### 系统设置

启用高对比度模式的系统方法涉及检查用户偏好的对比度的系统设置。这是启动新的 Ionic Framework 应用时的默认设置。在相应文件中导入以下样式表将自动从系统设置中检索用户的偏好，并在用户偏好高对比度时应用高对比度调色板。

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

当 [CSS 媒体查询 `prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) 为 `more` 时，此方法将激活高对比度调色板。`prefers-contrast` 媒体查询受到[所有现代浏览器](https://caniuse.com/?search=prefers-contrast)的支持。如果需要支持较旧浏览器，我们建议使用 [CSS 类](#css-类)方法。

以下示例使用系统设置来决定何时显示高对比度模式。

:::info
不确定如何更改系统设置？以下是如何在 [Windows 11](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) 和 [macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac) 上启用高对比度模式。
:::

import SystemHighContrastMode from '@site/static/usage/v8/theming/system-high-contrast-mode/index.md';

<SystemHighContrastMode />

:::caution
高对比度浅色调色板必须在 [core.css](../layout/global-stylesheets.md#corecss) 之后导入，高对比度深色调色板必须在 `dark.system.css` 之后导入。否则，标准对比度调色板将具有更高优先级。
:::

### CSS 类

虽然前面的方法非常适合仅通过文件导入来启用高对比度调色板，但在某些场景下您可能需要对其应用位置进行更多控制。在需要条件性应用高对比度调色板的情况下，例如通过切换开关，或者您想根据系统设置扩展功能时，我们提供了一个高对比度调色板类文件。当应用中添加特定类时，该文件会应用高对比度调色板。将以下样式表导入相应文件将提供使用该类启用高对比度调色板所需的样式：

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

当 `.ion-palette-high-contrast` 类被设置到 `html` 元素上时，此方法将激活高对比度调色板。该类必须由开发者应用。这可以与 [`.ion-palette-dark` 类](./dark-mode.md#css-类)结合使用，以条件性应用高对比度深色调色板。

以下示例结合了站点设置、系统设置和切换开关来决定何时显示高对比度模式。站点调色板优先级高于系统设置。如果您的系统设置与演示加载时的站点调色板不同，将会使用站点调色板。

:::info
不确定如何更改系统设置？以下是如何在 [Windows 11](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025) 和 [macOS](https://support.apple.com/guide/mac-help/change-display-settings-for-accessibility-unac089/mac) 上启用高对比度模式。
:::

import ClassHighContrastMode from '@site/static/usage/v8/theming/class-high-contrast-mode/index.md';

<ClassHighContrastMode />

:::caution
高对比度浅色调色板必须在 [core.css](../layout/global-stylesheets.md#corecss) 之后导入，高对比度深色调色板必须在 `dark.class.css` 之后导入。否则，标准对比度调色板将具有更高优先级。
:::

:::caution
`.ion-palette-high-contrast` 类**必须**添加到 `html` 元素上，以便与导入的高对比度调色板一起使用。
:::

## 自定义 Ionic 高对比度主题

Ionic 有一个推荐的高对比度调色板，可以通过三种方式启用：[始终启用](#始终启用)、基于[系统](#系统设置)设置、或使用 [CSS 类](#css-类)。每种方法都涉及导入相应名称的高对比度调色板文件。

主题变量通过导入相关的高对比度调色板文件来设置，不需要复制到应用中。有关被更改的变量的更多信息，包括进一步自定义的额外变量，请参阅[主题](themes.md)部分。

以下提供了如何根据应用中的设置方式自定义高对比度调色板的详细信息。

<Tabs groupId="highContrastFile" defaultValue="always" values={[{ value: 'always', label: '始终' }, { value: 'system', label: '系统' }, { value: 'class', label: '类' }]}>

<TabItem value="always">

**始终**高对比度调色板可以通过导入 `high-contrast.always.css`（浅色变体）和 `high-contrast-dark.always.css`（深色变体）来应用。

**始终**高对比度调色板的行为如下：

1. 在 `:root` 选择器中为所有[模式](platform-styles.md#ionic-模式)设置 [Ionic 颜色](colors.md)，以配合高对比度调色板。[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) 选择器与 `html` 选择器相同，只是其[特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)更高。
2. 使用 `:root.ios` 选择器为 `ios` 设备设置高对比度调色板的变量。
3. 使用 `:root.md` 选择器为 `md` 设备设置高对比度调色板的变量。

</TabItem>

<TabItem value="system">

**系统**高对比度调色板可以通过导入 `high-contrast.system.css`（浅色变体）和 `high-contrast-dark.system.css`（深色变体）来应用。

**系统**高对比度调色板的行为如下：

1. 在 `:root` 选择器中为所有[模式](platform-styles.md#ionic-模式)设置 [Ionic 颜色](colors.md)，以配合高对比度调色板。[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) 选择器与 `html` 选择器相同，只是其[特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)更高。
2. 使用 `:root.ios` 选择器为 `ios` 设备设置高对比度调色板的变量。
3. 使用 `:root.md` 选择器为 `md` 设备设置高对比度调色板的变量。
4. 仅当 [CSS 媒体查询 `prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) 为 `more` 时应用这些变量。

</TabItem>

<TabItem value="class">

**类**高对比度调色板可以通过导入 `high-contrast.class.css`（浅色变体）和 `high-contrast-dark.class.css`（深色变体）来应用。

**类**高对比度调色板的行为如下：

1. 在 `.ion-palette-high-contrast` 选择器中为所有[模式](platform-styles.md#ionic-模式)设置 [Ionic 颜色](colors.md)，以配合高对比度调色板。`.ion-palette-high-contrast` 类必须添加到应用中的 `html` 元素上。
2. 使用 `.ion-palette-high-contrast.ios` 选择器为 `ios` 设备设置高对比度调色板的变量。
3. 使用 `.ion-palette-high-contrast.md` 选择器为 `md` 设备设置高对比度调色板的变量。

</TabItem>

</Tabs>
