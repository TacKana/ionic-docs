```html
<ion-list>
  <ion-radio-group value="truncated">
    <ion-item>
      <ion-radio value="truncated">默认显示省略号截断</ion-radio>
    </ion-item>
    <ion-item>
      <ion-radio value="wrapped-part" class="wrapped">通过 label shadow part 应用文本换行</ion-radio>
    </ion-item>
    <ion-item>
      <ion-radio value="wrapped-div">
        <div class="ion-text-wrap">通过包装元素应用 ion-text-wrap 类实现换行</div>
      </ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```