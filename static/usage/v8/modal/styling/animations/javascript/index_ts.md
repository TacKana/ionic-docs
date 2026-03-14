```ts
import { defineCustomElements } from '@ionic/core/loader';

import { createAnimation } from '@ionic/core';

/* Ionic 组件正常运行所需的核心 CSS */
import '@ionic/core/css/core.css';

/* 使用 Ionic 构建应用所需的基础 CSS */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* 可选的 CSS 工具类，可以注释掉 */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

/**
 * Ionic 深色主题调色板
 * -----------------------------------------------------
 * 更多信息请参阅：
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/core/css/palettes/dark.always.css';
// import '@ionic/core/css/palettes/dark.class.css';
import '@ionic/core/css/palettes/dark.system.css';

/* 主题变量 */
import './theme/variables.css';

defineCustomElements();

(window as any).createAnimation = createAnimation;
```