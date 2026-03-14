```html
<ion-range></ion-range>
<ion-label>ionChange 事件触发值：<span id="lastValue"></span></ion-label>

<script>
  const range = document.querySelector('ion-range');
  const lastEmittedValue = document.querySelector('#lastValue');

  range.addEventListener('ionChange', ({ detail }) => {
    lastEmittedValue.innerHTML = detail.value;
  });
</script>
```