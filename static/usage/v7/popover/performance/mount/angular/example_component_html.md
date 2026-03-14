```html
<ion-button id="open-popover">打开弹窗</ion-button>
<ion-popover [keepContentsMounted]="true" trigger="open-popover">
  <ng-template>
    <ion-content class="ion-padding">此内容在弹窗创建时即被挂载。</ion-content>
  </ng-template>
</ion-popover>
```