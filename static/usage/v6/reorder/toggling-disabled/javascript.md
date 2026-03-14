```html
<ion-list>
  <ion-reorder-group>
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

<!-- 重新排序手势默认是禁用的，启用后可以拖放项目 -->
<ion-button onClick="toggleReorder()"> 切换重新排序 </ion-button>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
    // `from` 和 `to` 属性分别包含拖拽开始和结束时项目的索引
    console.log('从索引', detail.from, '拖拽到', detail.to);

    // 完成重新排序，并根据手势结束位置在 DOM 中定位项目。
    // 此方法也可以由重新排序组直接调用
    detail.complete();
  });

  function toggleReorder() {
    reorderGroup.disabled = !reorderGroup.disabled;
  }
</script>
```