```html
<template>
  <ion-segment>
    <ion-segment-button value="first" content-id="first">
      <ion-label>第一项</ion-label>
    </ion-segment-button>
    <ion-segment-button value="second" content-id="second">
      <ion-label>第二项</ion-label>
    </ion-segment-button>
    <ion-segment-button value="third" content-id="third">
      <ion-label>第三项</ion-label>
    </ion-segment-button>
  </ion-segment>
  <ion-segment-view>
    <ion-segment-content id="first">第一项</ion-segment-content>
    <ion-segment-content id="second">第二项</ion-segment-content>
    <ion-segment-content id="third">第三项</ion-segment-content>
  </ion-segment-view>
</template>

<style>
  ion-segment-view {
    height: 150px;
  }

  ion-segment-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ion-segment-content:nth-of-type(1) {
    background: lightpink;
  }
  ion-segment-content:nth-of-type(2) {
    background: lightblue;
  }
  ion-segment-content:nth-of-type(3) {
    background: lightgreen;
  }
</style>

<script setup lang="ts">
  import { IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from '@ionic/vue';
</script>
```