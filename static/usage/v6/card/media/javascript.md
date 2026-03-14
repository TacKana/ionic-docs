```html
<ion-card>
  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
  <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    这里是一小段用于卡片内容的文本描述。不多不少，恰到好处。
  </ion-card-content>
</ion-card>

<style>
  /* iOS 系统会将副标题置于标题上方 */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```