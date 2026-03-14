```html
<ion-input-otp disabled value="1234"> 禁用 </ion-input-otp>
<ion-input-otp readonly value="1234"> 只读 </ion-input-otp>
<form [formGroup]="myForm">
  <ion-input-otp formControlName="first">{{ getValidationText('first') }}</ion-input-otp>
  <ion-input-otp formControlName="second" class="has-focus">{{ getValidationText('second') }}</ion-input-otp>
</form>
```