```html
<ion-button (click)="setOpen(true)">点击我</ion-button>
<ion-alert
  [isOpen]="isAlertOpen"
  header="标题应简短"
  subHeader="副标题（可选）"
  message="消息内容应为简短、完整的句子。"
  [buttons]="alertButtons"
  (didDismiss)="setOpen(false)"
></ion-alert>
```