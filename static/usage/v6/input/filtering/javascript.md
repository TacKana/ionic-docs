```html
<ion-list>
  <ion-item>
    <ion-label>字母数字字符</ion-label>
    <ion-input></ion-input>
  </ion-item>
</ion-list>

<script>
  var input = document.querySelector('ion-input');
  input.addEventListener('ionInput', (ev) => {
    const value = ev.target.value;
    // 移除非字母数字字符
    input.value = value.replace(/[^a-zA-Z0-9]+/g, '');
  });
</script>
```