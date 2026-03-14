```html
<ion-input-otp class="custom" separators="all"> 未收到验证码？ <a href="#">重新发送验证码</a> </ion-input-otp>
<ion-input-otp fill="solid" class="custom" separators="all">
  未收到验证码？ <a href="#">重新发送验证码</a>
</ion-input-otp>

<style>
  ion-input-otp.custom {
    --separator-color: rgb(90, 23, 237, 0.12);
    --highlight-color-focused: #5a17ed;
  }

  .input-otp-fill-outline.custom {
    --border-color: rgb(90, 23, 237, 0.6);
    --color: #5a17ed;
  }

  .input-otp-fill-solid.custom {
    --border-color: rgb(90, 23, 237, 0.12);
    --background: rgb(90, 23, 237, 0.12);
  }
</style>
```