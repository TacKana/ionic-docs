```html
<ion-button onclick="presentBaselineToast()">打开基线布局提示</ion-button>
<ion-button onclick="presentStackedToast()">点击堆叠布局提示</ion-button>

<script>
  async function presentToast(opts) {
    const toast = await toastController.create(opts);

    await toast.present();
  }

  async function presentBaselineToast() {
    await presentToast({
      duration: 3000,
      message: '这是一条带有长消息和按钮的提示，它们显示在同一行。',
      buttons: [{ text: 'Action With Long Text' }],
    });
  }

  async function presentStackedToast() {
    await presentToast({
      duration: 3000,
      message: '这是一条带有长消息和按钮的提示，按钮显示在下一行。',
      buttons: [{ text: 'Action With Long Text' }],
      layout: 'stacked',
    });
  }
</script>
```