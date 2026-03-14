```html
<template>
  <ion-accordion-group>
    <ion-accordion value="first">
      <ion-item slot="header" color="light">
        <ion-label>第一个折叠项</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第一个内容</div>
    </ion-accordion>
    <ion-accordion value="second" :disabled="true">
      <ion-item slot="header" color="light">
        <ion-label>第二个折叠项</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第二个内容</div>
    </ion-accordion>
    <ion-accordion value="third">
      <ion-item slot="header" color="light">
        <ion-label>第三个折叠项</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第三个内容</div>
    </ion-accordion>
  </ion-accordion-group>
</template>

<script lang="ts">
  import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, AccordionGroupCustomEvent } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    components: {
      IonAccordion,
      IonAccordionGroup,
      IonItem,
      IonLabel,
    },
  });
</script>
```