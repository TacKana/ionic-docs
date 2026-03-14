```html
<ion-button onclick="presentAlert()">点击我</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = '请输入您的信息';
    alert.buttons = ['确定'];
    alert.inputs = [
      {
        placeholder: '姓名',
      },
      {
        placeholder: '昵称（最多8个字符）',
        attributes: {
          maxlength: 8,
        },
      },
      {
        type: 'number',
        placeholder: '年龄',
        min: 1,
        max: 100,
      },
      {
        type: 'textarea',
        placeholder: '关于你自己的一些介绍',
      },
    ];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>
```