```html
<template>
  <ion-list>
    <ion-list-header>
      <ion-label>默认样式</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>项目</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>项目</ion-label>
    </ion-item>
  </ion-list>

  <ion-list>
    <ion-list-header lines="inset">
      <ion-label>内嵌样式</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>项目</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>项目</ion-label>
    </ion-item>
  </ion-list>

  <ion-list>
    <ion-list-header lines="full">
      <ion-label>完整样式</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-label>项目</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>项目</ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonListHeader },
  });
</script>
```