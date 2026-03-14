---
title: Vue 构建选项
sidebar_label: 构建选项
---

<head>
  <title>Vue 构建选项：组件注册与构建配置</title>
  <meta
    name="description"
    content="了解 Vue 构建配置选项，包括组件注册策略、预加载以及为 Ionic Vue 应用进行构建优化的方法。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Vue 提供了多种工具来精细调整你的应用程序。本指南涵盖了与 Ionic Framework 最相关的构建选项。

## 组件注册策略

### 局部组件注册（推荐）

默认情况下，Ionic Framework 组件采用局部注册方式。通过局部注册，这些组件会被导入并应用于你想使用的每个 Vue 组件中。这是推荐的方法，因为它允许 Ionic Framework 组件正确地进行懒加载和摇树优化。

这种方法的唯一缺点是可能需要多次重复导入 Ionic Framework 组件，略显繁琐。但我们认为由此带来的性能优势是值得的。

同时请注意，局部注册的组件在子组件中是不可用的。你需要在子组件中重新导入你想使用的 Ionic Framework 组件。

让我们看看局部组件注册是如何工作的：

```vue
<template>
  <ion-page>
    <ion-content>
      <SubComponent></SubComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import SubComponent from '@/components/SubComponent.vue';
</script>
```

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。要使用它们，我们需要从 `@ionic/vue` 导入。之后，我们就可以在模板中使用这些组件了。

请注意，由于我们是局部注册这些组件，`IonPage` 和 `IonContent` 在 `SubComponent` 中将不可用，除非我们也在那里注册它们。

更多信息，请参阅 [Vue 局部注册文档](https://v3.vuejs.org/guide/component-registration.html#local-registration)。

### 全局组件注册

另一种注册组件的方法是使用全局注册。全局注册涉及在 `main.ts` 中导入你想使用的组件，并在 Vue 应用实例上调用 `component` 方法。

虽然这简化了向 Vue 应用添加 Ionic Framework 组件的过程，但全局注册通常并不理想。引用 Vue 文档中的话："如果你使用的是像 Webpack 这样的构建系统，全局注册所有组件意味着即使你停止使用某个组件，它仍然可能包含在你的最终构建中。这会不必要地增加用户需要下载的 JavaScript 文件大小"。

让我们看看全局组件注册是如何工作的：

**main.ts**

```ts
import { IonContent, IonicVue, IonPage } from '@ionic/vue';

const app = createApp(App).use(IonicVue).use(router);

app.component('ion-content', IonContent);
app.component('ion-page', IonPage);
```

**MyComponent.vue**

```vue
<template>
  <ion-page>
    <ion-content>
      <SubComponent></SubComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import SubComponent from '@/components/SubComponent.vue';
</script>
```

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。要使用它们，我们首先在 `main.ts` 中从 `@ionic/vue` 导入。然后，我们在应用实例上调用 `component` 方法，并传递标签名和组件定义。完成这些步骤后，我们就可以在应用的其他部分使用这些组件，而无需在每个 Vue 组件中导入它们。

更多信息，请参阅 [Vue 全局注册文档](https://v3.vuejs.org/guide/component-registration.html#global-registration)。

## 构建优化

### 预加载应用 JavaScript

默认情况下，Vue CLI 会自动为你的应用程序中的 JavaScript 生成预加载提示。预加载利用浏览器的空闲时间来下载用户可能在近期访问的文档。当用户访问需要预加载文档的页面时，可以快速从浏览器缓存中提供服务。

预加载会消耗带宽，因此如果你的应用体积较大，可能需要禁用它。你可以通过修改或创建 `vue.config.js` 文件来实现：

**vue.config.js**

```js
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
```

以上配置将阻止所有文件的预加载，而是根据需要加载它们。你也可以选择预加载特定的代码块。更多示例请查看 [Vue CLI 预加载文档](https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch)。