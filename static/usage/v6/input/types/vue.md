```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>文本输入</ion-label>
      <ion-input placeholder="请输入文本"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>数字输入</ion-label>
      <ion-input type="number" placeholder="000"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>密码输入</ion-label>
      <ion-input type="password" value="password"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>邮箱输入</ion-label>
      <ion-input type="email" placeholder="email@domain.com"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>电话输入</ion-label>
      <ion-input type="tel" placeholder="888-888-8888"></ion-input>
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