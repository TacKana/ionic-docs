```html
<template>
  <ion-input color="primary" placeholder="主要输入框"></ion-input>
  <ion-input color="secondary" placeholder="次要输入框"></ion-input>
  <ion-input color="tertiary" placeholder="第三输入框"></ion-input>
  <ion-input color="success" placeholder="成功输入框"></ion-input>
  <ion-input color="warning" placeholder="警告输入框"></ion-input>
  <ion-input color="danger" placeholder="危险输入框"></ion-input>
  <ion-input color="light" placeholder="浅色输入框"></ion-input>
  <ion-input color="medium" placeholder="中等输入框"></ion-input>
  <ion-input color="dark" placeholder="深色输入框"></ion-input>
</template>

<script lang="ts">
  import { IonInput } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput },
  });
</script>
```