---
title: 故障排除
---

<head>
  <title>Ionic 故障排除指南：常见的 Vue 应用开发问题</title>
  <meta
    name="description"
    content="本故障排除指南涵盖了在使用 Ionic Vue 开发应用时可能遇到的一些常见问题。阅读以了解更多关于故障排除的信息。"
  />
</head>

本指南涵盖了一些在使用 Ionic Vue 开发时可能遇到的常见问题。

有一个您认为应该在这里涵盖的问题？<a href="https://github.com/ionic-team/ionic-docs/issues/new?assignees=&labels=content&template=content-issue.md&title=" target="_blank" rel="noopener">告诉我们！</a>

## 无法解析组件

```shell
[Vue warn]: Failed to resolve component: ion-button
```

如果您看到此警告，很可能是因为您没有从 `@ionic/vue` 导入您的组件。默认情况下，所有 Ionic Vue 组件都是局部注册的，这意味着您需要在每次使用它们时进行导入。

如果不导入组件，您只会得到底层的 Web Component，而 Vue 特定的功能（如 `v-model`）将无法工作。

要解决此问题，您需要从 `@ionic/vue` 导入组件并将其提供给您的 Vue 组件：

```vue
<template>
  <ion-button>Hello World</ion-button>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue';
</script>
```

更倾向于一次性全局注册您的组件？我们为您提供了解决方案。我们的[优化构建指南](quickstart.md)展示了如何全局注册 Ionic Vue 组件，以及使用此方法时需要了解的潜在缺点。

## Slot 属性已弃用

```shell
`slot` attributes are deprecated  vue/no-deprecated-slot-attribute
```

Ionic Vue 中使用的插槽是 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots" target="_blank" rel="noopener">Web Component 插槽</a>，与 Vue 2 中使用的插槽不同。不幸的是，两者的 API 非常相似，您的代码检查器很可能将两者混淆了。

所有 Ionic Vue 启动应用都默认关闭了此规则，但您可以通过在 `.eslintrc.js` 文件中添加以下内容来手动关闭：

```js
module.exports = {
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
  },
};
```

如果您使用 VSCode 并安装了 Vetur 插件，您很可能是因为 Vetur 而不是 ESLint 而收到此警告。默认情况下，Vetur 会加载默认的 Vue 3 代码检查规则，并忽略任何自定义的 ESLint 规则。

要解决此问题，您需要使用 `vetur.validation.template: false` 关闭 Vetur 的模板验证。有关更多信息，请参阅 <a href="https://vuejs.github.io/vetur/guide/linting-error.html#linting" target="_blank" rel="noopener">Vetur 代码检查指南</a>。

## 组件上的方法不是一个函数

要在 Vue 中访问 Ionic 框架组件上的方法，您需要首先访问底层的 Web Component 实例：

```js
// ✅ 这是正确的
ionContentRef.value.$el.scrollToBottom();

// ❌ 这是不正确的，会导致错误。
ionContentRef.value.scrollToBottom();
```

在其他框架集成（如 Ionic React）中，这是不需要的，因为您提供的任何 `ref` 都会自动转发到底层的 Web Component 实例。由于 Vue 管理 ref 的方式存在限制，我们无法在此处做同样的事情。

有关更多信息，请参阅[快速入门指南](quickstart.md#调用组件方法)。

## 页面过渡不工作

为了使页面过渡正常工作，每个页面必须在根节点有一个 `ion-page` 组件：

```vue
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

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```

有关更多信息，请参阅 [IonPage 文档](navigation.md#ionpage)。

## 在 JavaScript 中绑定的 Ionic 事件未触发

在 JavaScript 中创建事件监听器时（即 `addEventListener`），事件名称应使用 kebab-case：

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

## Capacitor 原生构建中出现空白白屏

如果您的应用在浏览器中正常运行，但在 Capacitor iOS 或 Android 构建中启动时显示空白白屏，最常见的原因是 `vite.config.js`（或传统 Vue CLI 项目的 `vue.config.js` 中的 `publicPath`）中的 `base` 不是默认值。

这个选项通常是为了让应用可以从子目录托管而添加的，例如 GitHub Pages 部署：

```js
// vite.config.js
export default defineConfig({
  base: '/my-repo/',
});
```

在 Capacitor 构建中，打包的资源来自本地源（iOS 上默认是 `capacitor://localhost`，Android 上是 `https://localhost`），因此带前缀的路径永远无法解析，应用也无法启动。

要修复此问题，请在运行 `npx cap copy` 之前将 `base` 重置为 `/`（或移除该选项）。

```js
// vite.config.js
export default defineConfig({
  base: '/',
});
```

如果您需要同时支持两个目标，请为每个目标保留单独的配置文件，并在构建时使用 `vite build --config` 进行选择。

要确认这是原因，请检查设备日志中是否有带前缀的资源路径的 404 错误：

- **Android：** 从命令行运行 `adb logcat`，或在 Android Studio 中打开 **Logcat**。
- **iOS：** 打开 Safari 的 **Develop** 菜单，检查模拟器或设备的 webview。
