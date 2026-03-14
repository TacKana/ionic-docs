```html
<ion-list>
  <!-- 默认禁用了重新排序手势，启用它即可拖放项目 -->
  <ion-reorder-group disabled="false">
    <ion-item>
      <ion-label>Buy groceries</ion-label>
      <ion-icon name="warning" color="warning" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    <ion-item>
      <ion-label>Call the bank</ion-label>
      <ion-icon name="warning" color="warning" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    <ion-item>
      <ion-label>Finish project report</ion-label>
      <ion-icon name="ellipse" color="light" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    <ion-item>
      <ion-label>Book flight tickets</ion-label>
      <ion-icon name="ellipse" color="light" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    <ion-item>
      <ion-label>Read a book</ion-label>
      <ion-icon name="caret-down" color="secondary" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
  </ion-reorder-group>
</ion-list>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');
  const icons = document.querySelectorAll('ion-icon');
  reorderGroup.addEventListener('ionReorderStart', ({ detail }) => {
    console.log('开始重新排序');

    // 当重新排序开始时隐藏图标
    icons.forEach((icon) => {
      icon.style.opacity = 0;
    });
  });

  reorderGroup.addEventListener('ionReorderEnd', ({ detail }) => {
    console.log('从索引', detail.from, '拖动到', detail.to);

    // 再次显示图标
    icons.forEach((icon) => {
      icon.style.opacity = 1;
    });

    // 完成重新排序
    detail.complete();
  });
</script>
```