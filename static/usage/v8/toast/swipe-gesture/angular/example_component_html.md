```html
<ion-content class="ion-padding">
  <ion-button id="open-toast">打开 Toast</ion-button>
  <ion-toast
    message="此 Toast 可通过滑动来关闭"
    trigger="open-toast"
    swipeGesture="vertical"
    position="bottom"
    positionAnchor="footer"
  ></ion-toast>
</ion-content>
<ion-footer id="footer">
  <ion-toolbar>
    <ion-title>页脚</ion-title>
  </ion-toolbar>
</ion-footer>
```