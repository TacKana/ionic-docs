```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>内联提示框</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-toast" expand="block">打开</ion-button>
    <p>此提示框示例使用触发器，在按钮被点击时自动打开提示框。</p>
    <ion-toast trigger="open-toast" message="此提示框将在5秒后消失" :duration="5000"></ion-toast>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonButton, IonHeader, IonContent, IonToolbar, IonTitle, IonToast } from '@ionic/vue';
</script>
```