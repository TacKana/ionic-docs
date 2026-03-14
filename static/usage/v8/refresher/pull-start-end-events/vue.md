```vue
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>下拉刷新</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-refresher
      id="refresher"
      slot="fixed"
      @ionPullStart="handlePullStart()"
      @ionPullEnd="handlePullEnd($event)"
      @ionRefresh="handleRefresh($event)"
    >
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <p>向下拉动此内容以触发刷新。</p>

    <ion-list lines="full">
      <ion-item v-for="item in items" :key="item.label">
        <ion-checkbox slot="start" v-model="item.checked" :disabled="item.disabled"></ion-checkbox>
        <ion-label>{{ item.label }}</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
  RefresherPullEndCustomEvent,
} from '@ionic/vue';

const items = ref([
  { label: '敲定第一季度预算提案', checked: false, disabled: false },
  { label: '审阅设计稿', checked: true, disabled: false },
  { label: '与工程团队同步 API 文档', checked: true, disabled: false },
  { label: '批准三月份的休假申请', checked: false, disabled: false },
  { label: '起草月度通讯', checked: false, disabled: false },
]);

const handlePullStart = () => {
  console.log('开始下拉');

  // 下拉开始时禁用复选框
  items.value.forEach((item) => {
    item.disabled = true;
  });
};

const handlePullEnd = (event: RefresherPullEndCustomEvent) => {
  console.log('下拉结束，原因："' + event.detail.reason + '"');

  // 下拉结束时启用复选框
  items.value.forEach((item) => {
    item.disabled = false;
  });
};

const handleRefresh = (event: RefresherCustomEvent) => {
  setTimeout(() => {
    // 加载数据的调用写在这里
    event.target.complete();
    console.log('刷新完成');
  }, 2000);
};
</script>
```