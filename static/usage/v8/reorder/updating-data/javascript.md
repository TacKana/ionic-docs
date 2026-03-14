```html
<ion-list>
  <!-- 默认情况下，重新排序手势是禁用的，启用它即可拖拽项目 -->
  <ion-reorder-group disabled="false"></ion-reorder-group>
</ion-list>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  let items = [1, 2, 3, 4, 5];
  reorderItems(items);

  reorderGroup.addEventListener('ionReorderEnd', ({ detail }) => {
    // 在调用 complete 方法之前，项目将保持拖拽前的顺序
    console.log('Before complete', items);

    // 完成重新排序，并根据手势结束的位置在 DOM 中定位项目
    // 更新 items 变量为新的项目顺序
    items = detail.complete(items);

    // 在 DOM 中重新排序项目
    reorderItems(items);

    // 调用 complete 方法后，项目将处于新的顺序
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