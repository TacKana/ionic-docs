```ts
import { defineCustomElements } from '@ionic/core/loader';

import { addIcons } from 'ionicons';
import { eye, leaf } from 'ionicons/icons';

/* 让 Ionic 组件正常工作所需的核心 CSS */
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

/* 主题变量 */
import './theme/variables.css';

/**
 * 在 Ionicons 7.2+ 版本中，这些图标
 * 会映射到 kebab-case 格式的键名。
 * 或者，开发者也可以这样写：
 * addIcons({ 'eye': eye, 'leaf': leaf });
 */
addIcons({ eye, leaf });

defineCustomElements();
```