---
title: 测试
---

<head>
  <title>Ionic 应用组件的 Vue 单元测试和端到端测试</title>
  <meta
    name="description"
    content="使用 Ionic 创建的 Vue 应用会自动设置为单元测试和端到端测试。阅读以了解更多关于 Ionic 组件测试工具的信息。"
  />
</head>

本文档概述了如何测试使用 `@ionic/vue` 构建的应用。使用 Ionic CLI 生成的应用会设置为使用 [Vitest](https://vitest.dev) 和 [Vue Test Utils](https://test-utils.vuejs.org) 进行单元测试，并使用 [Cypress](https://www.cypress.io) 进行端到端测试。

## 单元测试

### 等待组件

当你需要在断言 DOM 之前等待 Ionic 组件完成渲染时，请使用从 `@ionic/core` 导出的 `componentOnReady` 辅助函数，而不是直接调用 `el.componentOnReady()`。`@ionic/vue` 使用 Stencil 的自定义元素构建，该元素上不存在 `componentOnReady()` 方法。该辅助函数会改为等待一个动画帧，让组件的内部内容有机会完成渲染。

```ts
import { mount } from '@vue/test-utils';
import { componentOnReady } from '@ionic/core';

import Example from './Example.vue';

test('renders the submit button', async () => {
  const wrapper = mount(Example);

  const button = wrapper.find('ion-button').element;

  await new Promise<void>((resolve) => componentOnReady(button, () => resolve()));

  expect(button.textContent).toContain('Submit');
});
```
