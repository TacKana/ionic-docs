```html
<ion-card>
  <ion-card-header>
    <ion-card-title>卡片标题</ion-card-title>
    <ion-card-subtitle>卡片副标题</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    <ion-list>
      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="群山剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>项目</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="群山剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>项目</ion-label>
      </ion-item>

      <ion-item>
        <ion-thumbnail slot="start">
          <img alt="群山剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>项目</ion-label>
      </ion-item>

      <ion-item lines="none">
        <ion-thumbnail slot="start">
          <img alt="群山剪影" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>项目</ion-label>
      </ion-item>
    </ion-list>
  </ion-card-content>
</ion-card>

<style>
  ion-item {
    --padding-start: 0;
  }

  /* iOS 将副标题显示在标题上方 */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
```