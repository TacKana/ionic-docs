```html
<template>
  <ion-list>
    <ion-item>
      <ion-textarea label-placement="floating" value="Lorem Ipsum">
        <div slot="label">评论 <ion-text color="danger">(必填)</ion-text></div>
      </ion-textarea>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonTextarea, IonItem, IonList, IonText } from '@ionic/vue';
</script>
```