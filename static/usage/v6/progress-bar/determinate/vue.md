```html
<template>
  <ion-progress-bar :value="progress"></ion-progress-bar>
</template>

<script lang="ts">
  import { IonProgressBar } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonProgressBar },
    setup() {
      let progress = ref(0);

      return {
        progress,
      };
    },
    mounted() {
      setInterval(() => {
        this.progress += 0.01;

        // 当进度条达到100%时重置进度
        // 以便持续展示演示效果
        if (this.progress > 1) {
          setTimeout(() => {
            this.progress = 0;
          }, 1000);
        }
      }, 50);
    },
  });
</script>
```