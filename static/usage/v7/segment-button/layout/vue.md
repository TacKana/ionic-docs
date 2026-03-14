```html
<template>
  <ion-segment value="heart">
    <ion-segment-button value="call">
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin">
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="heart">
    <ion-segment-button value="call">
      <ion-label>呼叫</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart">
      <ion-label>收藏</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin">
      <ion-label>定位</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="heart">
    <ion-segment-button value="call" layout="icon-bottom">
      <ion-label>呼叫</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart" layout="icon-bottom">
      <ion-label>收藏</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin" layout="icon-bottom">
      <ion-label>定位</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="heart">
    <ion-segment-button value="call" layout="icon-start">
      <ion-label>呼叫</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart" layout="icon-start">
      <ion-label>收藏</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin" layout="icon-start">
      <ion-label>定位</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>

  <ion-segment value="heart">
    <ion-segment-button value="call" layout="icon-end">
      <ion-label>呼叫</ion-label>
      <ion-icon :icon="call"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="heart" layout="icon-end">
      <ion-label>收藏</ion-label>
      <ion-icon :icon="heart"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="pin" layout="icon-end">
      <ion-label>定位</ion-label>
      <ion-icon :icon="pin"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</template>

<script setup lang="ts">
  import { IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
  import { call, heart, pin } from 'ionicons/icons';
</script>
```