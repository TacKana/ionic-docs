```html
<ion-button id="present-alert">点击我</ion-button>
<ion-alert trigger="present-alert" header="选择你最喜欢的颜色"></ion-alert>

<script>
  const alert = document.querySelector('ion-alert');

  alert.buttons = ['确定'];
  alert.inputs = [
    {
      label: '红色',
      type: 'radio',
      value: 'red',
    },
    {
      label: '蓝色',
      type: 'radio',
      value: 'blue',
    },
    {
      label: '绿色',
      type: 'radio',
      value: 'green',
    },
  ];
</script>
```