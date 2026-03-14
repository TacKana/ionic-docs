```html
<template>
  <ion-item>
    <ion-thumbnail slot="start">
      <img alt="山脉剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
    </ion-thumbnail>
    <ion-label>项目缩略图</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonItem, IonLabel, IonThumbnail } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonThumbnail },
  });
</script>
```