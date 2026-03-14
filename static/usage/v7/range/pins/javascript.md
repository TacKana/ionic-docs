```html
<ion-range aria-label="带有数值提示的范围选择器" pin="true"></ion-range>

<script>
  const range = document.querySelector('ion-range');
  range.pinFormatter = (value) => {
    return `${value}%`;
  };
</script>
```