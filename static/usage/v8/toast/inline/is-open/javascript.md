```html
<ion-header>
  <ion-toolbar>
    <ion-title>内联 Toast</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" onclick="toast.isOpen = true">打开</ion-button>
  <ion-toast duration="5000" message="此 toast 将在 5 秒后关闭"></ion-toast>
</ion-content>

<script>
  var toast = document.querySelector('ion-toast');
  toast.addEventListener('didDismiss', () => {
    toast.isOpen = false;
  });
</script>
```