```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="文本输入" placeholder="请输入文本"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="数字输入" type="number" placeholder="000"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="密码输入" type="password" value="password"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="邮箱输入" type="email" placeholder="email@domain.com"></ion-input>
    </ion-item>

    <ion-item>
      <ion-input label="电话输入" type="tel" placeholder="888-888-8888"></ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
</script>
```