```html
<ion-item>
  <ion-input label="Default Input" placeholder="请输入文本"></ion-input>
</ion-item>

<ion-item>
  <ion-input label="Fixed Input" label-placement="fixed" placeholder="请输入文本"></ion-input>
</ion-item>

<ion-item>
  <ion-input label="Stacked Input" label-placement="stacked" placeholder="请输入文本"></ion-input>
</ion-item>

<ion-item>
  <ion-input label="Floating Input" label-placement="floating" placeholder="请输入文本"></ion-input>
</ion-item>

<ion-item>
  <ion-select label="Select" placeholder="请选择">
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
  <ion-toggle>
    <div>切换开关</div>
  </ion-toggle>
</ion-item>

<ion-item>
  <ion-checkbox>
    <div>复选框</div>
  </ion-checkbox>
</ion-item>

<ion-item>
  <ion-range label-placement="start">
    <div slot="label">范围滑块</div>
  </ion-range>
</ion-item>
```