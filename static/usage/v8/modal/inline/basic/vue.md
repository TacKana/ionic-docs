```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>内联模态框</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开</ion-button>
    <p>{{ message }}</p>
    <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="cancel()">取消</ion-button>
          </ion-buttons>
          <ion-title>欢迎</ion-title>
          <ion-buttons slot="end">
            <ion-button :strong="true" @click="confirm()">确认</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-input
            label="请输入您的姓名"
            label-placement="stacked"
            ref="input"
            type="text"
            placeholder="您的姓名"
          ></ion-input>
        </ion-item>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
  } from '@ionic/vue';
  import { OverlayEventDetail } from '@ionic/core/components';
  import { ref } from 'vue';

  const message = ref('这个模态框示例使用了触发器，当按钮被点击时会自动打开模态框。');

  const modal = ref();
  const input = ref();

  const cancel = () => modal.value.$el.dismiss(null, 'cancel');

  const confirm = () => {
    const name = input.value.$el.value;
    modal.value.$el.dismiss(name, 'confirm');
  };

  const onWillDismiss = (event: CustomEvent<OverlayEventDetail>) => {
    if (event.detail.role === 'confirm') {
      message.value = `你好，${event.detail.data}！`;
    }
  };
</script>
```