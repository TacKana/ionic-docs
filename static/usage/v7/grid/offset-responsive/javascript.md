```html
<b>在 xs 断点无偏移，在 sm 及以上断点第一列偏移</b>
<ion-grid>
  <ion-row>
    <ion-col offset-sm="2">1</ion-col>
    <ion-col>2</ion-col>
    <ion-col>3</ion-col>
    <ion-col>4</ion-col>
    <ion-col>5</ion-col>
  </ion-row>
</ion-grid>

<b>在 xs 断点无偏移，在 md 及以上断点最后三列偏移</b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col offset-md="2">2</ion-col>
    <ion-col offset-md="2">3</ion-col>
    <ion-col offset-md="2">4</ion-col>
  </ion-row>
</ion-grid>

<b>在 xs 断点所有列偏移 6，在 md 断点偏移 4，在 lg 及以上断点偏移 2</b>
<ion-grid>
  <ion-row>
    <ion-col offset="6" offset-md="4" offset-lg="2">1</ion-col>
    <ion-col offset="6" offset-md="4" offset-lg="2">2</ion-col>
  </ion-row>
</ion-grid>

<style>
  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```