```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>内联模态框</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button expand="block" @click="setOpen(true)">打开</ion-button>

    <ion-modal :is-open="isOpen">
      <ion-header>
        <ion-toolbar>
          <ion-title>模态框</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpen(false)">关闭</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>
          这是一个模态框内容的示例文本。此处可以放置任何您想要展示的信息或组件。
        </p>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonButtons, IonButton, IonModal, IonHeader, IonToolbar, IonContent, IonTitle } from '@ionic/vue';
  import { ref } from 'vue';

  const isOpen = ref(false);

  const setOpen = (open: boolean) => (isOpen.value = open);
</script>
```