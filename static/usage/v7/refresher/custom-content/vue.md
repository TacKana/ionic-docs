```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>下拉刷新</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
      <ion-refresher-content
        :pulling-icon="chevronDownCircleOutline"
        pulling-text="下拉刷新"
        refreshing-spinner="circles"
        refreshing-text="正在刷新..."
      >
      </ion-refresher-content>
    </ion-refresher>

    <p>向下拉动此内容即可触发刷新。</p>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonContent,
    IonHeader,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    RefresherCustomEvent,
  } from '@ionic/vue';
  import { chevronDownCircleOutline } from 'ionicons/icons';

  const handleRefresh = (event: RefresherCustomEvent) => {
    setTimeout(() => {
      // 加载数据的调用写在这里
      event.target.complete();
    }, 2000);
  };
</script>
```