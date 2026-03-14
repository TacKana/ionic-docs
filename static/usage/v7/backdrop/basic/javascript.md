```html
<style>
  ion-backdrop {
    background: var(--ion-color-dark);
    opacity: 0.3;
  }
</style>

<ion-backdrop visible="true"></ion-backdrop>
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>背景遮罩</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-checkbox>复选框</ion-checkbox>
    </ion-item>
    <ion-button expand="block">按钮</ion-button>
  </ion-content>
</div>
```