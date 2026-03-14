```html
<template>
  <ion-segment value="default">
    <ion-segment-button value="default">
      <ion-label>默认</ion-label>
    </ion-segment-button>
    <ion-segment-button value="segment">
      <ion-label>分段</ion-label>
    </ion-segment-button>
  </ion-segment>

  <ion-segment :disabled="true" value="disabled">
    <ion-segment-button value="disabled">
      <ion-label>已禁用</ion-label>
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
```