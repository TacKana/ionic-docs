```html
<ion-card>
  <ion-card-header>
    <ion-card-title>卡片标题</ion-card-title>
    <ion-card-subtitle>卡片副标题</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    这里是卡片内容的简要描述，不多不少，恰到好处。
  </ion-card-content>
</ion-card>

<style>
  /* iOS 系统将副标题显示在标题上方 */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```