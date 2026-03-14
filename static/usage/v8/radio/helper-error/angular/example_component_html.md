```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
  <ion-radio-group
    formControlName="favFruit"
    helperText="请选择您最喜欢的水果"
    errorText="此字段为必填项"
  >
    <ion-radio value="grapes">葡萄</ion-radio><br />
    <ion-radio value="strawberries">草莓</ion-radio><br />
    <ion-radio value="pineapple">菠萝</ion-radio><br />
    <ion-radio value="cherries">樱桃</ion-radio>
  </ion-radio-group>

  <br />

  <ion-button type="submit" size="small">提交</ion-button>
</form>
```