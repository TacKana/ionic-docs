```html
<ion-list>
  <!-- 默认情况下，重新排序手势是禁用的，启用后即可拖放项目 -->
  <!-- 将 $event 强制转换为 $any 是此问题的临时修复方案 https://github.com/ionic-team/ionic-framework/issues/24245 -->
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