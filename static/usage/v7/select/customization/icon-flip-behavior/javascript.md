```html
<ion-list>
  <ion-item>
    <ion-select
      class="always-flip"
      toggle-icon="caret-down-sharp"
      interface="popover"
      label="图标在两种模式下都会翻转"
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
      toggle-icon="caret-down-sharp"
      interface="popover"
      label="图标从不翻转"
      placeholder="选择水果"
    >
      <ion-select-option value="apples">苹果</ion-select-option>
      <ion-select-option value="oranges">橙子</ion-select-option>
      <ion-select-option value="bananas">香蕉</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>

<style>
  ion-select.always-flip::part(icon) {
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ion-select.always-flip.select-expanded::part(icon) {
    transform: rotate(180deg);
  }

  ion-select.never-flip::part(icon) {
    transform: none;
  }
</style>
```