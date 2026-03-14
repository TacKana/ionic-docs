```html
<b>第二列的 <code>size</code> 设置为 <code>"8"</code></b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col size="8">2</ion-col>
    <ion-col>3</ion-col>
  </ion-row>
</ion-grid>

<b>第三列和第四列的 <code>size</code> 设置为 <code>"3"</code></b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col>2</ion-col>
    <ion-col size="3">3</ion-col>
    <ion-col size="3">4</ion-col>
    <ion-col>5</ion-col>
    <ion-col>6</ion-col>
  </ion-row>
</ion-grid>

<b>第一列和第二列的 <code>size</code> 设置为 <code>"4"</code></b>
<ion-grid>
  <ion-row>
    <ion-col size="4">1</ion-col>
    <ion-col size="4">2</ion-col>
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