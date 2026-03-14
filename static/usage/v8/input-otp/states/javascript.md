```html
<ion-input-otp disabled value="1234"> 已禁用 </ion-input-otp>
<ion-input-otp readonly value="1234"> 只读 </ion-input-otp>
<ion-input-otp value="12"></ion-input-otp>
<ion-input-otp value="1234" class="has-focus"></ion-input-otp>

<script>
  customElements.whenDefined('ion-input-otp').then(() => {
    const otpInputs = document.querySelectorAll('ion-input-otp:not([disabled]):not([readonly])');

    otpInputs.forEach((input) => {
      // 初始化时标记为已触摸
      input.classList.add('ion-touched');

      // 初始化时进行验证
      validateOtp(input);

      // 添加输入事件监听器以实现实时验证
      input.addEventListener('ionInput', (event) => validateOtp(event.target));
    });
  });

  function validateOtp(input) {
    const value = input.value;

    // 移除现有的验证类
    input.classList.remove('ion-valid');
    input.classList.remove('ion-invalid');

    // 当值恰好为4位数字时，输入有效
    if (value && value.toString().length === 4) {
      input.classList.add('ion-valid');
      input.textContent = '有效';
    } else {
      input.classList.add('ion-invalid');
      input.textContent = '无效';
    }
  }
</script>
```