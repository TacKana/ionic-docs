```html
<template>
  <ion-content>
    <ion-button id="open-popover">打开弹出层</ion-button>
    <ion-popover :keep-contents-mounted="true" trigger="open-popover">
      <ion-content class="ion-padding">此内容在弹出层创建时就已挂载。</ion-content>
    </ion-popover>
  </ion-content>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPopover } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton, IonContent, IonPopover },
  });
</script>
```