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
          <ion-label position="stacked">请输入您的姓名</ion-label>
          <ion-input ref="input" type="text" placeholder="您的姓名"></ion-input>
        </ion-item>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script lang="ts">
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
    IonLabel,
  } from '@ionic/vue';
  import { OverlayEventDetail } from '@ionic/core/components';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonButtons,
      IonButton,
      IonModal,
      IonHeader,
      IonContent,
      IonToolbar,
      IonTitle,
      IonItem,
      IonInput,
      IonLabel,
    },
    data() {
      return {
        message: '此模态框示例使用触发器，在按钮点击时自动打开模态框。',
      };
    },
    methods: {
      cancel() {
        this.$refs.modal.$el.dismiss(null, 'cancel');
      },
      confirm() {
        const name = this.$refs.input.$el.value;
        this.$refs.modal.$el.dismiss(name, 'confirm');
      },
      onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
          this.message = `你好，${ev.detail.data}！`;
        }
      },
    },
  });
</script>
```