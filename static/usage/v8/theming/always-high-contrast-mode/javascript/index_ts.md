```ts
import { defineCustomElements } from '@ionic/core/loader';

import { addIcons } from 'ionicons';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

/* 导入 Ionic 组件正常工作所需的核心 CSS */
import '@ionic/core/css/core.css';

/* 为使用 Ionic 构建的应用提供的基础 CSS */
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
 * Ionic 高对比度配色方案
 * -----------------------------------------------------
 * 更多信息，请参见：
 * https://ionicframework.com/docs/theming/high-contrast-mode
 */

import '@ionic/core/css/palettes/high-contrast.always.css';

/* 主题变量 */
import './theme/variables.css';

/**
 * 在 Ionicons 7.2+ 版本中，这些图标
 * 会被映射到 kebab-case 格式的键。
 * 开发者也可以这样操作：
 * addIcons({ 'person-circle': personCircle, 'person-circle-outline': personCircleOutline,
 * 'sunny': sunny, 'sunny-outline': sunnyOutline });
 */
addIcons({ personCircle, personCircleOutline, sunny, sunnyOutline });

defineCustomElements();
```