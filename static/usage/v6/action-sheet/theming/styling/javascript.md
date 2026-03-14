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

<ion-button onclick="presentActionSheet()">打开</ion-button>

<script>
  async function presentActionSheet() {
    const actionSheet = document.createElement('ion-action-sheet');
    actionSheet.cssClass = 'my-custom-class';
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
  }
</script>
```