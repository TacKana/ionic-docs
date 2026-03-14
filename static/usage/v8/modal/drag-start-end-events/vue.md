```vue
<template>
  <ion-header ref="header">
    <ion-toolbar>
      <ion-title>应用</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开底部模态框</ion-button>

    <ion-modal
      ref="modal"
      trigger="open-modal"
      :initial-breakpoint="0.25"
      :breakpoints="[0, 0.25, 0.5, 0.75, 1]"
      @ionDragStart="onDragStart()"
      @ionDragEnd="onDragEnd($event)"
    >
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>拖动手柄以调整顶栏的可见性。</ion-label>
        </div>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonLabel } from '@ionic/vue';
import type { ModalDragEventDetail } from '@ionic/vue';

const header = ref<InstanceType<typeof IonHeader>>();

const onDragStart = () => {
  console.log('开始拖动');

  const headerEl = header.value!.$el;

  headerEl.style.opacity = '0';
};

const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
  console.log('拖动结束');

  const headerEl = header.value!.$el;

  headerEl.style.opacity = '1';
};
</script>
```