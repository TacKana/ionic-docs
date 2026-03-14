```html
<div class="container">
  <ion-button id="top-center">侧边=顶部，对齐=居中</ion-button>
  <ion-popover trigger="top-center" side="top" alignment="center">
    <ion-content class="ion-padding">你好，世界！</ion-content>
  </ion-popover>

  <ion-button id="bottom-start">侧边=底部，对齐=起始</ion-button>
  <ion-popover trigger="bottom-start" side="bottom" alignment="start">
    <ion-content class="ion-padding">你好，世界！</ion-content>
  </ion-popover>

  <ion-button id="left-start">侧边=左侧，对齐=起始</ion-button>
  <ion-popover trigger="left-start" side="left" alignment="start">
    <ion-content class="ion-padding">你好，世界！</ion-content>
  </ion-popover>

  <ion-button id="right-end">侧边=右侧，对齐=结束</ion-button>
  <ion-popover trigger="right-end" side="right" alignment="end">
    <ion-content class="ion-padding">你好，世界！</ion-content>
  </ion-popover>
</div>

<style>
  ion-popover {
    --width: 80px;
  }

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 80px;
  }
</style>
```