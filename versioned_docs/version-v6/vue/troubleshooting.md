---
title: 故障排除
---

<head>
  <title>Ionic 故障排除指南：常见 Vue 应用开发问题</title>
  <meta
    name="description"
    content="本故障排除指南涵盖了一些在使用 Ionic Vue 开发时可能遇到的常见问题。阅读以了解更多关于故障排除的信息。"
  />
</head>

本指南涵盖了一些在使用 Ionic Vue 开发时可能遇到的常见问题。

有问题你认为应该在这里涵盖？<a href="https://github.com/ionic-team/ionic-docs/issues/new?assignees=&labels=content&template=content-issue.md&title=" target="_blank" rel="noopener">告诉我们！</a>

## 无法解析组件

```shell
[Vue warn]: Failed to resolve component: ion-button
```

如果你看到这个警告，很可能你没有从 `@ionic/vue` 导入组件。默认情况下，所有 Ionic Vue 组件都是局部注册的，这意味着你需要在每次使用它们时进行导入。

如果不导入组件，你只会得到底层的 Web Component，而 Vue 特有的功能（如 `v-model`）将无法工作。

要解决此问题，你需要从 `@ionic/vue` 导入组件并将其提供给你的 Vue 组件：

```html
<template>
  <ion-button>Hello World</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```

更喜欢一次全局注册你的组件？我们有适合你的方案。我们的[优化构建指南](quickstart.md#optimizing-your-build)展示了如何全局注册 Ionic Vue 组件，以及使用此方法时需要注意的潜在缺点。

## 插槽属性已弃用

```shell
`slot` attributes are deprecated  vue/no-deprecated-slot-attribute
```

Ionic Vue 中使用的插槽是 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots" target="_blank" rel="noopener">Web Component 插槽</a>，这与 Vue 2 中使用的插槽不同。不幸的是，两者的 API 非常相似，你的语法检查器很可能混淆了它们。

所有 Ionic Vue 启动项目默认关闭此规则，但你可以通过将以下内容添加到 `.eslintrc.js` 文件来自行关闭：

```js
module.exports = {
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
  },
};
```

如果你使用 VSCode 并安装了 Vetur 插件，你很可能是由于 Vetur 而不是 ESLint 收到此警告。默认情况下，Vetur 会加载默认的 Vue 3 语法检查规则，并忽略任何自定义的 ESLint 规则。

要解决此问题，你需要使用 `vetur.validation.template: false` 关闭 Vetur 的模板验证。有关更多信息，请参阅 <a href="https://vuejs.github.io/vetur/guide/linting-error.html#linting" target="_blank" rel="noopener">Vetur 语法检查指南</a>。

## 组件上的方法不是函数

要访问 Vue 中 Ionic Framework 组件上的方法，你需要先访问底层的 Web Component 实例：

```js
// ✅ 这是正确的
ionContentRef.value.$el.scrollToBottom();

// ❌ 这是不正确的，会导致错误。
ionContentRef.value.scrollToBottom();
```

在其他框架集成（如 Ionic React）中，这是不需要的，因为任何你提供的 `ref` 都会自动转发到底层 Web Component 实例。由于 Vue 管理 ref 方式的限制，我们无法在这里做同样的事情。

有关更多信息，请参阅[快速入门指南](quickstart.md#calling-methods-on-components)。

## 页面过渡不起作用

为了使页面过渡正常工作，每个页面必须在根级别有一个 `ion-page` 组件：

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>首页</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Hello World</ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
</script>
```

有关更多信息，请参阅 [IonPage 文档](navigation.md#ionpage)。

## 在 JavaScript 中绑定的 Ionic 事件未触发

在 JavaScript 中创建事件监听器（例如 `addEventListener`）时，事件名称应使用 kebab-case 格式：

```javascript
const modal = await modalController.create({
  component: Modal
});

modal.addEventListener('ion-modal-did-present', () => {
  ...
});

await modal.present();
```

这样做是为了与开发者在 Vue 模板中使用 kebab-case 绑定事件的方式保持一致：https://vuejs.org/guide/essentials/component-basics.html#case-insensitivity
