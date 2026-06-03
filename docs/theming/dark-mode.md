---
title: 深色模式
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>深色模式：更改配色方案和 CSS 属性</title>
  <meta
    name="description"
    content="开发者正在原生应用中添加深色模式 CSS 以支持用户的偏好设置。了解更多关于 Ionic 应用的深色配色方案。"
  />
</head>

Ionic 使得更改应用的调色板变得简单，包括支持深色配色方案。深色模式是一种显示设置，它会将所有应用视图更改为深色调色板。它在 iOS 和 Android 上获得了系统级的支持，使其成为开发者非常希望添加到应用中的功能。

## 启用深色调色板

在应用中启用深色调色板有三种方式：**始终**启用、基于**系统**设置、或使用 CSS **类**。

### 始终启用

Ionic Framework 提供的默认调色板是浅色调色板，包含浅色背景和深色文本。但是，可以通过在相应文件中导入以下样式表将默认调色板更改为深色调色板：

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/dark.always.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/dark.always.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/dark.always.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/dark.always.css';
```

</TabItem>

</Tabs>

这将在 [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) 选择器上设置[应用颜色](/theming/themes#应用颜色)和[阶梯颜色](/theming/themes#阶梯颜色)。

以下示例将始终显示深色调色板，无论系统的深色模式设置如何。

import AlwaysDarkMode from '@site/static/usage/v8/theming/always-dark-mode/index.md';

<AlwaysDarkMode />

:::caution 重要
避免针对 `.ios` 或 `.md` 选择器来覆盖 Ionic 深色调色板，因为这些类会添加到每个组件中，并且优先级高于全局定义的变量。相反，我们应该在 `:root` 元素上定位特定模式的类。
:::

### 系统设置

启用深色模式的系统方法涉及检查用户首选配色方案的系统设置。这是启动新的 Ionic Framework 应用时的默认设置。在相应文件中导入以下样式表将自动从系统设置中检索用户的偏好，并在用户偏好深色模式时应用深色调色板：

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/dark.system.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/dark.system.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/dark.system.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/dark.system.css';
```

</TabItem>

</Tabs>

当 [CSS 媒体查询 `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) 为 `dark` 时，这将设置[应用颜色](/theming/themes#应用颜色)和[阶梯颜色](/theming/themes#阶梯颜色)。`prefers-color-scheme` 媒体查询受到[所有现代浏览器](https://caniuse.com/#feat=prefers-color-scheme)的支持。如果需要支持较旧浏览器，我们建议使用 [CSS 类](#css-类)方法。

以下示例使用系统设置来决定何时显示深色模式。

:::info
不确定如何更改系统设置？以下是如何在 [Windows 11](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe) 和 [macOS](https://support.apple.com/en-us/HT208976) 上启用深色模式。
:::

import SystemDarkMode from '@site/static/usage/v8/theming/system-dark-mode/index.md';

<SystemDarkMode />

:::caution 重要
避免针对 `.ios` 或 `.md` 选择器来覆盖 Ionic 深色调色板，因为这些类会添加到每个组件中，并且优先级高于全局定义的变量。相反，我们应该在 `:root` 元素上定位特定模式的类。
:::

### CSS 类

虽然前面的方法非常适合仅通过文件导入来启用深色调色板，但在某些场景下您可能需要对其应用进行更多控制。在需要条件性应用深色调色板的情况下，例如通过切换开关，或者您想根据系统设置扩展功能时，我们提供了一个深色调色板类文件。当应用中添加特定类时，该文件会应用深色调色板。将以下样式表导入相应文件将提供使用该类启用深色调色板所需的样式：

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```css
@import '@ionic/angular/css/palettes/dark.class.css';
```

</TabItem>
<TabItem value="javascript">

```ts
import '@ionic/core/css/palettes/dark.class.css';
```

</TabItem>
<TabItem value="react">

```tsx
import '@ionic/react/css/palettes/dark.class.css';
```

</TabItem>
<TabItem value="vue">

```ts
import '@ionic/vue/css/palettes/dark.class.css';
```

</TabItem>

</Tabs>

这将在 `.ion-palette-dark` 选择器上设置[应用颜色](/theming/themes#应用颜色)和[阶梯颜色](/theming/themes#阶梯颜色)，该选择器需要由开发者应用于应用。

以下示例结合了站点设置、系统设置和切换开关来决定何时显示深色模式。站点调色板优先级高于系统设置。如果您的系统设置与演示加载时的站点调色板不同，将会使用站点调色板。

:::info
不确定如何更改系统设置？以下是如何在 [Windows 11](https://support.microsoft.com/en-us/windows/change-colors-in-windows-d26ef4d6-819a-581c-1581-493cfcc005fe) 和 [macOS](https://support.apple.com/en-us/HT208976) 上启用深色模式。
:::

import ClassDarkMode from '@site/static/usage/v8/theming/class-dark-mode/index.md';

<ClassDarkMode />

:::caution 重要
`.ion-palette-dark` 类**必须**添加到 `html` 元素上，以便与导入的深色调色板一起使用。
:::

## 调整系统 UI 组件

在开发深色调色板时，您可能会注意到某些系统 UI 组件没有正确适应深色模式。要解决此问题，您需要指定 `color-scheme`。请参阅 <a href="https://caniuse.com/#feat=mdn-html_elements_meta_name-color-scheme" target="_blank">color-scheme 的浏览器兼容性</a>了解跨浏览器支持的详细信息。

虽然您可能主要使用 Ionic 组件而不是原生组件，但 `color-scheme` 也会影响应用的某些方面，例如滚动条。要使用 `color-scheme`，您需要在应用的 `head` 中添加以下 HTML：

```html
<meta name="color-scheme" content="light dark" />
```

这允许页面指示它希望以哪种配色方案呈现。或者，您可以添加以下 CSS 来在每个元素上设置：

```css
color-scheme: light dark;
```

| 默认滚动条                                                                                                                               | 使用 `color-scheme` 的滚动条                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![应用界面中默认的浅色主题滚动条。](/img/theming/color-scheme-light.png '无深色模式时的默认滚动条外观')                                      | ![应用界面中的深色主题滚动条，展示了 'color-scheme' 属性的效果。](/img/theming/color-scheme-dark.png "应用了深色模式 'color-scheme' 的滚动条外观")                                                                              |

有关 `color-scheme` 的更多信息，请参阅 [Web.dev 配色方案指南](https://web.dev/color-scheme/)。

:::note
`color-scheme` 不适用于键盘。有关深色模式如何与键盘配合使用的详细信息，请参阅[键盘文档](../developing/keyboard.md#深色模式)。
:::

:::note
对于希望在 iOS 15 上 Safari 状态栏或 macOS 上 Safari 工具栏下自定义主题颜色的开发者，请参阅 [`theme-color` Meta](./advanced.md#theme-color-meta)。
:::

## Ionic 深色调色板

Ionic 有一个推荐的深色调色板，可以通过三种方式启用：[始终启用](#始终启用)、基于[系统](#系统设置)设置、或使用 [CSS 类](#css-类)。每种方法都涉及导入相应名称的深色调色板文件。

以下是每个文件的内容供参考。这些变量通过导入相关的深色调色板文件来设置，不需要复制到应用中。有关被更改的变量的更多信息，包括进一步自定义的额外变量，请参阅[主题](themes.md)部分。

<Tabs groupId="darkFiles" defaultValue="always" values={[{ value: 'always', label: '始终 (dark.always.css)' }, { value: 'system', label: '系统 (dark.system.css)' }, { value: 'class', label: '类 (dark.class.css)' }]}>

<TabItem value="always">

**始终**深色调色板的行为如下：

1. 在 `:root` 选择器中为所有[模式](platform-styles.md#ionic-模式)设置 [Ionic 颜色](colors.md)，以配合深色调色板。[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) 选择器与 `html` 选择器相同，只是其[特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)更高。
2. 使用 `:root.ios` 选择器为 `ios` 设备设置深色调色板的变量。
3. 使用 `:root.md` 选择器为 `md` 设备设置深色调色板的变量。

:::caution
如果您想覆盖任何 Ionic 深色调色板变量，注意特异性非常重要。例如，由于 `--ion-item-background` 变量是为每种模式设置的，因此无法在 `:root` 选择器中覆盖它。需要使用更高特异性的选择器，例如 `:root.ios`。
:::

:::info
Ionic 深色调色板的内容可以在 [GitHub 上查看](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.scss)。用于应用**始终**深色调色板的 CSS 可以在[仓库](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.always.scss)中找到。
:::

</TabItem>

<TabItem value="system">

**系统**深色调色板的行为如下：

1. 在 `:root` 选择器中为所有[模式](platform-styles.md#ionic-模式)设置 [Ionic 颜色](colors.md)，以配合深色调色板。[`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) 选择器与 `html` 选择器相同，只是其[特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)更高。
2. 使用 `:root.ios` 选择器为 `ios` 设备设置深色调色板的变量。
3. 使用 `:root.md` 选择器为 `md` 设备设置深色调色板的变量。
4. 仅当 [CSS 媒体查询 `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) 为 `dark` 时应用这些变量。

:::caution
如果您想覆盖任何 Ionic 深色调色板变量，注意特异性非常重要。例如，由于 `--ion-item-background` 变量是为每种模式设置的，因此无法在 `:root` 选择器中覆盖它。需要使用更高特异性的选择器，例如 `:root.ios`。
:::

:::info
Ionic 深色调色板的内容可以在 [GitHub 上查看](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.scss)。用于应用**系统**深色调色板的 CSS 可以在[仓库](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.system.scss)中找到。
:::

</TabItem>

<TabItem value="class">

**类**深色调色板的行为如下：

1. 在 `.ion-palette-dark` 选择器中为所有[模式](platform-styles.md#ionic-模式)设置 [Ionic 颜色](colors.md)，以配合深色调色板。`.ion-palette-dark` 类必须添加到应用中的 `html` 元素上。
2. 使用 `.ion-palette-dark.ios` 选择器为 `ios` 设备设置深色调色板的变量。
3. 使用 `.ion-palette-dark.md` 选择器为 `md` 设备设置深色调色板的变量。

:::caution
如果您想覆盖任何 Ionic 深色调色板变量，注意特异性非常重要。例如，由于 `--ion-item-background` 变量是为每种模式设置的，因此无法在 `.ion-palette-dark` 选择器中覆盖它。需要使用更高特异性的选择器，例如 `.ion-palette-dark.ios`。
:::

:::info
Ionic 深色调色板的内容可以在 [GitHub 上查看](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.scss)。用于应用**类**深色调色板的 CSS 可以在[仓库](https://github.com/ionic-team/ionic-framework/blob/main/core/src/css/palettes/dark.class.scss)中找到。
:::

</TabItem>

</Tabs>
