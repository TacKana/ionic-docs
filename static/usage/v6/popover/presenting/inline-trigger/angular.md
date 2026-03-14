```html
<ion-button id="click-trigger">点击我（左键）</ion-button>
<ion-popover trigger="click-trigger" triggerAction="click">
  <ng-template>
    <ion-content class="ion-padding">你好世界！</ion-content>
  </ng-template>
</ion-popover>

<ion-button id="context-menu-trigger">右键点击我</ion-button>
<ion-popover trigger="context-menu-trigger" triggerAction="context-menu">
  <ng-template>
    <ion-content class="ion-padding">你好世界！</ion-content>
  </ng-template>
</ion-popover>

<ion-button id="hover-trigger">鼠标悬停我</ion-button>
<ion-popover trigger="hover-trigger" triggerAction="hover">
  <ng-template>
    <ion-content class="ion-padding">你好世界！</ion-content>
  </ng-template>
</ion-popover>
```