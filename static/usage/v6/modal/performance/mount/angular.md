```html
<ion-header>
  <ion-toolbar>
    <ion-title>示例</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开模态框</ion-button>
  <ion-modal [keepContentsMounted]="true" trigger="open-modal" #modal>
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button (click)="modal.dismiss()">取消</ion-button>
          </ion-buttons>
          <ion-title>模态框</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> 该内容在模态框创建时即已挂载。 </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```