```ts
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue';

/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/vue/css/core.css';

/* 为使用 Ionic 构建的应用提供的基础 CSS */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* 可选的 CSS 工具类，可以注释掉 */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic 深色和高对比度调色板
 * -----------------------------------------------------
 * 更多信息请参阅：
 * https://ionicframework.com/docs/theming/dark-mode
 * https://ionicframework.com/docs/theming/high-contrast-mode
 */

import '@ionic/vue/css/palettes/dark.system.css';
import '@ionic/vue/css/palettes/high-contrast.system.css';
import '@ionic/vue/css/palettes/high-contrast-dark.system.css';

/* 主题变量 */
import './theme/variables.css';

createApp(App).use(IonicVue).mount('#app');
```