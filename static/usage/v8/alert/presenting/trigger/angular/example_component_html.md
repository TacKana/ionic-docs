```html
<ion-button id="present-alert">点击我</ion-button>
<ion-alert
  trigger="present-alert"
  header="简短的标题最好"
  subHeader="副标题是可选的"
  message="消息应是一个简短、完整的句子。"
  [buttons]="alertButtons"
></ion-alert>
```