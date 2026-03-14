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
            <ion-title>第一页</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h1>第一页</h1>
          <ion-nav-link router-direction="forward" component="page-two">
            <ion-button>前往第二页</ion-button>
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
              <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>第二页</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h1>第二页</h1>
          <div>
            <ion-nav-link router-direction="forward" component="page-three">
              <ion-button>前往第三页</ion-button>
            </ion-nav-link>
          </div>
        </ion-content>
      `;
    }
  }
  class PageThree extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>第三页</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <h1>第三页</h1>
        </ion-content>
      `;
    }
  }
  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
  customElements.define('page-three', PageThree);
</script>
```