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

    <p>向下拉动此内容即可触发刷新。</p>
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
          // 加载数据的调用可以放在这里
          event.target.complete();
        }, 2000);
      };

      return { handleRefresh };
    },
  });
</script>
```