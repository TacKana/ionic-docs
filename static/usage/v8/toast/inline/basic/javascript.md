```html
<ion-header>
  <ion-toolbar>
    <ion-title>内联提示框</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-toast" expand="block">打开</ion-button>
  <p id="message">这个提示框示例使用了触发器，当按钮被点击时会自动打开提示框。</p>
  <ion-toast trigger="open-toast" message="此提示框将在5秒后消失" duration="5000"></ion-toast>
</ion-content>
```