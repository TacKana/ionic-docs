# 虚拟滚动

:::caution 正在寻找 `ion-virtual-scroll`？

`ion-virtual-scroll` 已在 v6.0.0 中被弃用，并在 v7.0.0 中移除。我们建议使用下文详细介绍的 `@angular/cdk` 包。

:::

## 安装

要设置 CDK 滚动模块，首先安装 `@angular/cdk`：

```shell
npm add @angular/cdk
```

这提供了多种不同的工具集合，但我们现在主要关注 `ScrollingModule`。

当我们需要使用 CDK 滚动模块时，我们需要在组件中导入该模块。例如，在一个标签页起始项目中，我们可以将导入添加到 `tabs1.module.ts` 文件。

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

添加此模块后，我们就可以在 Tab1Page 组件中使用虚拟滚动功能了。

## 使用

可以通过在组件的模板中添加 `cdk-virtual-scroll-viewport` 来使用 CDK 虚拟滚动。

```html
<ion-content>
  <cdk-virtual-scroll-viewport> </cdk-virtual-scroll-viewport>
</ion-content>
```

`cdk-virtual-scroll-viewport` 成为我们可滚动内容的根容器，并负责回收滚动出视图的 DOM 节点。

此时的 DOM 节点可以是应用所需的任何内容。区别在于，当我们需要遍历集合时，使用 `*cdkVirtualFor` 而不是 `*ngFor`。

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

这里的 `items` 可以是一个数组，也可以是 `Observable<Array>` 或 `DataSource`。`DataSource` 是一个抽象类，可以提供所需数据以及实用方法。更多详细信息，请查看 [CDK 虚拟滚动文档](https://material.angular.io/cdk/scrolling/overview)。

组件目前还不完整，因为 `cdk-virtual-scroll-viewport` 需要知道每个节点的大小以及最小/最大缓冲区大小。

目前，CDK 虚拟滚动仅支持固定大小的元素，但动态大小的元素已在未来计划中。对于 `Tab1Page` 组件，由于它只渲染一个项目，可以硬编码为固定大小。

最小/最大缓冲区大小告诉滚动容器：“渲染足够多的节点以达到这个最小高度，但不超过这个最大值”。

```html
<cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350"></cdk-virtual-scroll-viewport>
```

在这种情况下，`cdk-virtual-scroll-viewport` 将以 56px 的高度渲染单元格，直到达到 900px 的高度，但不会超过 1350px。这些数字是任意的，请务必在实际用例中测试合适的值。

将所有内容组合在一起，最终的 HTML 应如下所示：

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

最后需要的是一个 CSS 来正确设置视口大小。在 `tab1.page.scss` 文件中，添加以下内容：

```scss
cdk-virtual-scroll-viewport {
  height: 100%;
  width: 100%;
}
```

由于视口是为了适应各种用例而构建的，默认大小没有设置，需要开发者自行设置。

## 与 Ionic 组件配合使用

Ionic Framework 要求某些功能（如可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group`）必须在 `ion-content` 内部使用。要在虚拟滚动中使用这些功能，您必须向虚拟滚动视口添加 `.ion-content-scroll-host` 类。

例如：

```html
<ion-content [scrollY]="false">
  <cdk-virtual-scroll-viewport class="ion-content-scroll-host">
    <!-- 您现有的内容和配置 -->
  </cdk-virtual-scroll-viewport>
</ion-content>
```

## 进一步阅读

本文仅涵盖了 CDK 虚拟滚动功能的一小部分。更多详细信息，请参阅 [Angular CDK 虚拟滚动文档](https://material.angular.io/cdk/scrolling/overview)。