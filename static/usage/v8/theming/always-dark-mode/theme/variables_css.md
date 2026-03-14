```css
/* Ionic 变量与主题定制
 * ---------------------------------------------------------------
 * 所有主题变量的覆盖都应放置在此文件中。
 * 更多信息请参阅：
 * http://ionicframework.com/docs/theming/
 */

/* 为 iOS 和 MD 平台上的默认主题设置不同的项目边框颜色 */
:root {
  --ion-item-border-color: var(--ion-background-color-step-200);
}

/* 为 iOS 平台上的默认主题设置不同的背景和项目背景 */
:root.ios {
  --ion-background-color: var(--ion-background-color-step-50);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #1c1c1d;
}

/* 为 MD 平台上的默认主题设置不同的背景和项目背景 */
:root.md {
  --ion-background-color: var(--ion-background-color-step-100);
  --ion-toolbar-background: var(--ion-background-color);
  --ion-item-background: #1c1c1d;
}
```