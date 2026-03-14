```html
<ion-button onclick="presentAlert()">点击我</ion-button>

<script>
  async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = '选择你最喜欢的颜色';
    alert.buttons = ['确定'];
    alert.inputs = [
      {
        label: '红色',
        type: 'radio',
        value: 'red',
      },
      {
        label: '蓝色',
        type: 'radio',
        value: 'blue',
      },
      {
        label: '绿色',
        type: 'radio',
        value: 'green',
      },
    ];

    document.body.appendChild(alert);
    await alert.present();
  }
</script>
```