```html
<template>
  <ion-button>默认</ion-button>
  <ion-button shape="round">圆角</ion-button>
  <ion-button>
    <ion-icon slot="icon-only" :icon="heart"></ion-icon>
  </ion-button>
  <ion-button shape="round">
    <ion-icon slot="icon-only" :icon="heart"></ion-icon>
  </ion-button>
</template>

<script setup lang="ts">
  import { IonButton, IonIcon } from '@ionic/vue';
  import { heart } from 'ionicons/icons';
</script>
```