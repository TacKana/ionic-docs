```html
<b>第一列的 <code>push</code> 设为 <code>"4"</code>，第二列的 <code>pull</code> 设为 <code>"4"</code></b>
<ion-grid>
  <ion-row>
    <ion-col push="4">1</ion-col>
    <ion-col pull="4">2</ion-col>
    <ion-col>3</ion-col>
  </ion-row>
</ion-grid>

<b
  >第二列的 <code>push</code> 设为 <code>"4"</code>，而第三列和第四列的 <code>pull</code> 设为
  <code>"2"</code></b
>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col push="4">2</ion-col>
    <ion-col pull="2">3</ion-col>
    <ion-col pull="2">4</ion-col>
    <ion-col>5</ion-col>
    <ion-col>6</ion-col>
  </ion-row>
</ion-grid>

<b>第一列的 <code>push</code> 设为 <code>"3"</code>，第二列的 <code>pull</code> 设为 <code>"9"</code></b>
<ion-grid>
  <ion-row>
    <ion-col size="9" push="3">1</ion-col>
    <ion-col size="3" pull="9">2</ion-col>
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