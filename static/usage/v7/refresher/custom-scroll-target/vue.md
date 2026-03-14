```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>下拉刷新</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :scroll-y="false">
    <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <div class="ion-content-scroll-host ion-padding">
      <p>向下拉动此内容来触发刷新。</p>
    </div>
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

<style scoped>
  .ion-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  .ion-content-scroll-host::before,
  .ion-content-scroll-host::after {
    position: absolute;

    width: 1px;
    height: 1px;

    content: '';
  }

  .ion-content-scroll-host::before {
    bottom: -1px;
  }

  .ion-content-scroll-host::after {
    top: -1px;
  }
</style>
```