```html
<b>列对齐在起始位置</b>
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3"> 1 </ion-col>
    <ion-col size="3"> 2 </ion-col>
  </ion-row>
</ion-grid>

<b>列对齐在中心位置</b>
<ion-grid>
  <ion-row class="ion-justify-content-center">
    <ion-col size="3"> 1 </ion-col>
    <ion-col size="3"> 2 </ion-col>
  </ion-row>
</ion-grid>

<b>列对齐在末端位置</b>
<ion-grid>
  <ion-row class="ion-justify-content-end">
    <ion-col size="3"> 1 </ion-col>
    <ion-col size="3"> 2 </ion-col>
  </ion-row>
</ion-grid>

<b>列对齐并分配周围空间</b>
<ion-grid>
  <ion-row class="ion-justify-content-around">
    <ion-col size="3"> 1 </ion-col>
    <ion-col size="3"> 2 </ion-col>
  </ion-row>
</ion-grid>

<b>列对齐并分配间隔空间</b>
<ion-grid>
  <ion-row class="ion-justify-content-between">
    <ion-col size="3"> 1 </ion-col>
    <ion-col size="3"> 2 </ion-col>
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