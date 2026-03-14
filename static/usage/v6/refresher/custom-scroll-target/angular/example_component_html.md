```html
<ion-header>
  <ion-toolbar>
    <ion-title>下拉刷新</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [scrollY]="false">
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <div class="ion-content-scroll-host ion-padding">
    <p>向下拉动此内容即可触发刷新。</p>
  </div>
</ion-content>
```