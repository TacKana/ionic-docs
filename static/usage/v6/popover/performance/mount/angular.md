```html
<ion-button id="open-popover">打开弹出层</ion-button>
<ion-popover [keepContentsMounted]="true" trigger="open-popover">
  <ng-template>
    <ion-content class="ion-padding">这段内容在弹出层创建时立即加载。</ion-content>
  </ng-template>
</ion-popover>
```