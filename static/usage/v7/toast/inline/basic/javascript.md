```html
<ion-header>
  <ion-toolbar>
    <ion-title>内联 Toast</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-toast" expand="block">打开</ion-button>
  <p id="message">此 toast 示例使用触发器，当按钮被点击时会自动打开一个 toast。</p>
  <ion-toast trigger="open-toast" message="此 toast 将在 5 秒后消失" duration="5000"></ion-toast>
</ion-content>
```