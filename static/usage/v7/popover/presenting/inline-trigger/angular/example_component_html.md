```html
<ion-button id="click-trigger">左键点击我</ion-button>
<ion-popover trigger="click-trigger" triggerAction="click">
  <ng-template>
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ng-template>
</ion-popover>

<ion-button id="context-menu-trigger">右键点击我</ion-button>
<ion-popover trigger="context-menu-trigger" triggerAction="context-menu">
  <ng-template>
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ng-template>
</ion-popover>

<ion-button id="hover-trigger">鼠标悬停我</ion-button>
<ion-popover trigger="hover-trigger" triggerAction="hover">
  <ng-template>
    <ion-content class="ion-padding">Hello World!</ion-content>
  </ng-template>
</ion-popover>
```