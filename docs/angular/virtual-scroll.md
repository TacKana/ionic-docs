---
title: 虚拟滚动
sidebar_label: 虚拟滚动
---

# 虚拟滚动

:::warning 正在寻找 `ion-virtual-scroll`？

`ion-virtual-scroll` 已在 v6.0.0 中弃用，并在 v7.0.0 中移除。我们建议使用下面介绍的 `@angular/cdk` 包。

:::

## 安装

要设置 CDK 滚动器，首先安装 `@angular/cdk`：

```shell
npm add @angular/cdk
```

这提供了一系列不同的工具，但我们目前将专注于 `ScrollingModule`。

当我们想要使用 CDK 滚动器时，需要在组件中导入该模块。例如，在标签启动项目中，我们可以将导入添加到 `tabs1.module.ts` 文件中。

```diff
  import { IonicModule } from '@ionic/angular';
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { Tab1Page } from './tab1.page';
  import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
+ import { ScrollingModule } from '@angular/cdk/scrolling';
  import { Tab1PageRoutingModule } from './tab1-routing.module';
  @NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ExploreContainerComponentModule,
      Tab1PageRoutingModule,
+     ScrollingModule
    ],
    declarations: [Tab1Page]
  })
  export class Tab1PageModule {}
```

添加完成后，我们就可以在 Tab1Page 组件中使用虚拟滚动器了。

## 使用方法

CDK 虚拟滚动器可以通过将 `cdk-virtual-scroll-viewport` 添加到组件的模板中来添加到组件中。

```html
<ion-content>
  <cdk-virtual-scroll-viewport> </cdk-virtual-scroll-viewport>
</ion-content>
```

`cdk-virtual-scroll-viewport` 成为可滚动内容的根元素，负责在 DOM 节点滚出视图时回收它们。

此时的 DOM 节点可以是应用所需的任何内容。区别在于，当我们要遍历集合时，使用 `*cdkVirtualFor` 而不是 `*ngFor`。

```html
<ion-content>
  <cdk-virtual-scroll-viewport>
    <ion-list>
      <ion-item *cdkVirtualFor="let item of items">
        <ion-avatar slot="start">
          <img src="https://loremflickr.com/40/40" />
        </ion-avatar>
        <ion-label> {{item }} </ion-label>
      </ion-item>
    </ion-list>
  </cdk-virtual-scroll-viewport>
</ion-content>
```

这里，`items` 是一个数组，但它可以是数组、`Observable<Array>` 或 `DataSource`。`DataSource` 是一个抽象类，可以提供所需的数据以及工具方法。更多详情，请查看 [CDK 虚拟滚动文档](https://material.angular.io/cdk/scrolling/overview)。

组件尚未完成，因为 `cdk-virtual-scroll-viewport` 需要知道每个节点的大小以及最小/最大缓冲区大小。

目前，CDK 虚拟滚动器仅支持固定大小的元素，但动态大小元素计划在将来支持。对于 `Tab1Page` 组件，由于它只渲染一个项目，可以硬编码为固定大小。

最小/最大缓冲区大小告诉滚动器"渲染足够多的节点以达到此最小高度，但不超过此最大值"。

```html
<cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350"></cdk-virtual-scroll-viewport>
```

在这个例子中，`cdk-virtual-scroll-viewport` 将以 56px 的高度渲染单元格，直到达到 900px 的高度，但不超过 1350px。这些数字是任意设定的，因此请务必测试在实际使用场景中哪些值有效。

将所有内容组合在一起，最终的 HTML 应该如下所示：

```html
<ion-content>
  <cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350">
    <ion-list>
      <ion-item *cdkVirtualFor="let item of items">
        <ion-avatar slot="start">
          <img src="https://loremflickr.com/40/40" />
        </ion-avatar>
        <ion-label> {{item }} </ion-label>
      </ion-item>
    </ion-list>
  </cdk-virtual-scroll-viewport>
</ion-content>
```

最后需要的是正确设置视口大小的一些 CSS。在 `tab1.page.scss` 文件中，添加以下内容：

```scss
cdk-virtual-scroll-viewport {
  height: 100%;
  width: 100%;
}
```

由于视口旨在适应各种使用场景，默认大小未设置，需要开发者自行设置。

## 与 Ionic 组件一起使用

Ionic Framework 要求可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group` 等功能在 `ion-content` 内使用。要将这些体验与虚拟滚动一起使用，必须将 `.ion-content-scroll-host` 类添加到虚拟滚动视口。

例如：

```html
<ion-content [scrollY]="false">
  <cdk-virtual-scroll-viewport class="ion-content-scroll-host">
    <!-- 你现有的内容和配置 -->
  </cdk-virtual-scroll-viewport>
</ion-content>
```

## 进一步阅读

这只是 CDK 虚拟滚动器功能的一小部分。更多详情，请参阅 [Angular CDK 虚拟滚动文档](https://material.angular.io/cdk/scrolling/overview)。
