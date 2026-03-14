```html
<ion-list>
  <ion-item>
    <ion-select
      placeholder="选择水果"
      (ionChange)="handleChange($event)"
      (ionCancel)="pushLog('ionCancel fired')"
      (ionDismiss)="pushLog('ionDismiss fired')"
    >
      <ion-select-option value="apples">苹果</ion-select-option>
      <ion-select-option value="oranges">橙子</ion-select-option>
      <ion-select-option value="bananas">香蕉</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
<div class="ion-padding">
  <p *ngFor="let log of logs">{{ log }}</p>
</div>
```