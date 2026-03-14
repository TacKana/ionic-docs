```html
<ion-list>
  <ion-item>
    <ion-input id="card" label="Card number" placeholder="0000 0000 0000 0000"></ion-input>
  </ion-item>
  <ion-item>
    <ion-input id="phone" label="US phone number" placeholder="+1 (xxx) xxx-xxxx"></ion-input>
  </ion-item>
</ion-list>

<script>
  async function initPhoneMask() {
    const ionInput = document.querySelector('#phone');
    const nativeEl = await ionInput.getInputElement();
    const phoneMaskOptions = {
      mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    };
    new window.Maskito(nativeEl, phoneMaskOptions);

    // 如果需要设置初始值，可以使用 maskitoTransform 确保值有效
    ionInput.value = window.maskitoTransform('5555551212', phoneMaskOptions);
  }

  async function initCardMask() {
    const ionInput = document.querySelector('#card');
    const nativeEl = await ionInput.getInputElement();

    new window.Maskito(nativeEl, {
      mask: [
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(4).fill(/\d/),
        ' ',
        ...Array(3).fill(/\d/),
      ],
    });
  }

  window.addEventListener('appload', () => {
    initCardMask();
    initPhoneMask();
  });
</script>
```