```html
<ion-breadcrumbs [maxItems]="4" (ionCollapsedClick)="presentPopover($event)">
  <ion-breadcrumb href="#home">首页</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">电子产品</ion-breadcrumb>
  <ion-breadcrumb href="#photography">摄影器材</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">相机</ion-breadcrumb>
  <ion-breadcrumb href="#film">胶片</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35毫米</ion-breadcrumb>
</ion-breadcrumbs>
<ion-popover #popover [isOpen]="isOpen" (didDismiss)="isOpen = false">
  <ng-template>
    <ion-content>
      <ion-list>
        @for (breadcrumb of collapsedBreadcrumbs; track breadcrumb; let last = $last) {
        <ion-item [href]="breadcrumb.href" [lines]="last ? 'none' : null">
          <ion-label>{{ breadcrumb.textContent }}</ion-label>
        </ion-item>
        }
      </ion-list>
    </ion-content>
  </ng-template>
</ion-popover>
```