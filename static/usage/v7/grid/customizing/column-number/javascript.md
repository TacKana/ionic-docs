```html
<b>总列数设置为 <code>6</code>，每列 <code>size</code> 设置为 <code>1</code></b>
<ion-grid>
  <ion-row>
    <ion-col size="1">1</ion-col>
    <ion-col size="1">2</ion-col>
    <ion-col size="1">3</ion-col>
    <ion-col size="1">4</ion-col>
  </ion-row>
</ion-grid>

<style>
  ion-grid {
    --ion-grid-columns: 6;
  }

  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```