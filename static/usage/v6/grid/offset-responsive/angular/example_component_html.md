```html
<b>xs断点无偏移，sm及以上断点第一列偏移</b>
<ion-grid>
  <ion-row>
    <ion-col offset-sm="2">1</ion-col>
    <ion-col>2</ion-col>
    <ion-col>3</ion-col>
    <ion-col>4</ion-col>
    <ion-col>5</ion-col>
  </ion-row>
</ion-grid>

<b>xs断点无偏移，md及以上断点最后三列偏移</b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col offset-md="2">2</ion-col>
    <ion-col offset-md="2">3</ion-col>
    <ion-col offset-md="2">4</ion-col>
  </ion-row>
</ion-grid>

<b>xs断点所有列偏移6，md断点偏移4，lg及以上断点偏移2</b>
<ion-grid>
  <ion-row>
    <ion-col offset="6" offset-md="4" offset-lg="2">1</ion-col>
    <ion-col offset="6" offset-md="4" offset-lg="2">2</ion-col>
  </ion-row>
</ion-grid>
```