```html
<template>
  <ion-item>
    <ion-avatar slot="start">
      <img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
    </ion-avatar>
    <ion-label>带头像的列表项</ion-label>
  </ion-item>
</template>

<script lang="ts">
  import { IonAvatar, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonAvatar, IonItem, IonLabel },
  });
</script>
```