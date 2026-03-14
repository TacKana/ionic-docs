```html
<template>
  <ion-item>
    <ion-input label="默认输入框" placeholder="输入文本"></ion-input>
  </ion-item>

  <ion-item>
    <ion-input label="固定标签输入框" label-placement="fixed" placeholder="输入文本"></ion-input>
  </ion-item>

  <ion-item>
    <ion-input label="堆叠标签输入框" label-placement="stacked" placeholder="输入文本"></ion-input>
  </ion-item>

  <ion-item>
    <ion-input label="浮动标签输入框" label-placement="floating" placeholder="输入文本"></ion-input>
  </ion-item>

  <ion-item>
    <ion-select label="选择框" placeholder="请选择">
      <ion-select-option value="">无游戏主机</ion-select-option>
      <ion-select-option value="nes">NES</ion-select-option>
      <ion-select-option value="n64">Nintendo64</ion-select-option>
      <ion-select-option value="ps">PlayStation</ion-select-option>
      <ion-select-option value="genesis">Sega Genesis</ion-select-option>
      <ion-select-option value="saturn">Sega Saturn</ion-select-option>
      <ion-select-option value="snes">SNES</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-toggle> 开关 </ion-toggle>
  </ion-item>

  <ion-item>
    <ion-checkbox> 复选框 </ion-checkbox>
  </ion-item>

  <ion-item>
    <ion-range label-placement="start">
      <div slot="label">滑动条</div>
    </ion-range>
  </ion-item>
</template>

<script setup lang="ts">
  import {
    IonCheckbox,
    IonInput,
    IonItem,
    IonLabel,
    IonRange,
    IonSelect,
    IonSelectOption,
    IonToggle,
  } from '@ionic/vue';
</script>
```