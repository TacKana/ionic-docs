```tsx
import React from 'react';
import { IonButton, useIonLoading } from '@ionic/react';
function Example() {
  /**
   * 这个示例没有使用 `useIonLoading` 返回的 dismiss 方法，
   * 但在更复杂的场景中可以使用它。
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [present, dismiss] = useIonLoading();
  return (
    <IonButton
      onClick={() => {
        present({
          message: '加载中...',
          duration: 3000,
          spinner: 'circles',
        });
      }}
    >
      显示加载状态
    </IonButton>
  );
}
export default Example;
```