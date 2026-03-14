```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>示例</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item>
        <ion-checkbox slot="start" aria-label="切换任务完成状态"></ion-checkbox>
        <ion-input aria-label="任务名称" value="买鸡蛋"></ion-input>
      </ion-item>
      <ion-item>
        <ion-checkbox slot="start" aria-label="切换任务完成状态"></ion-checkbox>
        <ion-input aria-label="任务名称" value="买牛奶"></ion-input>
      </ion-item>
      <ion-item>
        <ion-checkbox slot="start" aria-label="切换任务完成状态"></ion-checkbox>
        <ion-input aria-label="任务名称" value="倒堆肥"></ion-input>
      </ion-item>
      <ion-item>
        <ion-checkbox slot="start" aria-label="切换任务完成状态"></ion-checkbox>
        <ion-input aria-label="任务名称" value="取干洗衣物"></ion-input>
      </ion-item>
      <ion-item>
        <ion-checkbox slot="start" aria-label="切换任务完成状态"></ion-checkbox>
        <ion-input aria-label="任务名称" value="给妈妈打电话"></ion-input>
      </ion-item>
      <ion-item>
        <ion-checkbox slot="start" aria-label="切换任务完成状态"></ion-checkbox>
        <ion-input aria-label="任务名称" value="订购更多狗粮"></ion-input>
      </ion-item>
      <ion-item>
        <ion-checkbox slot="start" aria-label="切换任务完成状态"></ion-checkbox>
        <ion-input aria-label="任务名称" value="为这个演示想新任务"></ion-input>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```