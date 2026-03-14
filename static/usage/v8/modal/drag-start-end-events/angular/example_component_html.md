```html
<ion-header #header>
  <ion-toolbar>
    <ion-title>应用</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开底部模态框</ion-button>

  <ion-modal
    trigger="open-modal"
    [initialBreakpoint]="0.25"
    [breakpoints]="[0, 0.25, 0.5, 0.75, 1]"
    (ionDragStart)="onDragStart()"
    (ionDragEnd)="onDragEnd($event)"
  >
    <ng-template>
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>拖动手柄以调整页头的可见性。</ion-label>
        </div>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```