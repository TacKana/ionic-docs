```html
<ion-menu type="overlay" content-id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>菜单内容</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-menu-toggle>
      <ion-button>点击关闭菜单</ion-button>
    </ion-menu-toggle>
  </ion-content>
</ion-menu>

<div class="ion-page" id="main-content">
  <ion-header>
    <ion-toolbar>
      <ion-title>菜单</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h2>选择覆盖层类型:</h2>
    <ion-radio-group value="overlay">
      <ion-item>
        <ion-label>
          <code>overlay</code>
        </ion-label>
        <ion-radio value="overlay"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>
          <code>reveal</code>
        </ion-label>
        <ion-radio value="reveal"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>
          <code>push</code>
        </ion-label>
        <ion-radio value="push"></ion-radio>
      </ion-item>
    </ion-radio-group>
    <br />
    <ion-menu-toggle>
      <ion-button>点击打开菜单</ion-button>
    </ion-menu-toggle>
  </ion-content>
</div>

<script>
  const menu = document.querySelector('ion-menu');
  const radioGroup = document.querySelector('ion-radio-group');

  radioGroup.addEventListener('ionChange', (ev) => {
    menu.type = ev.detail.value;
  });
</script>
```