```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>示例</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开模态框</ion-button>
    <ion-modal ref="modal" :keep-contents-mounted="true" trigger="open-modal">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="close()">取消</ion-button>
          </ion-buttons>
          <ion-title>模态框</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 这些内容在模态框创建时就已加载完毕。 </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/vue';
  import { ref } from 'vue';

  const modal = ref();

  const close = () => modal.value.$el.dismiss();
</script>
```