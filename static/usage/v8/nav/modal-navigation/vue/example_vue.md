```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>模态框导航</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button id="openModal">打开模态框</ion-button>
      <ion-modal ref="modal" trigger="openModal" @will-present="onWillPresent">
        <ion-header>
          <ion-toolbar>
            <ion-title>模态框</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss"> 关闭 </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-nav ref="nav"></ion-nav>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { nextTick, ref } from 'vue';
  import {
    IonNav,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonModal,
    IonButtons,
  } from '@ionic/vue';
  import PageOne from './PageOne.vue';

  const modal = ref();
  const nav = ref();

  const dismiss = () => {
    modal.value.$el.dismiss();
  };

  const onWillPresent = async () => {
    // 需要等待两个 tick 以确保引用被正确设置
    await nextTick();
    await nextTick();

    const navEl = nav.value.$el;
    navEl.setRoot(PageOne, { nav: navEl });
  };
</script>
```