```html
<ion-split-pane when="xs" contentId="main">
  <ion-menu contentId="main">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">菜单内容区域宽度为 350 像素，带有蓝色虚线边框</ion-content>
  </ion-menu>

  <div class="ion-page" id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title>主视图</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">主视图内容区域</ion-content>
  </div>
</ion-split-pane>
```