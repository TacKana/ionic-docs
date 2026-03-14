```html
<ion-item counter="true">
  <ion-label position="floating">默认计数器</ion-label>
  <ion-input maxlength="20"></ion-input>
</ion-item>

<ion-item id="custom-item" counter="true" [counterFormatter]="customCounterFormatter">
  <ion-label position="floating">自定义计数器格式</ion-label>
  <ion-input maxlength="20"></ion-input>
</ion-item>
```