```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>Modal</ion-title>
      <ion-buttons slot="end">
        <ion-button (click)="modal.dismiss()">关闭</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>
        <ion-checkbox (ionChange)="checkboxChanged($event)">
          覆盖关闭确认<br />
          <ion-note class="ion-text-wrap"
            >切换复选框以允许直接关闭模态框，无需确认提示。</ion-note
          >
        </ion-checkbox>
      </ion-item>
    </ion-list>
  </ion-content>
</div>
```