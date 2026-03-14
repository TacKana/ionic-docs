```html
<template>
  <ion-range @ionChange="onIonChange"></ion-range>
  <ion-label>ionChange 触发值：{{lastEmittedValue}}</ion-label>
</template>

<script lang="ts">
  import { IonLabel, IonRange } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonLabel, IonRange },
    data() {
      return {
        lastEmittedValue: '',
      };
    },
    methods: {
      onIonChange({ detail }) {
        this.lastEmittedValue = detail.value;
      },
    },
  });
</script>
```