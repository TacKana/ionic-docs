```html
<style>
  ion-title.title-large {
    color: #c897d8;
    font-size: 30px;
  }

  ion-title {
    --color: #000;
  }

  ion-toolbar {
    --background: #c897d8;
  }
</style>
<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>标题</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">标题</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-list>
      <ion-item>项目 1</ion-item>
      <ion-item>项目 2</ion-item>
      <ion-item>项目 3</ion-item>
      <ion-item>项目 4</ion-item>
      <ion-item>项目 5</ion-item>
      <ion-item>项目 6</ion-item>
      <ion-item>项目 7</ion-item>
      <ion-item>项目 8</ion-item>
      <ion-item>项目 9</ion-item>
      <ion-item>项目 10</ion-item>
      <ion-item>项目 11</ion-item>
      <ion-item>项目 12</ion-item>
      <ion-item>项目 13</ion-item>
      <ion-item>项目 14</ion-item>
      <ion-item>项目 15</ion-item>
      <ion-item>项目 16</ion-item>
      <ion-item>项目 17</ion-item>
      <ion-item>项目 18</ion-item>
      <ion-item>项目 19</ion-item>
      <ion-item>项目 20</ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem } from '@ionic/vue';
</script>
```