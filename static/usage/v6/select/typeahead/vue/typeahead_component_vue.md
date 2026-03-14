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
        <ion-label>{{ item.text }}</ion-label>
        <ion-checkbox
          :value="item.value"
          :checked="isChecked(item.value)"
          @ionChange="checkboxChange($event)"
        ></ion-checkbox>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonSearchbar,
    IonToolbar,
  } from '@ionic/vue';
  import type { CheckboxCustomEvent, SearchbarCustomEvent } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    props: {
      items: Array,
      selectedItems: Array,
      title: {
        type: String,
        default: '选择项目',
      },
    },
    emits: ['selection-cancel', 'selection-change'],
    components: {
      IonButton,
      IonButtons,
      IonCheckbox,
      IonContent,
      IonHeader,
      IonItem,
      IonLabel,
      IonList,
      IonTitle,
      IonSearchbar,
      IonToolbar,
    },
    setup(props, { emit }) {
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

      const searchbarInput = (ev: SearchbarCustomEvent) => {
        filterList(ev.target.value);
      };

      /**
       * 根据提供的搜索查询更新渲染视图。
       * 如果没有提供查询，则渲染所有数据。
       */
      const filterList = (searchQuery: string | undefined) => {
        /**
         * 如果未定义搜索查询，
         * 则返回所有选项。
         */
        if (searchQuery === undefined) {
          filteredItems.value = [...props.items];
        } else {
          /**
           * 否则，将搜索查询标准化，
           * 并检查哪些项目包含该搜索查询作为子字符串。
           */
          const normalizedQuery = searchQuery.toLowerCase();
          filteredItems.value = props.items.filter((item) => {
            return item.text.toLowerCase().includes(normalizedQuery);
          });
        }
      };

      const checkboxChange = (ev: CheckboxCustomEvent) => {
        const { checked, value } = ev.detail;

        if (checked) {
          workingSelectedValues.value = [...workingSelectedValues.value, value];
        } else {
          workingSelectedValues.value = workingSelectedValues.value.filter((item) => item !== value);
        }
      };

      return {
        filteredItems,
        workingSelectedValues,
        isChecked,
        cancelChanges,
        confirmChanges,
        searchbarInput,
        checkboxChange,
      };
    },
  });
</script>
```