```html
<template>
  <ion-item>
    <ion-avatar slot="start">
      <img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
    </ion-avatar>
    <ion-label>头像项目</ion-label>
  </ion-item>

  <ion-item>
    <ion-thumbnail slot="start">
      <img alt="山脉剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
    </ion-thumbnail>
    <ion-label>缩略图项目</ion-label>
  </ion-item>
</template>

<script setup lang="ts">
  import { IonAvatar, IonItem, IonLabel, IonThumbnail } from '@ionic/vue';
</script>
```