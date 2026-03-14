```ts
import { defineCustomElements } from '@ionic/core/loader';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';

/* Ionic 组件正常运行所需的核心 CSS */
import '@ionic/core/css/core.css';

/* 使用 Ionic 构建的应用所需的基础 CSS */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* 可选的 CSS 工具类，可以注释掉不使用 */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

/* 主题变量 */
import './theme/variables.css';

/**
 * 在 Ionicons 7.2+ 版本中，这些图标
 * 会被映射到短横线命名（kebab-case）的键名。
 * 或者，开发者也可以这样写：
 * addIcons({ 'library': library, 'play-circle': playCircle, 'radio': radio, 'search': search });
 */
addIcons({ library, playCircle, radio, search });

defineCustomElements();
```