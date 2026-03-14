```html
<ion-header #header>
  <ion-toolbar>
    <ion-title>应用</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开底部抽屉模态框</ion-button>

  <ion-modal
    trigger="open-modal"
    [initialBreakpoint]="0.25"
    [breakpoints]="[0, 0.25, 0.5, 0.75, 1]"
    (ionDragMove)="onDragMove($event)"
    (ionDragEnd)="onDragEnd($event)"
    (willDismiss)="onWillDismiss()"
  >
    <ng-template>
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>拖动手柄可调整顶部的可见区域</ion-label>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```