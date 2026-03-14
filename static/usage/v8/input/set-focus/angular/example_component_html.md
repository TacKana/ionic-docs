```html
<ion-list>
  <ion-item>
    <ion-button (click)="input.setFocus()">点击设置焦点</ion-button>
  </ion-item>
  <ion-item>
    <ion-input #input label="Email" labelPlacement="floating"></ion-input>
  </ion-item>
</ion-list>
```