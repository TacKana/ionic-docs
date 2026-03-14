```ts
import { defineCustomElements } from '@ionic/core/loader';

import { addIcons } from 'ionicons';
import { barbell, basket, call, globe, heart, home, person, pin, star, trash } from 'ionicons/icons';

/* Ionic 组件正常工作所需的核心 CSS */
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

/* 主题变量 */
import './theme/variables.css';

/**
 * 在 Ionicons 7.2+ 版本中，这些图标
 * 会被映射为短横线命名法（kebab-case）的键。
 * 开发者也可以这样使用：
 * addIcons({ 'barbell': barbell, 'basket': basket, 'call': call, 'globe': globe,
 * 'heart': heart, 'home': home, 'person': person, 'pin': pin, 'star': star, 'trash': trash });
 */
addIcons({ barbell, basket, call, globe, heart, home, person, pin, star, trash });

defineCustomElements();
```