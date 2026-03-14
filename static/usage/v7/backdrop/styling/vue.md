```html
<style>
  ion-backdrop {
    opacity: 0.9;
    background: var(--ion-color-primary);
  }

  #box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--ion-background-color, #fff);
    width: 90%;
    height: 100px;
    border-radius: 10px;
  }
</style>

<template>
  <ion-backdrop :visible="true"></ion-backdrop>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>背景遮罩</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>
        这是一段占位文本，用于展示内容区域。背景遮罩层显示时，后方内容会被覆盖并变暗，而前方的弹窗或操作框则保持清晰可见。
      </p>
    </ion-content>
  </div>
  <div id="box">
    <ion-checkbox color="light"></ion-checkbox>
    <ion-button class="ion-margin-start" color="light">可点击按钮</ion-button>
  </div>
</template>
<script setup lang="ts">
  import { IonBackdrop, IonHeader, IonToolbar, IonTitle, IonContent, IonCheckbox, IonButton } from '@ionic/vue';
</script>
```