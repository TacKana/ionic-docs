```html
<ion-item>
  <ion-checkbox slot="start"></ion-checkbox>
  <ion-label>主题化复选框</ion-label>
</ion-item>

<style>
  ion-checkbox {
    --size: 32px;
    --background-checked: #6815ec;
  }

  ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #6815ec;
  }
</style>
```