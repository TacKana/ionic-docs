```html
<ion-header>
  <ion-toolbar>
    <ion-title>内联模态框</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开</ion-button>
  <p id="message">此模态框示例使用触发器，在按钮被点击时自动打开模态框。</p>
  <ion-modal trigger="open-modal">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button onclick="cancel()">取消</ion-button>
        </ion-buttons>
        <ion-title>欢迎</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="confirm()" strong="true">确认</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">请输入您的姓名</ion-label>
        <ion-input type="text" placeholder="您的姓名"></ion-input>
      </ion-item>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');

  function cancel() {
    modal.dismiss(null, 'cancel');
  }

  function confirm() {
    const input = document.querySelector('ion-input');
    modal.dismiss(input.value, 'confirm');
  }

  modal.addEventListener('willDismiss', (ev) => {
    if (ev.detail.role === 'confirm') {
      const message = document.querySelector('#message');
      message.textContent = `Hello ${ev.detail.data}!`;
    }
  });
</script>
```