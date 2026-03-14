```html
<ion-button id="present-alert">点击我</ion-button>
<ion-alert
  trigger="present-alert"
  header="警告!"
  [buttons]="alertButtons"
  (didDismiss)="setResult($event)"
></ion-alert>
```