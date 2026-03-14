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
      <ion-toggle id="themeToggle" justify="space-between">深色模式</ion-toggle>
    </ion-item>
  </ion-list>

  <ion-list inset="true">
    <ion-item button="true">文本大小</ion-item>
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
      <ion-label>夜览</ion-label>
      <ion-text slot="end" color="medium">晚上 9:00 至次日上午 8:00</ion-text>
    </ion-item>
  </ion-list>
</ion-content>

<script>
  // 查询用于切换主题的开关
  const toggle = document.querySelector('#themeToggle');

  // 监听开关的选中/取消选中事件以切换深色主题
  toggle.addEventListener('ionChange', (event) => {
    toggleDarkTheme(event.detail.checked);
  });

  // 使用 matchMedia 检查用户偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // 根据 prefers-color-scheme 媒体查询的初始值初始化深色主题
  initializeDarkTheme(prefersDark.matches);

  // 监听 prefers-color-scheme 媒体查询的变化
  prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));

  // 根据 isDark 值设置/取消设置开关并更新主题
  function initializeDarkTheme(isDark) {
    toggle.checked = isDark;
    toggleDarkTheme(isDark);
  }

  // 媒体查询调用此函数来设置/取消设置开关
  function checkToggle(shouldCheck) {
    toggle.checked = shouldCheck;
  }

  // 在文档 body 上添加或移除 "dark" 类
  function toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }
</script>

<style>
  /*
   * 可选 CSS
   * -----------------------------------
   */

  /* 在 iOS 系统的浅色模式下设置不同的背景和项目背景 */
  .ios body {
    --ion-background-color: #f2f2f6;
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #fff;
  }

  /* 在 Material Design 的浅色模式下设置不同的背景和项目背景 */
  .md body {
    --ion-background-color: #f9f9f9;
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #fff;
  }

  /* 此样式用于解决主题切换时出现的闪烁问题 */
  ion-item {
    --transition: none;
  }
</style>
```