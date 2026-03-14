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
        <ion-content>
          <p class="ion-padding-horizontal">您必须接受条款和条件才能关闭此模态框。</p>
          <ion-item>
            <ion-label class="ion-text-wrap" for="terms">您是否接受条款和条件？</ion-label>
            <ion-checkbox id="terms" (ionChange)="onTermsChanged($event)" [checked]="canDismiss"></ion-checkbox>
          </ion-item>
        </ion-content>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```