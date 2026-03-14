```html
<template>
  <ion-list>
    <ion-item>
      <ion-label>警告框</ion-label>
      <ion-select :interface-options="customAlertOptions" interface="alert" placeholder="选择一项">
        <ion-select-option value="bacon">培根</ion-select-option>
        <ion-select-option value="onions">洋葱</ion-select-option>
        <ion-select-option value="pepperoni">意大利香肠</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>弹出层</ion-label>
      <ion-select :interface-options="customPopoverOptions" interface="popover" placeholder="选择一项">
        <ion-select-option value="brown">棕色</ion-select-option>
        <ion-select-option value="blonde">金色</ion-select-option>
        <ion-select-option value="red">红色</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>操作表</ion-label>
      <ion-select :interface-options="customActionSheetOptions" interface="action-sheet" placeholder="选择一项">
        <ion-select-option value="red">红色</ion-select-option>
        <ion-select-option value="green">绿色</ion-select-option>
        <ion-select-option value="blue">蓝色</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonList, IonSelect, IonSelectOption },
    setup() {
      const customAlertOptions = {
        header: '披萨配料',
        subHeader: '选择您最喜爱的配料',
        message: '仅选择一种',
        translucent: true,
      };

      const customPopoverOptions = {
        header: '发色',
        subHeader: '选择您的发色',
        message: '仅选择您的主要发色',
      };

      const customActionSheetOptions = {
        header: '颜色',
        subHeader: '选择您最喜爱的颜色',
      };

      return {
        customAlertOptions,
        customPopoverOptions,
        customActionSheetOptions,
      };
    },
  });
</script>
```