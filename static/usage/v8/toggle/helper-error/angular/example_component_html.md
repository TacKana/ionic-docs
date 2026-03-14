```html
<form [formGroup]="myForm">
  <ion-toggle
    formControlName="wifi"
    helperText="启用后连接到可用网络"
    errorText="必须启用才能访问互联网"
    justify="space-between"
    (ionChange)="onChange()"
  >
    Wi-Fi
  </ion-toggle>
</form>
```