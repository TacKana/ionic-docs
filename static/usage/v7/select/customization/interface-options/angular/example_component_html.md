```html
<ion-list>
  <ion-item>
    <ion-select label="警告框" [interfaceOptions]="customAlertOptions" interface="alert" placeholder="请选择一项">
      <ion-select-option value="bacon">培根</ion-select-option>
      <ion-select-option value="onions">洋葱</ion-select-option>
      <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="弹出层" [interfaceOptions]="customPopoverOptions" interface="popover" placeholder="请选择一项">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select
      label="操作表"
      [interfaceOptions]="customActionSheetOptions"
      interface="action-sheet"
      placeholder="请选择一项"
    >
      <ion-select-option value="red">红色</ion-select-option>
      <ion-select-option value="green">绿色</ion-select-option>
      <ion-select-option value="blue">蓝色</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```