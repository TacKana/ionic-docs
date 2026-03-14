```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开</ion-button>
    <ion-modal #modal trigger="open-modal" [canDismiss]="canDismiss" [presentingElement]="presentingElement">
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <ion-title>模态框</ion-title>
            <ion-buttons slot="end">
              <ion-button (click)="modal.dismiss()">关闭</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>关闭此模态框时，系统将提示您进行确认。</p>
        </ion-content>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```