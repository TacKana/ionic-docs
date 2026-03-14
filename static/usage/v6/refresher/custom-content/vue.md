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

    <p>向下拉动此内容以触发刷新。</p>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { chevronDownCircleOutline } from 'ionicons/icons';

  export default defineComponent({
    components: { IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar },
    setup() {
      const handleRefresh = (event: CustomEvent) => {
        setTimeout(() => {
          // 加载数据的相关调用放在这里
          event.target.complete();
        }, 2000);
      };

      return { chevronDownCircleOutline, handleRefresh };
    },
  });
</script>
```