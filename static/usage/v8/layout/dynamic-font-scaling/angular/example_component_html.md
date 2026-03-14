```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/"></ion-back-button>
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
  <ion-list [inset]="true">
    <ion-item>
      <ion-input label="姓名"></ion-input>
    </ion-item>
    <ion-item>
      <ion-checkbox>勾选领取免费小狗</ion-checkbox>
    </ion-item>
    <ion-item>
      <ion-toggle>启用通知</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list [inset]="true">
    <ion-item>
      <ion-label>项目 1</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>项目 2</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>项目 3</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
<ion-footer>
  <ion-toolbar>
    <ion-title>页脚</ion-title>
  </ion-toolbar>
</ion-footer>
```