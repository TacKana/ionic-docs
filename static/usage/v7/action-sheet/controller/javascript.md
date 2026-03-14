```html
<ion-button onclick="presentActionSheet()">打开</ion-button>

<script>
  async function presentActionSheet() {
    const actionSheet = document.createElement('ion-action-sheet');
    actionSheet.header = '操作选项';
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
  }
</script>
```