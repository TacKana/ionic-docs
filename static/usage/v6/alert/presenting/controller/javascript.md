```html
<ion-button onclick="presentAlert()">点击我</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = '警告';
    alert.subHeader = '重要信息';
    alert.message = '这是一个警告！';
    alert.buttons = ['确定'];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>
```