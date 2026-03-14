```html
<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>标题</ion-title>
      <ion-buttons :collapse="true" slot="end">
        <ion-button>按钮</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">标题</ion-title>
        <ion-buttons :collapse="true" slot="end">
          <ion-button>按钮</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <div class="ion-padding">滚动列表以查看标题和按钮的折叠效果。</div>

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
  import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonButtons, IonButton } from '@ionic/vue';
</script>
```