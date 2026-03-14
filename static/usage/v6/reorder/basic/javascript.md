```html
<ion-list>
  <!-- 默认情况下重新排序手势是禁用的，启用后可以拖放项目 -->
  <ion-reorder-group disabled="false">
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

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
    // `from`和`to`属性分别包含项目开始拖拽和结束时的索引
    console.log('从索引', detail.from, '拖拽到', detail.to);

    // 完成重新排序，并根据手势结束位置在DOM中定位项目
    // 此方法也可以由重新排序组直接调用
    detail.complete();
  });
</script>
```