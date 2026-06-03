---
title: 虚拟滚动
sidebar_label: 虚拟滚动
---

# 虚拟滚动

为你的 Ionic Vue 应用考虑的一个虚拟滚动解决方案是 [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller/blob/next/packages/vue-virtual-scroller/README.md)。本指南将介绍如何将 `vue-virtual-scroller` 安装到你的 Ionic Vue 应用中，并将其与其他 Ionic 组件一起使用。

## 安装

要设置虚拟滚动，首先安装 `vue-virtual-scroller`：

```shell
npm install vue-virtual-scroller@next
```

:::note
务必使用 `next` 标签，否则你将得到仅与 Vue 2 兼容的 `vue-virtual-scroll` 版本。
:::

然后，我们需要将虚拟滚动的 CSS 导入到我们的应用中。在 `main.ts` 中，添加以下行：

```js
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
```

## 注册虚拟滚动组件

现在我们已经安装了这个包并导入了 CSS，我们可以导入所有虚拟滚动组件，或者只导入我们想使用的组件。本指南将展示如何执行这两种操作。

### 安装所有组件

要安装所有虚拟滚动组件供你的应用使用，请在 `main.ts` 中添加以下导入：

```js
import VueVirtualScroller from 'vue-virtual-scroller';
```

接下来，我们需要在 Vue 应用中安装它：

```js
app.use(VueVirtualScroller);
```

完成此操作后，所有虚拟滚动组件都将在我们的应用中可用。

:::note
安装所有组件可能导致未使用的虚拟滚动组件被添加到你的应用包中。请参阅下面的[安装特定组件](#安装特定组件)部分，了解更适合 tree-shaking 的方法。
:::

### 安装特定组件

要安装特定的虚拟滚动组件供你的应用使用，请在 `main.ts` 中导入你想要使用的组件。在此示例中，我们将使用 `RecycleScroller` 组件：

```js
import { RecycleScroller } from 'vue-virtual-scroller';
```

接下来，我们需要向 Vue 应用注册该组件：

```js
app.component('RecycleScroller', RecycleScroller);
```

完成此操作后，我们将能够在应用中使用 `RecycleScroller` 组件。

## 使用

此示例将使用 `RecycleScroller` 组件，它只渲染列表中可见的项目。当你事先不知道项目的大小时，可以使用 `DynamicScroller` 等其他组件。

`RecycleScroller` 组件应添加在你的 `ion-content` 组件内部：

```html
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

<script>
  import { defineComponent, ref } from 'vue';
  import { IonAvatar, IonContent, IonItem, IonLabel, IonPage } from '@ionic/vue';

  export default defineComponent({
    components: {
      IonAvatar,
      IonContent,
      IonItem,
      IonLabel,
      IonPage,
    },
    setup() {
      const list = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      return { list };
    },
  });
</script>
```

要使 `RecycleScroller` 正常工作，我们需要考虑两个重要方面。首先，我们需要通过 `items` 属性向其提供要迭代的数据数组。在本例中，我们有一个名为 `list` 的数组来提供数据。其次，我们需要通过 `item-size` 属性提供每个节点的大小。如果你事先不知道节点的大小，应改用 `DynamicScroller` 组件。

现在模板已设置好，我们需要添加一些 CSS 来正确调整虚拟滚动视口的大小。在组件的 `style` 标签中，添加以下内容：

```css
.scroller {
  height: 100%;
}
```

## 与 Ionic 组件一起使用

Ionic Framework 要求可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group` 等功能在 `ion-content` 内部使用。要将这些体验与虚拟滚动一起使用，你必须将 `.ion-content-scroll-host` 类添加到虚拟滚动视口。

例如：

```html
<template>
  <ion-page>
    <ion-content :scroll-y="false">
      <RecycleScroller class="ion-content-scroll-host scroller">
        <!-- 你现有的内容和配置 -->
      </RecycleScroller>
    </ion-content>
  </ion-page>
</template>
```

## 进一步阅读

本指南仅涵盖 `vue-virtual-scroller` 功能的一小部分。有关更多详细信息，请参阅 [vue-virtual-scroller 文档](https://github.com/Akryum/vue-virtual-scroller/blob/next/packages/vue-virtual-scroller/README.md)。
