```html
<ion-range aria-label="双滑块范围" dual-knobs="true"></ion-range>

<script>
  const range = document.querySelector('ion-range');
  range.value = {
    lower: 20,
    upper: 80,
  };
</script>
```