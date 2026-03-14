```html
<template>
  <ion-segment value="custom">
    <ion-segment-button value="custom">
      <ion-label>自定义</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>分段</ion-label>
    </ion-segment-button>
    <ion-segment-button value="buttons">
      <ion-label>按钮</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
  import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonSegment, IonSegmentButton },
  });
</script>

<style>
  ion-segment-button::part(indicator-background) {
    background: #08a391;
  }

  /* Material Design 样式 */
  ion-segment-button.md::part(native) {
    color: #000;
  }

  .segment-button-checked.md::part(native) {
    color: #08a391;
  }

  ion-segment-button.md::part(indicator-background) {
    height: 4px;
  }

  /* iOS 样式 */
  ion-segment-button.ios::part(native) {
    color: #08a391;
  }

  .segment-button-checked.ios::part(native) {
    color: #fff;
  }

  ion-segment-button.ios::part(indicator-background) {
    border-radius: 20px;
  }
</style>
```