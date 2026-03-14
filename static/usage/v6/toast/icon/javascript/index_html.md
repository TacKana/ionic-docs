```html
<ion-button onclick="presentToast()">点击我</ion-button>

<script>
  async function presentToast() {
    const toast = await this.toastController.create({
      message: '你好，世界！',
      duration: 1500,
      icon: 'globe',
    });

    await toast.present();
  }
</script>
```