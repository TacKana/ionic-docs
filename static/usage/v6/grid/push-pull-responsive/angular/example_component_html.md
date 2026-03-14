```html
<b>xs 断点下保持不变，sm 及以上尺寸时第一列右推、第二列左拉</b>
<ion-grid>
  <ion-row>
    <ion-col push-sm="6">1</ion-col>
    <ion-col pull-sm="6">2</ion-col>
  </ion-row>
</ion-grid>

<b>xs 断点下保持不变，md 及以上尺寸时中间列右推、最后一列左拉</b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col push-md="3">2</ion-col>
    <ion-col push-md="3">3</ion-col>
    <ion-col pull-md="6">4</ion-col>
  </ion-row>
</ion-grid>

<b>xs 断点时交换首尾三列，lg 及以上尺寸时反转列顺序</b>
<ion-grid>
  <ion-row>
    <ion-col push="6" push-lg="10">1</ion-col>
    <ion-col push="6" push-lg="6">2</ion-col>
    <ion-col push="6" push-lg="2">3</ion-col>
    <ion-col pull="6" pull-lg="2">4</ion-col>
    <ion-col pull="6" pull-lg="6">5</ion-col>
    <ion-col pull="6" pull-lg="10">6</ion-col>
  </ion-row>
</ion-grid>
```