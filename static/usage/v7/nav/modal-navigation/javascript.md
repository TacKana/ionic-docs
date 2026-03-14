```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>模态框导航</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="openModal">打开模态框</ion-button>
    <ion-modal trigger="openModal">
      <ion-header>
        <ion-toolbar>
          <ion-title>模态框</ion-title>
          <ion-buttons slot="end">
            <ion-button onclick="dismiss()"> 关闭 </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-nav></ion-nav>
      </ion-content>
    </ion-modal>
  </ion-content>
</ion-app>

<script>
  const modal = document.querySelector('ion-modal');
  const nav = document.querySelector('ion-nav');

  modal.addEventListener('willPresent', () => {
    nav.setRoot('page-one');
  });

  var dismiss = () => modal.dismiss();

  var navigate = (component) => {
    nav.push(component);
  };

  var navigateBack = () => {
    nav.pop();
  };

  var navigateToRoot = () => {
    nav.popToRoot();
  };

  class PageOne extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-content class="ion-padding">
          <h1>第一页</h1>
          <ion-button onclick="navigate('page-two')">前往第二页</ion-button>
        </ion-content>
      `;
    }
  }

  class PageTwo extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-content class="ion-padding">
          <h1>第二页</h1>
          <ion-button onclick="navigate('page-three')">前往第三页</ion-button>
        </ion-content>
      `;
    }
  }

  class PageThree extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-content class="ion-padding">
          <h1>第三页</h1>
          <ion-button onclick="navigateBack()">返回</ion-button>
          <ion-button onclick="navigateToRoot()">返回根页面</ion-button>
        </ion-content>
      `;
    }
  }

  customElements.define('page-one', PageOne);
  customElements.define('page-two', PageTwo);
  customElements.define('page-three', PageThree);
</script>
```