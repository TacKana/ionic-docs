```html
<ion-list>
  <ion-item>
    <ion-select
      aria-label="食品"
      [compareWith]="compareWith"
      placeholder="选择食品"
      (ionChange)="handleChange($event)"
    >
      @for (food of foods; track food) {
      <ion-select-option [value]="food">{{ food.name }}</ion-select-option>
      }
    </ion-select>
  </ion-item>
</ion-list>
```