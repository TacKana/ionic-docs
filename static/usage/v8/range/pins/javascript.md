```html
<ion-range aria-label="带数值显示的滑动条" pin="true"></ion-range>

<script>
  const range = document.querySelector('ion-range');
  range.pinFormatter = (value) => {
    return `${value}%`;
  };
</script>
```