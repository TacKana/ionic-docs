```html
<ion-header id="header">
  <ion-toolbar>
    <ion-title>标题栏</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-button id="headerAnchor">定位到标题栏</ion-button>
  <ion-button id="footerAnchor">定位到页脚</ion-button>

  <ion-toast
    trigger="headerAnchor"
    position="top"
    position-anchor="header"
    message="你好世界！"
    duration="2000"
  ></ion-toast>
  <ion-toast
    trigger="footerAnchor"
    position="bottom"
    position-anchor="footer"
    message="你好世界！"
    duration="2000"
  ></ion-toast>
</ion-content>

<ion-footer id="footer">
  <ion-toolbar>
    <ion-title>页脚</ion-title>
  </ion-toolbar>
</ion-footer>
```