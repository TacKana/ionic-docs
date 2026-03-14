```html
<ion-list>
  <!-- 默认禁用重新排序手势，启用后可拖放项目 -->
  <ion-reorder-group disabled="false">
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

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
    // `from` 和 `to` 属性分别表示拖拽开始和结束时项目的索引位置
    console.log('从索引', detail.from, '拖拽到', detail.to);

    // 完成重新排序，根据手势结束位置将项目定位到 DOM 中
    // 此方法也可以由重新排序组直接调用
    detail.complete();
  });
</script>
```