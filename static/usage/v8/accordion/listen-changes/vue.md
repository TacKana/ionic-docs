```html
<template>
  <ion-accordion-group @ionChange="accordionGroupChange($event)">
    <ion-accordion value="first">
      <ion-item slot="header" color="light">
        <ion-label>第一个手风琴</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第一个内容</div>
    </ion-accordion>
    <ion-accordion value="second">
      <ion-item slot="header" color="light">
        <ion-label>第二个手风琴</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第二个内容</div>
    </ion-accordion>
    <ion-accordion value="third">
      <ion-item slot="header" color="light">
        <ion-label>第三个手风琴</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第三个内容</div>
    </ion-accordion>
  </ion-accordion-group>
</template>

<script setup lang="ts">
  import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, AccordionGroupCustomEvent } from '@ionic/vue';

  const values = ['first', 'second', 'third'];
  const accordionGroupChange = (event: AccordionGroupCustomEvent) => {
    const collapsedItems = values.filter((value) => value !== event.detail.value);
    const selectedValue = event.detail.value;

    console.log(
      `展开项: ${selectedValue === undefined ? '无' : event.detail.value} | 折叠项: ${collapsedItems.join(', ')}`
    );
  };
</script>
```