```html
<ion-list>
  <ion-item-sliding>
    <ion-item>
      <ion-label>带右侧选项的滑动项</ion-label>
    </ion-item>

    <ion-item-options>
      <ion-item-option>收藏</ion-item-option>
      <ion-item-option color="danger">删除</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="success">归档</ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>带左侧选项的滑动项</ion-label>
    </ion-item>
  </ion-item-sliding>

  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="success">归档</ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>双侧带选项的滑动项</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option>收藏</ion-item-option>
      <ion-item-option color="danger">删除</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```