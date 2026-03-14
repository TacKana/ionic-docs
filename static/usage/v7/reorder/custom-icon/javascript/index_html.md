```html
<ion-list>
  <!-- 默认禁用重新排序手势，启用后可拖放项目 -->
  <ion-reorder-group disabled="false">
    <ion-item>
      <ion-label> 项目 1 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> 项目 2 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> 项目 3 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> 项目 4 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> 项目 5 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>
  </ion-reorder-group>
</ion-list>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
    // `from` 和 `to` 属性分别包含拖动开始和结束时项目的索引
    console.log('从索引', detail.from, '拖拽到', detail.to);

    // 完成重新排序，并根据手势结束位置将项目定位到 DOM 中。
    // 此方法也可由重新排序组件直接调用
    detail.complete();
  });
</script>
```