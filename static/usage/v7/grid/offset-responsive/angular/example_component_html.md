```html
<b>xs 断点无偏移，sm 及以上断点第一列偏移</b>
<ion-grid>
  <ion-row>
    <ion-col offset-sm="2">1</ion-col>
    <ion-col>2</ion-col>
    <ion-col>3</ion-col>
    <ion-col>4</ion-col>
    <ion-col>5</ion-col>
  </ion-row>
</ion-grid>

<b>xs 断点无偏移，md 及以上断点后三列偏移</b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col offset-md="2">2</ion-col>
    <ion-col offset-md="2">3</ion-col>
    <ion-col offset-md="2">4</ion-col>
  </ion-row>
</ion-grid>

<b>xs 断点所有列偏移 6，md 断点偏移 4，lg 及以上断点偏移 2</b>
<ion-grid>
  <ion-row>
    <ion-col offset="6" offset-md="4" offset-lg="2">1</ion-col>
    <ion-col offset="6" offset-md="4" offset-lg="2">2</ion-col>
  </ion-row>
</ion-grid>
```