```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="默认输入框"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="带占位符的输入框" placeholder="请输入公司名称"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="带默认值的输入框" value="121 S Pinckney St #300"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="只读输入框" value="Madison" :readonly="true"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="禁用输入框" value="53703" :disabled="true"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
</script>
```