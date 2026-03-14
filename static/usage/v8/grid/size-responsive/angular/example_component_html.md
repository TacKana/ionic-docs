```html
<b>在 xs 断点处堆叠排列，从 sm 断点起等宽布局</b>
<ion-grid>
  <ion-row>
    <ion-col size="12" size-sm="3">1</ion-col>
    <ion-col size="12" size-sm="3">2</ion-col>
    <ion-col size="12" size-sm="3">3</ion-col>
    <ion-col size="12" size-sm="3">4</ion-col>
  </ion-row>
</ion-grid>

<b>在 md 断点前等宽布局，从 md 断点起最后一列占满整行</b>
<ion-grid>
  <ion-row>
    <ion-col size-md="6">1</ion-col>
    <ion-col size-md="6">2</ion-col>
    <ion-col size-md="12">3</ion-col>
  </ion-row>
</ion-grid>

<b>在 md 断点前每行 2 列，md 断点时每行 3 列，从 lg 断点起等宽布局</b>
<ion-grid>
  <ion-row>
    <ion-col size="6" size-md="4" size-lg="2">1</ion-col>
    <ion-col size="6" size-md="4" size-lg="2">2</ion-col>
    <ion-col size="6" size-md="4" size-lg="2">3</ion-col>
    <ion-col size="6" size-md="4" size-lg="2">4</ion-col>
    <ion-col size="6" size-md="4" size-lg="2">5</ion-col>
    <ion-col size="6" size-md="4" size-lg="2">6</ion-col>
  </ion-row>
</ion-grid>
```