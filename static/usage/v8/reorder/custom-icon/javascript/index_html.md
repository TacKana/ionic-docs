```html
<ion-list>
  <!-- 默认情况下重新排序手势是禁用的，启用后即可拖拽项目 -->
  <ion-reorder-group disabled="false">
    <ion-item>
      <ion-label> Item 1 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 2 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 3 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 4 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>

    <ion-item>
      <ion-label> Item 5 </ion-label>
      <ion-reorder slot="end">
        <ion-icon name="pizza"></ion-icon>
      </ion-reorder>
    </ion-item>
  </ion-reorder-group>
</ion-list>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  reorderGroup.addEventListener('ionReorderEnd', ({ detail }) => {
    // `from` 和 `to` 属性分别包含拖拽开始和结束时项目的索引
    console.log('Dragged from index', detail.from, 'to', detail.to);

    // 完成重新排序，并根据手势结束位置将项目定位在DOM中。
    // 此方法也可以由重新排序组直接调用。
    detail.complete();
  });
</script>
```