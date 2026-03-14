```html
<template>
  <ion-searchbar showCancelButton="focus" class="custom"></ion-searchbar>
</template>

<script lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonSearchbar },
  });
</script>

<style scoped>
  /* 作用域组件需要更高的选择器优先级才能进行自定义样式 */
  ion-searchbar.custom {
    --background: #19422d;
    --color: #fff;
    --placeholder-color: #fff;
    --icon-color: #fff;
    --clear-button-color: #fff;

    --border-radius: 4px;
  }

  ion-searchbar.ios.custom {
    --cancel-button-color: #19422d;
  }

  ion-searchbar.md.custom {
    --cancel-button-color: #fff;
  }
</style>
```