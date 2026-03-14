```html
<ion-list>
  <ion-item>
    <ion-input label="Alphanumeric Characters"></ion-input>
  </ion-item>
</ion-list>

<script>
  var input = document.querySelector('ion-input');
  input.addEventListener('ionInput', (event) => {
    const value = event.target.value;
    // 移除非字母数字字符
    input.value = value.replace(/[^a-zA-Z0-9]+/g, '');
  });
</script>
```