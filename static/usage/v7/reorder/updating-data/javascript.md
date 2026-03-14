```html
<ion-list>
  <!-- 默认情况下重排手势是禁用的，启用后即可拖拽项目 -->
  <ion-reorder-group disabled="false"></ion-reorder-group>
</ion-list>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  let items = [1, 2, 3, 4, 5];
  reorderItems(items);

  reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
    // 在调用 complete 方法之前，项目将保持拖拽前的顺序
    console.log('拖拽前顺序', items);

    // 完成重排并根据手势结束位置在 DOM 中定位项目
    // 更新 items 变量为新的项目顺序
    items = detail.complete(items);

    // 在 DOM 中重新排序项目
    reorderItems(items);

    // 调用 complete 方法后，项目将按新顺序排列
    console.log('拖拽后顺序', items);
  });

  function reorderItems(items) {
    reorderGroup.replaceChildren();

    let reordered = '';

    for (let i = 0; i < items.length; i++) {
      reordered += `
        <ion-item>
          <ion-label>
            项目 ${items[i]}
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
      `;
    }

    reorderGroup.innerHTML = reordered;
  }
</script>
```