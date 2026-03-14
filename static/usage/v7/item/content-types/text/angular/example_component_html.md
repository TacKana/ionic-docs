```html
<ion-header>
  <ion-toolbar>
    <ion-title>示例</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content color="light">
  <ion-list [inset]="true">
    <ion-item>
      <ion-input label="First Name"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="Last Name"></ion-input>
    </ion-item>
    <ion-item>
      <ion-toggle>
        <ion-label>允许通知</ion-label>
        <ion-note color="medium">随时可以取消订阅</ion-note>
      </ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list [inset]="true">
    <ion-item>
      <ion-textarea label="Comments" labelPlacement="floating" rows="5"></ion-textarea>
    </ion-item>
  </ion-list>

  <ion-note color="medium" class="ion-margin-horizontal">
    您的评论将被匿名处理，仅用于提升我们产品的可靠性。
  </ion-note>
</ion-content>
```