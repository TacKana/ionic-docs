```html
<ion-header>
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

<ion-content color="light">
  <ion-list-header>外观</ion-list-header>
  <ion-list inset="true">
    <ion-item>
      <ion-toggle justify="space-between" id="darkPaletteToggle">深色模式</ion-toggle>
    </ion-item>
    <ion-item>
      <ion-toggle justify="space-between" id="highContrastPaletteToggle">高对比度模式</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list inset="true">
    <ion-item button="true">文字大小</ion-item>
    <ion-item>
      <ion-toggle justify="space-between">粗体文字</ion-toggle>
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
      <ion-label>夜览</ion-label>
      <ion-text slot="end" color="medium">晚上 9:00 至上午 8:00</ion-text>
    </ion-item>
  </ion-list>
</ion-content>

<script>
  // 查询用于切换配色方案的开关
  const darkPaletteToggle = document.querySelector('#darkPaletteToggle');
  const highContrastPaletteToggle = document.querySelector('#highContrastPaletteToggle');

  // 监听开关的选中/取消选中状态变化以切换配色方案
  darkPaletteToggle.addEventListener('ionChange', (event) => {
    toggleDarkPalette(event.detail.checked);
  });

  highContrastPaletteToggle.addEventListener('ionChange', (event) => {
    toggleHighContrastPalette(event.detail.checked);
  });

  // 使用 matchMedia 检查用户偏好设置
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersHighContrast = window.matchMedia('(prefers-contrast: more)');

  // 根据媒体查询的初始值初始化深色配色方案
  initializeDarkPalette(prefersDark.matches);
  initializeHighContrastPalette(prefersHighContrast.matches);

  // 监听媒体查询的变化
  prefersDark.addEventListener('change', (mediaQuery) => initializeDarkPalette(mediaQuery.matches));
  prefersHighContrast.addEventListener('change', (mediaQuery) => initializeHighContrastPalette(mediaQuery.matches));

  // 设置开关状态并更新深色配色方案
  function initializeDarkPalette(isDark) {
    darkPaletteToggle.checked = isDark;
    toggleDarkPalette(isDark);
  }

  // 设置开关状态并更新高对比度配色方案
  function initializeHighContrastPalette(isHighContrast) {
    highContrastPaletteToggle.checked = isHighContrast;
    toggleHighContrastPalette(isHighContrast);
  }

  // 在 html 元素上添加或移除“ion-palette-dark”类
  function toggleDarkPalette(shouldAdd) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  // 在 html 元素上添加或移除“ion-palette-high-contrast”类
  function toggleHighContrastPalette(shouldAdd) {
    document.documentElement.classList.toggle('ion-palette-high-contrast', shouldAdd);
  }
</script>

<style>
  /* （可选）添加此样式以防止在切换配色方案时出现闪烁 */
  ion-item {
    --transition: none;
  }
</style>
```