```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>应用</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开底部模态框</ion-button>

    <ion-modal
      trigger="open-modal"
      :initial-breakpoint="0.25"
      :breakpoints="[0, 0.25, 0.5, 0.75]"
      handle-behavior="cycle"
    >
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>点击上方的拖拽手柄，可切换到下一个断点。</ion-label>
        </div>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonLabel } from '@ionic/vue';
</script>
```