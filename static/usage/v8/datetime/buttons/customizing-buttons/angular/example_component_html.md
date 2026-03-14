```html
<ion-datetime #datetime>
  <ion-buttons slot="buttons">
    <ion-button color="danger" (click)="datetime.reset()">重置</ion-button>
    <ion-button color="primary" (click)="datetime.cancel()">取消</ion-button>
    <ion-button color="primary" (click)="datetime.confirm()">确定</ion-button>
  </ion-buttons>
</ion-datetime>
```