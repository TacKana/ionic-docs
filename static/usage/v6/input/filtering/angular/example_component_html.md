```html
<ion-list>
  <ion-item>
    <ion-label>字母数字字符</ion-label>
    <ion-input [value]="inputModel" (ionInput)="onInput($event)" #ionInputEl></ion-input>
  </ion-item>
</ion-list>
```