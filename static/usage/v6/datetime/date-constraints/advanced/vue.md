```html
<template>
  <ion-datetime :is-date-enabled="isWeekday"></ion-datetime>
</template>

<script lang="ts">
  import { IonDatetime } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonDatetime },
    setup() {
      const isWeekday = (dateString: string) => {
        const date = new Date(dateString);
        const utcDay = date.getUTCDay();

        /**
         * 仅当日期不是周日或周六时启用
         */
        return utcDay !== 0 && utcDay !== 6;
      };

      return { isWeekday };
    },
  });
</script>
```