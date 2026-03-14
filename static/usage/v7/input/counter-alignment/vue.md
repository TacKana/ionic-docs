```html
<template>
  <ion-list>
    <ion-item>
      <ion-input label="文本输入" placeholder="输入文本"></ion-input>
    </ion-item>

    <div class="ion-padding-start">
      <ion-input label="计数器输入" :counter="true" maxlength="20"></ion-input>
    </div>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
</script>
```