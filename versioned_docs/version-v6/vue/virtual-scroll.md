# 虚拟滚动

为你的 Ionic Vue 应用程序考虑的一种虚拟滚动解决方案是 [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller/blob/next/packages/vue-virtual-scroller/README.md)。本指南将介绍如何将 `vue-virtual-scroller` 安装到你的 Ionic Vue 应用程序中，并与其他 Ionic 组件一起使用。

## 安装

要设置虚拟滚动器，首先安装 `vue-virtual-scroller`：

```shell
npm install vue-virtual-scroller@next
```

:::note
请确保使用 `next` 标签，否则你将得到一个仅与 Vue 2 兼容的 `vue-virtual-scroll` 版本。
:::
接下来，我们需要将虚拟滚动器的 CSS 导入到我们的应用程序中。在 `main.ts` 中，添加以下行：

```js
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
```

## 注册虚拟滚动组件

现在我们已经安装了包并导入了 CSS，我们可以导入所有虚拟滚动组件，也可以只导入我们想要使用的组件。本指南将展示如何实现这两种方法。

### 安装所有组件

要在你的应用程序中安装所有虚拟滚动组件进行使用，请在 `main.ts` 中添加以下导入：

```js
import VueVirtualScroller from 'vue-virtual-scroller';
```

接下来，我们需要将其安装到我们的 Vue 应用程序中：

```js
app.use(VueVirtualScroller);
```

完成此操作后，所有虚拟滚动组件都将在我们的应用程序中可用。

:::note
安装所有组件可能会导致未使用的虚拟滚动组件被添加到你的应用程序包中。请参阅下面的 [安装特定组件](#安装特定组件) 部分，了解一种更适合 tree-shaking 的方法。
:::

### 安装特定组件

要在你的应用程序中安装特定的虚拟滚动组件进行使用，请在 `main.ts` 中导入你想要使用的组件。在这个例子中，我们将使用 `RecycleScroller` 组件：

```js
import { RecycleScroller } from 'vue-virtual-scroller';
```

接下来，我们需要将该组件添加到我们的 Vue 应用程序中：

```js
app.component('RecycleScroller', RecycleScroller);
```

完成此操作后，我们就能在我们的应用程序中使用 `RecycleScroller` 组件了。

## 使用方法

这个例子将使用 `RecycleScroller` 组件，它只渲染列表中可见的项。当你事先不知道项的大小时，可以使用其他组件，例如 `DynamicScroller`。

`RecycleScroller` 组件应该添加在你的 `ion-content` 组件内部：

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

为了让 `RecycleScroller` 正常工作，我们需要处理两个重要的部分。首先，我们需要通过 `items` 属性提供一个数据数组来迭代。在这个例子中，我们有一个名为 `list` 的数组，它提供我们的数据。其次，我们需要通过 `item-size` 属性提供每个节点的大小。如果你事先不知道节点的大小，你应该使用 `DynamicScroller` 组件。

现在我们的模板已经设置好了，我们需要添加一些 CSS 来正确调整虚拟滚动视口的大小。在你的组件的 `style` 标签中，添加以下内容：

```css
.scroller {
  height: 100%;
}
```

## 与 Ionic 组件一起使用

Ionic Framework 要求诸如可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group` 等功能必须在 `ion-content` 内使用。要在虚拟滚动中使用这些功能，你必须将 `.ion-content-scroll-host` 类添加到虚拟滚动视口。

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

本指南仅涵盖了 `vue-virtual-scroller` 功能的一小部分。更多详细信息，请参阅 [vue-virtual-scroller 文档](https://github.com/Akryum/vue-virtual-scroller/blob/next/packages/vue-virtual-scroller/README.md)。