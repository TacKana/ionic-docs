```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label-placement="stacked" label="Comments" placeholder="请输入您的评论">
        <ion-icon slot="start" :icon="lockClosed" aria-hidden="true"></ion-icon>
        <ion-button fill="clear" slot="end" aria-label="显示/隐藏">
          <ion-icon slot="icon-only" :icon="eye" aria-hidden="true"></ion-icon>
        </ion-button>
      </ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonButton, IonIcon, IonItem, IonList, IonTextarea } from '@ionic/vue';
  import { eye, lockClosed } from 'ionicons/icons';
</script>
```