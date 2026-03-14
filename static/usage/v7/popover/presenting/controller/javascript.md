```html
<ion-button>点击我</ion-button>

<script>
  class PopoverPage extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `<ion-content class="ion-padding">你好，世界！</ion-content>`;
    }
  }

  customElements.define('popover-page', PopoverPage);

  async function presentPopover(e) {
    const popover = Object.assign(document.createElement('ion-popover'), {
      component: 'popover-page',
      event: e,
    });

    document.body.appendChild(popover);
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(`弹窗已关闭，操作标识：${role}`);
  }

  const button = document.querySelector('ion-button');
  button.addEventListener('click', presentPopover);
</script>
```