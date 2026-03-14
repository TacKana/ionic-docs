```html
<ion-button id="present-alert">点击我</ion-button>
<ion-alert
  trigger="present-alert"
  header="请输入您的信息"
  [buttons]="alertButtons"
  [inputs]="alertInputs"
></ion-alert>
```