```html
<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>卡片标题</ion-card-title>
      <ion-card-subtitle>卡片副标题</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="山脉剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>项目</ion-label>
        </ion-item>

        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="山脉剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>项目</ion-label>
        </ion-item>

        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="山脉剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>项目</ion-label>
        </ion-item>

        <ion-item lines="none">
          <ion-thumbnail slot="start">
            <img alt="山脉剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
          <ion-label>项目</ion-label>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
</script>

<style scoped>
  ion-item {
    --padding-start: 0;
  }
</style>
```