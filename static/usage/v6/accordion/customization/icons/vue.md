```html
<template>
  <ion-accordion-group>
    <ion-accordion value="first" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
      <ion-item slot="header" color="light">
        <ion-label>第一个手风琴</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第一个内容</div>
    </ion-accordion>
    <ion-accordion value="second" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
      <ion-item slot="header" color="light">
        <ion-label>第二个手风琴</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第二个内容</div>
    </ion-accordion>
    <ion-accordion value="third" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
      <ion-item slot="header" color="light">
        <ion-label>第三个手风琴</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第三个内容</div>
    </ion-accordion>
  </ion-accordion-group>
</template>

<script lang="ts">
  import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
  import { caretDownCircle } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonAccordion,
      IonAccordionGroup,
      IonItem,
      IonLabel,
    },
    setup() {
      return { caretDownCircle };
    },
  });
</script>
```