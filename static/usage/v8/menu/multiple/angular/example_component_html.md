```html
<ion-menu menuId="first-menu" contentId="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>首个菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">这是第一个菜单的内容。</ion-content>
</ion-menu>

<ion-menu menuId="second-menu" contentId="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>第二个菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">这是第二个菜单的内容。</ion-content>
</ion-menu>

<ion-menu side="end" contentId="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>右侧菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">这是右侧菜单的内容。</ion-content>
</ion-menu>

<div class="ion-page" id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>点击下方按钮以打开特定菜单。</p>

    <ion-button expand="block" (click)="openFirstMenu()">打开首个菜单</ion-button>
    <ion-button expand="block" (click)="openSecondMenu()">打开第二个菜单</ion-button>
    <ion-button expand="block" (click)="openEndMenu()">打开右侧菜单</ion-button>
  </ion-content>
</div>
```