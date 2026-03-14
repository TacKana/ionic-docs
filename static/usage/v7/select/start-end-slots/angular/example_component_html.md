```html
<ion-list>
  <ion-item>
    <ion-select labelPlacement="stacked" label="Favorite fruit" value="apple">
      <ion-icon slot="start" name="leaf" aria-hidden="true"></ion-icon>
      <ion-select-option value="apple">苹果</ion-select-option>
      <ion-select-option value="banana">香蕉</ion-select-option>
      <ion-select-option value="orange">橙子</ion-select-option>
      <ion-button fill="clear" slot="end" aria-label="Show/hide password">
        <ion-icon slot="icon-only" name="eye" aria-hidden="true"></ion-icon>
      </ion-button>
    </ion-select>
  </ion-item>
</ion-list>
```