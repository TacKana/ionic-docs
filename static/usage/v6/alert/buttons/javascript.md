```html
<ion-button onclick="presentAlert()">点击我</ion-button>
<p id="handlerResult"></p>
<p id="roleResult"></p>

<script>
  const handlerOutput = document.querySelector('#handlerResult');
  const roleOutput = document.querySelector('#roleResult');

  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = '警告!';
    alert.buttons = [
      {
        text: '取消',
        role: 'cancel',
        handler: () => {
          handlerOutput.innerText = '警告已取消';
        },
      },
      {
        text: '确认',
        role: 'confirm',
        handler: () => {
          handlerOutput.innerText = '警告已确认';
        },
      },
    ];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    roleOutput.innerText = `以角色: ${role} 关闭`;
  }
</script>
```