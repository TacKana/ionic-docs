```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="/"></ion-back-button>
    </ion-buttons>
    <ion-title>标题</ion-title>
    <ion-buttons slot="end">
      <ion-button>
        <ion-icon name="create" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content color="light">
  <ion-list inset="true">
    <ion-item>
      <ion-input label="姓名"></ion-input>
    </ion-item>
    <ion-item>
      <ion-checkbox>勾选领取免费宠物狗</ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-toggle>启用通知</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list inset="true">
    <ion-item>
      <ion-label>项目一</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>项目二</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>项目三</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
<ion-footer>
  <ion-toolbar>
    <ion-title>页脚</ion-title>
  </ion-toolbar>
</ion-footer>
```