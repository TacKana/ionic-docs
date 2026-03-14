```html
<ion-list>
  <ion-item>
    <ion-label>提示框</ion-label>
    <ion-select id="customAlertSelect" interface="alert" placeholder="选择一项">
      <ion-select-option value="bacon">培根</ion-select-option>
      <ion-select-option value="onions">洋葱</ion-select-option>
      <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>弹出框</ion-label>
    <ion-select id="customPopoverSelect" interface="popover" placeholder="选择一项">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>操作表</ion-label>
    <ion-select id="customActionSheetSelect" interface="action-sheet" placeholder="选择一项">
      <ion-select-option value="red">红色</ion-select-option>
      <ion-select-option value="green">绿色</ion-select-option>
      <ion-select-option value="blue">蓝色</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>

<script>
  const customAlertSelect = document.getElementById('customAlertSelect');
  const customAlertOptions = {
    header: '披萨配料',
    subHeader: '选择你最喜欢的配料',
    message: '只能选择一种',
    translucent: true,
  };
  customAlertSelect.interfaceOptions = customAlertOptions;

  const customPopoverSelect = document.getElementById('customPopoverSelect');
  const customPopoverOptions = {
    header: '发色',
    subHeader: '选择你的发色',
    message: '仅选择你的主要发色',
  };
  customPopoverSelect.interfaceOptions = customPopoverOptions;

  const customActionSheetSelect = document.getElementById('customActionSheetSelect');
  const customActionSheetOptions = {
    header: '颜色',
    subHeader: '选择你最喜欢的颜色',
  };
  customActionSheetSelect.interfaceOptions = customActionSheetOptions;
</script>
```