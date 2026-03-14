```tsx
import React from 'react';
import { setupIonicReact, IonApp } from '@ionic/react';

/* Ionic 组件正常工作所需的核心 CSS */
import '@ionic/react/css/core.css';

/* 使用 Ionic 构建应用的基本 CSS */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* 可选的 CSS 工具，可按需注释 */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic 深色和高对比度调色板
 * -----------------------------------------------------
 * 更多信息请参阅：
 * https://ionicframework.com/docs/theming/dark-mode
 * https://ionicframework.com/docs/theming/high-contrast-mode
 */

import '@ionic/react/css/palettes/dark.system.css';
import '@ionic/react/css/palettes/high-contrast.system.css';
import '@ionic/react/css/palettes/high-contrast-dark.system.css';

import Example from './main';

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <Example />
    </IonApp>
  );
}
```