```html
<ion-range aria-label="Range with ionChange"></ion-range>

<script>
  const range = document.querySelector('ion-range');

  range.addEventListener('ionChange', ({ detail }) => {
    console.log('ionChange 事件触发，值为: ' + detail.value);
  });
</script>
```