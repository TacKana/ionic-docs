```ts
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue';

/* 确保 Ionic 组件正常工作所需的核心 CSS */
import '@ionic/vue/css/core.css';

/* Ionic 应用的基础 CSS */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* 可选的 CSS 工具，可以注释掉 */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic 深色主题调色板
 * -----------------------------------------------------
 * 更多信息请参阅：
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/vue/css/palettes/dark.always.css';
import '@ionic/vue/css/palettes/dark.class.css';
// import '@ionic/vue/css/palettes/dark.system.css';

/* 主题变量 */
import './theme/variables.css';

createApp(App).use(IonicVue).mount('#app');
```