```html
<ion-button expand="block" onclick="presentToast('top')">在顶部显示提示</ion-button>
<ion-button expand="block" onclick="presentToast('middle')">在中间显示提示</ion-button>
<ion-button expand="block" onclick="presentToast('bottom')">在底部显示提示</ion-button>

<script>
  async function presentToast(position) {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
</script>
```