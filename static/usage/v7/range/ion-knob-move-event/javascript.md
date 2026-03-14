```html
<ion-range aria-label="带有旋钮事件的滑动条"></ion-range>

<script>
  const range = document.querySelector('ion-range');

  range.addEventListener('ionKnobMoveStart', ({ detail }) => {
    console.log('ionKnobMoveStart:', detail.value);
  });

  range.addEventListener('ionKnobMoveEnd', ({ detail }) => {
    console.log('ionKnobMoveEnd:', detail.value);
  });
</script>
```