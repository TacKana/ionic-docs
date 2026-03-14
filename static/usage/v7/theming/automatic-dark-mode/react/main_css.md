```css
/*
 * 可选 CSS
 * -----------------------------------
 */

/* 在 iOS 的浅色模式下设置不同的背景和项目背景 */
.ios body {
  --ion-background-color: #f2f2f6;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* 在 Material Design (md) 的浅色模式下设置不同的背景和项目背景 */
.md body {
  --ion-background-color: #f9f9f9;
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* 添加此项以防止切换主题时出现的闪烁现象 */
ion-item {
  --transition: none;
}
```