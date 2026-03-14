```html
<template>
  <ion-searchbar show-cancel-button="focus" placeholder="获取焦点时显示"></ion-searchbar>
  <ion-searchbar show-cancel-button="always" placeholder="始终显示"></ion-searchbar>
  <ion-searchbar show-cancel-button="never" placeholder="永不显示"></ion-searchbar>
  <ion-searchbar
    show-cancel-button="always"
    cancel-button-text="自定义取消"
    :cancel-button-icon="trash"
    placeholder="自定义取消按钮"
  ></ion-searchbar>
</template>

<script setup lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { trash } from 'ionicons/icons';
</script>
```