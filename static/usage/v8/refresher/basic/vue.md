```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>下拉刷新</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <p>向下拉动此内容以触发刷新。</p>
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

  const handleRefresh = (event: RefresherCustomEvent) => {
    setTimeout(() => {
      // 加载数据的调用放在这里
      event.target.complete();
    }, 2000);
  };
</script>
```