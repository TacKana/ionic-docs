```html
<template>
  <ion-list>
    <ion-item>
      <ion-select label-placement="stacked" label="最喜爱的水果" value="apple">
        <ion-icon slot="start" :icon="leaf" aria-hidden="true"></ion-icon>
        <ion-select-option value="apple">苹果</ion-select-option>
        <ion-select-option value="banana">香蕉</ion-select-option>
        <ion-select-option value="orange">橙子</ion-select-option>
        <ion-button fill="clear" slot="end" aria-label="显示/隐藏密码">
          <ion-icon slot="icon-only" :icon="eye" aria-hidden="true"></ion-icon>
        </ion-button>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { eye, leaf } from 'ionicons/icons';
</script>
```