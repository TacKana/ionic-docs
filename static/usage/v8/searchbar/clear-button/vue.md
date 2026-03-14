```html
<template>
  <ion-searchbar show-clear-button="focus" value="聚焦时显示"></ion-searchbar>
  <ion-searchbar show-clear-button="always" value="始终显示"></ion-searchbar>
  <ion-searchbar show-clear-button="never" value="从不显示"></ion-searchbar>
  <ion-searchbar show-clear-button="always" :clear-icon="trashBin" value="自定义清除图标"></ion-searchbar>
</template>

<script setup lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { trashBin } from 'ionicons/icons';
</script>
```