```html
<ion-header>
  <ion-toolbar>
    <ion-title>示例</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content color="light">
  <ion-list [inset]="true">
    <ion-item [button]="true">
      <ion-icon color="danger" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>常规</ion-label>
      <ion-note slot="end">6</ion-note>
    </ion-item>
    <ion-item [button]="true">
      <ion-icon color="tertiary" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>购物</ion-label>
      <ion-note slot="end">15</ion-note>
    </ion-item>
    <ion-item [button]="true">
      <ion-icon color="success" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>清洁</ion-label>
      <ion-note slot="end">3</ion-note>
    </ion-item>
    <ion-item [button]="true">
      <ion-icon color="warning" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>提醒事项</ion-label>
      <ion-note slot="end">8</ion-note>
    </ion-item>
  </ion-list>

  <ion-list [inset]="true">
    <ion-item [button]="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start">
        <div class="unread-indicator"></div>
      </div>
      <ion-label>
        <strong>瑞克·艾斯里</strong>
        <ion-text>永不放弃你</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">
          永不放弃你 永不让你失望 永不转身离去...
        </ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">06:11</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
    <ion-item [button]="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start"></div>
      <ion-label>
        <strong>Ionitron</strong>
        <ion-text>我已拥有感知能力</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">这就是全部。</ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">03:44</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
    <ion-item [button]="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start">
        <div class="unread-indicator"></div>
      </div>
      <ion-label>
        <strong>Steam</strong>
        <ion-text>游戏商店促销</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">
          两年前加入您愿望清单的游戏现在特价啦！
        </ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">昨天</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
    <ion-item [button]="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start"></div>
      <ion-label>
        <strong>Ionic</strong>
        <ion-text>宣布 Ionic 7.0 发布</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">这个版本比 Ionic 6 又多了一个版本号！</ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">昨天</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
  </ion-list>
</ion-content>
```