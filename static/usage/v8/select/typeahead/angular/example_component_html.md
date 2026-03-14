```html
<ion-content color="light">
  <ion-list [inset]="true">
    <ion-item [button]="true" [detail]="false" id="select-fruits">
      <ion-label>喜爱的水果</ion-label>
      <div slot="end" id="selected-fruits">{{ selectedFruitsText }}</div>
    </ion-item>
  </ion-list>
</ion-content>

<ion-modal trigger="select-fruits" #modal>
  <ng-template>
    <app-typeahead
      class="ion-page"
      title="喜爱的水果"
      [items]="fruits"
      [selectedItems]="selectedFruits"
      (selectionChange)="fruitSelectionChanged($event)"
      (selectionCancel)="modal.dismiss()"
    ></app-typeahead>
  </ng-template>
</ion-modal>
```