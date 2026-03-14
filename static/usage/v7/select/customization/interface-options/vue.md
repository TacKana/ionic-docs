```html
<template>
  <ion-list>
    <ion-item>
      <ion-select label="Alert" :interface-options="customAlertOptions" interface="alert" placeholder="Select One">
        <ion-select-option value="bacon">培根</ion-select-option>
        <ion-select-option value="onions">洋葱</ion-select-option>
        <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-select
        label="Popover"
        :interface-options="customPopoverOptions"
        interface="popover"
        placeholder="Select One"
      >
        <ion-select-option value="brown">棕色</ion-select-option>
        <ion-select-option value="blonde">金色</ion-select-option>
        <ion-select-option value="red">红色</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-select
        label="Action Sheet"
        :interface-options="customActionSheetOptions"
        interface="action-sheet"
        placeholder="Select One"
      >
        <ion-select-option value="red">红色</ion-select-option>
        <ion-select-option value="green">绿色</ion-select-option>
        <ion-select-option value="blue">蓝色</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/vue';

  const customAlertOptions = {
    header: '披萨配料',
    subHeader: '选择您最喜爱的配料',
    message: '仅限选择一项',
    translucent: true,
  };

  const customPopoverOptions = {
    header: '发色',
    subHeader: '选择您的头发颜色',
    message: '仅选择您的主要发色',
  };

  const customActionSheetOptions = {
    header: '颜色',
    subHeader: '选择您最喜爱的颜色',
  };
</script>
```