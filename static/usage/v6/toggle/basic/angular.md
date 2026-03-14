```html
<ion-list>
  <ion-item>
    <ion-label>默认开关</ion-label>
    <ion-toggle slot="end"></ion-toggle>
  </ion-item>
  <ion-item>
    <ion-label>选中状态开关</ion-label>
    <ion-toggle slot="end" [checked]="true"></ion-toggle>
  </ion-item>
  <ion-item>
    <ion-label>禁用开关</ion-label>
    <ion-toggle slot="end" [disabled]="true"></ion-toggle>
  </ion-item>
  <ion-item>
    <ion-label>禁用选中状态开关</ion-label>
    <ion-toggle slot="end" [checked]="true" [disabled]="true"></ion-toggle>
  </ion-item>
</ion-list>
```