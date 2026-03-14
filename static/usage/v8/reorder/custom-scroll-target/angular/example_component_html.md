```html
<ion-content [scrollY]="false">
  <div class="ion-content-scroll-host">
    <ion-list>
      <!-- 默认情况下重新排序手势是禁用的，请启用它以拖放项目 -->
      <!-- 将 $event 强制转换为 $any 是解决此 bug 的临时方案：https://github.com/ionic-team/ionic-framework/issues/24245 -->
      <ion-reorder-group [disabled]="false" (ionReorderEnd)="handleReorderEnd($any($event))">
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
  </div>
</ion-content>
```