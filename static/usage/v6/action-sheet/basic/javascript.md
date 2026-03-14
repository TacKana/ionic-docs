```html
<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
  }

  code {
    white-space: pre-wrap;
  }
</style>

<div class="container">
  <ion-button onclick="presentActionSheet()">打开</ion-button>
  <code id="action"></code>
</div>

<script>
  const action = document.getElementById('action');

  async function presentActionSheet() {
    const actionSheet = document.createElement('ion-action-sheet');
    actionSheet.header = '示例标题';
    actionSheet.subHeader = '示例副标题';
    actionSheet.buttons = [
      {
        text: '删除',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: '分享',
        data: {
          action: 'share',
        },
      },
      {
        text: '取消',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ];

    document.body.appendChild(actionSheet);
    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    action.innerText = JSON.stringify(result, null, 2);
  }
</script>
```