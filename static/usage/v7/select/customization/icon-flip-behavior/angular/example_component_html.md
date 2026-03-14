```html
<ion-list>
  <ion-item>
    <ion-select
      class="always-flip"
      toggleIcon="caret-down-sharp"
      interface="popover"
      label="图标在两种模式下均会翻转"
      placeholder="选择水果"
    >
      <ion-select-option value="apples">苹果</ion-select-option>
      <ion-select-option value="oranges">橙子</ion-select-option>
      <ion-select-option value="bananas">香蕉</ion-select-option>
    </ion-select>
  </ion-item>
  <ion-item>
    <ion-select
      class="never-flip"
      toggleIcon="caret-down-sharp"
      interface="popover"
      label="图标永不翻转"
      placeholder="选择水果"
    >
      <ion-select-option value="apples">苹果</ion-select-option>
      <ion-select-option value="oranges">橙子</ion-select-option>
      <ion-select-option value="bananas">香蕉</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```