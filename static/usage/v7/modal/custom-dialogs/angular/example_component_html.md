```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-custom-dialog" expand="block">打开自定义对话框</ion-button>

  <ion-modal id="example-modal" #modal trigger="open-custom-dialog">
    <ng-template>
      <div class="wrapper">
        <h1>对话框标题</h1>

        <ion-list lines="none">
          <ion-item button="true" detail="false" (click)="modal.dismiss()">
            <ion-icon name="person-circle"></ion-icon>
            <ion-label>选项一</ion-label>
          </ion-item>
          <ion-item button="true" detail="false" (click)="modal.dismiss()">
            <ion-icon name="person-circle"></ion-icon>
            <ion-label>选项二</ion-label>
          </ion-item>
          <ion-item button="true" detail="false" (click)="modal.dismiss()">
            <ion-icon name="person-circle"></ion-icon>
            <ion-label>选项三</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ng-template>
  </ion-modal>
</ion-content>
```