```html
<template>
  <ion-segment value="custom">
    <ion-segment-button value="custom">
      <ion-label>自定义</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>分段</ion-label>
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
  ion-segment {
    --background: #54dc98;
  }
</style>
```