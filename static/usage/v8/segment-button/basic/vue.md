```html
<template>
  <ion-segment value="buttons">
    <ion-segment-button value="default">
      <ion-label>默认</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>分段</ion-label>
    </ion-segment-button>
    <ion-segment-button value="buttons">
      <ion-label>按钮</ion-label>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="buttons">
    <ion-segment-button value="disabled" :disabled="true">
      <ion-label>已禁用</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>分段</ion-label>
    </ion-segment-button>
    <ion-segment-button value="buttons">
      <ion-label>按钮</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script setup lang="ts">
  import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
</script>
```