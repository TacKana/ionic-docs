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
          <ion-title>弹窗</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="dismiss()">关闭</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>
          请使用提供的“关闭”按钮来关闭此弹窗。请注意，滑动弹窗并不会使其关闭。
        </p>
      </ion-content>
    </ion-modal>
  </ion-content>
</div>

<script>
  var modal = document.querySelector('ion-modal');

  modal.canDismiss = (data, role) => role !== 'gesture';
  modal.presentingElement = document.querySelector('.ion-page');

  function dismiss() {
    modal.dismiss();
  }
</script>
```