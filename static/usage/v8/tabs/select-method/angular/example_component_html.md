```html
<ion-tabs #tabs>
  <ion-tab tab="home">
    <div id="home-page" class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>正在播放</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">
          正在播放内容
          <ion-button (click)="selectRadio()">转到电台</ion-button>
        </div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="radio">
    <div id="radio-page" class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>电台</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">电台内容</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="library">
    <div id="library-page" class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>媒体库</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">媒体库内容</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="search">
    <div id="search-page" class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>搜索</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">搜索内容</div>
      </ion-content>
    </div>
  </ion-tab>

  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home">
      <ion-icon name="play-circle"></ion-icon>
      正在播放
    </ion-tab-button>
    <ion-tab-button tab="radio">
      <ion-icon name="radio"></ion-icon>
      电台
    </ion-tab-button>
    <ion-tab-button tab="library">
      <ion-icon name="library"></ion-icon>
      媒体库
    </ion-tab-button>
    <ion-tab-button tab="search">
      <ion-icon name="search"></ion-icon>
      搜索
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```