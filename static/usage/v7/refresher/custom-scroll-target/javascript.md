```html
<ion-header>
  <ion-toolbar>
    <ion-title>下拉刷新</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content scroll-y="false">
  <ion-refresher id="refresher" slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <div class="ion-content-scroll-host ion-padding">
    <p>向下拉动此内容即可触发刷新。</p>
  </div>
</ion-content>

<script>
  const refresher = document.getElementById('refresher');

  refresher.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      // 加载数据的调用应放在此处
      refresher.complete();
    }, 2000);
  });
</script>

<style>
  .ion-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  .ion-content-scroll-host::before,
  .ion-content-scroll-host::after {
    position: absolute;

    width: 1px;
    height: 1px;

    content: '';
  }

  .ion-content-scroll-host::before {
    bottom: -1px;
  }

  .ion-content-scroll-host::after {
    top: -1px;
  }
</style>
```