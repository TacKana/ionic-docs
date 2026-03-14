```ts
import { defineCustomElements } from '@ionic/core/loader';

import { addIcons } from 'ionicons';
import { create } from 'ionicons/icons';

/* Ionic 组件正常工作所需的核心 CSS */
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

/* 主题变量 */
import './theme/variables.css';

/**
 * 在 Ionicons 7.2+ 中，这个图标
 * 会被映射到 "create" 键。
 * 或者，开发者也可以这样写：
 * addIcons({ 'create': create });
 */
addIcons({ create });

defineCustomElements();
```