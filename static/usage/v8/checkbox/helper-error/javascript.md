```html
<form id="my-form">
  <ion-checkbox helper-text="继续前请同意条款" error-text="必须同意条款才能继续">
    我同意相关条款和条件
  </ion-checkbox>

  <br />

  <ion-button type="submit" size="small">提交</ion-button>
</form>

<script>
  const form = document.getElementById('my-form');
  const agree = form.querySelector('ion-checkbox');

  form.addEventListener('submit', (event) => submit(event));
  agree.addEventListener('ionChange', (event) => validateCheckbox(event));

  const validateCheckbox = (event) => {
    agree.classList.add('ion-touched');

    if (!event.detail.checked) {
      agree.classList.add('ion-invalid');
      agree.classList.remove('ion-valid');
    } else {
      agree.classList.remove('ion-invalid');
      agree.classList.add('ion-valid');
    }
  };

  const submit = (event) => {
    event.preventDefault();

    validateCheckbox({ detail: { checked: agree.checked } });
  };
</script>
```