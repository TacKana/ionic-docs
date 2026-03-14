```html
<ion-tabs>
  <ion-tab tab="home">
    <div id="home-page" class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>即刻聆听</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div class="example-content">
          即刻聆听内容
          <ion-button onClick="selectRadio()">前往电台</ion-button>
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
          <ion-title>音乐库</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">音乐库内容</div>
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
      即刻聆听
    </ion-tab-button>
    <ion-tab-button tab="radio">
      <ion-icon name="radio"></ion-icon>
      电台
    </ion-tab-button>
    <ion-tab-button tab="library">
      <ion-icon name="library"></ion-icon>
      音乐库
    </ion-tab-button>
    <ion-tab-button tab="search">
      <ion-icon name="search"></ion-icon>
      搜索
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>

<script>
  function selectRadio() {
    const tabs = document.querySelector('ion-tabs');
    tabs.select('radio');
  }
</script>

<style>
  /* 此样式仅供演示使用 */
  /* 标签页功能无需此样式 */
  .example-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 10px;
  }
</style>
```