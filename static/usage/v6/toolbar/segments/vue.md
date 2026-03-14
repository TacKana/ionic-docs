```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-segment value="all">
        <ion-segment-button value="all">
          <ion-label>全部</ion-label>
        </ion-segment-button>
        <ion-segment-button value="favorites">
          <ion-label>收藏</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
  import { IonHeader, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonHeader, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonToolbar },
  });
</script>
```