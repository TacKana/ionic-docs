```html
<template>
  <ion-searchbar></ion-searchbar>
  <ion-searchbar placeholder="自定义占位文字"></ion-searchbar>
  <ion-searchbar disabled="true" placeholder="禁用状态"></ion-searchbar>
  <ion-searchbar value="预设值"></ion-searchbar>
  <ion-searchbar animated="true" placeholder="带动效"></ion-searchbar>
</template>

<script lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSearchbar },
  });
</script>
```