```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">打开</ion-button>

    <ion-modal trigger="open-modal" swipe-to-close="true">
      <ion-header>
        <ion-toolbar>
          <ion-title>模态框</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="dismiss()">关闭</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>关闭此模态框时，系统将提示您进行确认。</p>
      </ion-content>
    </ion-modal>
  </ion-content>
</div>

<script>
  var modal = document.querySelector('ion-modal');

  modal.canDismiss = promptClose;
  modal.presentingElement = document.querySelector('.ion-page');

  function dismiss() {
    modal.dismiss();
  }

  async function promptClose() {
    const actionSheet = document.createElement('ion-action-sheet');

    actionSheet.header = '确定关闭吗？';
    actionSheet.buttons = [
      {
        text: '是',
        role: 'confirm',
      },
      {
        text: '否',
        role: 'cancel',
      },
    ];
    document.body.appendChild(actionSheet);
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();

    return role === 'confirm';
  }
</script>
```