```html
<ion-list>
  <!-- 将 $event 转换为 $any 是该 bug 的临时修复方案 https://github.com/ionic-team/ionic-framework/issues/24245 -->
  <ion-reorder-group [disabled]="isDisabled" (ionItemReorder)="handleReorder($any($event))">
    <ion-item>
      <ion-label> Item 1 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 2 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 3 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 4 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 5 </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
  </ion-reorder-group>
</ion-list>

<!-- 默认情况下重排序手势是禁用的，启用后可以拖放项目 -->
<ion-button (click)="toggleReorder()"> Toggle Reorder </ion-button>
```