```html
<template>
  <ion-button size="small">
    <ion-icon slot="icon-only" :ios="logoApple" :md="settingsSharp"></ion-icon>
  </ion-button>

  <ion-button>
    <ion-icon slot="icon-only" :ios="logoApple" :md="settingsSharp"></ion-icon>
  </ion-button>

  <ion-button size="large">
    <ion-icon slot="icon-only" :ios="logoApple" :md="settingsSharp"></ion-icon>
  </ion-button>

  <ion-button size="small">
    <ion-icon slot="start" :icon="star"></ion-icon>
    左侧图标
  </ion-button>

  <ion-button>
    <ion-icon slot="start" :icon="star"></ion-icon>
    左侧图标
  </ion-button>

  <ion-button size="large">
    <ion-icon slot="start" :icon="star"></ion-icon>
    左侧图标
  </ion-button>

  <ion-button size="small">
    右侧图标
    <ion-icon slot="end" :icon="heart"></ion-icon>
  </ion-button>

  <ion-button>
    右侧图标
    <ion-icon slot="end" :icon="heart"></ion-icon>
  </ion-button>

  <ion-button size="large">
    右侧图标
    <ion-icon slot="end" :icon="heart"></ion-icon>
  </ion-button>
</template>

<script setup lang="ts">
  import { IonButton, IonIcon } from '@ionic/vue';
  import { heart, logoApple, settingsSharp, star } from 'ionicons/icons';
</script>
```