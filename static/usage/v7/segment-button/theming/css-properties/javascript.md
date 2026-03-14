```html
<style>
  ion-segment-button {
    --indicator-color: #08a391;
  }

  /* Material Design 样式 */
  ion-segment-button.md {
    --color: #000;
    --color-checked: #08a391;
    --indicator-height: 4px;
  }

  /* iOS 样式 */
  ion-segment-button.ios {
    --color: #08a391;
    --color-checked: #fff;
    --border-radius: 20px;
  }
</style>

<ion-segment value="custom">
  <ion-segment-button value="custom">
    <ion-label>自定义</ion-label>
  </ion-segment-button>
  <ion-segment-button value="segment">
    <ion-label>分段</ion-label>
  </ion-segment-button>
  <ion-segment-button value="buttons">
    <ion-label>按钮</ion-label>
  </ion-segment-button>
</ion-segment>
```