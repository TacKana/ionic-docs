```html
<template>
  <form @submit.prevent="submit">
    <ion-radio-group
      v-model="favFruit"
      helper-text="选择你最喜欢的水果"
      error-text="此字段为必填项"
      @ionChange="validateRadioGroup"
      :class="{ 'ion-valid': isValid, 'ion-invalid': isValid === false, 'ion-touched': isTouched }"
    >
      <ion-radio value="grapes">葡萄</ion-radio><br />
      <ion-radio value="strawberries">草莓</ion-radio><br />
      <ion-radio value="pineapple">菠萝</ion-radio><br />
      <ion-radio value="cherries">樱桃</ion-radio>
    </ion-radio-group>

    <br />

    <ion-button type="submit" size="small">提交</ion-button>
  </form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonRadioGroup, IonRadio, IonButton, RadioGroupCustomEvent } from '@ionic/vue';

  const favFruit = ref('');
  const isTouched = ref(false);
  const isValid = ref<boolean | undefined>();

  const validateRadioGroup = (event: RadioGroupCustomEvent<{ value: string }>) => {
    isTouched.value = true;
    isValid.value = event.detail.value ? true : false;
  };

  const submit = () => {
    validateRadioGroup({ detail: { value: favFruit.value } } as RadioGroupCustomEvent<{ value: string }>);
  };
</script>
```