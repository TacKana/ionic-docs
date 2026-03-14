```html
<template>
  <ion-split-pane when="xs" content-id="main">
    <ion-menu content-id="main">
      <ion-header>
        <ion-toolbar color="tertiary">
          <ion-title>菜单</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 菜单内容宽度为 350px，带有蓝色虚线边框 </ion-content>
    </ion-menu>

    <div class="ion-page" id="main">
      <ion-header>
        <ion-toolbar>
          <ion-title>主视图</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 主视图内容 </ion-content>
    </div>
  </ion-split-pane>
</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
  ion-split-pane {
    --side-width: 350px;
    --side-max-width: 350px;

    --border: 1px dashed #b3baff;
  }
</style>
```