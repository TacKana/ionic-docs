```html
<ion-backdrop [visible]="true"></ion-backdrop>
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>背景遮罩</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>
      这是一段示例文本，用于展示背景遮罩效果。当遮罩层显示时，页面内容会被半透明层覆盖，通常用于模态对话框或加载状态。
    </p>
  </ion-content>
</div>
<div id="box">
  <ion-checkbox color="light"></ion-checkbox>
  <ion-button class="ion-margin-start" color="light">可点击按钮</ion-button>
</div>
```