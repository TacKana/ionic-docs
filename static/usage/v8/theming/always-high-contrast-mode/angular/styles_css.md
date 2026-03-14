```css
/*
 * 应用全局 CSS
 * ----------------------------------------------------------------------------
 * 将您想要全局应用的样式规则放在这里。这些样式适用于整个应用，而不仅仅是单个组件。
 * 此外，该文件可以作为导入其他 CSS/Sass 文件的入口点，这些文件将被包含在输出的 CSS 中。
 * 有关全局样式表的更多信息，请访问文档：
 * https://ionicframework.com/docs/layout/global-stylesheets
 */

/* Ionic 组件正常工作所需的核心 CSS */
@import '@ionic/angular/css/core.css';

/* 为使用 Ionic 构建的应用提供基本 CSS */
@import '@ionic/angular/css/normalize.css';
@import '@ionic/angular/css/structure.css';
@import '@ionic/angular/css/typography.css';

/* 可选的 CSS 工具，可以注释掉 */
@import '@ionic/angular/css/padding.css';
@import '@ionic/angular/css/float-elements.css';
@import '@ionic/angular/css/text-alignment.css';
@import '@ionic/angular/css/text-transformation.css';
@import '@ionic/angular/css/flex-utils.css';
@import '@ionic/angular/css/display.css';

/**
 * Ionic 高对比度调色板
 * -----------------------------------------------------
 * 有关更多信息，请参阅：
 * https://ionicframework.com/docs/theming/high-contrast-mode
 */

@import '@ionic/angular/css/palettes/high-contrast.always.css';
```