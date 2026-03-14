```html
<template>
  <ion-breadcrumbs :max-items="4" @ionCollapsedClick="presentPopover($event)">
    <ion-breadcrumb href="#home">首页</ion-breadcrumb>
    <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
    <ion-breadcrumb href="#photography">摄影器材</ion-breadcrumb>
    <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
    <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
    <ion-breadcrumb href="#35mm">35毫米</ion-breadcrumb>
  </ion-breadcrumbs>
  <ion-popover :is-open="popoverOpen" :event="event" @didDismiss="popoverOpen = false">
    <ion-content>
      <ion-list>
        <ion-item
          v-for="(breadcrumb, i) in collapsedBreadcrumbs"
          :href="breadcrumb.href"
          :lines="i === collapsedBreadcrumbs.length - 1 ? 'none' : undefined"
        >
          <ion-label>{{ breadcrumb.textContent }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-popover>
</template>

<script lang="ts">
  import { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, IonPopover } from '@ionic/vue';
  import Popover from './Popover.vue';

  export default {
    components: { IonBreadcrumb, IonBreadcrumbs, IonContent, IonItem, IonLabel, IonList, IonPopover },
    data() {
      return {
        popoverOpen: false,
        collapsedBreadcrumbs: [],
        event: null,
      };
    },
    methods: {
      presentPopover(e: Event) {
        this.collapsedBreadcrumbs = (e as CustomEvent).detail.collapsedBreadcrumbs;
        this.event = e;
        this.popoverOpen = true;
      },
    },
  };
</script>
```