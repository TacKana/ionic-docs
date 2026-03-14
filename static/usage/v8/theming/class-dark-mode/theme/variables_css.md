```css
/* Ionic 变量与主题定制
 * ---------------------------------------------------------------
 * 任何对主题变量的覆盖都应放在此文件中。
 * 更多信息请参阅：
 * http://ionicframework.com/docs/theming/
 */

/* 为 iOS 和 Material Design 默认主题设置不同的项目边框颜色 */
:root {
  --ion-item-border-color: var(--ion-background-color-step-200);
}

/* 为 iOS 默认主题设置不同的背景和项目背景 */
:root.ios {
  --ion-background-color: var(--ion-background-color-step-50, #f2f2f6);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* 为 Material Design 默认主题设置不同的背景和项目背景 */
:root.md {
  --ion-background-color: var(--ion-background-color-step-100, #f9f9f9);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #fff;
}

/* 当 iOS 和 Material Design 启用深色模式时设置不同的项目背景 */
.ion-palette-dark.ios,
.ion-palette-dark.md {
  --ion-item-background: #1c1c1d;
}
```