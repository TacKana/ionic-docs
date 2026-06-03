# 故障排除

本指南涵盖了使用 Ionic Vue 开发时可能遇到的一些常见问题。

有问题认为应该在这里涵盖？<a href="https://github.com/ionic-team/ionic-docs/issues/new?assignees=&labels=content&template=content-issue.md&title=" target="_blank" rel="noopener">告诉我们！</a>

## 无法解析组件

```shell
[Vue warn]: Failed to resolve component: ion-button
```

如果您看到此警告，很可能是您没有从 `@ionic/vue` 导入组件。默认情况下，所有 Ionic Vue 组件都是局部注册的，这意味着您需要在使用它们时每次导入。

如果不导入组件，您将只得到底层的 Web 组件，而 Vue 特定功能（如 `v-model`）将无法工作。

要解决此问题，您需要从 `@ionic/vue` 导入组件并将其提供给您的 Vue 组件：

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

更喜欢一次性全局注册您的组件？我们也有方案。我们的[优化构建指南](quickstart.md#优化构建)向您展示了如何全局注册 Ionic Vue 组件，以及使用这种方法需要注意的潜在缺点。

## Slot 属性已弃用

```shell
`slot` attributes are deprecated  vue/no-deprecated-slot-attribute
```

Ionic Vue 中使用的 slots 是 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots" target="_blank" rel="noopener">Web Component slots</a>，这与 Vue 2 中使用的 slots 不同。不幸的是，两者的 API 非常相似，您的 linter 可能将两者混淆了。

所有 Ionic Vue 启动项目默认关闭了此规则，但您可以通过在 `.eslintrc.js` 文件中添加以下内容来手动关闭：

```js
module.exports = {
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
  },
};
```

如果您使用 VSCode 并安装了 Vetur 插件，您很可能会因为 Vetur 而不是 ESLint 收到此警告。默认情况下，Vetur 会加载默认的 Vue 3 代码检查规则，并忽略任何自定义的 ESLint 规则。

要解决此问题，您需要使用 `vetur.validation.template: false` 关闭 Vetur 的模板验证。有关更多信息，请参见 <a href="https://vuejs.github.io/vetur/guide/linting-error.html#linting" target="_blank" rel="noopener">Vetur 代码检查指南</a>。

## 组件上的方法不是函数

要在 Vue 中访问 Ionic Framework 组件的方法，您需要首先访问底层 Web 组件实例：

```js
// ✅ 这是正确的
ionContentRef.value.$el.scrollToBottom();

// ❌ 这是错误的，会导致错误
ionContentRef.value.scrollToBottom();
```

在其他框架集成中，如 Ionic React，这是不需要的，因为您提供的任何 `ref` 都会自动转发到底层 Web 组件实例。由于 Vue 管理 refs 的限制，我们在这里无法做同样的事情。

有关更多信息，请参见[快速入门指南](quickstart.md#调用组件方法)。

## 页面过渡不工作

为了使页面过渡正常工作，每个页面必须有一个 `ion-page` 组件作为根元素：

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

有关更多信息，请参见 [IonPage 文档](navigation.md#ionpage)。
