```html
<ion-button onclick="actionSheet.isOpen = true">打开</ion-button>
<ion-action-sheet header="操作"></ion-action-sheet>

<script>
  var actionSheet = document.querySelector('ion-action-sheet');

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

  actionSheet.addEventListener('ionActionSheetDidDismiss', (event) => {
    actionSheet.isOpen = false;
  });
</script>
```