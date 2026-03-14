```html
<ion-button id="open-loading">显示加载</ion-button>
<ion-loading class="custom-loading" trigger="open-loading" message="加载中..." duration="3000"></ion-loading>

<style>
  ion-loading.custom-loading {
    --background: #e3edff;
    --spinner-color: #1c6dff;

    color: #1c6dff;
  }
</style>
```