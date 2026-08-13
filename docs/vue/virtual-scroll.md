---
title: 虚拟滚动
sidebar_label: 虚拟滚动
---

# 虚拟滚动

:::warning[正在寻找 `ion-virtual-scroll`？]

`ion-virtual-scroll` 已在 v6.0.0 中弃用，并在 v7.0.0 中移除。我们建议使用 Vue 库来实现此功能。下面我们概述了一种使用 `vue-virtual-scroller` 的方法。

:::

## 安装

要设置虚拟滚动，首先安装 `vue-virtual-scroller`：

```shell
npm install vue-virtual-scroller@next
```

:::note
请务必使用 `next` 标签，否则您将获得仅与 Vue 2 兼容的 `vue-virtual-scroll` 版本。
:::
接下来，我们需要将虚拟滚动的 CSS 导入到应用中。在 `main.ts` 中添加以下代码行：

```js
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
```

## 注册虚拟滚动组件

现在我们已经安装了包并导入了 CSS，我们可以导入所有虚拟滚动组件，或者只导入我们想要使用的组件。本指南将展示如何做到这两点。

### 安装所有组件

要安装所有虚拟滚动组件以便在应用中使用，请将以下导入添加到 `main.ts`：

```js
import VueVirtualScroller from 'vue-virtual-scroller';
```

接下来，我们需要在 Vue 应用中安装它：

```js
app.use(VueVirtualScroller);
```

完成此操作后，所有虚拟滚动组件将可在我们的应用中使用。

:::note
安装所有组件可能会导致未使用的虚拟滚动组件被添加到应用包中。请参阅下面的[安装特定组件](#安装特定组件)部分，了解更适合 tree shaking 的方法。
:::

### 安装特定组件

要安装特定的虚拟滚动组件以便在应用中使用，请在 `main.ts` 中导入要使用的组件。在此示例中，我们将使用 `RecycleScroller` 组件：

```js
import { RecycleScroller } from 'vue-virtual-scroller';
```

接下来，我们需要将组件添加到 Vue 应用中：

```js
app.component('RecycleScroller', RecycleScroller);
```

完成此操作后，我们将能够在应用中使用 `RecycleScroller` 组件。

## 用法

此示例将使用 `RecycleScroller` 组件，它只渲染列表中的可见项。当您事先不知道项目的大小时，可以使用 `DynamicScroller` 等其他组件。

`RecycleScroller` 组件应添加到 `ion-content` 组件内部：

```vue
<template>
  <ion-page>
    <ion-content>
      <ion-list>
        <RecycleScroller class="scroller" :items="list" :item-size="56">
          <template #default="{ item }">
            <ion-item>
              <ion-avatar slot="start">
                <img src="https://picsum.photos/seed/picsum/40/40" />
              </ion-avatar>
              <ion-label>{{ item }}</ion-label>
            </ion-item>
          </template>
        </RecycleScroller>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonAvatar, IonContent, IonItem, IonLabel, IonPage } from '@ionic/vue';

const list = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
</script>
```

为了让 `RecycleScroller` 正常工作，我们需要考虑两个重要事项。首先，我们需要通过 `items` 属性向其提供要迭代的数据数组。在本例中，我们有一个名为 `list` 的数组，它提供了我们的数据。其次，我们需要通过 `item-size` 属性提供每个节点的大小。如果您事先不知道节点的大小，则应改用 `DynamicScroller` 组件。

现在模板已经设置好，我们需要添加一些 CSS 来正确设置虚拟滚动视口的大小。在组件的 `style` 标签中添加以下内容：

```css
.scroller {
  height: 100%;
}
```

## 与 Ionic 组件一起使用

Ionic 框架要求可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group` 等功能在 `ion-content` 内使用。要将这些体验与虚拟滚动一起使用，您必须将 `.ion-content-scroll-host` 类添加到虚拟滚动视口。

例如：

```vue
<template>
  <ion-page>
    <ion-content :scroll-y="false">
      <RecycleScroller class="ion-content-scroll-host scroller">
        <!-- 您现有的内容和配置 -->
      </RecycleScroller>
    </ion-content>
  </ion-page>
</template>
```

## 进一步阅读

本指南只涵盖了 `vue-virtual-scroller` 功能的一小部分。更多详情请参阅 [vue-virtual-scroller 文档](https://github.com/Akryum/vue-virtual-scroller/blob/next/packages/vue-virtual-scroller/README.md)。
