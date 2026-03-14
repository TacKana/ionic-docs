```html
<ion-list>
  <!-- 默认情况下，重新排序手势是禁用的，启用后即可拖拽项目 -->
  <!-- 将 $event 类型转换为 $any 是临时修复此 bug 的方案：https://github.com/ionic-team/ionic-framework/issues/24245 -->
  <ion-reorder-group
    [disabled]="false"
    (ionReorderStart)="handleReorderStart()"
    (ionReorderEnd)="handleReorderEnd($any($event))"
  >
    @for (item of items; track item; let i = $index) {
    <ion-item>
      <ion-label>{{ item.label }}</ion-label>
      <ion-icon #icon [name]="item.icon" [color]="item.color" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    }
  </ion-reorder-group>
</ion-list>
```