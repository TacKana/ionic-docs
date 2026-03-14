```html
<ion-header>
  <ion-toolbar>
    <ion-title>内联模态框</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开</ion-button>
  <p>{{ message }}</p>
  <ion-modal trigger="open-modal" (willDismiss)="onWillDismiss($event)">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button (click)="cancel()">取消</ion-button>
          </ion-buttons>
          <ion-title>欢迎</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="confirm()" [strong]="true">确认</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-input
            label="输入您的姓名"
            labelPlacement="stacked"
            type="text"
            placeholder="您的姓名"
            [(ngModel)]="name"
          ></ion-input>
        </ion-item>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```