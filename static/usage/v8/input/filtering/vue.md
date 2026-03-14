```html
<template>
  <ion-list>
    <ion-item>
      <ion-input
        label="Alphanumeric Characters"
        :value="inputModel"
        @ionInput="onInput($event)"
        ref="ionInputEl"
      ></ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import { ref } from 'vue';

  const ionInputEl = ref();
  const inputModel = ref('');
  const onInput = (event) => {
    const value = event.target!.value;

    // 移除非字母数字字符
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * 同时更新状态变量和组件，
     * 以保持它们同步。
     */
    inputModel.value = filteredValue;

    const inputCmp = ionInputEl.value;
    if (inputCmp !== undefined) {
      inputCmp.$el.value = filteredValue;
    }
  };
</script>
```