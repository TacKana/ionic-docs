```html
<template>
  <ion-datetime :is-date-enabled="isWeekday"></ion-datetime>
</template>

<script setup lang="ts">
  import { IonDatetime } from '@ionic/vue';

  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * 只有日期不是周日或周六时，
     * 该日期才会被启用
     */
    return utcDay !== 0 && utcDay !== 6;
  };
</script>
```