```html
<template>
  <ion-accordion-group ref="accordionGroup">
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

  <ion-button @click="toggleAccordion()">切换第二个手风琴项</ion-button>
</template>

<script lang="ts">
  import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonAccordion,
      IonAccordionGroup,
      IonButton,
      IonItem,
      IonLabel,
    },
    setup() {
      const accordionGroup = ref(null);
      const toggleAccordion = () => {
        if (!accordionGroup.value) {
          return;
        }
        const nativeEl = accordionGroup.value.$el;

        if (nativeEl.value === 'second') {
          nativeEl.value = undefined;
        } else {
          nativeEl.value = 'second';
        }
      };

      return { accordionGroup, toggleAccordion };
    },
  });
</script>
```