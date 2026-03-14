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
      trigger="open-modal"
      :initial-breakpoint="0.25"
      :breakpoints="[0, 0.25, 0.5, 0.75, 1]"
      @ionDragMove="onDragMove($event)"
      @ionDragEnd="onDragEnd($event)"
      @willDismiss="onWillDismiss()"
    >
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>拖动手柄以调整标题栏的可见性。</ion-label>
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
// 将当前吸附断点分配给初始断点，以便在拖动过程中跟踪变化
let currentSnap = 0.25;

const onDragMove = (event: CustomEvent<ModalDragEventDetail>) => {
  // `progress` 是从 1（顶部）到 0（底部）的值
  // `snapBreakpoint` 告诉我们拖动结束后模态框将动画到哪个吸附点
  const { progress, snapBreakpoint } = event.detail;
  const headerEl = header.value!.$el;

  if (currentSnap !== snapBreakpoint) {
    currentSnap = snapBreakpoint;

    console.log('当前吸附断点:', snapBreakpoint);
  }

  /**
   * 反比关系：
   * 1.0 进度 = 0 不透明度
   * 0 进度 = 1.0 不透明度
   */
  const currentOpacity = 1 - progress;

  headerEl.style.opacity = currentOpacity.toString();
};

const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
  // `progress` 是从 1（顶部）到 0（底部）的值
  // `snapBreakpoint` 告诉我们拖动结束后模态框将动画到哪个吸附点
  const { progress, snapBreakpoint } = event.detail;
  const headerEl = header.value!.$el;

  /**
   * 如果模态框吸附到关闭状态（0），则重置样式。
   */
  if (snapBreakpoint === 0) {
    headerEl.style.removeProperty('opacity');
    headerEl.style.removeProperty('transition');
    return;
  }

  // 平滑过渡到最终静止的不透明度
  headerEl.style.transition = 'opacity 0.4s ease';
  // 最终不透明度与静止进度的反比相匹配
  headerEl.style.opacity = (1 - progress).toString();
};

/**
 * 如果用户关闭模态框（例如点击背景），则重置样式。
 */
const onWillDismiss = () => {
  const headerEl = header.value!.$el;

  // 模态框关闭时重置样式
  headerEl.style.removeProperty('opacity');
  headerEl.style.removeProperty('transition');
};
</script>
```