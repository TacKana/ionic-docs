```html
<ion-toolbar>
  <ion-buttons slot="start">
    <ion-button> Start </ion-button>
  </ion-buttons>
  <ion-title>起始/结束按钮</ion-title>
  <ion-buttons slot="end">
    <ion-button> End </ion-button>
  </ion-buttons>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button> Secondary </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button> Primary </ion-button>
  </ion-buttons>
  <ion-title>主要/次要按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button>
      <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>图标按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button fill="solid">
      <ion-icon slot="start" name="person-circle"></ion-icon>
      联系人
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button fill="solid">
      帮助
      <ion-icon slot="end" name="help-circle"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>实心按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="secondary">
    <ion-button fill="outline">
      <ion-icon slot="start" name="star"></ion-icon>
      收藏
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button fill="outline">
      编辑
      <ion-icon slot="end" name="create"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>描边按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="start">
    <ion-back-button default-href="#"></ion-back-button>
  </ion-buttons>
  <ion-title>返回按钮</ion-title>
</ion-toolbar>

<ion-toolbar>
  <ion-buttons slot="start">
    <ion-menu-button auto-hide="false"></ion-menu-button>
  </ion-buttons>
  <ion-title>菜单按钮</ion-title>
</ion-toolbar>
```