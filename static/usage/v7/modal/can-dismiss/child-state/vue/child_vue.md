```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Modal</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismiss()">关闭</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-checkbox @ionChange="checkboxChanged">
          覆盖关闭行为<br />
          <ion-note class="ion-text-wrap"
            >切换复选框以允许直接关闭弹窗，无需确认提示。</ion-note
          >
        </ion-checkbox>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonButtons,
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonCheckbox,
    IonNote,
  } from '@ionic/vue';

  const props = defineProps(['modal']);
  const emit = defineEmits(['dismissChange']);

  const dismiss = () => {
    props.modal.$el.dismiss();
  };

  const checkboxChanged = (event) => {
    const checked = event.detail.checked;
    emit('dismissChange', checked);
  };
</script>
```