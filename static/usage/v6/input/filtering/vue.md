```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>字母数字字符</ion-label>
      <ion-input :value="inputModel" @ionInput="onInput($event)" ref="ionInputEl"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel, IonList },
    setup() {
      const ionInputEl = ref();
      const inputModel = ref('');
      const onInput = (ev) => {
        const value = ev.target!.value;

        // 移除非字母数字字符
        const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

        /**
         * 同时更新状态变量和组件
         * 以保持它们同步。
         */
        inputModel.value = filteredValue;

        const inputCmp = ionInputEl.value;
        if (inputCmp !== undefined) {
          inputCmp.$el.value = filteredValue;
        }
      };

      return { ionInputEl, inputModel, onInput };
    },
  });
</script>
```