```html
<ion-app>
  <ion-nav root="page-one"></ion-nav>
</ion-app>

<script>
  class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>返回按钮</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h1>第一页</h1>
        <p>导航到下一页即可看到返回按钮。</p>
        <ion-nav-link router-direction="forward" component="page-two">
          <ion-button>导航</ion-button>
        </ion-nav-link>
      </ion-content>
    `;
    }
  }

  class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button text="上一页" icon="caret-back"></ion-back-button>
          </ion-buttons>
          <ion-title>返回按钮</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h1>第二页</h1>
        <p>使用返回按钮可导航到上一页。</p>
      </ion-content>
    `;
    }
  }

  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
</script>
```