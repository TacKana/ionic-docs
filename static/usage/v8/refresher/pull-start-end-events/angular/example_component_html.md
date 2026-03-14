```html
<ion-header>
  <ion-toolbar>
    <ion-title>下拉刷新</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-refresher
    id="refresher"
    slot="fixed"
    (ionPullStart)="handlePullStart()"
    (ionPullEnd)="handlePullEnd($event)"
    (ionRefresh)="handleRefresh($event)"
  >
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <p>向下拉动此处内容以触发刷新。</p>

  <ion-list lines="full">
    @for (item of items; track item; let i = $index) {
    <ion-item>
      <ion-checkbox slot="start" [checked]="item.checked" [disabled]="item.disabled"></ion-checkbox>
      <ion-label>{{ item.label }}</ion-label>
    </ion-item>
    }
  </ion-list>
</ion-content>
```