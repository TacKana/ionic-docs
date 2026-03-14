```html
<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>卡片标题</ion-card-title>
      <ion-card-subtitle>卡片副标题</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      这里是卡片内容的一段简短描述。不多不少，恰到好处。
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
  });
</script>

<style scoped>
  ion-card {
    --background: #000;
    --color: #9efff0;
  }

  ion-card-title {
    --color: #52ffe4;
  }

  ion-card-subtitle {
    --color: #d1fff8;
  }

  /* iOS 系统会将副标题置于标题上方 */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```