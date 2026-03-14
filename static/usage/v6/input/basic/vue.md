```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>默认输入框</ion-label>
      <ion-input></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>带占位符的输入框</ion-label>
      <ion-input placeholder="Enter company name"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>带默认值的输入框</ion-label>
      <ion-input value="121 S Pinckney St #300"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>只读输入框</ion-label>
      <ion-input value="Madison" :readonly="true"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>禁用输入框</ion-label>
      <ion-input value="53703" :disabled="true"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel, IonList },
  });
</script>
```