```html
<style>
  ion-backdrop {
    opacity: 0.9;
    background: var(--ion-color-primary);
  }

  #box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--ion-background-color, #fff);
    width: 90%;
    height: 100px;
    border-radius: 10px;
  }
</style>

<ion-backdrop visible="true"></ion-backdrop>
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>背景遮罩层</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>
      这是一段示例文本，用于展示背景遮罩层效果。当遮罩层显示时，页面内容会被半透明层覆盖，同时可以突出显示前景元素。
    </p>
  </ion-content>
</div>
<div id="box">
  <ion-checkbox color="light"></ion-checkbox>
  <ion-button class="ion-margin-start" color="light">可点击按钮</ion-button>
</div>
```