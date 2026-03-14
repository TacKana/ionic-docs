```html
<template>
  <ion-menu menu-id="first-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>第一个菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">这是第一个菜单的内容。</ion-content>
  </ion-menu>

  <ion-menu menu-id="second-menu" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>第二个菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">这是第二个菜单的内容。</ion-content>
  </ion-menu>

  <ion-menu side="end" content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>右侧菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">这是右侧菜单的内容。</ion-content>
  </ion-menu>

  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>点击下方按钮打开对应的菜单。</p>

      <ion-button expand="block" @click="openFirstMenu()">打开第一个菜单</ion-button>
      <ion-button expand="block" @click="openSecondMenu()">打开第二个菜单</ion-button>
      <ion-button expand="block" @click="openEndMenu()">打开右侧菜单</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonButton, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar, menuController } from '@ionic/vue';

  const openFirstMenu = async () => {
    /**
     * 通过 menu-id 打开菜单
     * 我们使用 ID 来引用菜单
     * 因为存在多个“起始”菜单
     */
    await menuController.open('first-menu');
  };

  const openSecondMenu = async () => {
    /**
     * 通过 menu-id 打开菜单
     * 我们使用 ID 来引用菜单
     * 因为存在多个“起始”菜单
     */
    await menuController.open('second-menu');
  };

  const openEndMenu = async () => {
    /**
     * 通过 side 打开菜单
     * 这里我们可以通过方位来引用菜单
     * 因为只有一个“右侧”菜单
     */
    await menuController.open('end');
  };
</script>
```