```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="#"></ion-back-button>
    </ion-buttons>
    <ion-title>显示设置</ion-title>
    <ion-buttons slot="end">
      <ion-button color="dark">
        <ion-icon slot="icon-only" ios="person-circle-outline" md="person-circle"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list-header>外观</ion-list-header>
  <ion-list [inset]="true">
    <ion-item [button]="true">文字大小</ion-item>
    <ion-item>
      <ion-toggle justify="space-between">粗体文本</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list-header>亮度</ion-list-header>
  <ion-list [inset]="true">
    <ion-item>
      <ion-range value="40">
        <ion-icon name="sunny-outline" slot="start"></ion-icon>
        <ion-icon name="sunny" slot="end"></ion-icon>
      </ion-range>
    </ion-item>
    <ion-item>
      <ion-toggle justify="space-between" checked>原彩显示</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list [inset]="true">
    <ion-item [button]="true">
      <ion-label>夜览</ion-label>
      <ion-text slot="end" color="medium">晚上 9:00 至上午 8:00</ion-text>
    </ion-item>
  </ion-list>
</ion-content>
```