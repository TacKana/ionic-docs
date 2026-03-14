```html
<ion-list>
  <ion-radio-group value="truncated">
    <ion-item>
      <ion-radio value="truncated">默认使用省略号截断</ion-radio>
    </ion-item>
    <ion-item>
      <ion-radio value="wrapped-part" class="wrapped">应用 text-wrap 到 label shadow part 实现换行</ion-radio>
    </ion-item>
    <ion-item>
      <ion-radio value="wrapped-div">
        <div class="ion-text-wrap">使用 ion-text-wrap 类应用于包装元素实现换行</div>
      </ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>

<style>
  ion-list {
    width: 250px;
  }

  ion-radio.wrapped::part(label) {
    white-space: normal;
  }
</style>
```