```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开底部弹窗</ion-button>

  <ion-modal trigger="open-modal" [initialBreakpoint]="1" [breakpoints]="[0, 1]">
    <ng-template>
      <div class="block">内容区块</div>
    </ng-template>
  </ion-modal>
</ion-content>
```