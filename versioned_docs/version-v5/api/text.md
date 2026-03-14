---
sidebar_label: 'ion-text'
demoUrl: '/docs/demos/api/text/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/text/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/text/props.md';
import Events from '@ionic-internal/component-api/v5/text/events.md';
import Methods from '@ionic-internal/component-api/v5/text/methods.md';
import Parts from '@ionic-internal/component-api/v5/text/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/text/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/text/slots.md';

# ion-text

文本组件是一个简单组件，可用于设置任何元素的文本颜色。`ion-text` 元素应包裹目标元素，以更改该元素的文本颜色。

## 使用示例

```html
<ion-text color="secondary">
  <h1>H1：敏捷的棕色狐狸跳过懒惰的狗</h1>
</ion-text>

<ion-text color="primary">
  <h2>H2：敏捷的棕色狐狸跳过懒惰的狗</h2>
</ion-text>

<ion-text color="light">
  <h3>H3：敏捷的棕色狐狸跳过懒惰的狗</h3>
</ion-text>

<ion-text color="danger">
  <h4>H4：敏捷的棕色狐狸跳过懒惰的狗</h4>
</ion-text>

<ion-text color="dark">
  <h5>H5：敏捷的棕色狐狸跳过懒惰的狗</h5>
</ion-text>

<p>
  我看见一个狼人手里拿着中文菜单。走在雨中苏荷区的
  <ion-text color="danger"><sub>街道</sub></ion-text>上。他
  <ion-text color="primary"><i>正在</i></ion-text>寻找一家叫李和福的店。打算来一份
  <ion-text color="secondary"><a>大份的牛肉炒面。</a></ion-text>
  <ion-text color="danger"><ion-icon name="cut"></ion-icon></ion-text>
</p>
```

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />