```html
<ion-list>
  <ion-item>
    <ion-select
      aria-label="Fruit"
      placeholder="选择水果"
      (ionChange)="handleChange($event)"
      (ionCancel)="handleCancel()"
      (ionDismiss)="handleDismiss()"
    >
      <ion-select-option value="apples">苹果</ion-select-option>
      <ion-select-option value="oranges">橙子</ion-select-option>
      <ion-select-option value="bananas">香蕉</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```