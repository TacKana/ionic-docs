```html
<ion-input label="默认计数器" label-placement="floating" counter="true" maxlength="20"></ion-input>

<ion-input
  id="custom-input"
  label="自定义计数器格式"
  label-placement="floating"
  counter="true"
  maxlength="20"
></ion-input>

<script>
  const customInput = document.querySelector('#custom-input');
  customInput.counterFormatter = (inputLength, maxLength) => `${maxLength - inputLength} characters remaining`;
</script>
```