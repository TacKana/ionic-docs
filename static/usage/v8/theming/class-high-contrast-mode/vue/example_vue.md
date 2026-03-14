```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="#"></ion-back-button>
      </ion-buttons>
      <ion-title>显示设置</ion-title>
      <ion-buttons slot="end">
        <ion-button color="dark">
          <ion-icon slot="icon-only" :ios="personCircleOutline" :md="personCircle"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>

  <ion-content color="light">
    <ion-list-header>外观</ion-list-header>
    <ion-list :inset="true">
      <ion-item>
        <ion-toggle :checked="darkPaletteToggle" @ionChange="darkChange($event)" justify="space-between"
          >深色模式</ion-toggle
        >
      </ion-item>
      <ion-item>
        <ion-toggle :checked="highContrastPaletteToggle" @ionChange="highContrastChange($event)" justify="space-between"
          >高对比度模式</ion-toggle
        >
      </ion-item>
    </ion-list>

    <ion-list :inset="true">
      <ion-item :button="true">文本大小</ion-item>
      <ion-item>
        <ion-toggle justify="space-between">粗体文本</ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list-header>亮度</ion-list-header>
    <ion-list :inset="true">
      <ion-item>
        <ion-range value="40">
          <ion-icon :icon="sunnyOutline" slot="start"></ion-icon>
          <ion-icon :icon="sunny" slot="end"></ion-icon>
        </ion-range>
      </ion-item>
      <ion-item>
        <ion-toggle justify="space-between" checked>原彩显示</ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list :inset="true">
      <ion-item :button="true">
        <ion-label>夜览</ion-label>
        <ion-text slot="end" color="medium">晚上 9:00 至早上 8:00</ion-text>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonRange,
    IonText,
    IonToggle,
    IonToolbar,
  } from '@ionic/vue';
  import type { ToggleCustomEvent } from '@ionic/vue';
  import { personCircle, personCircleOutline, sunnyOutline, sunny } from 'ionicons/icons';
  import { ref } from 'vue';

  const darkPaletteToggle = ref(false);
  const highContrastPaletteToggle = ref(false);

  // 使用 matchMedia 检查用户偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

  // 在 html 元素上添加或移除 "ion-palette-dark" 类
  const toggleDarkPalette = (shouldAdd) => {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  };

  // 在 html 元素上添加或移除 "ion-palette-high-contrast" 类
  const toggleHighContrastPalette = (shouldAdd) => {
    document.documentElement.classList.toggle('ion-palette-high-contrast', shouldAdd);
  };

  // 设置开关状态并更新调色板
  const initializeDarkPalette = (isDark) => {
    darkPaletteToggle.value = isDark;
    toggleDarkPalette(isDark);
  };

  const initializeHighContrastPalette = (isHighContrast) => {
    highContrastPaletteToggle.value = isHighContrast;
    toggleHighContrastPalette(isHighContrast);
  };

  // 根据媒体查询的初始值初始化深色调色板
  initializeDarkPalette(prefersDark.matches);
  initializeHighContrastPalette(prefersHighContrast.matches);

  // 监听媒体查询的变化
  prefersDark.addEventListener('change', (mediaQuery) => initializeDarkPalette(mediaQuery.matches));
  prefersHighContrast.addEventListener('change', (mediaQuery) => initializeHighContrastPalette(mediaQuery.matches));

  // 监听开关的切换以控制深色调色板
  const darkChange = (event: ToggleCustomEvent) => {
    toggleDarkPalette(event.detail.checked);
  };

  // 监听开关的切换以控制高对比度调色板
  const highContrastChange = (event: ToggleCustomEvent) => {
    toggleHighContrastPalette(event.detail.checked);
  };
</script>

<style>
  /* (可选) 添加此样式以防止切换调色板时出现闪烁 */
  ion-item {
    --transition: none;
  }
</style>
```