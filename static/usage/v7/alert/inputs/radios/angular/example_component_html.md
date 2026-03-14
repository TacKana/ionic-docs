```html
<ion-button id="present-alert">点击我</ion-button>
<ion-alert
  trigger="present-alert"
  header="选择您最喜欢的颜色"
  [buttons]="alertButtons"
  [inputs]="alertInputs"
></ion-alert>
```