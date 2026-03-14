```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="cancelChanges()">取消</ion-button>
      </ion-buttons>
      <ion-title>{{ $props.title }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="confirmChanges()">完成</ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar @ionInput="searchbarInput($event)"></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  <ion-content color="light" class="ion-padding">
    <ion-list id="modal-list" :inset="true">
      <ion-item v-for="item in filteredItems" :key="item.value">
        <ion-checkbox :value="item.value" :checked="isChecked(item.value)" @ionChange="checkboxChange($event)"
          >{{ item.text }}</ion-checkbox
        >
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonTitle,
    IonSearchbar,
    IonToolbar,
  } from '@ionic/vue';
  import type { CheckboxCustomEvent, SearchbarCustomEvent } from '@ionic/vue';
  import { ref } from 'vue';

  interface Props {
    items: Array<any>;
    selectedItems: Array<any>;
    title?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    title: '选择项目',
  });

  const emit = defineEmits<{
    'selection-cancel': [];
    'selection-change': [value: any[]];
  }>();

  const filteredItems = ref([...props.items]);
  const workingSelectedValues = ref([...props.selectedItems]);

  const isChecked = (value: string) => {
    return workingSelectedValues.value.find((item) => item === value) !== undefined;
  };

  const cancelChanges = () => {
    emit('selection-cancel');
  };

  const confirmChanges = () => {
    emit('selection-change', workingSelectedValues.value);
  };

  const searchbarInput = (event: SearchbarCustomEvent) => {
    filterList(event.target.value);
  };

  /**
   * 根据提供的搜索关键词更新渲染的视图。
   * 如果没有提供关键词，将渲染所有数据。
   */
  const filterList = (searchQuery: string | undefined) => {
    /**
     * 如果未定义搜索关键词，
     * 返回所有选项。
     */
    if (searchQuery === undefined) {
      filteredItems.value = [...props.items];
    } else {
      /**
       * 否则，规范化搜索关键词，
       * 并检查哪些项目包含该关键词作为子字符串。
       */
      const normalizedQuery = searchQuery.toLowerCase();
      filteredItems.value = props.items.filter((item) => {
        return item.text.toLowerCase().includes(normalizedQuery);
      });
    }
  };

  const checkboxChange = (event: CheckboxCustomEvent) => {
    const { checked, value } = event.detail;

    if (checked) {
      workingSelectedValues.value = [...workingSelectedValues.value, value];
    } else {
      workingSelectedValues.value = workingSelectedValues.value.filter((item) => item !== value);
    }
  };
</script>
```