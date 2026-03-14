```html
<ion-list>
  <ion-item>
    <ion-select aria-label="Fruit" placeholder="请选择水果">
      <ion-select-option value="apples">苹果</ion-select-option>
      <ion-select-option value="oranges">橙子</ion-select-option>
      <ion-select-option value="bananas">香蕉</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>

<script>
  const select = document.querySelector('ion-select');

  select.addEventListener('ionChange', (e) => {
    console.log(`ionChange 事件触发，值为：${e.detail.value}`);
  });

  select.addEventListener('ionCancel', () => {
    console.log('ionCancel 事件触发');
  });

  select.addEventListener('ionDismiss', () => {
    console.log('ionDismiss 事件触发');
  });
</script>
```