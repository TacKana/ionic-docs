```html
<ion-label>图标置于起始位置</ion-label>
<ion-breadcrumbs>
  <ion-breadcrumb href="#home">
    <ion-icon slot="start" name="home"></ion-icon>
    主页
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    <ion-icon slot="start" name="flash"></ion-icon>
    电子产品
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    <ion-icon slot="start" name="camera"></ion-icon>
    相机
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    <ion-icon slot="start" name="film"></ion-icon>
    胶片
  </ion-breadcrumb>
</ion-breadcrumbs>

<ion-label class="ion-margin-top">图标置于末尾位置</ion-label>
<ion-breadcrumbs>
  <ion-breadcrumb href="#home">
    主页
    <ion-icon slot="end" name="home"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#electronics">
    电子产品
    <ion-icon slot="end" name="flash"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#cameras">
    相机
    <ion-icon slot="end" name="camera"></ion-icon>
  </ion-breadcrumb>
  <ion-breadcrumb href="#film">
    胶片
    <ion-icon slot="end" name="film"></ion-icon>
  </ion-breadcrumb>
</ion-breadcrumbs>
```