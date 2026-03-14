```html
<ion-header>
  <ion-toolbar>
    <ion-title>内联提示框</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" (click)="setOpen(true)">打开</ion-button>
  <ion-toast
    [isOpen]="isToastOpen"
    message="此提示框将在5秒后关闭"
    [duration]="5000"
    (didDismiss)="setOpen(false)"
  ></ion-toast>
</ion-content>
```