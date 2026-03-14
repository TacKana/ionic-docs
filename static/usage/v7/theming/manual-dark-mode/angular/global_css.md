```css
/*
 * 可选 CSS 样式
 * -----------------------------------
 */

/* 在 iOS 设备的浅色模式下设置不同的背景和项目背景 */
.ios body {
  --ion-background-color: #f2f2f6;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* 在 Material Design 设备的浅色模式下设置不同的背景和项目背景 */
.md body {
  --ion-background-color: #f9f9f9;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* 此样式用于解决切换主题时出现的闪烁问题 */
ion-item {
  --transition: none;
}
```