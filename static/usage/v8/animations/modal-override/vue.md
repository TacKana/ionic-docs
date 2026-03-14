```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>页面</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="modal-trigger">打开模态框</ion-button>
    <ion-modal trigger="modal-trigger" ref="modalEl" :enterAnimation="enterAnimation" :leaveAnimation="leaveAnimation">
      <ion-header>
        <ion-toolbar>
          <ion-title>模态框</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeModal()">关闭</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 模态框内容 </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonModal,
    IonToolbar,
    IonTitle,
    createAnimation,
  } from '@ionic/vue';
  import { ref } from 'vue';

  const modalEl = ref(null);

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root!.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root!.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction('reverse');
  };

  const closeModal = () => {
    modalEl.value?.$el.dismiss();
  };
</script>
```