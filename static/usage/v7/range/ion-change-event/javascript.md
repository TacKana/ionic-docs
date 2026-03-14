```html
<ion-range aria-label="带有 ionChange 事件的滑动条"></ion-range>

<script>
  const range = document.querySelector('ion-range');

  range.addEventListener('ionChange', ({ detail }) => {
    console.log('ionChange 事件触发值：' + detail.value);
  });
</script>
```