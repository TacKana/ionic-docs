```html
<template>
  <ion-searchbar show-cancel-button="focus" placeholder="聚焦时显示"></ion-searchbar>
  <ion-searchbar show-cancel-button="always" placeholder="始终显示"></ion-searchbar>
  <ion-searchbar show-cancel-button="never" placeholder="永不显示"></ion-searchbar>
  <ion-searchbar
    show-cancel-button="always"
    cancel-button-text="自定义取消"
    :cancel-button-icon="trash"
    placeholder="自定义取消按钮"
  ></ion-searchbar>
</template>

<script lang="ts">
  import { IonSearchbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { trash } from 'ionicons/icons';

  export default defineComponent({
    components: { IonSearchbar },
    setup() {
      return { trash };
    },
  });
</script>
```