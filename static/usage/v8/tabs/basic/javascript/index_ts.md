```ts
import { defineCustomElements } from '@ionic/core/loader';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';

/* Ionic组件正常工作所需的核心CSS */
import '@ionic/core/css/core.css';

/* 基于Ionic构建应用的基础CSS */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* 可选的CSS工具类，可以注释掉 */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

/**
 * Ionic深色配色方案
 * -----------------------------------------------------
 * 更多信息请参阅：
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/core/css/palettes/dark.always.css';
// import '@ionic/core/css/palettes/dark.class.css';
import '@ionic/core/css/palettes/dark.system.css';

/* 主题变量 */
import './theme/variables.css';

/**
 * 在Ionicons 7.2+版本中，这些图标
 * 会被映射为短横线命名格式的键。
 * 或者，开发者也可以这样写：
 * addIcons({ 'library': library, 'play-circle': playCircle, 'radio': radio, 'search': search });
 */
addIcons({ library, playCircle, radio, search });

defineCustomElements();
```