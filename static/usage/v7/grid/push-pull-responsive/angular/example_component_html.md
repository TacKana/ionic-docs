```html
<b>在 xs 断点下保持不变，sm 及以上断点将第一列推后、第二列拉前</b>
<ion-grid>
  <ion-row>
    <ion-col push-sm="6">1</ion-col>
    <ion-col pull-sm="6">2</ion-col>
  </ion-row>
</ion-grid>

<b>在 xs 断点下保持不变，md 及以上断点将中间列推后、最后一列拉前</b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col push-md="3">2</ion-col>
    <ion-col push-md="3">3</ion-col>
    <ion-col pull-md="6">4</ion-col>
  </ion-row>
</ion-grid>

<b>在 xs 断点下交换前 3 列与后 3 列，在 lg 及以上断点反转列顺序</b>
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