```html
<ion-button (click)="setOpen(true)">打开</ion-button>
<ion-action-sheet
  [isOpen]="isActionSheetOpen"
  header="操作"
  [buttons]="actionSheetButtons"
  (didDismiss)="setOpen(false)"
></ion-action-sheet>
```