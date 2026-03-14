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
      <p>向下拉动此内容以触发刷新。</p>
    </div>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar },
    setup() {
      const handleRefresh = (event: CustomEvent) => {
        setTimeout(() => {
          // 加载数据的调用放在这里
          event.target.complete();
        }, 2000);
      };

      return { handleRefresh };
    },
  });
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
</style>
```