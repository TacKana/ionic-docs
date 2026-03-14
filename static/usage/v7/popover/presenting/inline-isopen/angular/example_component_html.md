```html
<ion-button (click)="presentPopover($event)">点击我</ion-button>
<ion-popover #popover [isOpen]="isOpen" (didDismiss)="isOpen = false">
  <ng-template>
    <ion-content class="ion-padding">你好，世界！</ion-content>
  </ng-template>
</ion-popover>
```