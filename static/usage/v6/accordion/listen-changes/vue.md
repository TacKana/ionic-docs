```html
<template>
  <ion-accordion-group @ionChange="accordionGroupChange($event)">
    <ion-accordion value="first">
      <ion-item slot="header" color="light">
        <ion-label>第一个手风琴项</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第一个内容</div>
    </ion-accordion>
    <ion-accordion value="second">
      <ion-item slot="header" color="light">
        <ion-label>第二个手风琴项</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第二个内容</div>
    </ion-accordion>
    <ion-accordion value="third">
      <ion-item slot="header" color="light">
        <ion-label>第三个手风琴项</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第三个内容</div>
    </ion-accordion>
  </ion-accordion-group>

  <p ref="listenerOut"></p>
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
    setup() {
      const listenerOut = ref(null);
      const values = ['first', 'second', 'third'];
      const accordionGroupChange = (ev: AccordionGroupCustomEvent) => {
        if (!listenerOut.value) {
          return;
        }

        const collapsedItems = values.filter((value) => value !== ev.detail.value);
        const selectedValue = ev.detail.value;

        listenerOut.value.innerText = `
          展开项: ${selectedValue === undefined ? '无' : ev.detail.value}
          折叠项: ${collapsedItems.join(', ')}
        `;
      };
      return { listenerOut, accordionGroupChange };
    },
  });
</script>
```