```html
<ion-input label="默认计数器" labelPlacement="floating" [counter]="true" maxlength="20"></ion-input>

<ion-input
  id="custom-input"
  label="自定义计数器格式"
  labelPlacement="floating"
  [counter]="true"
  maxlength="20"
  [counterFormatter]="customCounterFormatter"
></ion-input>
```