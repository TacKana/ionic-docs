# 虚拟滚动

过去，Ionic Framework 提供了 `ion-virtual-scroll` 组件来帮助实现列表虚拟化。当时 Angular 还没有提供这项功能，但最近 Angular 通过 `@angular/cdk` 包提供了自己的解决方案。

## 安装设置

要使用 CDK 滚动器，首先安装 `@angular/cdk`：

```shell
npm add @angular/cdk
```

该包提供了多种实用工具，目前我们将重点介绍 `ScrollingModule`。

当我们需要使用 CDK 滚动器时，需要在组件中导入该模块。例如，在一个标签页起始项目中，我们可以将导入添加到 `tabs1.module.ts` 文件中。

```diff
  import { IonicModule } from '@ionic/angular';
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/common';
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

添加此导入后，我们就可以在 Tab1Page 组件中使用虚拟滚动器了。

## 使用方法

通过将 `cdk-virtual-scroll-viewport` 添加到组件模板中，即可使用 CDK 虚拟滚动器。

```html
<ion-content>
  <cdk-virtual-scroll-viewport> </cdk-virtual-scroll-viewport>
</ion-content>
```

`cdk-virtual-scroll-viewport` 成为了可滚动内容的根容器，负责在 DOM 节点滚动出视图时进行回收利用。

此时 DOM 节点可以是应用程序所需的任何内容。不同之处在于，当我们需要遍历集合时，使用 `*cdkVirtualFor` 而不是 `*ngFor`。

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

这里，`items` 是一个数组，但它也可以是数组、`Observable<Array>` 或 `DataSource`。`DataSource` 是一个抽象类，可以提供所需数据以及实用方法。更多详细信息，请查阅 [CDK 虚拟滚动文档](https://material.angular.io/cdk/scrolling/overview)。

组件目前还不完整，因为 `cdk-virtual-scroll-viewport` 需要知道每个节点的大小以及最小/最大缓冲区大小。

目前，CDK 虚拟滚动器仅支持固定大小的元素，但动态大小的元素已在计划中。对于 `Tab1Page` 组件，由于它只渲染一个项目，可以硬编码为固定大小。

最小/最大缓冲区大小告诉滚动器“渲染足够多的节点以达到这个最小高度，但不超过这个高度”。

```html
<cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350"></cdk-virtual-scroll-viewport>
```

在这种情况下，`cdk-virtual-scroll-viewport` 将以 56px 的高度渲染单元格，直到达到 900px 的高度，但不会超过 1350px。这些数字是任意的，因此请务必在实际使用场景中测试合适的值。

将所有内容整合起来，最终的 HTML 应该如下所示：

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

最后一步是添加一些 CSS 来正确设置视口大小。在 `tab1.page.scss` 文件中，添加以下内容：

```scss
cdk-virtual-scroll-viewport {
  height: 100%;
  width: 100%;
}
```

由于视口构建时考虑了各种使用场景，默认大小没有设置，需要开发人员自行设置。

## 与 Ionic 组件配合使用

Ionic Framework 要求某些功能（如可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group`）必须在 `ion-content` 内使用。要在虚拟滚动中使用这些体验，您必须将 `.ion-content-scroll-host` 类添加到虚拟滚动视口。

例如：

```html
<ion-content [scrollY]="false">
  <cdk-virtual-scroll-viewport class="ion-content-scroll-host">
    <!-- 您现有的内容和配置 -->
  </cdk-virtual-scroll-viewport>
</ion-content>
```

## 延伸阅读

本文仅涵盖了 CDK 虚拟滚动器功能的一小部分。更多详细信息，请参阅 [Angular CDK 虚拟滚动文档](https://material.angular.io/cdk/scrolling/overview)。