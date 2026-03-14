```html
<template>
  <ion-header class="ion-no-border">
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

  <ion-content>
    <ion-list-header>外观</ion-list-header>
    <ion-list :inset="true">
      <ion-item>
        <ion-toggle :checked="paletteToggle" @ionChange="toggleChange($event)" justify="space-between"
          >深色模式</ion-toggle
        >
      </ion-item>
    </ion-list>

    <ion-list :inset="true">
      <ion-item :button="true">文字大小</ion-item>
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
        <ion-text slot="end" color="medium">晚上 9:00 至次日上午 8:00</ion-text>
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

  const paletteToggle = ref(false);

  // 使用 matchMedia 检查用户偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // 在 html 元素上添加或移除 "ion-palette-dark" 类
  const toggleDarkPalette = (shouldAdd) => {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  };

  // 根据 isDark 值设置/取消设置切换开关并更新配色方案
  const initializeDarkPalette = (isDark) => {
    paletteToggle.value = isDark;
    toggleDarkPalette(isDark);
  };

  // 根据 prefers-color-scheme 媒体查询的初始值初始化深色配色方案
  initializeDarkPalette(prefersDark.matches);

  // 监听 prefers-color-scheme 媒体查询的变化
  prefersDark.addEventListener('change', (mediaQuery) => initializeDarkPalette(mediaQuery.matches));

  // 监听切换开关的选中/取消选中事件以切换深色配色方案
  const toggleChange = (event: ToggleCustomEvent) => {
    toggleDarkPalette(event.detail.checked);
  };
</script>

<style>
  /* (可选) 添加此样式以防止在切换配色方案时出现闪烁 */
  ion-item {
    --transition: none;
  }
</style>
```