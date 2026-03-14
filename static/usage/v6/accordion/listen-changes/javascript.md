```html
<ion-accordion-group>
  <ion-accordion value="first">
    <ion-item slot="header" color="light">
      <ion-label>第一个折叠面板</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">第一个内容</div>
  </ion-accordion>
  <ion-accordion value="second">
    <ion-item slot="header" color="light">
      <ion-label>第二个折叠面板</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">第二个内容</div>
  </ion-accordion>
  <ion-accordion value="third">
    <ion-item slot="header" color="light">
      <ion-label>第三个折叠面板</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">第三个内容</div>
  </ion-accordion>
</ion-accordion-group>

<p class="listener-out"></p>

<script>
  const accordionGroup = document.querySelector('ion-accordion-group');
  const listenerOut = document.querySelector('.listener-out');
  const values = ['first', 'second', 'third'];

  accordionGroup.addEventListener('ionChange', (ev) => {
    const collapsedItems = values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    listenerOut.innerText = `
      已展开: ${selectedValue === undefined ? '无' : ev.detail.value}
      已折叠: ${collapsedItems.join(', ')}
    `;
  });
</script>
```