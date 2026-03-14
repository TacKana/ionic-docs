```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <ion-title>标题</ion-title>
      <ion-buttons slot="end">
        <ion-button>
          <ion-icon :icon="create" slot="icon-only"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item>
        <ion-input label="姓名"></ion-input>
      </ion-item>
      <ion-item>
        <ion-checkbox>免费领取小狗</ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-toggle>启用通知</ion-toggle>
      </ion-item>
    </ion-list>

    <ion-list :inset="true">
      <ion-item>
        <ion-label>项目一</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>项目二</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>项目三</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
  <ion-footer>
    <ion-toolbar>
      <ion-title>页脚</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
  import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCheckbox,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToggle,
    IonToolbar,
  } from '@ionic/vue';
  import { create } from 'ionicons/icons';
</script>
```