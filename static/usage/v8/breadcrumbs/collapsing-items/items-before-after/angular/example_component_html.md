```html
<div>折叠前显示项数 = 2</div>
<ion-breadcrumbs [maxItems]="4" [itemsBeforeCollapse]="2">
  <ion-breadcrumb href="#home">首页</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
  <ion-breadcrumb href="#photography">摄影器材</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
  <ion-breadcrumb href="#film">胶卷</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35毫米</ion-breadcrumb>
</ion-breadcrumbs>

<div class="ion-margin-top">折叠前显示项数 = 0</div>
<ion-breadcrumbs [maxItems]="4" [itemsBeforeCollapse]="0">
  <ion-breadcrumb href="#home">首页</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
  <ion-breadcrumb href="#photography">摄影器材</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
  <ion-breadcrumb href="#film">胶卷</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35毫米</ion-breadcrumb>
</ion-breadcrumbs>

<div class="ion-margin-top">折叠后显示项数 = 2</div>
<ion-breadcrumbs [maxItems]="4" [itemsAfterCollapse]="2">
  <ion-breadcrumb href="#home">首页</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
  <ion-breadcrumb href="#photography">摄影器材</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
  <ion-breadcrumb href="#film">胶卷</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35毫米</ion-breadcrumb>
</ion-breadcrumbs>

<div class="ion-margin-top">折叠前显示项数 = 2, 折叠后显示项数 = 2</div>
<ion-breadcrumbs [maxItems]="4" [itemsBeforeCollapse]="2" [itemsAfterCollapse]="2">
  <ion-breadcrumb href="#home">首页</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
  <ion-breadcrumb href="#photography">摄影器材</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
  <ion-breadcrumb href="#film">胶卷</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35毫米</ion-breadcrumb>
</ion-breadcrumbs>
```