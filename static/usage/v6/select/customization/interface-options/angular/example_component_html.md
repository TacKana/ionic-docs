```html
<ion-list>
  <ion-item>
    <ion-label>警告框</ion-label>
    <ion-select [interfaceOptions]="customAlertOptions" interface="alert" placeholder="选择一项">
      <ion-select-option value="bacon">培根</ion-select-option>
      <ion-select-option value="onions">洋葱</ion-select-option>
      <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>弹出框</ion-label>
    <ion-select [interfaceOptions]="customPopoverOptions" interface="popover" placeholder="选择一项">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>操作表</ion-label>
    <ion-select [interfaceOptions]="customActionSheetOptions" interface="action-sheet" placeholder="选择一项">
      <ion-select-option value="red">红色</ion-select-option>
      <ion-select-option value="green">绿色</ion-select-option>
      <ion-select-option value="blue">蓝色</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```