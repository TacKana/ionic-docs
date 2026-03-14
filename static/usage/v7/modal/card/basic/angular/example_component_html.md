```html
<div class="ion-page">
  <ion-header>
    <ion-toolbar>
      <!-- 标题翻译 -->
      <ion-title>应用</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <!-- 按钮文本翻译 -->
    <ion-button id="open-modal" expand="block">打开卡片模态框</ion-button>

    <ion-modal #modal trigger="open-modal" [presentingElement]="presentingElement">
      <ng-template>
        <ion-header>
          <ion-toolbar>
            <!-- 模态框标题翻译 -->
            <ion-title>模态框</ion-title>
            <ion-buttons slot="end">
              <!-- 关闭按钮文本翻译 -->
              <ion-button (click)="modal.dismiss()">关闭</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item>
              <ion-avatar slot="start">
                <ion-img src="https://i.pravatar.cc/300?u=b"></ion-img>
              </ion-avatar>
              <ion-label>
                <!-- 人员姓名和职位翻译 -->
                <h2>康纳·史密斯</h2>
                <p>销售代表</p>
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
          </ion-list>
        </ion-content>
      </ng-template>
    </ion-modal>
  </ion-content>
</div>
```