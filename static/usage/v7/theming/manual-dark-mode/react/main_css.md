```css
/*
 * 可选 CSS
 * -----------------------------------
 */

/* 为 iOS 浅色模式设置不同的背景和项目背景 */
.ios body {
  --ion-background-color: #f2f2f6;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* 为 MD 浅色模式设置不同的背景和项目背景 */
.md body {
  --ion-background-color: #f9f9f9;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* 添加此样式以减少主题切换时的闪烁现象 */
ion-item {
  --transition: none;
}
```