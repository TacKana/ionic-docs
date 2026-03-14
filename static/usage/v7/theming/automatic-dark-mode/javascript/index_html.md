```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button default-href="#"></ion-back-button>
    </ion-buttons>
    <ion-title>显示</ion-title>
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
      <ion-text slot="end" color="medium">晚上 9:00 至上午 8:00</ion-text>
    </ion-item>
  </ion-list>
</ion-content>

<script>
  // 使用 matchMedia 检查用户偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  toggleDarkTheme(prefersDark.matches);

  // 监听 prefers-color-scheme 媒体查询的变化
  prefersDark.addEventListener('change', (mediaQuery) => toggleDarkTheme(mediaQuery.matches));

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

  /* 在 iOS 浅色模式下设置不同的背景和项目背景 */
  .ios body {
    --ion-background-color: #f2f2f6;
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #fff;
  }

  /* 在 Material Design 浅色模式下设置不同的背景和项目背景 */
  .md body {
    --ion-background-color: #f9f9f9;
    --ion-toolbar-background: var(--ion-background-color);
    --ion-item-background: #fff;
  }

  /* 添加此样式以防止主题切换时的闪烁现象 */
  ion-item {
    --transition: none;
  }
</style>
```