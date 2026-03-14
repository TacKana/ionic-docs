---
title: 'ion-virtual-scroll | 适用于 Ionic 应用的 Angular 虚拟滚动列表'
description: 'ion-virtual-scroll 在 Angular 中受支持，可显示虚拟的无限列表。记录被传递给包含数据以创建模板的虚拟滚动组件。'
sidebar_label: 'ion-virtual-scroll'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/virtual-scroll/props.md';
import Events from '@ionic-internal/component-api/v5/virtual-scroll/events.md';
import Methods from '@ionic-internal/component-api/v5/virtual-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v5/virtual-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/virtual-scroll/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/virtual-scroll/slots.md';

# ion-virtual-scroll

虚拟滚动组件可以显示一个虚拟的、"无限"列表。一组记录被传递给虚拟滚动组件，其中包含用于创建模板的数据。为每条记录创建的模板（称为单元格）可以包含项目、页眉和页脚。出于性能考虑，并不会一次性渲染列表中的所有记录；而是渲染一小部分记录（足以填满视口），并在用户滚动时复用这些记录。

## 近似宽度和高度

如果虚拟滚动中项目的高度与默认大小 `40px` 相差较大，那么为 `approxItemHeight` 属性提供一个值就极为重要。不需要精确到像素级别的尺寸，但如果没有这个估计值，虚拟滚动将无法正确渲染。

每个模板的近似宽度和高度用于帮助确定应创建多少个单元格，并帮助计算可滚动区域的高度。请注意，每个单元格的实际渲染大小来自应用的 CSS，而这个近似值仅用于帮助计算初始尺寸。

同样重要的是要知道，Ionic 的默认项目大小在不同平台之间略有不同的高度，这完全没问题。

## 虚拟滚动中的图片

HTTP 请求、图片解码和图片渲染可能会导致滚动时出现卡顿。为了更好地控制图片，Ionic 提供了 `<ion-img>` 来管理 HTTP 请求和图片渲染。当快速滚动浏览项目时，`<ion-img>` 知道何时以及何时不发出请求，何时以及何时不渲染图片，并且只加载滚动后可见的图片。[详细了解 `ion-img`](img.md)。

应用开发人员同样需要确保图片尺寸固定，并且在图片完全加载后不会改变大小并影响任何其他元素的尺寸。简而言之，为避免引入渲染错误，虚拟项目内的元素不能动态更改。

对于虚拟滚动，`<img>` 的自然效果并不是理想特性。我们建议使用 `<ion-img>` 组件而非原生的 `<img>` 元素，因为当 `<img>` 元素被添加到 DOM 时，它会立即发出图片文件的 HTTP 请求。此外，`<img>` 会在其认为合适的时候渲染，这可能发生在用户滚动时。然而，`<ion-img>` 受包含它的 `ion-content` 控制，在快速滚动时不会渲染图片。

## 虚拟滚动性能提示

### iOS Cordova WKWebView

当使用 Cordova 部署到 iOS 时，强烈建议使用 [WKWebView 插件](https://blog.ionicframework.com/cordova-ios-performance-improvements-drop-in-speed-with-wkwebview/) 以利用 iOS 更高性能的 webview。此外，与旧的 UIWebView 相比，WKWebView 在高效滚动方面更胜一筹。

### 锁定元素尺寸和位置

为了使虚拟滚动能够高效地调整每个项目的尺寸和定位，每个虚拟项目内的每个元素都不能动态更改其尺寸或位置，这一点非常重要。确保尺寸和位置不发生改变的最佳方法是，建议每个虚拟项目都通过 CSS 锁定其尺寸。

### 使用 `ion-img` 处理图片

当在虚拟滚动中包含图片时，请务必使用 [`ion-img`](img.md) 而不是标准的 `<img>` HTML 元素。使用 `ion-img` 时，图片会延迟加载，因此只渲染可见的图片，并且在滚动时高效控制 HTTP 请求。

### 设置近似宽度和高度

如上所述，所有元素都应锁定其尺寸。然而，虚拟滚动在元素渲染之前并不知道其尺寸。对于初始渲染，虚拟滚动仍然需要设置应构建多少个项目。通过“近似”属性输入，例如 `approxItemHeight`，我们能够为虚拟滚动提供一个近似尺寸，从而让虚拟滚动决定应创建多少个项目。

### 更改数据集时应使用 `trackBy`

迭代器中元素的标识可能会在数据未改变时发生变化。例如，如果迭代器是从服务器 RPC 生成的，并且该 RPC 重新运行，就可能发生这种情况。即使“数据”没有改变，第二次响应也会产生具有不同标识的对象，而 Ionic 将拆除整个 DOM 并重建它。这是一项昂贵的操作，应尽可能避免。

### 高效的页眉和页脚函数

每个虚拟项目必须保持极高的效率，但真正降低其性能的一种方式是在分区页眉和页脚函数中执行任何 DOM 操作。这些函数会针对数据集中的每条记录调用，因此请确保它们是高效的。

## React

虚拟滚动组件在 React 中不受支持。

## Vue

`ion-virtual-scroll` 在 Vue 中不受支持。我们计划在不久的将来与社区现有的虚拟滚动解决方案集成。关注我们的 [GitHub 议题线程](https://github.com/ionic-team/ionic-framework/issues/17887) 以获取最新更新。

## 用法

```html
<ion-content>
  <ion-virtual-scroll [items]="items" approxItemHeight="320px">
    <ion-card *virtualItem="let item; let itemBounds = bounds;">
      <div>
        <ion-img [src]="item.imgSrc" [height]="item.imgHeight" [alt]="item.name"></ion-img>
      </div>
      <ion-card-header>
        <ion-card-title>{{ item.name }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>{{ item.content }}</ion-card-content>
    </ion-card>
  </ion-virtual-scroll>
</ion-content>
```

```tsx
export class VirtualScrollPageComponent {
  items: any[] = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        name: i + ' - ' + images[rotateImg],
        imgSrc: getImgSrc(),
        avatarSrc: getImgSrc(),
        imgHeight: Math.floor(Math.random() * 50 + 150),
        content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100),
      });

      rotateImg++;
      if (rotateImg === images.length) {
        rotateImg = 0;
      }
    }
  }
}

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const images = [
  'bandit',
  'batmobile',
  'blues-brothers',
  'bueller',
  'delorean',
  'eleanor',
  'general-lee',
  'ghostbusters',
  'knight-rider',
  'mirth-mobile',
];

function getImgSrc() {
  const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
  rotateImg++;
  if (rotateImg === images.length) {
    rotateImg = 0;
  }
  return src;
}

let rotateImg = 0;
```

### 基础用法

记录数组应传递给 `ion-virtual-scroll` 元素上的 `items` 属性。提供给 `items` 属性的数据必须是数组。`ion-virtual-scroll` 中需要一个带有 `*virtualItem` 属性的项目模板。`*virtualItem` 属性可以添加到任何元素上。

```html
<ion-virtual-scroll [items]="items">
  <ion-item *virtualItem="let item"> {{ item }} </ion-item>
</ion-virtual-scroll>
```

### 分区页眉和页脚

分区页眉和页脚是可选的。它们可以通过开发人员定义的函数动态创建。例如，一个大型联系人列表通常按字母表的每个字母都有一个分隔符。开发人员提供自己的自定义函数，每条记录都会调用该函数。自定义函数中的逻辑应确定是否创建分区模板以及向模板提供什么数据。如果不应该创建模板，自定义函数应返回 `null`。

```html
<ion-virtual-scroll [items]="items" [headerFn]="myHeaderFn">
  <ion-item-divider *virtualHeader="let header"> {{ header }} </ion-item-divider>
  <ion-item *virtualItem="let item"> Item: {{ item }} </ion-item>
</ion-virtual-scroll>
```

下面是一个在每条记录上调用的自定义函数示例。它接收单个记录、记录的索引号以及整个记录数组。在此示例中，每 20 条记录后会插入一个页眉。因此，在第 19 条和第 20 条记录之间、第 39 条和第 40 条记录之间等等，将创建一个 `<ion-item-divider>`，并且模板的数据将来自函数的返回数据。

```ts
myHeaderFn(record, recordIndex, records) {
  if (recordIndex % 20 === 0) {
    return 'Header ' + recordIndex;
  }
  return null;
}
```

### 自定义组件

如果要在虚拟滚动中使用自定义组件，最好用 `<div>` 包装它，以确保组件正确渲染。由于每个自定义组件的实现和内部结构可能大不相同，用 `<div>` 包装是确保正确测量尺寸的安全方式。

```html
<ion-virtual-scroll [items]="items">
  <div *virtualItem="let item">
    <my-custom-item [item]="item"> {{ item }} </my-custom-item>
  </div>
</ion-virtual-scroll>
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