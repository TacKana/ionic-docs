```html
<ion-item detail="true">
  <ion-label>
    <h3>文本项目</h3>
    <p>detail 设置为 true - 两种模式下都显示详情箭头</p>
  </ion-label>
</ion-item>

<ion-item button>
  <ion-label>
    <h3>按钮项目</h3>
    <p>默认 detail - 仅在 iOS 模式下显示详情箭头</p>
  </ion-label>
</ion-item>

<ion-item button detail="true">
  <ion-label>
    <h3>按钮项目</h3>
    <p>detail 设置为 true - 两种模式下都显示详情箭头</p>
  </ion-label>
</ion-item>

<ion-item button detail="false">
  <ion-label>
    <h3>按钮项目</h3>
    <p>detail 设置为 false - 两种模式下都隐藏详情箭头</p>
  </ion-label>
</ion-item>

<ion-item button detail="true" detail-icon="caret-forward-outline">
  <ion-label>
    <h3>按钮项目</h3>
    <p>detail 设置为 true - 两种模式下都显示详情箭头</p>
    <p>detail-icon 设置为 caret-forward-outline</p>
  </ion-label>
</ion-item>
```