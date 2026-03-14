```html
<template>
  <ion-page ref="page">
    <ion-header>
      <ion-toolbar>
        <ion-title>应用</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button id="open-modal" expand="block">打开</ion-button>

      <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss" :presenting-element="page?.$el">
        <ion-header>
          <ion-toolbar>
            <ion-title>模态框</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss">关闭</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>
            如需关闭此模态框，请使用提供的"关闭"按钮。请注意，通过滑动手势无法关闭此模态框。
          </p>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonPage } from '@ionic/vue';
  import { ref } from 'vue';

  const page = ref(null);
  const modal = ref(null);

  function dismiss() {
    modal.value.$el.dismiss();
  }

  async function canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
</script>
```