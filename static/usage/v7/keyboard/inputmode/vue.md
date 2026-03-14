```html
<template>
  <ion-list>
    <ion-item>
      <ion-input inputmode="email" label-placement="stacked" placeholder="请输入用户名或电子邮件地址">
        <code slot="label">inputmode="email"</code>
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input inputmode="numeric" label-placement="stacked" placeholder="请输入整数">
        <code slot="label">inputmode="numeric"</code>
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input inputmode="decimal" label-placement="stacked" placeholder="请输入小数">
        <code slot="label">inputmode="decimal"</code>
      </ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonList, IonItem, IonInput } from '@ionic/vue';
</script>
```