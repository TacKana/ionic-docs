---
title: 'ion-toggle'
---

import Props from '@ionic-internal/component-api/v6/toggle/props.md';
import Events from '@ionic-internal/component-api/v6/toggle/events.md';
import Methods from '@ionic-internal/component-api/v6/toggle/methods.md';
import Parts from '@ionic-internal/component-api/v6/toggle/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/toggle/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/toggle/slots.md';

<head>
  <title>开关按钮 | ion-toggle: Ionic 应用的自定义切换按钮</title>
  <meta
    name="description"
    content="开关按钮用于切换单个选项的状态。使用 ion-toggle 组件可以创建可自定义的开关按钮，可在应用中开启或关闭。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

开关按钮（Toggle）是用于切换单个选项状态的开关控件。可以通过点击或滑动来开启或关闭。也可以通过设置 `checked` 属性以编程方式选中。

## 基本用法

import Basic from '@site/static/usage/v6/toggle/basic/index.md';

<Basic />

## 开启 / 关闭标签

开关按钮可以通过设置 `enableOnOffLabels` 属性来启用开启/关闭标签。这对于无障碍访问非常重要，因为它能更清晰地区分已选中和未选中的开关状态。

import OnOff from '@site/static/usage/v6/toggle/on-off/index.md';

<OnOff />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v6/toggle/theming/colors/index.md';

<Colors />

### CSS 自定义属性

CSS 自定义属性可以与标准 CSS 结合使用，以定位开关的不同部分。我们可以直接修改开关的 `width` 和 `height` 来改变轨道的尺寸，同时使用 `--handle-width` 和 `--handle-height` 自定义属性来定制滑块的尺寸。

import CSSProps from '@site/static/usage/v6/toggle/theming/css-properties/index.md';

<CSSProps />

### CSS 影子部件

我们可以通过定位暴露的特定影子部件来进一步自定义开关。这些部件上的任何 CSS 属性都可以被样式化，也可以与 CSS 自定义属性结合使用。

import CSSParts from '@site/static/usage/v6/toggle/theming/css-shadow-parts/index.md';

<CSSParts />

## 接口定义

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

虽然不是必需的，但可以使用此接口替代 `CustomEvent` 接口，以便对此组件发出的 Ionic 事件进行更严格的类型检查。

```typescript
interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLIonToggleElement;
}
```

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 影子部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />