```html
<ion-list>
  <ion-item>
    <ion-textarea label="Regular textarea" placeholder="在这里输入内容"></ion-textarea>
  </ion-item>
  <ion-item>
    <ion-textarea [readonly]="true" label="Readonly textarea" placeholder="无法编辑此内容"></ion-textarea>
  </ion-item>
  <ion-item>
    <ion-textarea [disabled]="true" label="Disabled textarea" placeholder="无法在此输入"></ion-textarea>
  </ion-item>
</ion-list>
```