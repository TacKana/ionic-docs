---
title: 虚拟滚动
sidebar_label: 虚拟滚动
---

# 虚拟滚动

:::caution 在找 `ion-virtual-scroll`？

`ion-virtual-scroll` 在 v6.0.0 中已被弃用，并在 v7.0.0 中移除。我们推荐使用下面详述的 `@angular/cdk` 包。

:::

## 安装

要设置 CDK Scroller，首先安装 `@angular/cdk`：

```shell
npm add @angular/cdk
```

这提供了各种不同工具的集合，但我们目前将专注于 `ScrollingModule`。

当我们想要使用 CDK Scroller 时，需要在组件中导入该模块。例如，在选项卡启动器项目中，我们可以将导入添加到 `tabs1.module.ts` 文件中。

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

添加完成后，我们就可以在 Tab1Page 组件中访问虚拟滚动器了。

## 用法

可以通过在组件的模板中添加 `cdk-virtual-scroll-viewport` 来将 CDK 虚拟滚动器添加到组件中。

```html
<ion-content>
  <cdk-virtual-scroll-viewport> </cdk-virtual-scroll-viewport>
</ion-content>
```

`cdk-virtual-scroll-viewport` 成为我们可滚动内容的根，负责在 DOM 节点滚动出视图时回收它们。

此时的 DOM 节点可以是应用需要的任何内容。不同之处在于，当我们要遍历集合时，使用 `*cdkVirtualFor` 而不是 `*ngFor`。

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

这里，`items` 是一个数组，但它可以是数组、`Observable<Array>` 或 `DataSource`。`DataSource` 是一个抽象类，可以提供所需的数据以及实用方法。有关更多详细信息，请查看 [CDK 虚拟滚动文档](https://material.angular.io/cdk/scrolling/overview)。

组件还没有完成，因为 `cdk-virtual-scroll-viewport` 需要知道每个节点的大小以及最小/最大缓冲区大小。

目前，CDK 虚拟滚动器只支持固定大小的元素，但动态大小元素计划在将来支持。对于 `Tab1Page` 组件，由于它只渲染一个项目，可以硬编码为固定大小。

最小/最大缓冲区大小告诉滚动器"渲染足够多的节点以达到这个最小高度，但不要超过这个最大高度"。

```html
<cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350"></cdk-virtual-scroll-viewport>
```

在这种情况下，`cdk-virtual-scroll-viewport` 将渲染高度为 56px 的单元格，直到达到 900px 的高度，但不超过 1350px。这些数字是任意的，所以请务必测试哪些值在实际用例中有效。

将所有内容放在一起，最终的 HTML 应如下所示：

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

由于视口是为适应各种用例而构建的，因此默认大小未设置，由开发者自行设置。

## 与 Ionic 组件一起使用

Ionic Framework 要求可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group` 等功能在 `ion-content` 内使用。要将这些体验与虚拟滚动一起使用，您必须将 `.ion-content-scroll-host` 类添加到虚拟滚动视口。

例如：

```html
<ion-content [scrollY]="false">
  <cdk-virtual-scroll-viewport class="ion-content-scroll-host">
    <!-- Your existing content and configurations -->
  </cdk-virtual-scroll-viewport>
</ion-content>
```

## 延伸阅读

这只是 CDK 虚拟滚动器能力的一小部分。有关更多详细信息，请参阅 [Angular CDK 虚拟滚动文档](https://material.angular.io/cdk/scrolling/overview)。
