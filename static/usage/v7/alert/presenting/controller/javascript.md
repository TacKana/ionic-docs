```html
<ion-button onclick="presentAlert()">点击我</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = '简短的标题最好';
    alert.subHeader = '子标题是可选的';
    alert.message = '消息应为简短完整的句子。';
    alert.buttons = ['操作'];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>
```