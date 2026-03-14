```html
<ion-list>
  <!-- 默认情况下重新排序手势是禁用的，需要启用才能拖放项目 -->
  <ion-reorder-group disabled="false"></ion-reorder-group>
</ion-list>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  let items = [1, 2, 3, 4, 5];
  reorderItems(items);

  reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
    // 在调用 complete 方法之前，项目将保持拖拽前的顺序
    console.log('Before complete', items);

    // 完成重新排序并根据手势结束位置在 DOM 中定位项目。
    // 将 items 变量更新为项目的新顺序
    items = detail.complete(items);

    // 在 DOM 中重新排序项目
    reorderItems(items);

    // 调用 complete 方法后，项目将按新顺序排列
    console.log('After complete', items);
  });

  function reorderItems(items) {
    reorderGroup.replaceChildren();

    let reordered = '';

    for (let i = 0; i < items.length; i++) {
      reordered += `
        <ion-item>
          <ion-label>
            Item ${items[i]}
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
      `;
    }

    reorderGroup.innerHTML = reordered;
  }
</script>
```