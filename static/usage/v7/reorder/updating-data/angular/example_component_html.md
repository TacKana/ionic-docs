```html
<ion-list>
  <!-- 默认情况下重新排序手势是禁用的，启用后即可拖拽项目进行排序 -->
  <!-- 将 $event 转换为 $any 是针对此 bug 的临时修复方案 https://github.com/ionic-team/ionic-framework/issues/24245 -->
  <ion-reorder-group [disabled]="false" (ionItemReorder)="handleReorder($any($event))">
    @for (item of items; track item) {
    <ion-item>
      <ion-label> 项目 {{ item }} </ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    }
  </ion-reorder-group>
</ion-list>
```