```html
<ion-list>
  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="success">
        <ion-icon slot="icon-only" name="archive"></ion-icon>
      </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label>仅带图标的滑动项</ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option>
        <ion-icon slot="icon-only" name="heart"></ion-icon>
      </ion-item-option>
      <ion-item-option color="danger">
        <ion-icon slot="icon-only" name="trash"></ion-icon>
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="success">
        <ion-icon slot="start" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label> 带左侧图标的滑动项 </ion-label>
    </ion-item>

    <ion-item-options side="end">
      <ion-item-option>
        <ion-icon slot="start" name="heart"></ion-icon>
        收藏
      </ion-item-option>
      <ion-item-option color="danger">
        <ion-icon slot="start" name="trash"></ion-icon>
        删除
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="success">
        <ion-icon slot="end" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label> 带右侧图标的滑动项 </ion-label>
    </ion-item>

    <ion-item-options>
      <ion-item-option>
        <ion-icon slot="end" name="heart"></ion-icon>
        收藏
      </ion-item-option>
      <ion-item-option color="danger">
        <ion-icon slot="end" name="trash"></ion-icon>
        删除
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="success">
        <ion-icon slot="top" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label> 带顶部图标的滑动项 </ion-label>
    </ion-item>

    <ion-item-options>
      <ion-item-option>
        <ion-icon slot="top" name="heart"></ion-icon>
        收藏
      </ion-item-option>
      <ion-item-option color="danger">
        <ion-icon slot="top" name="trash"></ion-icon>
        删除
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>

  <ion-item-sliding>
    <ion-item-options side="start">
      <ion-item-option color="success">
        <ion-icon slot="bottom" name="archive"></ion-icon>
        归档
      </ion-item-option>
    </ion-item-options>

    <ion-item>
      <ion-label> 带底部图标的滑动项 </ion-label>
    </ion-item>

    <ion-item-options>
      <ion-item-option>
        <ion-icon slot="bottom" name="heart"></ion-icon>
        收藏
      </ion-item-option>
      <ion-item-option color="danger">
        <ion-icon slot="bottom" name="trash"></ion-icon>
        删除
      </ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</ion-list>
```