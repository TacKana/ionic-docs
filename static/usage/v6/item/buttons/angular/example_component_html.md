```html
<ion-item>
  <ion-button slot="start"> 开始 </ion-button>
  <ion-label>默认按钮</ion-label>
  <ion-button slot="end"> 结束 </ion-button>
</ion-item>

<ion-item>
  <ion-button slot="start">
    开始
    <ion-icon name="home" slot="end"></ion-icon>
  </ion-button>
  <ion-label>带图标按钮</ion-label>
  <ion-button slot="end">
    <ion-icon name="star" slot="end"></ion-icon>
    结束
  </ion-button>
</ion-item>

<ion-item>
  <ion-button slot="start">
    <ion-icon slot="icon-only" name="navigate"></ion-icon>
  </ion-button>
  <ion-label>纯图标按钮</ion-label>
  <ion-button slot="end">
    <ion-icon slot="icon-only" name="star"></ion-icon>
  </ion-button>
</ion-item>

<ion-item>
  <ion-label>按钮尺寸</ion-label>
  <ion-button slot="end" size="small"> 小号 </ion-button>
  <ion-button slot="end" size="default"> 默认 </ion-button>
  <ion-button slot="end" size="large"> 大号 </ion-button>
</ion-item>
```