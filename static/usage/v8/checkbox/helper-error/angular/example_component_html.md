```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <ion-checkbox
    formControlName="agree"
    helperText="请先同意条款以继续"
    errorText="您必须同意条款才能继续"
  >
    我同意相关条款与条件
  </ion-checkbox>

  <br />

  <ion-button type="submit" size="small">提交</ion-button>
</form>
```