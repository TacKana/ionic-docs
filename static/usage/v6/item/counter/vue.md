```html
<template>
  <ion-item counter="true">
    <ion-label position="floating">默认计数器</ion-label>
    <ion-input maxlength="20"></ion-input>
  </ion-item>

  <ion-item id="custom-item" counter="true" :counterFormatter="customFormatter">
    <ion-label position="floating">自定义计数器格式</ion-label>
    <ion-input maxlength="20"></ion-input>
  </ion-item>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel },
    methods: {
      customFormatter(inputLength, maxLength) {
        return `${maxLength - inputLength} characters remaining`;
      },
    },
  });
</script>
```