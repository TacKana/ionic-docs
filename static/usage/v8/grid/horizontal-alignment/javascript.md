```html
<b>列左对齐</b>
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3"> 1 </ion-col>
    <ion-col size="3"> 2 </ion-col>
  </ion-row>
</ion-grid>

<b>列居中对齐</b>
<ion-grid>
  <ion-row class="ion-justify-content-center">
    <ion-col size="3"> 1 </ion-col>
    <ion-col size="3"> 2 </ion-col>
  </ion-row>
</ion-grid>

<b>列右对齐</b>
<ion-grid>
  <ion-row class="ion-justify-content-end">
    <ion-col size="3"> 1 </ion-col>
    <ion-col size="3"> 2 </ion-col>
  </ion-row>
</ion-grid>

<b>列等间距对齐（首尾有间隔）</b>
<ion-grid>
  <ion-row class="ion-justify-content-around">
    <ion-col size="3"> 1 </ion-col>
    <ion-col size="3"> 2 </ion-col>
  </ion-row>
</ion-grid>

<b>列两端对齐（首尾无间隔）</b>
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