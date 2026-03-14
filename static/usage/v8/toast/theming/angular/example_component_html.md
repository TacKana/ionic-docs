```html
<ion-button id="open-toast">显示 Toast</ion-button>
<ion-toast
  trigger="open-toast"
  [duration]="3000"
  message="你好，风格化的世界！"
  class="custom-toast"
  [buttons]="toastButtons"
></ion-toast>
```