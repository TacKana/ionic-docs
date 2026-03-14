```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>在面板完全展开之前，您都可以与 +/- 按钮进行交互。</p>

    <div class="counter__section">
      <ion-button (click)="decrement()">-</ion-button>
      <p>{{count }}</p>
      <ion-button (click)="increment()">+</ion-button>
    </div>

    <ion-modal
      #modal
      trigger="open-modal"
      [isOpen]="true"
      [initialBreakpoint]="0.25"
      [breakpoints]="[0.25, 0.5, 0.75]"
      [backdropDismiss]="false"
      [backdropBreakpoint]="0.5"
    >
      <ng-template>
        <ion-content class="ion-padding">
          <ion-searchbar placeholder="Search" (click)="modal.setCurrentBreakpoint(0.75)"></ion-searchbar>
          <ion-list>
            <ion-item>
              <ion-avatar slot="start">
                <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
              </ion-avatar>
              <ion-label>
                <h2>Connor Smith</h2>
                <p>销售代表</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-avatar slot="start">
                <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
              </ion-avatar>
              <ion-label>
                <h2>Daniel Smith</h2>
                <p>产品设计师</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-avatar slot="start">
                <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
              </ion-avatar>
              <ion-label>
                <h2>Greg Smith</h2>
                <p>运营总监</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-avatar slot="start">
                <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
              </ion-avatar>
              <ion-label>
                <h2>Zoey Smith</h2>
                <p>首席执行官</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```