```html
<ion-button id="open-toast">打开 Toast</ion-button>
<ion-toast
  trigger="open-toast"
  [duration]="3000"
  message="Hello Styled World!"
  class="custom-toast"
  [buttons]="toastButtons"
></ion-toast>
```