```html
<ion-item lines="full" class="item-has-focus ion-touched">
  <ion-label position="stacked">自定义输入高亮：已聚焦</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item lines="full" class="item-has-focus ion-touched ion-valid">
  <ion-label position="stacked">自定义输入高亮：已聚焦且有效</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item lines="full" class="item-has-focus ion-touched ion-invalid">
  <ion-label position="stacked">自定义输入高亮：已聚焦且无效</ion-label>
  <ion-input></ion-input>
</ion-item>

<style>
  ion-item {
    --highlight-height: 2px;
    --highlight-color-focused: #43e7f3;
    --highlight-color-valid: #6f58d8;
    --highlight-color-invalid: #ff46be;
  }
</style>
```