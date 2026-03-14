```html
<template>
  <ion-list>
    <ion-list-header>
      <ion-label>电子游戏</ion-label>
      <ion-button>查看全部</ion-button>
    </ion-list-header>
    <ion-item>
      <ion-label>Pokémon Yellow</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Mega Man X</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>The Legend of Zelda</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Pac-Man</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Super Mario World</ion-label>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonButton, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/vue';
</script>
```