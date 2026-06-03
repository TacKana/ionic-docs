---
title: Vue 性能
sidebar_label: 性能
---

# Vue 性能

## 在 Ionic 组件中使用 v-for

在 Ionic 组件中使用 `v-for` 时，我们建议使用 Vue 的 `key` 属性。这允许 Vue 以高效的方式重新渲染循环元素，只更新组件内部的内容，而不是完全重新创建组件。

通过使用 `key`，您可以为每个循环元素提供稳定的标识，以便 Vue 可以跟踪迭代器中的插入和删除。以下是使用 `key` 的示例：

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

在此示例中，我们有一个名为 `items` 的对象数组。每个对象包含一个 `value` 和一个 `id`。使用 `key` 属性，我们为每个对象传递 `item.id`。该 `id` 用于为每个循环元素提供稳定的标识。

有关 Vue 如何使用 `v-for` 管理状态的更多信息，请参阅 https://v3.vuejs.org/guide/list.html#maintaining-state
