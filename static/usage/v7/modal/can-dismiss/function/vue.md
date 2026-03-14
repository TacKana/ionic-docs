```html
<template>
  <ion-page ref="page">
    <ion-header>
      <ion-toolbar>
        <ion-title>App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button id="open-modal" expand="block">打开</ion-button>

      <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss" :presenting-element="presentingElement">
        <ion-header>
          <ion-toolbar>
            <ion-title>模态框</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">关闭</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>关闭此模态框时会提示确认。</p>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    actionSheetController,
  } from '@ionic/vue';
  import { ref, onMounted } from 'vue';

  const presentingElement = ref(undefined);
  const page = ref();
  const modal = ref();

  const dismiss = () => {
    modal.value.$el.dismiss();
  };

  const canDismiss = async () => {
    const actionSheet = await actionSheetController.create({
      header: '确定要离开吗？',
      buttons: [
        {
          text: '是',
          role: 'confirm',
        },
        {
          text: '否',
          role: 'cancel',
        },
      ],
    });
    actionSheet.present();
    const { role } = await actionSheet.onWillDismiss();
    return role === 'confirm';
  };

  onMounted(() => {
    presentingElement.value = page.value.$el;
  });
</script>
```