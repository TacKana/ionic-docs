```html
<ion-button id="present-alert">点击我</ion-button>
<ion-alert
  trigger="present-alert"
  header="简短的标题最佳"
  subHeader="副标题（可选）"
  message="消息应为简短、完整的句子。"
  [buttons]="alertButtons"
></ion-alert>
```