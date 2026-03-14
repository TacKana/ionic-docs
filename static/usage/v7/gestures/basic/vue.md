```html
<style scoped>
  ion-card {
    position: absolute;

    left: 0;
    right: 0;

    user-select: none;
  }

  ion-card.active {
    box-shadow: var(--ion-color-warning) 0px 4px 16px;
  }
</style>
<template>
  <ion-card ref="card">
    <ion-card-header>
      <ion-card-subtitle>平移屏幕</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <p ref="debug">交互后将显示手势信息。</p>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
  import { IonButton, IonCard, IonCardContent, createGesture } from '@ionic/vue';
  import type { GestureDetail } from '@ionic/vue';
  import { ref, onMounted } from 'vue';

  const card = ref(null);
  const debug = ref(null);

  onMounted(() => {
    const gesture = createGesture({
      el: card.value.$el.closest('ion-content'),
      onStart: () => onStart(),
      onMove: (detail) => onMove(detail),
      onEnd: () => onEnd(),
      gestureName: 'example',
    });

    gesture.enable();
  });

  const onStart = () => {
    card.value?.$el.classList.add('active');
  };

  const onMove = (detail: GestureDetail) => {
    const { type, currentX, deltaX, velocityX } = detail;

    if (debug.value) {
      debug.value.innerHTML = `
      <div>类型: ${type}</div>
      <div>当前 X: ${currentX}</div>
      <div>X 轴偏移: ${deltaX}</div>
      <div>X 轴速度: ${velocityX}</div>`;
    }
  };

  const onEnd = () => {
    card.value?.$el.classList.remove('active');
  };
</script>
```