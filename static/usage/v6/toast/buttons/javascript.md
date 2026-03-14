```html
<ion-button onclick="presentToast()">点击我</ion-button>
<p id="handlerResult"></p>
<p id="roleResult"></p>

<script>
  const handlerOutput = document.querySelector('#handlerResult');
  const roleOutput = document.querySelector('#roleResult');

  async function presentToast() {
    const toast = await toastController.create({
      message: '你好，世界！',
      duration: 3000,
      buttons: [
        {
          text: '更多信息',
          role: 'info',
          handler: () => {
            handlerOutput.innerText = '点击了更多信息';
          },
        },
        {
          text: '关闭',
          role: 'cancel',
          handler: () => {
            handlerOutput.innerText = '点击了关闭';
          },
        },
      ],
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    roleOutput.innerText = `以角色 ${role} 关闭`;
  }
</script>
```