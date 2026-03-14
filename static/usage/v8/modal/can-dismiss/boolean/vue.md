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

      <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss" :presenting-element="presentingElement">
        <ion-header>
          <ion-toolbar>
            <ion-title>模态框</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">关闭</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <p class="ion-padding-horizontal">您必须接受条款和条件才能关闭此模态框。</p>
          <ion-item>
            <ion-checkbox id="terms" @ionChange="onTermsChanged" :checked="canDismiss">
              <div class="ion-text-wrap">您是否接受条款和条件？</div>
            </ion-checkbox>
          </ion-item>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    CheckboxCustomEvent,
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonCheckbox,
    IonPage,
  } from '@ionic/vue';
  import { ref, onMounted } from 'vue';

  const canDismiss = ref(false);
  const presentingElement = ref();
  const page = ref();
  const modal = ref();

  const dismiss = () => {
    modal.value.$el.dismiss();
  };

  const onTermsChanged = (event: CheckboxCustomEvent) => {
    canDismiss.value = event.detail.checked;
  };

  onMounted(() => {
    presentingElement.value = page.value.$el;
  });
</script>
```