```html
<template>
  <ion-accordion-group>
    <ion-accordion value="first">
      <ion-item slot="header" color="light">
        <ion-label>第一个手风琴项</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第一项内容</div>
    </ion-accordion>
    <ion-accordion value="second" :readonly="true">
      <ion-item slot="header" color="light">
        <ion-label>第二个手风琴项（只读）</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第二项内容</div>
    </ion-accordion>
    <ion-accordion value="third">
      <ion-item slot="header" color="light">
        <ion-label>第三个手风琴项</ion-label>
      </ion-item>
      <div class="ion-padding" slot="content">第三项内容</div>
    </ion-accordion>
  </ion-accordion-group>
</template>

<script setup lang="ts">
  import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
</script>
```