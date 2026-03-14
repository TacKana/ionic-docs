```html
<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>菜单内容</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">这是菜单内容。</ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">点击工具栏中的按钮以打开菜单。</ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```