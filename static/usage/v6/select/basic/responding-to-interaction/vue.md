```html
<template>
  <ion-list>
    <ion-item>
      <ion-select
        placeholder="选择水果"
        @ionChange="pushLog('ionChange 事件触发，值为：' + $event.detail.value)"
        @ionCancel="pushLog('ionCancel 事件触发')"
        @ionDismiss="pushLog('ionDismiss 事件触发')"
      >
        <ion-select-option value="apples">苹果</ion-select-option>
        <ion-select-option value="oranges">橙子</ion-select-option>
        <ion-select-option value="bananas">香蕉</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
  <div class="ion-padding">
    <p v-for="log in logs">{{ log }}</p>
  </div>
</template>

<script>
  import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonList, IonSelect, IonSelectOption },
    data() {
      return {
        logs: [],
      };
    },
    methods: {
      pushLog(msg) {
        this.logs.unshift(msg);
      },
    },
  });
</script>
```