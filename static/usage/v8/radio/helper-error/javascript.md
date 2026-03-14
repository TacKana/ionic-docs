```html
<form id="my-form">
  <ion-radio-group helper-text="请选择你最喜欢的水果" error-text="此项为必填项">
    <ion-radio value="grapes">葡萄</ion-radio><br />
    <ion-radio value="strawberries">草莓</ion-radio><br />
    <ion-radio value="pineapple">菠萝</ion-radio><br />
    <ion-radio value="cherries">樱桃</ion-radio>
  </ion-radio-group>

  <br />

  <ion-button type="submit" size="small">提交</ion-button>
</form>

<script>
  const form = document.getElementById('my-form');
  const favFruit = form.querySelector('ion-radio-group');

  form.addEventListener('submit', (event) => submit(event));
  favFruit.addEventListener('ionChange', (event) => validateRadioGroup(event));

  const validateRadioGroup = (event) => {
    favFruit.classList.add('ion-touched');

    if (!event.detail.value) {
      favFruit.classList.add('ion-invalid');
      favFruit.classList.remove('ion-valid');
    } else {
      favFruit.classList.remove('ion-invalid');
      favFruit.classList.add('ion-valid');
    }
  };

  const submit = (event) => {
    event.preventDefault();

    validateRadioGroup({ detail: { value: favFruit.value } });
  };
</script>
```