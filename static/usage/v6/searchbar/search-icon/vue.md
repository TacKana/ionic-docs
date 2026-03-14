```html
<template>
  <ion-searchbar></ion-searchbar>
  <ion-searchbar :search-icon="searchCircle" placeholder="自定义搜索图标"></ion-searchbar>
</template>

<script lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { searchCircle } from 'ionicons/icons';

  export default defineComponent({
    components: { IonSearchbar },
    setup() {
      return { searchCircle };
    },
  });
</script>
```