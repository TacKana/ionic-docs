```html
<ion-list>
  <ion-radio-group value="truncated">
    <ion-item>
      <ion-radio value="truncated">默认状态下使用省略号截断</ion-radio>
    </ion-item>
    <ion-item>
      <ion-radio value="wrapped-part" class="wrapped">通过 text-wrap 样式应用于标签阴影部分的换行</ion-radio>
    </ion-item>
    <ion-item>
      <ion-radio value="wrapped-div">
        <div class="ion-text-wrap">通过 ion-text-wrap 类应用于包装元素的换行</div>
      </ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```