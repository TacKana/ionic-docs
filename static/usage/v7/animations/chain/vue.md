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

  let cardA: Animation | undefined;
  let cardB: Animation | undefined;
  let cardC: Animation | undefined;

  onMounted(() => {
    cardA = createAnimation()
      .addElement(cardAEl.value.$el)
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

    cardB = createAnimation()
      .addElement(cardBEl.value.$el)
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    cardC = createAnimation()
      .addElement(cardCEl.value.$el)
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);
  });

  const play = async () => {
    await cardA?.play();
    await cardB?.play();
    await cardC?.play();
  };
  const pause = () => {
    cardA?.pause();
    cardB?.pause();
    cardC?.pause();
  };
  const stop = () => {
    cardA?.stop();
    cardB?.stop();
    cardC?.stop();
  };
</script>
```