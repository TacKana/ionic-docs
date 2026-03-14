```html
<template>
  <ion-button @click="showLoading">显示加载</ion-button>
</template>

<script lang="ts">
  import { IonButton, loadingController } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
    setup() {
      const showLoading = async () => {
        const loading = await loadingController.create({
          message: '将在 3 秒后关闭...',
          duration: 3000,
        });

        loading.present();
      };

      return { showLoading };
    },
  });
</script>
```