```html
<ion-textarea label="默认计数器" label-placement="floating" counter="true" maxlength="20"></ion-textarea>

<ion-textarea
  id="custom-textarea"
  label="自定义计数器格式"
  label-placement="floating"
  counter="true"
  maxlength="20"
></ion-textarea>

<script>
  const customTextarea = document.querySelector('#custom-textarea');
  customTextarea.counterFormatter = (inputLength, maxLength) => `${maxLength - inputLength} characters remaining`;
</script>
```