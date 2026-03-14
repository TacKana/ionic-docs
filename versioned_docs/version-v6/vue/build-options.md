---
title: Vue 构建选项
sidebar_label: 构建选项
---

<head>
  <title>Vue 构建选项：组件注册与构建配置</title>
  <meta
    name="description"
    content="了解 Vue 构建配置选项，包括组件注册策略、预加载以及 Ionic Vue 应用的构建优化。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Vue 提供了多种工具来微调你的应用程序。本指南涵盖了与 Ionic Framework 最相关的构建选项。

## 组件注册策略

### 局部组件注册（推荐）

默认情况下，Ionic Framework 组件采用局部注册。通过局部注册，这些组件会被导入并提供给每个需要使用它们的 Vue 组件。这是推荐的方法，因为它允许 Ionic Framework 组件正确地进行懒加载和摇树优化。

这种方法的唯一缺点是可能需要多次重复导入 Ionic Framework 组件，略显繁琐。但我们认为，由此带来的性能优势是值得的。

另外请注意，局部注册的组件在子组件中不可用。如果你希望在子组件中使用 Ionic Framework 组件，需要重新导入。

让我们看看局部组件注册是如何工作的：

```html
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

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。为了使用它们，我们从 `@ionic/vue` 导入。之后，我们就可以在模板中使用这些组件了。

请注意，由于我们是在局部注册这些组件，`IonPage` 和 `IonContent` 在 `SubComponent` 中将不可用，除非我们在那里也注册它们。

更多信息，请参阅 [Vue 局部注册文档](https://v3.vuejs.org/guide/component-registration.html#local-registration)。

### 全局组件注册

注册组件的另一种选择是使用全局注册。全局注册涉及在你想要使用的组件中导入 `main.ts`，并在你的 Vue 应用实例上调用 `component` 方法。

虽然这使得向 Vue 应用添加 Ionic Framework 组件更加容易，但全局注册通常并不理想。引用 Vue 文档中的话：“如果你使用像 Webpack 这样的构建系统，全局注册所有组件意味着即使你停止使用某个组件，它仍可能被包含在最终构建中。这会不必要地增加用户必须下载的 JavaScript 数量”。

让我们看看全局组件注册是如何工作的：

**main.ts**

```ts
import { IonContent, IonicVue, IonPage } from '@ionic/vue';

const app = createApp(App).use(IonicVue).use(router);

app.component('ion-content', IonContent);
app.component('ion-page', IonPage);
```

**MyComponent.vue**

```html
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

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。为了使用它们，我们首先在 `main.ts` 中从 `@ionic/vue` 导入它们。然后，我们在应用实例上调用 `component` 方法，并传入标签名和组件定义。完成这些后，我们就可以在应用的其余部分使用这些组件，而无需在每个 Vue 组件中导入它们。

更多信息，请参阅 [Vue 全局注册文档](https://v3.vuejs.org/guide/component-registration.html#global-registration)。

## 构建优化

### 预取应用程序 JavaScript

默认情况下，Vue CLI 会自动为应用程序中的 JavaScript 生成预取提示。预取利用浏览器的空闲时间下载用户可能在近期访问的文档。当用户访问需要预取文档的页面时，可以快速从浏览器缓存中提供。

预取会消耗带宽，因此如果你的应用程序较大，可能需要禁用它。你可以通过修改或创建 `vue.config.js` 文件来实现：

**vue.config.js**

```js
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
```

上述配置将阻止所有文件的预取，改为在需要时加载它们。你也可以选择预取特定的代码块。查看 [Vue CLI 关于预取的文档](https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch) 获取更多示例。