```html
<ion-button id="open-modal">打开模态框</ion-button>
<ion-modal #modal trigger="open-modal" [isOpen]="true" (didDismiss)="onDidDismiss($event)">
  <ng-template>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button (click)="modal.dismiss(null, 'cancel')">取消</ion-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button (click)="modal.dismiss(currentValue, 'confirm')">完成</ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-picker>
      <ion-picker-column [value]="currentValue" (ionChange)="onIonChange($event)">
        <ion-picker-column-option value="" disabled="true">--</ion-picker-column-option>
        <ion-picker-column-option value="javascript">Javascript</ion-picker-column-option>
        <ion-picker-column-option value="typescript">Typescript</ion-picker-column-option>
        <ion-picker-column-option value="rust">Rust</ion-picker-column-option>
        <ion-picker-column-option value="c#">C#</ion-picker-column-option>
      </ion-picker-column>
    </ion-picker>
  </ng-template>
</ion-modal>
```