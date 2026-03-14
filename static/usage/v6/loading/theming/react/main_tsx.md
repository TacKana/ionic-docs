```tsx
import React from 'react';
import { IonButton, useIonLoading } from '@ionic/react';

import './main.css';

function Example() {
  /**
   * 本示例未使用 `useIonLoading` 返回的 dismiss 方法，
   * 但它可用于更复杂的场景。
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [present, dismiss] = useIonLoading();
  return (
    <IonButton
      onClick={() => {
        present({
          message: '加载中...',
          duration: 3000,
          cssClass: 'custom-loading',
        });
      }}
    >
      显示加载指示器
    </IonButton>
  );
}
export default Example;
```