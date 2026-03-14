---
title: 'ion-virtual-scroll'
---

import Props from '@ionic-internal/component-api/v6/virtual-scroll/props.md';
import Events from '@ionic-internal/component-api/v6/virtual-scroll/events.md';
import Methods from '@ionic-internal/component-api/v6/virtual-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v6/virtual-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/virtual-scroll/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v6/virtual-scroll/slots.md';

<head>
  <title>ion-virtual-scroll | Ionic 应用中的 Angular 虚拟滚动列表</title>
  <meta
    name="description"
    content="ion-virtual-scroll，在 Angular 中受支持，用于显示虚拟的无限列表。记录被传递给包含数据的虚拟滚动以创建模板。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

:::note
该组件已被弃用，建议使用各 JavaScript 框架提供的虚拟滚动库。替代方案请参见下文。
:::

虚拟滚动用于显示一个虚拟的“无限”列表。一个包含数据的记录数组被传递给虚拟滚动组件，用于为每条记录创建模板。每条记录创建的模板（称为单元格）可以包含项目、页眉和页脚。出于性能考虑，列表中的每条记录并非一次性全部渲染；而是只渲染一小部分记录（足以填满视口），并在用户滚动时复用这些记录。

本指南将介绍针对各框架集成的推荐虚拟滚动包，以及 Ionic Angular 中已弃用的 `ion-virtual-scroll` 组件的文档。我们建议使用下面列出的框架特定解决方案，但对于仍在使用的开发者，`ion-virtual-scroll` 文档也提供在下方。

## Angular

有关 Ionic Angular 中的虚拟滚动选项，请参阅 [Angular 虚拟滚动指南](../angular/virtual-scroll.md)。

## React

有关 Ionic React 中的虚拟滚动选项，请参阅 [React 虚拟滚动指南](../react/virtual-scroll.md)。

## Vue

有关 Ionic Vue 中的虚拟滚动选项，请参阅 [Vue 虚拟滚动指南](../vue/virtual-scroll.md)。

---

以下文档适用于 `ion-virtual-scroll` 组件。

## 预估宽度和高度

如果虚拟滚动中项目的高度与默认大小 `40px` 相差较大，为 `approxItemHeight` 属性提供一个值就极其重要。精确到像素的尺寸并非必需，但如果没有估算值，虚拟滚动将无法正确渲染。

每个模板的预估宽度和高度用于帮助确定应创建多少个单元格，并帮助计算可滚动区域的高度。请注意，每个单元格的实际渲染大小来自应用程序的 CSS，而此估算值仅用于帮助计算初始尺寸。

还需要了解的是，Ionic 在不同平台上的默认项目大小高度略有不同，这完全正常。

## 虚拟滚动中的图片

HTTP 请求、图片解码和图片渲染可能会在滚动时导致卡顿。为了更好地控制图片，Ionic 提供了 `<ion-img>` 来管理 HTTP 请求和图片渲染。在快速滚动浏览项目时，`<ion-img>` 知道何时应该请求、何时不应该请求，何时应该渲染、何时不应该渲染，并且只加载滚动后可见的图片。[了解更多关于 `ion-img` 的信息](img.md)。

对于应用开发者来说，确保图片尺寸固定也很重要，并且在图片完全加载后，它们不会改变大小并影响任何其他元素的尺寸。简而言之，为了避免引入渲染错误，确保虚拟项目中的元素不会动态变化至关重要。

对于虚拟滚动，`<img>` 的自然效果并不是理想特性。我们建议使用 `<ion-img>` 组件而非原生 `<img>` 元素，因为当 `<img>` 元素添加到 DOM 时，它会立即对图片文件发出 HTTP 请求。此外，`<img>` 会在其想要的时候渲染，这可能发生在用户滚动时。然而，`<ion-img>` 受包含的 `ion-content` 控制，在快速滚动时不会渲染图片。

## 虚拟滚动性能技巧

### iOS Cordova WKWebView

在使用 Cordova 部署到 iOS 时，强烈建议使用 [WKWebView 插件](https://blog.ionicframework.com/cordova-ios-performance-improvements-drop-in-speed-with-wkwebview/)，以利用 iOS 性能更高的 webview。此外，与较旧的 UIWebView 相比，WKWebView 在高效滚动方面表现更优。

### 锁定元素尺寸和位置

为了使虚拟滚动能高效地确定每个项目的尺寸和位置，确保每个虚拟项目内的每个元素不会动态改变其尺寸或位置非常重要。确保尺寸和位置不变的最佳方式是，建议每个虚拟项目通过 CSS 锁定其大小。

### 使用 `ion-img` 处理图片

在虚拟滚动中包含图片时，务必使用 [`ion-img`](img.md) 而非标准的 `<img>` HTML 元素。使用 `ion-img` 时，图片会延迟加载，因此只有可见的图片会被渲染，并且在滚动时可以高效控制 HTTP 请求。

### 设置预估宽度和高度

如上所述，所有元素都应锁定其尺寸。然而，虚拟滚动在元素渲染之前并不知道其尺寸。对于初始渲染，虚拟滚动仍需确定应构建多少项目。通过“approx”属性输入，例如 `approxItemHeight`，我们可以为虚拟滚动提供一个预估大小，从而让虚拟滚动决定应创建多少项目。

### 更改数据集时应使用 `trackBy`

迭代器中元素的标识可能会改变，而数据本身没有变化。例如，如果迭代器是从服务器 RPC 产生的，并且该 RPC 被重新运行，就可能发生这种情况。即使“数据”没有改变，第二次响应也会产生具有不同标识的对象，而 Ionic 将销毁整个 DOM 并重建它。这是一个昂贵的操作，应尽可能避免。

### 高效的页眉和页脚函数

每个虚拟项目必须保持极高的效率，但一种真正影响其性能的方式是在区域页眉和页脚函数内执行任何 DOM 操作。这些函数会为数据集中的每条记录调用，因此请确保它们运行高效。

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

```typescript
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

### 基本用法

记录数组应传递给 `ion-virtual-scroll` 元素上的 `items` 属性。提供给 `items` 属性的数据必须是数组。`ion-virtual-scroll` 中需要一个带有 `*virtualItem` 属性的项目模板。`*virtualItem` 属性可以添加到任何元素上。

```html
<ion-virtual-scroll [items]="items">
  <ion-item *virtualItem="let item"> {{ item }} </ion-item>
</ion-virtual-scroll>
```

### 区域页眉和页脚

区域页眉和页脚是可选的。它们可以通过开发者定义的函数动态创建。例如，一个大型联系人列表通常为字母表中的每个字母都有一个分隔符。开发者提供自己的自定义函数，每条记录都会调用该函数。自定义函数中的逻辑应确定是否创建区域模板以及向模板提供什么数据。如果不应创建模板，自定义函数应返回 `null`。

```html
<ion-virtual-scroll [items]="items" [headerFn]="myHeaderFn">
  <ion-item-divider *virtualHeader="let header"> {{ header }} </ion-item-divider>
  <ion-item *virtualItem="let item"> Item: {{ item }} </ion-item>
</ion-virtual-scroll>
```

下面是一个在每条记录上调用的自定义函数示例。它接收单个记录、记录的索引号以及整个记录数组。在此示例中，每 20 条记录后插入一个页眉。因此，在第 19 条和第 20 条记录之间、第 39 条和第 40 条记录之间等位置，将创建一个 `<ion-item-divider>`，模板的数据将来自函数返回的数据。

```ts
myHeaderFn(record, recordIndex, records) {
  if (recordIndex % 20 === 0) {
    return 'Header ' + recordIndex;
  }
  return null;
}
```

### 自定义组件

如果要在虚拟滚动中使用自定义组件，最好使用 `<div>` 将其包裹起来，以确保组件正确渲染。由于每个自定义组件的实现和内部结构可能大不相同，使用 `<div>` 包裹是确保尺寸测量正确的安全方式。

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