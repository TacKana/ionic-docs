```html
<ion-button id="open-toast">打开提示框</ion-button>
<ion-toast trigger="open-toast" duration="3000" message="Hello World!"></ion-toast>

<script>
  const toast = document.querySelector('ion-toast');

  toast.buttons = [
    {
      text: '更多信息',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: '关闭',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];

  toast.addEventListener('ionToastDidDismiss', (event) => {
    const { role } = event.detail;
    console.log(`Dismissed with role: ${role}`);
  });
</script>
```