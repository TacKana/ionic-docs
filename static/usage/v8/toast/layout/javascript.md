```html
<ion-button id="open-inline-toast">打开基线布局提示</ion-button>
<ion-button id="open-stacked-toast">打开堆叠布局提示</ion-button>
<ion-toast
  trigger="open-inline-toast"
  duration="3000"
  message="这是一个包含长消息和按钮的提示，它们显示在同一行。"
></ion-toast>
<ion-toast
  trigger="open-stacked-toast"
  duration="3000"
  message="这是一个包含长消息和按钮的提示，按钮显示在下一行。"
  layout="stacked"
></ion-toast>

<script>
  const toasts = document.querySelectorAll('ion-toast');

  toasts.forEach((toast) => {
    toast.buttons = [
      {
        text: '操作按钮（长文本）',
      },
    ];
  });
</script>
```