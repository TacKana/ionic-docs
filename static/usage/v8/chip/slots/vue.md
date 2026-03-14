```html
<template>
  <ion-chip>
    <ion-avatar>
      <img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
    </ion-avatar>
    <ion-label>头像芯片</ion-label>
    <ion-icon :icon="closeCircle"></ion-icon>
  </ion-chip>

  <ion-chip>
    <ion-icon :icon="pin" color="primary"></ion-icon>
    <ion-label>图标芯片</ion-label>
    <ion-icon :icon="close"></ion-icon>
  </ion-chip>
</template>

<script setup lang="ts">
  import { IonChip, IonAvatar, IonLabel, IonIcon } from '@ionic/vue';
  import { close, closeCircle, pin } from 'ionicons/icons';
</script>
```