# 虚拟滚动

:::warning 寻找 `ion-virtual-scroll`？

`ion-virtual-scroll` 已在 v6.0.0 中弃用，并在 v7.0.0 中移除。我们建议使用 Vue 库来实现此功能。下面我们概述了一种使用 `vue-virtual-scroller` 的方法。

:::

## 安装

要设置虚拟滚动器，首先安装 `vue-virtual-scroller`：

```shell
npm install vue-virtual-scroller@next
```

:::note
请确保使用 `next` 标签，否则你将获得仅兼容 Vue 2 的 `vue-virtual-scroller` 版本。
:::
接下来，我们需要将虚拟滚动器的 CSS 导入到我们的应用中。在 `main.ts` 中添加以下行：

```js
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
```

## 注册虚拟滚动组件

现在我们已经安装了包并导入了 CSS，我们可以导入所有虚拟滚动组件或仅导入我们要使用的组件。本指南将展示如何实现这两种方式。

### 安装所有组件

要安装所有虚拟滚动组件以供应用使用，请在 `main.ts` 中添加以下导入：

```js
import VueVirtualScroller from 'vue-virtual-scroller';
```

接下来，我们需要将其安装到 Vue 应用中：

```js
app.use(VueVirtualScroller);
```

完成此操作后，所有虚拟滚动组件都将在我们的应用中可用。

:::note
安装所有组件可能会导致未使用的虚拟滚动组件被添加到应用包中。请参阅下面的[安装特定组件](#安装特定组件)部分，以获得更适合摇树优化的方法。
:::

### 安装特定组件

要安装特定的虚拟滚动组件以供应用使用，请在 `main.ts` 中导入要使用的组件。在本示例中，我们将使用 `RecycleScroller` 组件：

```js
import { RecycleScroller } from 'vue-virtual-scroller';
```

接下来，我们需要将该组件添加到 Vue 应用中：

```js
app.component('RecycleScroller', RecycleScroller);
```

完成此操作后，我们就能在应用中使用 `RecycleScroller` 组件了。

## 使用

本示例将使用 `RecycleScroller` 组件，该组件仅渲染列表中可见的项。当你事先不知道项目大小时，可以使用其他组件，如 `DynamicScroller`。

应将 `RecycleScroller` 组件添加到 `ion-content` 组件内部：

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

为了使 `RecycleScroller` 正常工作，我们需要考虑两个重要方面。首先，我们需要通过 `items` 属性提供要遍历的数据数组。在本例中，我们有一个名为 `list` 的数组，它提供了我们的数据。其次，我们需要通过 `item-size` 属性提供每个节点的大小。如果你事先不知道节点的大小，则应改用 `DynamicScroller` 组件。

现在我们的模板已设置好，我们需要添加一些 CSS 来正确调整虚拟滚动视口的大小。在你组件的 `style` 标签中添加以下内容：

```css
.scroller {
  height: 100%;
}
```

## 与 Ionic 组件一起使用

Ionic Framework 要求可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group` 等功能必须在 `ion-content` 内使用。要在虚拟滚动中使用这些功能，你必须将 `.ion-content-scroll-host` 类添加到虚拟滚动视口。

例如：

```vue
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

本指南仅涵盖了 `vue-virtual-scroller` 功能的一小部分。更多详情，请参阅 [vue-virtual-scroller 文档](https://github.com/Akryum/vue-virtual-scroller/blob/next/packages/vue-virtual-scroller/README.md)。