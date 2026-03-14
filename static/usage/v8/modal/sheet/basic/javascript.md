```html
<ion-header>
  <ion-toolbar>
    <ion-title>应用</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开底页模态框</ion-button>

  <ion-modal trigger="open-modal" initial-breakpoint="0.25">
    <ion-content>
      <ion-searchbar placeholder="搜索"></ion-searchbar>
      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=b" />
          </ion-avatar>
          <ion-label>
            <h2>康纳·史密斯</h2>
            <p>销售代表</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=a" />
          </ion-avatar>
          <ion-label>
            <h2>丹尼尔·史密斯</h2>
            <p>产品设计师</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=d" />
          </ion-avatar>
          <ion-label>
            <h2>格雷格·史密斯</h2>
            <p>运营总监</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=e" />
          </ion-avatar>
          <ion-label>
            <h2>佐伊·史密斯</h2>
            <p>首席执行官</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');
  var searchBar = document.querySelector('ion-searchbar');

  modal.breakpoints = [0, 0.25, 0.5, 0.75];

  searchBar.addEventListener('click', () => {
    modal.setCurrentBreakpoint(0.75);
  });
</script>
```