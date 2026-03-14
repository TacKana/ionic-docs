```html
<template>
  <ion-button @click="showLoading">显示加载动画</ion-button>
</template>

<script lang="ts">
  import { IonButton, loadingController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
    setup() {
      const showLoading = async () => {
        const loading = await loadingController.create({
          message: '加载中...',
          duration: 3000,
          spinner: 'circles',
        });

        loading.present();
      };

      return { showLoading };
    },
  });
</script>
```