```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>模态导航</ion-title>
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

<script lang="ts">
  import { nextTick } from 'vue';
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

  export default {
    components: { IonNav, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonButtons },
    methods: {
      dismiss() {
        this.$refs.modal.$el.dismiss();
      },
      async onWillPresent() {
        // 需要等待两个 tick 以确保引用已设置
        await nextTick();
        await nextTick();

        const nav = this.$refs.nav.$el;
        nav.setRoot(PageOne, { nav });
      },
    },
  };
</script>
```