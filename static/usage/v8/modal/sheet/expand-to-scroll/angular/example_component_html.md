```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">打开底部工作表模态框</ion-button>

  <ion-modal
    trigger="open-modal"
    [initialBreakpoint]="0.25"
    [breakpoints]="[0, 0.25, 0.5, 0.75, 1]"
    [expandToScroll]="false"
  >
    <ng-template>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>康纳·史密斯</h2>
              <p>销售代表</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img
                alt="人物头部剪影"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              ></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>杰克·史密斯</h2>
              <p>产品设计师</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=a"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>丹尼尔·史密斯</h2>
              <p>产品设计师</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img
                alt="人物头部剪影"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              ></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>克莱尔·史密斯</h2>
              <p>平面设计师</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=c"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>金·史密斯</h2>
              <p>软件工程师</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img
                alt="人物头部剪影"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              ></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>亚历克斯·史密斯</h2>
              <p>软件工程师</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img
                alt="人物头部剪影"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              ></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>埃里克·史密斯</h2>
              <p>产品经理</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img
                alt="人物头部剪影"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              ></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>格蕾丝·史密斯</h2>
              <p>产品经理</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img
                alt="人物头部剪影"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              ></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>亨利·史密斯</h2>
              <p>产品负责人</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=d"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>格雷格·史密斯</h2>
              <p>运营总监</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="https://i.pravatar.cc/300?u=e"></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>佐伊·史密斯</h2>
              <p>首席执行官</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img
                alt="人物头部剪影"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              ></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>奥利弗·史密斯</h2>
              <p>首席运营官</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img
                alt="人物头部剪影"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              ></ion-img>
            </ion-avatar>
            <ion-label>
              <h2>艾玛·史密斯</h2>
              <p>首席技术官</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```