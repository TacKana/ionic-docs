```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>内联提示框</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button expand="block" @click="setOpen(true)">打开</ion-button>
    <ion-toast
      :is-open="isOpen"
      message="此提示框将在5秒后关闭"
      :duration="5000"
      @didDismiss="setOpen(false)"
    ></ion-toast>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonButton, IonHeader, IonToolbar, IonContent, IonTitle, IonToast } from '@ionic/vue';
  import { ref } from 'vue';

  const isOpen = ref(false);
  const setOpen = (state: boolean) => {
    isOpen.value = state;
  };
</script>
```