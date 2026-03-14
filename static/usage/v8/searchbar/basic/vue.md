```html
<template>
  <ion-searchbar></ion-searchbar>
  <ion-searchbar placeholder="自定义占位文本"></ion-searchbar>
  <ion-searchbar disabled="true" placeholder="已禁用"></ion-searchbar>
  <ion-searchbar value="预设值"></ion-searchbar>
  <ion-searchbar animated="true" placeholder="带动画效果"></ion-searchbar>
</template>

<script setup lang="ts">
  import { IonSearchbar } from '@ionic/vue';
</script>
```