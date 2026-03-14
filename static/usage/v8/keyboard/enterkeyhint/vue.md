```html
<template>
  <ion-list>
    <ion-item>
      <ion-input enterkeyhint="search" label-placement="stacked" placeholder="输入搜索内容">
        <code slot="label">enterkeyhint="search"</code>
      </ion-input>
    </ion-item>
    <ion-item>
      <ion-input enterkeyhint="send" label-placement="stacked" placeholder="输入消息内容">
        <code slot="label">enterkeyhint="send"</code>
      </ion-input>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonList, IonItem, IonInput } from '@ionic/vue';
</script>
```