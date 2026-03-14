```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button color="medium" (click)="cancel()">取消</ion-button>
    </ion-buttons>
    <ion-title>欢迎</ion-title>
    <ion-buttons slot="end">
      <ion-button (click)="confirm()" [strong]="true">确认</ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-item>
    <ion-label position="stacked">您的姓名</ion-label>
    <ion-input [(ngModel)]="name" placeholder="请输入您的姓名"></ion-input>
  </ion-item>
</ion-content>
```