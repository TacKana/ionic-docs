```html
<div>折叠前保留 2 项</div>
<ion-breadcrumbs max-items="4" items-before-collapse="2">
  <ion-breadcrumb href="#home">Home</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
  <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
  <ion-breadcrumb href="#film">Film</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
</ion-breadcrumbs>

<div class="ion-margin-top">折叠前保留 0 项</div>
<ion-breadcrumbs max-items="4" items-before-collapse="0">
  <ion-breadcrumb href="#home">Home</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
  <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
  <ion-breadcrumb href="#film">Film</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
</ion-breadcrumbs>

<div class="ion-margin-top">折叠后保留 2 项</div>
<ion-breadcrumbs max-items="4" items-after-collapse="2">
  <ion-breadcrumb href="#home">Home</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
  <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
  <ion-breadcrumb href="#film">Film</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
</ion-breadcrumbs>

<div class="ion-margin-top">折叠前保留 2 项，折叠后保留 2 项</div>
<ion-breadcrumbs max-items="4" items-before-collapse="2" items-after-collapse="2">
  <ion-breadcrumb href="#home">Home</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
  <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
  <ion-breadcrumb href="#film">Film</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
</ion-breadcrumbs>
```