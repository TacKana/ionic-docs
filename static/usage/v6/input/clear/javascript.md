```html
<ion-list>
  <ion-item>
    <ion-label position="stacked">带清除按钮的输入框</ion-label>
    <ion-input clear-input="true" placeholder="输入文本以显示清除按钮" value="默认值"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">编辑时清除的输入框</ion-label>
    <ion-input clear-on-edit="true" placeholder="输入文本，离开输入框，返回并输入以清除"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">密码输入框</ion-label>
    <ion-input type="password" placeholder="输入文本，离开输入框，返回并输入以清除"></ion-input>
  </ion-item>
</ion-list>
```