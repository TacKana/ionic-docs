```html
<ion-content [scrollY]="false">
  <div class="ion-content-scroll-host">
    <ion-list>
      <!-- 默认情况下，重新排序手势处于禁用状态，启用后即可拖放项目 -->
      <!-- 将 $event 转换为 $any 是针对此 bug 的临时修复方案：https://github.com/ionic-team/ionic-framework/issues/24245 -->
      <ion-reorder-group [disabled]="false" (ionItemReorder)="handleReorder($any($event))">
        <ion-item>
          <ion-label> 项目 1 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label> 项目 2 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label> 项目 3 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label> 项目 4 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label> 项目 5 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
      </ion-reorder-group>
    </ion-list>
  </div>
</ion-content>
```