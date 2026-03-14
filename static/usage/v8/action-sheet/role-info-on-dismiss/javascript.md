```html
<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
  }
</style>

<div class="container">
  <ion-button id="open-action-sheet">打开</ion-button>
  <ion-action-sheet
    trigger="open-action-sheet"
    header="示例标题"
    sub-header="示例副标题"
  ></ion-action-sheet>
</div>

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
    console.log(JSON.stringify(event.detail, null, 2));
  });
</script>
```