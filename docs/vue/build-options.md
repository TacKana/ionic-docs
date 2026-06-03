---
title: Vue 构建选项
sidebar_label: 构建选项
---

<head>
  <title>Vue 构建选项：组件注册与构建配置</title>
  <meta
    name="description"
    content="了解 Vue 构建配置选项，包括组件注册策略、预取和针对 Ionic Vue 应用的构建优化。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Vue 为您提供了多种工具来微调您的应用。本指南涵盖了与 Ionic 框架最相关的构建选项。

## 组件注册策略

### 局部组件注册（推荐）

默认情况下，Ionic 框架组件是局部注册的。通过局部注册，这些组件被导入并提供给您要使用它们的每个 Vue 组件。这是推荐的方法，因为它允许延迟加载和 tree shaking 与 Ionic 框架组件正常工作。

这种方法的一个缺点是，多次重新导入您的 Ionic 框架组件可能有些繁琐。但是，我们认为您获得的性能优势是值得的。

另请注意，局部注册的组件在子组件中不可用。您需要在子组件中重新导入要使用的 Ionic 框架组件。

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

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。为了使用它们，我们从 `@ionic/vue` 导入它们。然后，我们可以在模板中使用这些组件。

请注意，由于我们是局部注册这些组件，`IonPage` 和 `IonContent` 在 `SubComponent` 中不可用，除非我们也在那里注册它们。

更多信息请参阅 [Vue 局部注册文档](https://v3.vuejs.org/guide/component-registration.html#local-registration)。

### 全局组件注册

注册组件的另一个选项是使用全局注册。全局注册涉及在 `main.ts` 中导入要使用的组件，并在 Vue 应用实例上调用 `component` 方法。

虽然这使得将 Ionic 框架组件添加到 Vue 应用更加容易，但全局注册通常并不理想。引用 Vue 文档的话："如果您使用像 Webpack 这样的构建系统，全局注册所有组件意味着即使您停止使用某个组件，它仍然可能包含在最终构建中。这不必要地增加了用户必须下载的 JavaScript 数量。"

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

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。为了使用它们，我们首先在 `main.ts` 中从 `@ionic/vue` 导入它们。然后，我们在应用实例上调用 `component` 方法，传入标签名称和组件定义。完成之后，我们可以在应用的其余部分使用这些组件，而无需在每个 Vue 组件中导入它们。

更多信息请参阅 [Vue 全局注册文档](https://v3.vuejs.org/guide/component-registration.html#global-registration)。

## 构建优化

### 预取应用 JavaScript

默认情况下，Vue CLI 会自动为应用中的 JavaScript 生成预取提示。预取利用浏览器的空闲时间下载用户可能即将访问的文档。当用户访问需要预取文档的页面时，可以从浏览器缓存中快速提供。

预取会消耗带宽，因此如果您的应用很大，您可能希望禁用它。您可以通过修改或创建 `vue.config.js` 文件来实现：

**vue.config.js**

```js
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
```

上述配置将阻止所有文件被预取，而是在需要时才加载。您也可以选择特定的代码块进行预取。更多示例请查看 [Vue CLI 关于预取的文档](https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch)。
