```html
<style>
  ion-action-sheet.my-custom-class {
    --background: #f58840;
    --backdrop-opacity: 0.6;
    --button-background-selected: #e97223;
    --button-color: #000000;
    --color: #fff;
    /* role 为 "destructive" 的按钮在 iOS 上的样式覆盖 */
    --ion-color-danger: #000000;
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