```html
<style>
  ion-modal {
    --height: 50%;
    --border-radius: 16px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ion-modal::part(backdrop) {
    background: rgba(209, 213, 219);
    opacity: 1;
  }

  ion-modal ion-toolbar {
    --background: rgb(14 116 144);
    --color: white;
  }
</style>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>应用</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开模态框</ion-button>

    <ion-modal ref="modal" trigger="open-modal">
      <ion-content>
        <ion-toolbar>
          <ion-title>模态框</ion-title>
          <ion-buttons slot="end">
            <ion-button color="light" @click="dismiss()">关闭</ion-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>康纳·史密斯</h2>
              <p>销售代表</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>丹尼尔·史密斯</h2>
              <p>产品设计师</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>格雷格·史密斯</h2>
              <p>运营总监</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>佐伊·史密斯</h2>
              <p>首席执行官</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-modal>
  </ion-content>
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
    IonItem,
    IonList,
    IonAvatar,
    IonImg,
    IonLabel,
  } from '@ionic/vue';
  import { ref } from 'vue';

  const modal = ref();

  const dismiss = () => modal.value.$el.dismiss();
</script>
```