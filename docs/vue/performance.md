---
title: Vue Performance
sidebar_label: Performance
---

# Vue 性能优化

## 在 Ionic 组件中使用 v-for

当在 Ionic 组件上使用 `v-for` 时，我们推荐结合 Vue 的 `key` 属性一起使用。这样可以让 Vue 以更高效的方式重新渲染循环元素——只更新组件内部的内容，而不是完全重新创建整个组件。

通过使用 `key` 属性，您可以为每个循环元素提供一个稳定的标识，让 Vue 能够追踪迭代器中的插入和删除操作。以下是一个如何使用 `key` 的示例：

```vue
<template>
  <ion-page>
    <ion-content>
      <ion-item v-for="item of items" :key="item.id">
        <ion-label>{{ item.value }}</ion-label>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonItem, IonLabel, IonPage } from '@ionic/vue';
import { ref } from 'vue';

const items = ref([
  { id: 0, value: 'Item 0' },
  { id: 1, value: 'Item 1' },
  ...
]);
</script>
```

在这个示例中，我们有一个名为 `items` 的对象数组。每个对象都包含一个 `value` 和一个 `id`。通过 `key` 属性，我们为每个对象传递了 `item.id`。这个 `id` 用于为每个循环元素提供稳定的标识。

关于 Vue 如何使用 `v-for` 管理状态的更多信息，请参阅 https://v3.vuejs.org/guide/list.html#maintaining-state