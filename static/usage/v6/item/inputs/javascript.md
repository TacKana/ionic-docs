```html
<ion-item>
  <ion-label>默认输入框</ion-label>
  <ion-input placeholder="输入文字"></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">固定标签输入框</ion-label>
  <ion-input placeholder="输入文字"></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">层叠标签输入框</ion-label>
  <ion-input placeholder="输入文字"></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">浮动标签输入框</ion-label>
  <ion-input placeholder="输入文字"></ion-input>
</ion-item>

<ion-item fill="outline">
  <ion-label position="floating">浮动标签输入框：轮廓样式（仅MD）</ion-label>
  <ion-input placeholder="输入文字"></ion-input>
</ion-item>

<ion-item fill="solid">
  <ion-label position="floating">浮动标签输入框：实心样式（仅MD）</ion-label>
  <ion-input placeholder="输入文字"></ion-input>
</ion-item>

<ion-item>
  <ion-label>选择器</ion-label>
  <ion-select placeholder="请选择">
    <ion-select-option value="">无游戏主机</ion-select-option>
    <ion-select-option value="nes">NES</ion-select-option>
    <ion-select-option value="n64">Nintendo64</ion-select-option>
    <ion-select-option value="ps">PlayStation</ion-select-option>
    <ion-select-option value="genesis">Sega Genesis</ion-select-option>
    <ion-select-option value="saturn">Sega Saturn</ion-select-option>
    <ion-select-option value="snes">SNES</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>开关</ion-label>
  <ion-toggle slot="end"></ion-toggle>
</ion-item>

<ion-item>
  <ion-label>复选框</ion-label>
  <ion-checkbox slot="end"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label position="stacked">滑块</ion-label>
  <ion-range></ion-range>
</ion-item>
```