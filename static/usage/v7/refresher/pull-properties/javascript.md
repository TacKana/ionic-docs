```html
<ion-header>
  <ion-toolbar>
    <ion-title>下拉刷新</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-refresher id="refresher" slot="fixed" pull-factor="0.5" pull-min="100" pull-max="200">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <p>向下拉动此内容即可触发刷新。</p>
</ion-content>

<script>
  const refresher = document.getElementById('refresher');

  refresher.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      // 加载数据的调用放在这里
      refresher.complete();
    }, 2000);
  });
</script>
```