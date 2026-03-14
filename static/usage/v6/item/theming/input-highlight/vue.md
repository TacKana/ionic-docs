```html
<template>
  <ion-item lines="full" class="item-has-focus ion-touched">
    <ion-label position="stacked">自定义输入高亮：聚焦状态</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item lines="full" class="item-has-focus ion-touched ion-valid">
    <ion-label position="stacked">自定义输入高亮：聚焦且有效</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item lines="full" class="item-has-focus ion-touched ion-invalid">
    <ion-label position="stacked">自定义输入高亮：聚焦且无效</ion-label>
    <ion-input></ion-input>
  </ion-item>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel },
  });
</script>

<style>
  ion-item {
    --highlight-height: 2px;
    --highlight-color-focused: #43e7f3;
    --highlight-color-valid: #6f58d8;
    --highlight-color-invalid: #ff46be;
  }
</style>
```