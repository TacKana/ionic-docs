```html
<ion-tabs>
  <ion-tab tab="home">
    <div id="home-page" class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>立即收听</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">立即收听内容</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="radio">
    <div id="radio-page" class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>广播</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">广播内容</div>
      </ion-content>
    </div>
  </ion-tab>
  <ion-tab tab="library">
    <div id="library-page" class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>资料库</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">资料库内容</div>
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
      立即收听
    </ion-tab-button>
    <ion-tab-button tab="radio">
      <ion-icon name="radio"></ion-icon>
      广播
    </ion-tab-button>
    <ion-tab-button tab="library">
      <ion-icon name="library"></ion-icon>
      资料库
    </ion-tab-button>
    <ion-tab-button tab="search">
      <ion-icon name="search"></ion-icon>
      搜索
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```