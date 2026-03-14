```html
<style>
  ion-action-sheet.my-custom-class .action-sheet-group {
    background: #f58840;
  }

  ion-action-sheet.my-custom-class .action-sheet-title {
    color: #fff;
  }

  ion-action-sheet.my-custom-class .action-sheet-cancel::after {
    background: #e97223;
  }

  ion-action-sheet.my-custom-class .action-sheet-button,
  ion-action-sheet.my-custom-class .action-sheet-button.ion-focused {
    color: #000000;
  }

  @media (any-hover: hover) {
    ion-action-sheet.my-custom-class .action-sheet-button:hover {
      color: #000000;
    }
  }

  ion-action-sheet.my-custom-class ion-backdrop {
    opacity: 0.6;
  }
</style>

<ion-button id="open-action-sheet">打开</ion-button>
<ion-action-sheet
  trigger="open-action-sheet"
  class="my-custom-class"
  header="示例标题"
  sub-header="示例副标题"
></ion-action-sheet>

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
</script>
```