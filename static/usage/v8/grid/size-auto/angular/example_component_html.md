```html
<b>第一列的 <code>size</code> 设置为 <code>"auto"</code></b>
<ion-grid>
  <ion-row>
    <ion-col size="auto">1</ion-col>
    <ion-col>2</ion-col>
    <ion-col>3</ion-col>
  </ion-row>
</ion-grid>

<b>第三列包含一个输入框，且 <code>size</code> 设置为 <code>"auto"</code></b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col>2</ion-col>
    <ion-col size="auto">
      <ion-input placeholder="3"></ion-input>
    </ion-col>
    <ion-col>4</ion-col>
    <ion-col>5</ion-col>
    <ion-col>6</ion-col>
  </ion-row>
</ion-grid>

<b>第二列的 <code>size</code> 设置为 <code>"auto"</code> 且具有固定宽度</b>
<ion-grid>
  <ion-row>
    <ion-col>1</ion-col>
    <ion-col size="auto">
      <div style="width: 150px">2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```