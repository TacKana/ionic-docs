```html
<ion-header>
  <ion-toolbar>
    <ion-title>下拉刷新</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
    <ion-refresher-content
      pullingIcon="chevron-down-circle-outline"
      pullingText="下拉刷新"
      refreshingSpinner="circles"
      refreshingText="正在刷新..."
    >
    </ion-refresher-content>
  </ion-refresher>

  <p>向下拉动此内容以触发刷新。</p>
</ion-content>
```