```html
<template>
  <ion-card ref="cardAEl">
    <ion-card-content>卡片 1</ion-card-content>
  </ion-card>

  <ion-card ref="cardBEl">
    <ion-card-content>卡片 2</ion-card-content>
  </ion-card>

  <ion-card ref="cardCEl">
    <ion-card-content>卡片 3</ion-card-content>
  </ion-card>

  <ion-button @click="play()">播放</ion-button>
  <ion-button @click="pause()">暂停</ion-button>
  <ion-button @click="stop()">停止</ion-button>
</template>

<script setup lang="ts">
  import { IonButton, IonCard, IonCardContent, createAnimation } from '@ionic/vue';
  import type { Animation } from '@ionic/vue';
  import { ref, onMounted } from 'vue';

  const cardAEl = ref(null);
  const cardBEl = ref(null);
  const cardCEl = ref(null);

  let animation: Animation;

  onMounted(() => {
    const cardA = createAnimation()
      .addElement(cardAEl.value.$el)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.5) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0) ' },
      ]);

    const cardB = createAnimation()
      .addElement(cardBEl.value.$el)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    const cardC = createAnimation()
      .addElement(cardCEl.value.$el)
      .duration(5000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.5)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);

    animation = createAnimation().duration(2000).iterations(Infinity).addAnimation([cardA, cardB, cardC]);
  });

  const play = () => animation.play();
  const pause = () => animation.pause();
  const stop = () => animation.stop();
</script>
```