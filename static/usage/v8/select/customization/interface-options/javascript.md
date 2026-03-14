```html
<ion-list>
  <ion-item>
    <ion-select label="Alert" id="customAlertSelect" interface="alert" placeholder="Select One">
      <ion-select-option value="bacon">培根</ion-select-option>
      <ion-select-option value="onions">洋葱</ion-select-option>
      <ion-select-option value="pepperoni">意式辣香肠</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Popover" id="customPopoverSelect" interface="popover" placeholder="Select One">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Action Sheet" id="customActionSheetSelect" interface="action-sheet" placeholder="Select One">
      <ion-select-option value="red">红色</ion-select-option>
      <ion-select-option value="green">绿色</ion-select-option>
      <ion-select-option value="blue">蓝色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-select label="Modal" id="customModalSelect" interface="modal" placeholder="Select One">
      <ion-select-option value="reese's">Reese's</ion-select-option>
      <ion-select-option value="snickers">士力架</ion-select-option>
      <ion-select-option value="twix">Twix</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>

<script>
  const customAlertSelect = document.getElementById('customAlertSelect');
  const customAlertOptions = {
    header: '披萨配料',
    subHeader: '选择你最喜欢的配料',
    message: '只能选择一个',
    translucent: true,
  };
  customAlertSelect.interfaceOptions = customAlertOptions;

  const customPopoverSelect = document.getElementById('customPopoverSelect');
  const customPopoverOptions = {
    header: '发色',
    subHeader: '选择你的发色',
    message: '只选择你的主要发色',
  };
  customPopoverSelect.interfaceOptions = customPopoverOptions;

  const customActionSheetSelect = document.getElementById('customActionSheetSelect');
  const customActionSheetOptions = {
    header: '颜色',
    subHeader: '选择你最喜欢的颜色',
  };
  customActionSheetSelect.interfaceOptions = customActionSheetOptions;

  const customModalSelect = document.getElementById('customModalSelect');
  const customModalOptions = {
    header: '最爱的糖果',
    breakpoints: [0, 0.5],
    initialBreakpoint: 0.5,
  };
  customModalSelect.interfaceOptions = customModalOptions;
</script>
```