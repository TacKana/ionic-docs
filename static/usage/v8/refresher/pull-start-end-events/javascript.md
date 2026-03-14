```html
<ion-header>
  <ion-toolbar>
    <ion-title>下拉刷新</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-refresher id="refresher" slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <p>向下拉动此内容以触发刷新。</p>

  <ion-list lines="full">
    <ion-item>
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>敲定第一季度预算提案</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox slot="start" checked></ion-checkbox>
      <ion-label>审阅设计稿</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox slot="start" checked></ion-checkbox>
      <ion-label>与工程团队同步API文档</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>批准三月份休假申请</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>起草月度通讯</ion-label>
    </ion-item>
  </ion-list>
</ion-content>

<script>
  const refresher = document.getElementById('refresher');
  const checkboxes = document.querySelectorAll('ion-checkbox');

  refresher.addEventListener('ionPullStart', () => {
    console.log('开始下拉');
    // 下拉开始时禁用复选框
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = true;
    });
  });

  refresher.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      // 加载数据的调用放在这里
      refresher.complete();
      console.log('刷新完成');
    }, 2000);
  });

  refresher.addEventListener('ionPullEnd', (event) => {
    console.log('下拉结束，原因: "' + event.detail.reason + '"');
    // 下拉结束时启用复选框
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = false;
    });
  });
</script>
```