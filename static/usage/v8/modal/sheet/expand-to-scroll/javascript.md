```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开底部弹窗</ion-button>

  <ion-modal trigger="open-modal" initial-breakpoint="0.25" expand-to-scroll="false">
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
            <ion-img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Jack Smith</h2>
            <p>产品设计师</p>
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
            <ion-img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Claire Smith</h2>
            <p>平面设计师</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img src="https://i.pravatar.cc/300?u=c" />
          </ion-avatar>
          <ion-label>
            <h2>Kim Smith</h2>
            <p>软件工程师</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Alex Smith</h2>
            <p>软件工程师</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Eric Smith</h2>
            <p>产品经理</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Grace Smith</h2>
            <p>产品经理</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Henry Smith</h2>
            <p>产品负责人</p>
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
        <ion-item>
          <ion-avatar slot="start">
            <ion-img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Oliver Smith</h2>
            <p>首席运营官</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-avatar slot="start">
            <ion-img alt="人物头像剪影" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <h2>Emma Smith</h2>
            <p>首席技术官</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  var modal = document.querySelector('ion-modal');

  modal.breakpoints = [0, 0.25, 0.5, 0.75, 1];
</script>
```