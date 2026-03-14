```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="#"></ion-back-button>
    </ion-buttons>
    <ion-title>显示设置</ion-title>
    <ion-buttons slot="end">
      <ion-button color="dark">
        <ion-icon slot="icon-only" ios="person-circle-outline" md="person-circle"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list-header>外观</ion-list-header>
  <ion-list inset="true">
    <ion-item>
      <ion-toggle justify="space-between" id="paletteToggle">深色模式</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list inset="true">
    <ion-item button="true">文字大小</ion-item>
    <ion-item>
      <ion-toggle justify="space-between">粗体文本</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list-header>亮度</ion-list-header>
  <ion-list inset="true">
    <ion-item>
      <ion-range value="40">
        <ion-icon name="sunny-outline" slot="start"></ion-icon>
        <ion-icon name="sunny" slot="end"></ion-icon>
      </ion-range>
    </ion-item>
    <ion-item>
      <ion-toggle justify="space-between" checked>原彩显示</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list inset="true">
    <ion-item button="true">
      <ion-label>夜览模式</ion-label>
      <ion-text slot="end" color="medium">晚上 9:00 至次日上午 8:00</ion-text>
    </ion-item>
  </ion-list>
</ion-content>

<script>
  // 查询用于切换配色方案的开关
  const toggle = document.querySelector('#paletteToggle');

  // 监听开关的选中/取消状态以切换深色配色方案
  toggle.addEventListener('ionChange', (event) => {
    toggleDarkPalette(event.detail.checked);
  });

  // 使用 matchMedia 检查用户偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // 根据 prefers-color-scheme 媒体查询的初始值初始化深色配色方案
  initializeDarkPalette(prefersDark.matches);

  // 监听 prefers-color-scheme 媒体查询的变更
  prefersDark.addEventListener('change', (mediaQuery) => initializeDarkPalette(mediaQuery.matches));

  // 根据 isDark 参数设置/取消开关选中状态并更新配色方案
  function initializeDarkPalette(isDark) {
    toggle.checked = isDark;
    toggleDarkPalette(isDark);
  }

  // 由媒体查询调用来设置/取消开关选中状态
  function checkToggle(shouldCheck) {
    toggle.checked = shouldCheck;
  }

  // 在 html 元素上添加或移除 "ion-palette-dark" 类
  function toggleDarkPalette(shouldAdd) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }
</script>

<style>
  /* (可选) 添加此样式以防止切换配色方案时出现的闪烁现象 */
  ion-item {
    --transition: none;
  }
</style>
```