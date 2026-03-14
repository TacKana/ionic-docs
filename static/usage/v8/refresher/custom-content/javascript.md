```html
<ion-header>
  <ion-toolbar>
    <ion-title>下拉刷新</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-refresher id="refresher" slot="fixed">
    <ion-refresher-content
      pulling-icon="chevron-down-circle-outline"
      pulling-text="下拉刷新"
      refreshing-spinner="circles"
      refreshing-text="刷新中..."
    >
    </ion-refresher-content>
  </ion-refresher>

  <p>向下拉动此内容以触发刷新。</p>
</ion-content>

<script>
  const refresher = document.getElementById('refresher');

  refresher.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      // 加载数据的操作放在这里
      refresher.complete();
    }, 2000);
  });
</script>
```