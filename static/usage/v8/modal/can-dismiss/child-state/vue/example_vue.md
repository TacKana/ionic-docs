```html
<template>
  <ion-page ref="page">
    <ion-header>
      <ion-toolbar>
        <ion-title>应用</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button id="open-modal" expand="block">打开</ion-button>

      <ion-modal
        ref="modal"
        trigger="open-modal"
        :can-dismiss="canDismiss"
        :presenting-element="presentingElement"
        @willPresent="willPresent"
      >
        <Child :modal="modal" @dismissChange="dismissChanged" />
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    actionSheetController,
  } from '@ionic/vue';
  import Child from './Child.vue';
  import { onMounted, ref } from 'vue';

  const modal = ref();
  const page = ref();

  let canDismissOverride = false;

  const dismiss = () => {
    modal.value.dismiss();
  };

  const canDismiss = async () => {
    if (canDismissOverride) {
      // 检查覆盖标志，如果可以立即关闭覆盖层则提前返回
      return true;
    }
    const actionSheet = await actionSheetController.create({
      header: '确定要关闭吗？',
      buttons: [
        {
          text: '是',
          role: 'confirm',
        },
        {
          text: '否',
          role: 'cancel',
        },
      ],
    });
    actionSheet.present();
    const { role } = await actionSheet.onWillDismiss();
    return role === 'confirm';
  };

  const willPresent = () => {
    // 当模态框显示时重置覆盖标志
    canDismissOverride = false;
  };

  const dismissChanged = () => {
    // 根据复选框的状态允许关闭模态框
    canDismissOverride = true;
  };

  onMounted(() => {
    presentingElement.value = page.value;
  });
</script>
```