---
title: 虚拟滚动
sidebar_label: 虚拟滚动
---

# 虚拟滚动

过去，我们在 Ionic Framework 中提供了一个 `ion-virtual-scroll` 组件来帮助实现列表虚拟化。当时 Angular 中还没有这个功能，但最近 Angular 通过 `@angular/cdk` 包提供了自己的解决方案。

## 设置

要设置 CDK Scroller，首先安装 `@angular/cdk`：

```shell
npm add @angular/cdk
```

这提供了一系列不同的实用程序，但我们目前将专注于 `ScrollingModule`。

当我们想要使用 CDK Scroller 时，需要在组件中导入该模块。例如，在标签启动项目中，我们可以将导入添加到 `tabs1.module.ts` 文件中。

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

## 用法

可以通过将 `cdk-virtual-scroll-viewport` 添加到组件的模板来添加 CDK 虚拟滚动器。

```html
<ion-content>
  <cdk-virtual-scroll-viewport> </cdk-virtual-scroll-viewport>
</ion-content>
```

`cdk-virtual-scroll-viewport` 成为可滚动内容的根元素，并负责在 DOM 节点滚出视图时回收它们。

此时的 DOM 节点可以是应用所需的任何内容。不同之处在于，当我们想要迭代集合时，使用 `*cdkVirtualFor` 而不是 `*ngFor`。

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

这里，`items` 是一个数组，但它可以是数组、`Observable<Array>` 或 `DataSource`。`DataSource` 是一个抽象类，可以提供所需数据以及实用方法。更多详细信息，请查看 [CDK Virtual Scrolling 文档](https://material.angular.io/cdk/scrolling/overview)。

组件还不完整，因为 `cdk-virtual-scroll-viewport` 需要知道每个节点的大小以及最小/最大缓冲区大小。

目前，CDK 虚拟滚动器只支持固定大小的元素，但动态大小的元素计划在未来支持。对于 `Tab1Page` 组件，由于它只渲染一个项目，可以硬编码为固定大小。

最小/最大缓冲区大小告诉滚动器"渲染足够的节点以达到此最小高度，但不要超过此值"。

```html
<cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350"></cdk-virtual-scroll-viewport>
```

在此情况下，`cdk-virtual-scroll-viewport` 将渲染高度为 56px 的单元格，直到达到 900px 的高度，但在 1350px 处停止。这些数字是任意的，因此请务必测试哪些值在实际用例中有效。

将所有这些整合在一起，最终的 HTML 应如下所示：

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

最后需要的是一些 CSS 来正确设置视口的大小。在 `tab1.page.scss` 文件中，添加以下内容：

```scss
cdk-virtual-scroll-viewport {
  height: 100%;
  width: 100%;
}
```

由于视口是为适应各种用例而构建的，因此默认大小未设置，需要由开发者自行设置。

## 与 Ionic 组件一起使用

Ionic Framework 要求可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group` 等功能在 `ion-content` 内部使用。要将这些体验与虚拟滚动一起使用，必须将 `.ion-content-scroll-host` 类添加到虚拟滚动视口。

例如：

```html
<ion-content [scrollY]="false">
  <cdk-virtual-scroll-viewport class="ion-content-scroll-host">
    <!-- 你现有的内容和配置 -->
  </cdk-virtual-scroll-viewport>
</ion-content>
```

## 延伸阅读

这仅涵盖了 CDK 虚拟滚动器能力的一小部分。更多详细信息，请参阅 [Angular CDK Virtual Scrolling 文档](https://material.angular.io/cdk/scrolling/overview)。
