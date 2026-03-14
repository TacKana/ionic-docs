```html
<template>
  <ion-list>
    <ion-item>
      <ion-select
        class="always-flip"
        :toggle-icon="caretDownSharp"
        interface="popover"
        label="图标在两种模式下均会翻转"
        placeholder="选择水果"
      >
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-select
        class="never-flip"
        :toggle-icon="caretDownSharp"
        interface="popover"
        label="图标永不翻转"
        placeholder="选择水果"
      >
        <ion-select-option value="apples">Apples</ion-select-option>
        <ion-select-option value="oranges">Oranges</ion-select-option>
        <ion-select-option value="bananas">Bananas</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { caretDownSharp } from 'ionicons/icons';
</script>

<style>
  ion-select.always-flip::part(icon) {
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ion-select.always-flip.select-expanded::part(icon) {
    transform: rotate(180deg);
  }

  ion-select.never-flip::part(icon) {
    transform: none;
  }
</style>
```