```html
<ion-list lines="full">
  <!-- 默认情况下拖拽排序手势是禁用的，启用后即可拖放项目 -->
  <ion-reorder-group disabled="false"></ion-reorder-group>
</ion-list>

<script>
  let items = ['Buy groceries', 'Call the bank', 'Finish project report', 'Book flight tickets', 'Read a book'];
  const reorderGroup = document.querySelector('ion-reorder-group');

  reorderItems(items);

  reorderGroup.addEventListener('ionReorderMove', ({ detail }) => {
    const from = detail.from;
    const to = detail.to;

    if (from !== to) {
      console.log('从索引', from, '拖拽到', to);
    }

    // 获取所有项目并按当前 id (item-1, item-2, ...) 排序
    const itemElements = Array.from(reorderGroup.querySelectorAll('ion-item')).sort((a, b) => {
      const aNum = parseInt(a.id.replace('item-', ''), 10);
      const bNum = parseInt(b.id.replace('item-', ''), 10);
      return aNum - bNum;
    });

    // 向下拖拽：将 from+1 到 to 之间的项目上移，被拖拽项目设置为 to+1
    if (from < to) {
      for (let i = from; i <= to; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (i === from) {
          // 被拖拽项目
          itemNum.textContent = to + 1;
          item.id = `item-${to + 1}`;
        } else {
          // 上移项目
          itemNum.textContent = i;
          item.id = `item-${i}`;
        }
      }
      // 向上拖拽：将 to 到 from-1 之间的项目下移，被拖拽项目设置为 to+1
    } else if (from > to) {
      for (let i = to; i <= from; i++) {
        const item = itemElements[i];
        const itemNum = item.querySelector('b');
        if (i === from) {
          // 被拖拽项目
          itemNum.textContent = to + 1;
          item.id = `item-${to + 1}`;
        } else {
          // 下移项目
          itemNum.textContent = i + 2;
          item.id = `item-${i + 2}`;
        }
      }
    }
  });

  reorderGroup.addEventListener('ionReorderEnd', ({ detail }) => {
    // 完成排序并更新项目数据
    items = detail.complete(items);

    // 重新渲染 DOM 以匹配新顺序
    reorderItems(items);
  });

  function reorderItems(items) {
    reorderGroup.replaceChildren();

    let reordered = '';

    for (let i = 0; i < items.length; i++) {
      reordered += `
        <ion-item id="item-${i + 1}">
          <b slot="start">${i + 1}</b>
          <ion-label>
            ${items[i]}
          </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
      `;
    }

    reorderGroup.innerHTML = reordered;
  }
</script>
```