```html
<template>
  <ion-list lines="full">
    <!-- 默认情况下重新排序手势是禁用的，启用它以实现拖放项目 -->
    <ion-reorder-group :disabled="false" @ionReorderMove="handleReorderMove" @ionReorderEnd="handleReorderEnd">
      <ion-item v-for="(item, index) in items" :key="index" :id="`item-${index + 1}`">
        <b slot="start">{{ index + 1 }}</b>
        <ion-label>{{ item }}</ion-label>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/vue';
  import { ref } from 'vue';

  const items = ref(['Buy groceries', 'Call the bank', 'Finish project report', 'Book flight tickets', 'Read a book']);

  const handleReorderMove = (event: ReorderEndCustomEvent) => {
    const from = event.detail.from;
    const to = event.detail.to;

    if (from !== to) {
      console.log('Dragged from index', from, 'to', to);
    }

    // 获取所有项目并按当前 id（item-1, item-2, ...）排序
    const itemElements = Array.from(document.querySelectorAll('ion-item')).sort((a, b) => {
      const aNum = parseInt(a.id.replace('item-', ''), 10);
      const bNum = parseInt(b.id.replace('item-', ''), 10);
      return aNum - bNum;
    });

    // 向下拖动：将从 from+1 到 to 之间的项目上移，将被拖动的项目设置为 to+1
    if (from < to) {
      for (let i = from; i <= to; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (i === from) {
          // 被拖动的项目
          itemNum.textContent = String(to + 1);
          item.id = `item-${to + 1}`;
        } else {
          // 项目上移
          itemNum.textContent = String(i);
          item.id = `item-${i}`;
        }
      }
    } else if (from > to) {
      for (let i = to; i <= from; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (i === from) {
          // 被拖动的项目
          itemNum.textContent = String(to + 1);
          item.id = `item-${to + 1}`;
        } else {
          // 项目下移
          itemNum.textContent = String(i + 2);
          item.id = `item-${i + 2}`;
        }
      }
    }
  };

  const handleReorderEnd = (event: ReorderEndCustomEvent) => {
    // 完成重新排序并更新项目数据
    items.value = event.detail.complete(items.value);

    // 更新所有项目编号和 ID 以匹配它们的新位置
    const itemElements = document.querySelectorAll('ion-item');
    itemElements.forEach((item, index) => {
      const itemNum = item.querySelector('b');
      itemNum.textContent = String(index + 1);
      item.id = `item-${index + 1}`;
    });
  };
</script>
```