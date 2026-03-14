```html
<div class="container">
  <ion-button id="open-action-sheet">打开</ion-button>
  <ion-action-sheet
    trigger="open-action-sheet"
    header="示例标题"
    subHeader="示例副标题"
    [buttons]="actionSheetButtons"
    (didDismiss)="logResult($event)"
  ></ion-action-sheet>
</div>
```