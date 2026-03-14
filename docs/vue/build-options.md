---
title: Vue 构建选项
sidebar_label: 构建选项
---

<head>
  <title>Vue 构建选项：组件注册与构建配置</title>
  <meta
    name="description"
    content="了解 Vue 构建配置选项，包括组件注册策略、预取功能以及 Ionic Vue 应用的构建优化。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Vue 提供了多种工具来微调您的应用程序。本指南涵盖了与 Ionic Framework 最相关的构建选项。

## 组件注册策略

### 局部组件注册（推荐）

默认情况下，Ionic Framework 组件采用局部注册方式。通过局部注册，这些组件会被导入并提供给每个需要使用它们的 Vue 组件。这是推荐的做法，因为它允许懒加载和树摇优化对 Ionic Framework 组件正常工作。

这种方法的唯一缺点是可能需要多次重复导入 Ionic Framework 组件，略显繁琐。但我们认为，由此带来的性能优势是值得的。

同时请注意，局部注册的组件在子组件中不可用。您需要在子组件中重新导入要使用的 Ionic Framework 组件。

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

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。为了使用它们，我们从 `@ionic/vue` 导入这些组件。然后，就可以在模板中使用这些组件。

请注意，由于我们是在局部注册这些组件，`IonPage` 和 `IonContent` 在 `SubComponent` 中都将不可用，除非我们也在那里注册它们。

更多信息，请参阅 [Vue 局部注册文档](https://v3.vuejs.org/guide/component-registration.html#local-registration)。

### 全局组件注册

另一种注册组件的方式是使用全局注册。全局注册涉及在 `main.ts` 中导入要使用的组件，并在 Vue 应用实例上调用 `component` 方法。

虽然这可以更轻松地将 Ionic Framework 组件添加到您的 Vue 应用中，但全局注册通常并不理想。引用 Vue 文档中的话："如果你使用像 Webpack 这样的构建系统，全局注册所有组件意味着即使你停止使用某个组件，它仍可能包含在最终构建中。这会不必要地增加用户必须下载的 JavaScript 文件大小"。

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

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。为了使用它们，我们首先在 `main.ts` 中从 `@ionic/vue` 导入这些组件。然后，我们在应用实例上调用 `component` 方法，并传递标签名和组件定义。完成此操作后，我们就可以在应用程序的其余部分使用这些组件，而无需在每个 Vue 组件中导入它们。

更多信息，请参阅 [Vue 全局注册文档](https://v3.vuejs.org/guide/component-registration.html#global-registration)。

## 构建优化

### 预取应用程序 JavaScript

默认情况下，Vue CLI 会自动为应用程序中的 JavaScript 生成预取提示。预取功能利用浏览器空闲时间下载用户可能在近期访问的文档。当用户访问需要预取文档的页面时，可以从浏览器缓存中快速提供。

预取会消耗带宽，因此如果您的应用较大，可能需要禁用它。您可以通过修改或创建 `vue.config.js` 文件来实现：

**vue.config.js**

```js
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
```

上述配置将防止所有文件被预取，而是在需要时加载它们。您也可以选择预取某些代码块。更多示例请查看 [Vue CLI 预取文档](https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch)。