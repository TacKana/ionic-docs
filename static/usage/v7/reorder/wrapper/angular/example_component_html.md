```html
<ion-list>
  <!-- 默认情况下重新排序手势是禁用的，启用后可以拖放项目 -->
  <!-- 将$event转换为$any是此bug的临时修复：https://github.com/ionic-team/ionic-framework/issues/24245 -->
  <ion-reorder-group [disabled]="false" (ionItemReorder)="handleReorder($any($event))">
    <ion-reorder>
      <ion-item>
        <ion-label> Item 1 </ion-label>
      </ion-item>
    </ion-reorder>

    <ion-reorder>
      <ion-item>
        <ion-label> Item 2 </ion-label>
      </ion-item>
    </ion-reorder>

    <ion-reorder>
      <ion-item>
        <ion-label> Item 3 </ion-label>
      </ion-item>
    </ion-reorder>

    <ion-reorder>
      <ion-item>
        <ion-label> Item 4 </ion-label>
      </ion-item>
    </ion-reorder>

    <ion-reorder>
      <ion-item>
        <ion-label> Item 5 </ion-label>
      </ion-item>
    </ion-reorder>
  </ion-reorder-group>
</ion-list>
```