```html
<template>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item :button="true" :detail="false" id="select-fruits">
        <ion-label>喜爱的水果</ion-label>
        <div slot="end" id="selected-fruits">{{ selectedFruitsText }}</div>
      </ion-item>
    </ion-list>
  </ion-content>

  <ion-modal trigger="select-fruits" ref="modal">
    <app-typeahead
      class="ion-page"
      title="喜爱的水果"
      :items="fruits"
      :selectedItems="selectedFruits"
      @selection-change="fruitSelectionChanged($event)"
      @selection-cancel="modal.$el.dismiss()"
    ></app-typeahead>
  </ion-modal>
</template>

<script setup lang="ts">
  import { IonContent, IonItem, IonLabel, IonList, IonModal } from '@ionic/vue';
  import { ref } from 'vue';
  import type { Item } from '../types';
  import AppTypeahead from './AppTypeahead.vue';

  const fruits: Item[] = [
    { text: '苹果', value: 'apple' },
    { text: '杏', value: 'apricot' },
    { text: '香蕉', value: 'banana' },
    { text: '黑莓', value: 'blackberry' },
    { text: '蓝莓', value: 'blueberry' },
    { text: '樱桃', value: 'cherry' },
    { text: '蔓越莓', value: 'cranberry' },
    { text: '葡萄', value: 'grape' },
    { text: '西柚', value: 'grapefruit' },
    { text: '番石榴', value: 'guava' },
    { text: '菠萝蜜', value: 'jackfruit' },
    { text: '酸橙', value: 'lime' },
    { text: '芒果', value: 'mango' },
    { text: '油桃', value: 'nectarine' },
    { text: '橙子', value: 'orange' },
    { text: '木瓜', value: 'papaya' },
    { text: '百香果', value: 'passionfruit' },
    { text: '桃子', value: 'peach' },
    { text: '梨', value: 'pear' },
    { text: '大蕉', value: 'plantain' },
    { text: '李子', value: 'plum' },
    { text: '菠萝', value: 'pineapple' },
    { text: '石榴', value: 'pomegranate' },
    { text: '树莓', value: 'raspberry' },
    { text: '草莓', value: 'strawberry' },
  ];
  const modal = ref();
  const selectedFruitsText = ref('0 项');
  const selectedFruits = ref([]);

  const formatData = (data: string[]) => {
    if (data.length === 1) {
      const fruit = fruits.find((fruit) => fruit.value === data[0]);
      return fruit.text;
    }

    return `${data.length} 项`;
  };

  const fruitSelectionChanged = (fruits: string[]) => {
    selectedFruits.value = fruits;
    selectedFruitsText.value = formatData(selectedFruits.value);
    modal.value.$el.dismiss();
  };
</script>
```