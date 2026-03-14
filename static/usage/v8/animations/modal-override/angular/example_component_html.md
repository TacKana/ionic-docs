```html
<ion-header>
  <ion-toolbar>
    <ion-title>页面</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="modal-trigger">打开模态框</ion-button>
  <ion-modal trigger="modal-trigger" #modal>
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>模态框</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="closeModal()">关闭</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 模态框内容 </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```