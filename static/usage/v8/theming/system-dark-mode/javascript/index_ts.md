```ts
import { defineCustomElements } from '@ionic/core/loader';

import { addIcons } from 'ionicons';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

/* 确保 Ionic 组件正常工作所需的核心 CSS */
import '@ionic/core/css/core.css';

/* 使用 Ionic 构建应用的基础 CSS */
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
 * 了解更多信息，请访问：
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/core/css/palettes/dark.always.css';
// import '@ionic/core/css/palettes/dark.class.css';
import '@ionic/core/css/palettes/dark.system.css';

/* 主题变量 */
import './theme/variables.css';

/**
 * 在 Ionicons 7.2+ 版本中，这些图标
 * 会被映射为短横线命名（kebab-case）的键。
 * 或者，开发者也可以这样写：
 * addIcons({ 'person-circle': personCircle, 'person-circle-outline': personCircleOutline,
 * 'sunny': sunny, 'sunny-outline': sunnyOutline });
 */
addIcons({ personCircle, personCircleOutline, sunny, sunnyOutline });

defineCustomElements();
```