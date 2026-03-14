```html
<ion-list>
  <!-- 默认情况下拖拽排序功能是禁用的，启用后可以通过拖放来重新排序项目 -->
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
    // `from` 和 `to` 属性分别记录了拖拽开始和结束时项目的索引位置
    console.log('从索引', detail.from, '拖拽到', detail.to);

    // 完成重新排序，并根据手势结束的位置将项目定位到 DOM 中。
    // 此方法也可以由 reorder group 直接调用。
    detail.complete();
  });
</script>
```