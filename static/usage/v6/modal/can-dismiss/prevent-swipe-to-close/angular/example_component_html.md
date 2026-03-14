```html
<div class="ion-page" #page>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开</ion-button>
    <ion-modal #modal trigger="open-modal" [canDismiss]="canDismiss" [presentingElement]="page">
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
          <p>
            如需关闭此模态框，请使用提供的"关闭"按钮。请注意，滑动操作无法关闭此模态框。
          </p>
        </ion-content>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```