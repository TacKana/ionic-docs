```html
<style>
  ion-action-sheet.my-custom-class {
    --background: #f58840;
    --backdrop-opacity: 0.6;
    --button-background-selected: #e97223;
    --button-color: #000000;
    --color: #fff;
    /* role: "destructive" 按钮在 iOS 上的样式覆盖 */
    --ion-color-danger: #000000;
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