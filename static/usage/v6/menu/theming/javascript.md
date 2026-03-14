```html
<ion-app>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>菜单内容</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">这是菜单内容。</ion-content>
  </ion-menu>
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>菜单</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">点击工具栏中的按钮以打开菜单。</ion-content>
  </div>
</ion-app>

<style>
  ion-menu::part(backdrop) {
    background-color: rgba(255, 0, 255, 0.5);
  }

  ion-menu::part(container) {
    border-radius: 0 20px 20px 0;

    box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
  }
</style>
```