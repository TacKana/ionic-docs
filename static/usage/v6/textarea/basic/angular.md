```html
<ion-list>
  <ion-item>
    <ion-label>常规文本区域</ion-label>
    <ion-textarea placeholder="在此输入内容"></ion-textarea>
  </ion-item>
  <ion-item>
    <ion-label>只读文本区域</ion-label>
    <ion-textarea [readonly]="true" placeholder="无法编辑此项"></ion-textarea>
  </ion-item>
  <ion-item>
    <ion-label>禁用文本区域</ion-label>
    <ion-textarea [disabled]="true" placeholder="无法在此输入"></ion-textarea>
  </ion-item>
</ion-list>
```