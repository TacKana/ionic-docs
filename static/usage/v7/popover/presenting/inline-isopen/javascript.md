```html
<ion-button>点击我</ion-button>
<ion-popover>
  <ion-content class="ion-padding">你好世界！</ion-content>
</ion-popover>

<script>
  const button = document.querySelector('ion-button');
  const popover = document.querySelector('ion-popover');

  button.addEventListener('click', (e) => {
    popover.event = e;
    popover.isOpen = true;
  });

  popover.addEventListener('didDismiss', () => (popover.isOpen = false));
</script>
```