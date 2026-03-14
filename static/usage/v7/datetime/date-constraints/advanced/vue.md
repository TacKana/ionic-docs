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
     * 只有当日期不是
     * 周日或周六时启用
     */
    return utcDay !== 0 && utcDay !== 6;
  };
</script>
```