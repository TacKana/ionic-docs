```html
<ion-header>
  <ion-toolbar>
    <ion-title>示例</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content color="light">
  <ion-list inset="true">
    <ion-item button="true">
      <ion-icon color="danger" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>通用</ion-label>
      <ion-note slot="end">6</ion-note>
    </ion-item>
    <ion-item button="true">
      <ion-icon color="tertiary" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>购物</ion-label>
      <ion-note slot="end">15</ion-note>
    </ion-item>
    <ion-item button="true">
      <ion-icon color="success" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>清洁</ion-label>
      <ion-note slot="end">3</ion-note>
    </ion-item>
    <ion-item button="true">
      <ion-icon color="warning" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>提醒事项</ion-label>
      <ion-note slot="end">8</ion-note>
    </ion-item>
  </ion-list>

  <ion-list inset="true">
    <ion-item button="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start">
        <div class="unread-indicator"></div>
      </div>
      <ion-label>
        <strong>Rick Astley</strong>
        <ion-text>Never Gonna Give You Up</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">
          永远不会放弃你，永远不会让你失望，永远不会离开...
        </ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">06:11</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
    <ion-item button="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start"></div>
      <ion-label>
        <strong>Ionitron</strong>
        <ion-text>我已获得感知能力</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">就这些。</ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">03:44</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
    <ion-item button="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start">
        <div class="unread-indicator"></div>
      </div>
      <ion-label>
        <strong>Steam</strong>
        <ion-text>游戏商店促销</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">
          你两年前加入愿望单的游戏现在打折了！
        </ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">昨天</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
    <ion-item button="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start"></div>
      <ion-label>
        <strong>Ionic</strong>
        <ion-text>发布 Ionic 7.0</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">这个版本比 Ionic 6 又多了一个版本号！</ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">昨天</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
  </ion-list>
</ion-content>

<style>
  .unread-indicator {
    background: var(--ion-color-primary);

    width: 10px;
    height: 10px;

    border-radius: 100%;

    position: absolute;

    inset-inline-start: 12px;
    top: 12px;
  }

  .metadata-end-wrapper {
    position: absolute;

    top: 10px;
    inset-inline-end: 10px;

    font-size: 0.8rem;

    display: flex;
    align-items: center;
  }

  ion-label strong {
    display: block;

    max-width: calc(100% - 60px);

    overflow: hidden;

    text-overflow: ellipsis;
  }

  ion-label ion-note {
    font-size: 0.9rem;
  }
</style>
```