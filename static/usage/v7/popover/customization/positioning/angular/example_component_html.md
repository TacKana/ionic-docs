```html
<div class="container">
  <ion-button id="top-center">侧边=顶部，对齐方式=居中</ion-button>
  <ion-popover trigger="top-center" side="top" alignment="center">
    <ng-template>
      <ion-content class="ion-padding">你好，世界！</ion-content>
    </ng-template>
  </ion-popover>

  <ion-button id="bottom-start">侧边=底部，对齐方式=起始</ion-button>
  <ion-popover trigger="bottom-start" side="bottom" alignment="start">
    <ng-template>
      <ion-content class="ion-padding">你好，世界！</ion-content>
    </ng-template>
  </ion-popover>

  <ion-button id="left-start">侧边=左侧，对齐方式=起始</ion-button>
  <ion-popover trigger="left-start" side="left" alignment="start">
    <ng-template>
      <ion-content class="ion-padding">你好，世界！</ion-content>
    </ng-template>
  </ion-popover>

  <ion-button id="right-end">侧边=右侧，对齐方式=末端</ion-button>
  <ion-popover trigger="right-end" side="right" alignment="end">
    <ng-template>
      <ion-content class="ion-padding">你好，世界！</ion-content>
    </ng-template>
  </ion-popover>
</div>
```