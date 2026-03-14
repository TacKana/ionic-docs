```html
<ion-router>
  <ion-route url="/" component="page-one"></ion-route>
  <ion-route url="/page-two" component="page-two"></ion-route>
</ion-router>

<ion-router-outlet></ion-router-outlet>

<script>
  class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <ion-header>
      <ion-toolbar>
        <ion-title>页面一</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      这是页面一的内容。
      <ion-router-link href="#/page-two">
        <ion-button>前往页面二</ion-button>
      </ion-router-link>
    </ion-content>`;
    }
  }

  class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>页面二</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      这是页面二的内容。
    </ion-content>`;
    }
  }

  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
</script>
```