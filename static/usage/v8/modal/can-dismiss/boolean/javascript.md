```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开</ion-button>

    <ion-modal trigger="open-modal">
      <ion-header>
        <ion-toolbar>
          <ion-title>模态框</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="dismiss()">关闭</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <p class="ion-padding-horizontal">你必须接受条款和条件才能关闭此模态框。</p>
        <ion-item>
          <ion-checkbox id="terms">
            <div class="ion-text-wrap">你是否接受条款和条件？</div>
          </ion-checkbox>
        </ion-item>
      </ion-content>
    </ion-modal>
  </ion-content>
</div>

<script>
  var modal = document.querySelector('ion-modal');

  modal.canDismiss = false;
  modal.presentingElement = document.querySelector('.ion-page');

  function dismiss() {
    modal.dismiss();
  }

  modal.addEventListener('didPresent', () => {
    var terms = document.getElementById('terms');
    terms.addEventListener('ionChange', (event) => {
      modal.canDismiss = event.detail.checked;
    });
  });
</script>
```