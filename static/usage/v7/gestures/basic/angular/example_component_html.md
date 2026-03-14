```html
<ion-card [class.active]="isCardActive">
  <ion-card-header>
    <ion-card-subtitle>平移屏幕</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    <p #debug>交互后将会显示手势信息。</p>
  </ion-card-content>
</ion-card>
```