```html
<ion-list>
  <ion-item>
    <ion-select label="Alert" [interfaceOptions]="customAlertOptions" interface="alert" placeholder="Select One">
      <ion-select-option value="bacon">培根</ion-select-option>
      <ion-select-option value="onions">洋葱</ion-select-option>
      <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Popover" [interfaceOptions]="customPopoverOptions" interface="popover" placeholder="Select One">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select
      label="Action Sheet"
      [interfaceOptions]="customActionSheetOptions"
      interface="action-sheet"
      placeholder="Select One"
    >
      <ion-select-option value="red">红色</ion-select-option>
      <ion-select-option value="green">绿色</ion-select-option>
      <ion-select-option value="blue">蓝色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Modal" [interfaceOptions]="customModalOptions" interface="modal" placeholder="Select One">
      <ion-select-option value="reese's">瑞斯花生酱杯</ion-select-option>
      <ion-select-option value="snickers">士力架</ion-select-option>
      <ion-select-option value="twix">特趣巧克力</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```