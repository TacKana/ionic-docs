```html
<b>顶部对齐的列</b>
<ion-grid>
  <ion-row class="ion-align-items-start">
    <ion-col> 1 </ion-col>
    <ion-col> 2 </ion-col>
    <ion-col> 3 </ion-col>
    <ion-col>
      4 <br />
      # <br />
      # <br />
      # <br />
    </ion-col>
  </ion-row>
</ion-grid>

<b>居中对齐的列</b>
<ion-grid>
  <ion-row class="ion-align-items-center">
    <ion-col> 1 </ion-col>
    <ion-col> 2 </ion-col>
    <ion-col> 3 </ion-col>
    <ion-col>
      4 <br />
      # <br />
      # <br />
      # <br />
    </ion-col>
  </ion-row>
</ion-grid>

<b>底部对齐的列</b>
<ion-grid>
  <ion-row class="ion-align-items-end">
    <ion-col> 1 </ion-col>
    <ion-col> 2 </ion-col>
    <ion-col> 3 </ion-col>
    <ion-col>
      4 <br />
      # <br />
      # <br />
      # <br />
    </ion-col>
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