import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function AppWizard(props) {
  return (
    <div {...props} className={clsx(props.className, 'app-wizard', styles.appWizard)}>
      <div className="heading-group">
        <header>试试我们的应用向导</header>
        <p>
          使用我们的应用向导可视化生成 Ionic 项目。选择模板、自定义颜色、应用图标和 JavaScript 框架，更快开始构建。
        </p>
      </div>
      <div>
        <a href="https://ionicframework.com/start" className="wizard-button">
          打开向导 <ion-icon name="arrow-forward-outline" />
        </a>
      </div>
    </div>
  );
}
