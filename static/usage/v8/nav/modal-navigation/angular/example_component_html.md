```html
<ion-header>
  <ion-toolbar>
    <ion-title>模态框导航</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="openModal">打开模态框</ion-button>
  <ion-modal #modal trigger="openModal" (willPresent)="onWillPresent()">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>模态框</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="modal.dismiss()"> 关闭 </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-nav #nav></ion-nav>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```