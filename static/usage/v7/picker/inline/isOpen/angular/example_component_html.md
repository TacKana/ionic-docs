```html
<ion-button (click)="setOpen(true)">打开</ion-button>
<ion-picker
  [isOpen]="isPickerOpen"
  [columns]="pickerColumns"
  [buttons]="pickerButtons"
  (didDismiss)="setOpen(false)"
></ion-picker>
```