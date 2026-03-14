---
title: Troubleshooting
---

<head>
  <title>Ionic 故障排除指南：Vue 应用开发常见问题</title>
  <meta
    name="description"
    content="本故障排除指南涵盖了在使用 Ionic Vue 开发应用时可能遇到的一些常见问题。阅读了解更多故障排除信息。"
  />
</head>

本指南涵盖了在使用 Ionic Vue 开发时可能遇到的一些常见问题。

有想要添加到这里的其他问题吗？ <a href="https://github.com/ionic-team/ionic-docs/issues/new?assignees=&labels=content&template=content-issue.md&title=" target="_blank" rel="noopener">请告诉我们！</a>

## 组件解析失败

```shell
[Vue warn]: Failed to resolve component: ion-button
```

如果看到此警告，很可能是因为你没有从 `@ionic/vue` 导入组件。默认情况下，所有 Ionic Vue 组件都是局部注册的，这意味着每次使用它们时都需要导入。

如果不导入组件，你将只能获取底层的 Web Component，并且 Vue 特定的功能（例如 `v-model`）将无法工作。

要解决此问题，需要从 `@ionic/vue` 导入组件并将其提供给 Vue 组件：

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

更倾向于一次性全局注册组件？我们为你提供了解决方案。我们的 [优化构建指南](quickstart.md#optimizing-your-build) 展示了如何全局注册 Ionic Vue 组件，以及使用此方法时需要注意的潜在缺点。

## Slot 属性已弃用

```shell
`slot` attributes are deprecated  vue/no-deprecated-slot-attribute
```

Ionic Vue 中使用的 slots 是 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots" target="_blank" rel="noopener">Web Component slots</a>，与 Vue 2 中使用的 slots 不同。遗憾的是，两者的 API 非常相似，你的代码检查工具可能会混淆两者。

所有 Ionic Vue 启动模板都默认关闭了此规则，但你可以手动在 `.eslintrc.js` 文件中添加以下内容来实现：

```js
module.exports = {
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
  },
};
```

如果你使用 VSCode 并安装了 Vetur 插件，那么这个警告很可能来自 Vetur 而不是 ESLint。默认情况下，Vetur 会加载默认的 Vue 3 代码检查规则，并忽略任何自定义的 ESLint 规则。

要解决此问题，你需要使用 `vetur.validation.template: false` 关闭 Vetur 的模板验证。更多信息请参阅 <a href="https://vuejs.github.io/vetur/guide/linting-error.html#linting" target="_blank" rel="noopener">Vetur 代码检查指南</a>。

## 组件上的方法不是函数

要在 Vue 中访问 Ionic Framework 组件上的方法，首先需要访问底层的 Web Component 实例：

```js
// ✅ 这是正确的
ionContentRef.value.$el.scrollToBottom();

// ❌ 这是错误的，会导致错误。
ionContentRef.value.scrollToBottom();
```

在其他框架集成（如 Ionic React）中，这是不必要的，因为你提供的任何 `ref` 都会自动转发到底层的 Web Component 实例。由于 Vue 管理 refs 的方式存在限制，我们在这里无法实现相同的功能。

更多信息请参阅 [快速入门指南](quickstart.md#calling-methods-on-components)。

## 页面过渡效果无效

为了使页面过渡效果正常工作，每个页面的根元素必须是 `ion-page` 组件：

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
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

更多信息请参阅 [IonPage 文档](navigation.md#ionpage)。

## JavaScript 中绑定的 Ionic 事件未触发

在 JavaScript 中创建事件监听器（即 `addEventListener`）时，事件名称应使用 kebab-case 格式：

```javascript
const modal = await modalController.create({
  component: Modal
});

modal.addEventListener('ion-modal-did-present', () => {
  ...
});

await modal.present();
```

这样做是为了与开发人员在 Vue 模板中使用 kebab-case 绑定事件的方式保持一致：https://vuejs.org/guide/essentials/component-basics.html#case-insensitivity