```html
<ion-list>
  <ion-item>
    <ion-label>警示框界面</ion-label>
    <ion-select placeholder="选择水果" ok-text="确认选择" cancel-text="取消选择">
      <ion-select-option value="apples">苹果</ion-select-option>
      <ion-select-option value="oranges">橙子</ion-select-option>
      <ion-select-option value="bananas">香蕉</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item>
    <ion-label>操作表界面</ion-label>
    <ion-select interface="action-sheet" placeholder="选择水果" cancel-text="取消选择">
      <ion-select-option value="apples">苹果</ion-select-option>
      <ion-select-option value="oranges">橙子</ion-select-option>
      <ion-select-option value="bananas">香蕉</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```