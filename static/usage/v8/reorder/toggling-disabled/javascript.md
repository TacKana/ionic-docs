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

<!-- 拖拽排序手势默认是禁用的，启用后即可拖放项目 -->
<ion-button onClick="toggleReorder()"> 切换拖拽排序 </ion-button>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  reorderGroup.addEventListener('ionReorderEnd', ({ detail }) => {
    // `from` 和 `to` 属性分别记录了拖拽开始和结束时项目的索引
    console.log('从索引', detail.from, '拖拽到', detail.to);

    // 完成排序操作，根据手势结束的位置将项目放置在 DOM 中。
    // 此方法也可以由排序组件直接调用。
    detail.complete();
  });

  function toggleReorder() {
    reorderGroup.disabled = !reorderGroup.disabled;
  }
</script>
```