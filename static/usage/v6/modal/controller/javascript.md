```html
<ion-header>
  <ion-toolbar>
    <ion-title>控制器模态框</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" onclick="openModal()">打开</ion-button>
  <p id="message">此模态框示例使用 modalController 来展示和关闭模态框。</p>
</ion-content>

<script>
  var openModal = async () => {
    const div = document.createElement('div');
    div.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button color="medium" onclick="cancel()">取消</ion-button>
          </ion-buttons>
          <ion-title>欢迎</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="confirm()" strong>确认</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label position="stacked">请输入您的姓名</ion-label>
          <ion-input type="text" placeholder="您的姓名"></ion-input>
        </ion-item>
      </ion-content>
      `;

    const modal = await modalController.create({
      component: div,
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      document.querySelector('#message').innerHTML = `您好，${data}！`;
    }
  };

  function cancel() {
    modalController.dismiss(null, 'cancel');
  }

  function confirm() {
    const input = document.querySelector('ion-input');
    modalController.dismiss(input.value, 'confirm');
  }
</script>
```