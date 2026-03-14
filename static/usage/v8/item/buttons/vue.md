```html
<template>
  <ion-item>
    <ion-button slot="start"> Start </ion-button>
    <ion-label>默认按钮</ion-label>
    <ion-button slot="end"> End </ion-button>
  </ion-item>

  <ion-item>
    <ion-button slot="start">
      开始
      <ion-icon :icon="home" slot="end"></ion-icon>
    </ion-button>
    <ion-label>带图标的按钮</ion-label>
    <ion-button slot="end">
      <ion-icon :icon="star" slot="end"></ion-icon>
      结束
    </ion-button>
  </ion-item>

  <ion-item>
    <ion-button slot="start">
      <ion-icon slot="icon-only" :icon="navigate"></ion-icon>
    </ion-button>
    <ion-label>仅图标按钮</ion-label>
    <ion-button slot="end">
      <ion-icon slot="icon-only" :icon="star"></ion-icon>
    </ion-button>
  </ion-item>

  <ion-item>
    <ion-label>按钮尺寸</ion-label>
    <ion-button slot="end" size="small"> 小号 </ion-button>
    <ion-button slot="end" size="default"> 默认 </ion-button>
    <ion-button slot="end" size="large"> 大号 </ion-button>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/vue';
  import { home, navigate, star } from 'ionicons/icons';
</script>
```