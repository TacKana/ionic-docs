```html
<template>
  <form @submit.prevent="submit">
    <ion-checkbox
      v-model="agree"
      helper-text="请先同意相关条款再继续"
      error-text="您必须同意条款才能继续"
      @ionChange="validateCheckbox"
      :class="{ 'ion-valid': isValid, 'ion-invalid': isValid === false, 'ion-touched': isTouched }"
    >
      我同意条款和条件
    </ion-checkbox>

    <br />

    <ion-button type="submit" size="small">提交</ion-button>
  </form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonCheckbox, IonButton, CheckboxCustomEvent } from '@ionic/vue';

  const agree = ref(false);
  const isTouched = ref(false);
  const isValid = ref<boolean | undefined>();

  const validateCheckbox = (event: CheckboxCustomEvent<{ checked: boolean }>) => {
    isTouched.value = true;
    isValid.value = event.detail.checked;
  };

  const submit = () => {
    validateCheckbox({ detail: { checked: agree.value } } as CheckboxCustomEvent<{ checked: boolean }>);
  };
</script>
```