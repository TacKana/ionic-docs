```html
<ion-button onclick="presentAlert()">点击我</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = '简短标题最佳';
    alert.subHeader = '副标题可选';
    alert.message = '消息应为简短完整的句子。';
    alert.buttons = ['操作'];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>
```