```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>示例</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开模态框</ion-button>
    <ion-modal ref="modal" :keep-contents-mounted="true" trigger="open-modal">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="close()">取消</ion-button>
          </ion-buttons>
          <ion-title>模态框</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 此内容在模态框创建时即已挂载。 </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script lang="ts">
  import { IonButtons, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/vue';
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
    },
    methods: {
      close() {
        this.$refs.modal.$el.dismiss();
      },
    },
  });
</script>
```