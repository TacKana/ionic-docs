```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>示例</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item>
        <ion-input label="名字"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="姓氏"></ion-input>
      </ion-item>
      <ion-item>
        <ion-toggle>
          <ion-label>允许通知</ion-label>
          <ion-note color="medium">可随时取消订阅</ion-note>
        </ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list :inset="true">
      <ion-item>
        <ion-textarea label="评论" label-placement="floating" rows="5"></ion-textarea>
      </ion-item>
    </ion-list>

    <ion-note color="medium" class="ion-margin-horizontal">
      您的评论将被匿名处理，仅用于提升我们产品的可靠性。
    </ion-note>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonTextarea,
    IonToggle,
    IonToolbar,
    IonTitle,
  } from '@ionic/vue';
</script>

<style scoped>
  ion-note {
    display: block;
  }
</style>
```