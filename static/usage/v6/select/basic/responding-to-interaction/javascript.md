```html
<ion-list>
  <ion-item>
    <ion-select placeholder="选择水果">
      <ion-select-option value="apples">苹果</ion-select-option>
      <ion-select-option value="oranges">橙子</ion-select-option>
      <ion-select-option value="bananas">香蕉</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
<div id="log" class="ion-padding"></div>

<script>
  const select = document.querySelector('ion-select');
  const log = document.querySelector('#log');

  select.addEventListener('ionChange', (e) => {
    log.insertAdjacentHTML('afterbegin', `<p>ionChange 事件触发，值为: ${e.detail.value}</p>`);
  });

  select.addEventListener('ionCancel', () => {
    log.insertAdjacentHTML('afterbegin', '<p>ionCancel 事件触发</p>');
  });

  select.addEventListener('ionDismiss', () => {
    log.insertAdjacentHTML('afterbegin', '<p>ionDismiss 事件触发</p>');
  });
</script>
```