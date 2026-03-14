```html
<template>
  <ion-card>
    <img alt="山脉剪影" src="https://ionicframework.com/docs/img/demos/card-media.png" />
    <ion-card-header>
      <ion-card-title>卡片标题</ion-card-title>
      <ion-card-subtitle>卡片副标题</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      这里是卡片内容的一段简短描述。不多也不少。
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
  /* iOS 系统将副标题显示在标题上方 */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```