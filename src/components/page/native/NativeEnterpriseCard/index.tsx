import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function NativeEnterpriseCard(props) {
  return (
    <a
      className={clsx(props.className, styles.nativeEnterprise)}
      href="https://ionic.io/enterprise-sdk"
      target="_blank"
    >
      <div className="image-wrapper">
        <img src={useBaseUrl('/img/native/native-enterprise@2x.png')} width="476" height="228" />
      </div>

      <div className="heading-group">
        <header>Ionic 企业版 SDK</header>
        <p>
          提供高级支持插件、第三方集成和预构建原生解决方案，助力构建企业级应用。
        </p>
      </div>
    </a>
  );
}
