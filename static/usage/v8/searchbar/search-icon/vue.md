```html
<template>
  <ion-searchbar></ion-searchbar>
  <ion-searchbar :search-icon="searchCircle" placeholder="自定义搜索图标"></ion-searchbar>
</template>

<script setup lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { searchCircle } from 'ionicons/icons';
</script>
```