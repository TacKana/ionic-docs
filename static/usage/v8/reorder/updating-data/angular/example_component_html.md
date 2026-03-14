```html
<ion-list>
  <!-- 默认情况下重新排序手势是禁用的，启用它可以拖放项目 -->
  <!-- 此处将 $event 转换为 $any 是针对此 bug 的临时修复方案：https://github.com/ionic-team/ionic-framework/issues/24245 -->
  <ion-reorder-group [disabled]="false" (ionReorderEnd)="handleReorderEnd($any($event))">
    @for (item of items; track item) {
    <ion-item>
      <ion-label> Item {{ item }} </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    }
  </ion-reorder-group>
</ion-list>
```