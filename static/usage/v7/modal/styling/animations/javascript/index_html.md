```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开模态框</ion-button>

  <ion-modal trigger="open-modal">
    <ion-header>
      <ion-toolbar>
        <ion-title>模态框</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="modal.dismiss()">关闭</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=b" />
          </ion-avatar>
          <ion-label>
            <h2>Connor Smith</h2>
            <p>销售代表</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=a" />
          </ion-avatar>
          <ion-label>
            <h2>Daniel Smith</h2>
            <p>产品设计师</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=d" />
          </ion-avatar>
          <ion-label>
            <h2>Greg Smith</h2>
            <p>运营总监</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=e" />
          </ion-avatar>
          <ion-label>
            <h2>Zoey Smith</h2>
            <p>首席执行官</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');

  const enterAnimation = (baseEl) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root.querySelector('ion-backdrop'))
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
      .addElement(root.querySelector('.modal-wrapper'))
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl) => enterAnimation(baseEl).direction('reverse');

  modal.enterAnimation = enterAnimation;
  modal.leaveAnimation = leaveAnimation;

  function dismiss() {
    modal.dismiss();
  }
</script>
```