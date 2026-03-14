```html
<ion-card>
  <ion-card-header>
    <ion-card-title>卡片标题</ion-card-title>
    <ion-card-subtitle>卡片副标题</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    这里是一小段卡片内容的文字描述。不多不少，恰到好处。
  </ion-card-content>

  <ion-button fill="clear">操作一</ion-button>
  <ion-button fill="clear">操作二</ion-button>
</ion-card>

<style>
  /* iOS 系统将副标题显示在标题上方 */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```