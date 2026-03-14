```html
<ion-header>
  <ion-toolbar>
    <ion-title>内联模态框</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button expand="block" (click)="setOpen(true)">打开</ion-button>
  <ion-modal [isOpen]="isModalOpen">
    <ng-template>
      <ion-header>
        <ion-toolbar>
          <ion-title>模态框</ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="setOpen(false)">关闭</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <p>
          这里是模态框内容。您可以在此处添加任何文本、表单、图片或其他组件。模态框通常用于展示额外信息或进行特定操作，而无需离开当前页面。
        </p>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```