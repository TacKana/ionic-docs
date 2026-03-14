```html
<ion-list lines="full">
  <!-- 默认情况下重新排序手势是禁用的，启用它才能拖放项目 -->
  <!-- 将 $event 强制转换为 $any 是对此 bug 的临时修复 https://github.com/ionic-team/ionic-framework/issues/24245 -->
  <ion-reorder-group
    [disabled]="false"
    (ionReorderMove)="handleReorderMove($any($event))"
    (ionReorderEnd)="handleReorderEnd($any($event))"
  >
    @for (item of items; track item; let i = $index) {
    <ion-item [id]="'item-' + (i + 1)">
      <b slot="start">{{ i + 1 }}</b>
      <ion-label>{{ item }}</ion-label>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    }
  </ion-reorder-group>
</ion-list>
```